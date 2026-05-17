const LOYVERSE_API = 'https://api.loyverse.com/v1.0';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();
  const token = process.env.LOYVERSE_TOKEN;
  if (!token) return res.status(500).json({ error: 'Token no configurado' });
  const { endpoint, ...params } = req.query;
  if (!endpoint) return res.status(400).json({ error: 'Falta endpoint' });
  const allowed = ['items', 'receipts', 'categories', 'stores'];
  if (!allowed.includes(endpoint)) return res.status(403).json({ error: 'No permitido' });
  const qs = new URLSearchParams(params).toString();
  const url = `${LOYVERSE_API}/${endpoint}${qs ? '?' + qs : ''}`;
  try {
    const upstream = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    const data = await upstream.json();
    res.status(upstream.status).json(data);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
}