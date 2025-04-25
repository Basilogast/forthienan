import admin from "firebase-admin";
import { initializeApp, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase Admin SDK
if (!getApps().length) {
  initializeApp({
    credential: admin.credential.cert(require("../firebase-service-account.json")),
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
        // Initialize counts if the document doesn't exist
        await docRef.set({ yes: 0, no: 0 });
      }

      // Increment the appropriate count
      const updateField = button === "yes" ? { yes: admin.firestore.FieldValue.increment(1) } : { no: admin.firestore.FieldValue.increment(1) };
      await docRef.update(updateField);

      return res.status(200).json({ message: "Click tracked successfully" });
    } catch (error) {
      console.error("Error updating counts:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  if (req.method === "GET") {
    try {
      const doc = await clicksCollection.doc("counts").get();

      if (!doc.exists) {
        return res.status(200).json({ yes: 0, no: 0 });
      }

      const data = doc.data();
      return res.status(200).json(data);
    } catch (error) {
      console.error("Error retrieving counts:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}