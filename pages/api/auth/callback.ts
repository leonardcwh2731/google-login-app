import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const code = req.query.code as string;

    const tokenRes = await axios.post('https://oauth2.googleapis.com/token', {
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: process.env.GOOGLE_REDIRECT_URI,
      grant_type: 'authorization_code',
    });

    const tokens = tokenRes.data;

    // ✅ Send tokens to n8n webhook
    await axios.post('https://leonardchin2731.app.n8n.cloud/webhook-test/49e1783b-5a8d-41ab-a0c4-7aa20df69235', tokens);

    // ✅ Redirect user to a friendly page (thank-you, dashboard, etc.)
    return res.redirect(302, 'https://www.veraops.com/'); // Customize this URL

  } catch (error: any) {
    console.error('OAuth callback error:', error.response?.data || error.message);

    return res.status(500).json({
      error: 'Authentication failed',
      details: error.response?.data || error.message,
    });
  }
}
