import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: '858807355864-j4q8g0sm8ncspjqr1u6gqps3dkt0o6c2.apps.googleusercontent.com',
      callback: (response) => {
        window.location.href = `/api/auth/callback?token=${response.credential}`;
      },
    });
    window.google.accounts.id.renderButton(
      document.getElementById('google-signin-btn'),
      { theme: 'outline', size: 'large' }
    );
  }, []);

  return (
    <>
      <div id="google-signin-btn"></div>
      <script src="https://accounts.google.com/gsi/client" async defer></script>
    </>
  );
}
