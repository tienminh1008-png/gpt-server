// /api/chat.js
export default function handler(req, res) {
  // Bổ sung CORS header để NovaonX gọi được
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Xử lý preflight request (OPTIONS)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Kiểm tra method
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Lấy message từ body JSON
  const userMessage =
    (req.body && (req.body.message || req.body['message'])) || '';

  // Trả JSON chuẩn
  return res.status(200).json({
    reply: `Bạn vừa gửi: ${userMessage}`,
  });
}
