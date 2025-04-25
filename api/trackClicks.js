// filepath: e:\work\IT\coding\freelancer\figmawebflow\thienanport2\personal-portfolio\api\trackClicks.js
let yesCount = 0;
let noCount = 0;

export default function handler(req, res) {
  if (req.method === "POST") {
    const { button } = req.body;

    if (button === "yes") {
      yesCount++;
    } else if (button === "no") {
      noCount++;
    }

    return res.status(200).json({ message: "Click tracked successfully" });
  }

  if (req.method === "GET") {
    return res.status(200).json({ yesCount, noCount });
  }

  return res.status(405).json({ message: "Method not allowed" });
}