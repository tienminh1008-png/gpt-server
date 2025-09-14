export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Body có thể là JSON hoặc form-encoded, nhưng tốt nhất gửi JSON
  const userMessage =
    (req.body && (req.body.message || req.body["message"])) || '';

  return res.status(200).json({
    reply: `Bạn vừa gửi: ${userMessage}`
  });
}
