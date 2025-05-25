import { useEffect } from 'react';

export default function LoginPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: 'YOUR_GOOGLE_CLIENT_ID',
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById('google-button')!,
        { theme: 'outline', size: 'large' }
      );
    };
  }, []);

  const handleCredentialResponse = async (response: any) => {
    console.log("Encoded JWT ID token: " + response.credential);
    // Send this token to your backend or n8n to exchange for access tokens.
  };

  return (
    <div style={{ marginTop: '100px', textAlign: 'center' }}>
      <h1>Sign in with Google</h1>
      <div id="google-button"></div>
    </div>
  );
}
