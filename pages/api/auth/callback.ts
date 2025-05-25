import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.query;

  if (!token || typeof token !== 'string') {
    return res.status(400).json({ error: 'Missing token' });
  }

  try {
    // Forward token to your n8n webhook
    await fetch('https://leonardchin2731.app.n8n.cloud/webhook/49e1783b-5a8d-41ab-a0c4-7aa20df69235', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });

    return res.redirect('https://thankyoupage.com'); // Optional thank-you or redirect page
  } catch (err) {
    return res.status(500).json({ error: 'Token forwarding failed' });
  }
}
