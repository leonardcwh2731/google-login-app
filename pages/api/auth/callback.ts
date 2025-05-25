import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const code = req.query.code as string;

    if (!code) {
      return res.status(400).json({ error: 'Missing authorization code' });
    }

    const tokenRes = await axios.post('https://oauth2.googleapis.com/token', {
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: process.env.GOOGLE_REDIRECT_URI,
      grant_type: 'authorization_code',
    });

    const tokens = tokenRes.data;

    // Optional: forward to n8n
    await axios.post('https://leonardchin2731.app.n8n.cloud/webhook/49e1783b-5a8d-41ab-a0c4-7aa20df69235', tokens);

    return res.status(200).json({ message: 'Success', tokens });
  } catch (error: any) {
    console.error('OAuth callback error:', error.response?.data || error.message);
    return res.status(500).json({
      error: 'Failed to exchange code for tokens',
      details: error.response?.data || error.message,
    });
  }
}
