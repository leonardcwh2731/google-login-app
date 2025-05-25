import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: 40, fontFamily: 'Arial' }}>
      <h1>Welcome to My Google Login App</h1>
      <p>
        Click below to go to the login page:
      </p>
      <Link href="/login">
        <button style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer'
        }}>
          Go to Login
        </button>
      </Link>
    </div>
  );
}
