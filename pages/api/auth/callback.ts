import axios from 'axios';

export default async function handler(req, res) {
  const code = req.query.code;

  const tokenRes = await axios.post('https://oauth2.googleapis.com/token', {
    code,
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: 'https://saveyouraudience.com/api/auth/callback',
    grant_type: 'authorization_code',
  });

  const tokens = tokenRes.data;

  // Send to n8n
  await axios.post('https://leonardchin2731.app.n8n.cloud/webhook/49e1783b-5a8d-41ab-a0c4-7aa20df69235', {
    tokens,
  });

  res.redirect('/success'); // optional thank you page
}
