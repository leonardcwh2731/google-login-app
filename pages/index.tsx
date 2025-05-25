import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: '858807355864-j4q8g0sm8ncspjqr1u6gqps3dkt0o6c2.apps.googleusercontent.com',
          callback: (response: any) => {
            window.location.href = `/api/auth/callback?token=${response.credential}`;
          },
        });

        window.google.accounts.id.renderButton(
          document.getElementById('google-button')!,
          { theme: 'outline', size: 'large' }
        );
      }
    };
  }, []);

  return (
    <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <div id="google-button"></div>
    </div>
  );
}
