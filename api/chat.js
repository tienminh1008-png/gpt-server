// /api/chat.js
export default function handler(req, res) {
  if (req.method === "POST") {
    const userMessage = req.body.message || "";

    // Trả về JSON chuẩn
    res.status(200).json({
      reply: `Bạn vừa gửi: ${userMessage}`
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
