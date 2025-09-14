// /api/chat.js
export default function handler(req, res) {
  // CORS cho NovaonX (trình duyệt)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Trả lời preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Lấy message (JSON)
  const userMessage =
    (req.body && (req.body.message || req.body['message'])) || '';

  return res.status(200).json({
    reply: `Bạn vừa gửi: ${userMessage}`,
  });
}
