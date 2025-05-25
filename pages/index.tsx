// pages/index.tsx
import { useEffect } from 'react';
import Script from 'next/script';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.google) {
      window.google.accounts.id.initialize({
        client_id: 'YOUR_CLIENT_ID_HERE',
        callback: (response: any) => {
          window.location.href = `/api/auth/callback?token=${response.credential}`;
        },
      });

      window.google.accounts.id.renderButton(
        document.getElementById('google-signin-btn'),
        { theme: 'outline', size: 'large' }
      );
    }
  }, []);

  return (
    <>
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="afterInteractive"
      />
      <div id="google-signin-btn"></div>
    </>
  );
}
