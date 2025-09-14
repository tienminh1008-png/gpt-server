// /api/chat.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    // healthcheck cho nút "Kiểm tra" (GET)
    return res.status(200).json({
      ok: true,
      service: 'gpt-server',
      endpoint: '/api/chat'
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Lấy message từ JSON body
  const userMessage = (req.body && req.body.message) || '';
  return res.status(200).json({
    reply: `Bạn vừa gửi: ${userMessage}`
  });
}
