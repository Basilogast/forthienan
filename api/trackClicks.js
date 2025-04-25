// /api/trackClicks.js

import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { getApps, initializeApp } from "firebase-admin/app";

// Prevent reinitializing admin SDK
if (!getApps().length) {
  initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
  });
}

const db = getFirestore();
const clicksCollection = db.collection("clickCounts");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { button } = req.body;

    try {
      const docRef = clicksCollection.doc("counts");
      const doc = await docRef.get();

      if (!doc.exists) {
        await docRef.set({ yes: 0, no: 0 });
      }

      const update =
        button === "yes"
          ? { yes: admin.firestore.FieldValue.increment(1) }
          : { no: admin.firestore.FieldValue.increment(1) };

      await docRef.update(update);

      return res.status(200).json({ message: "Click tracked successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  if (req.method === "GET") {
    try {
      const doc = await clicksCollection.doc("counts").get();
      const data = doc.exists ? doc.data() : { yes: 0, no: 0 };
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}
