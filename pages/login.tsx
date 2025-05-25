// pages/login.tsx
export default function Login() {
  const clientId = process.env.858807355864-j4q8g0sm8ncspjqr1u6gqps3dkt0o6c2.apps.googleusercontent.com;
  const redirectUri = 'https://saveyouraudience.com/api/auth/callback';

  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=$858807355864-j4q8g0sm8ncspjqr1u6gqps3dkt0o6c2.apps.googleusercontent.com
&redirect_uri=$https://saveyouraudience.com/api/auth/callback&response_type=code&scope=openid%20email%20profile%20https://www.googleapis.com/auth/gmail.readonly%20https://www.googleapis.com/auth/calendar.readonly&access_type=offline&prompt=consent`;

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <a href={authUrl}>
        <button style={{
          background: '#4285F4',
          color: '#fff',
          padding: '12px 24px',
          fontSize: '16px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" style={{ width: '20px', height: '20px' }} />
          Sign in with Google
        </button>
      </a>
    </div>
  );
}
