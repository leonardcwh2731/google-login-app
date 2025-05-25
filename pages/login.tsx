import { useEffect } from 'react';

export default function LoginPage() {
  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: 'YOUR_GOOGLE_CLIENT_ID_HERE',
      callback: handleCredentialResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("google-button"),
      { theme: "outline", size: "large" }
    );
  }, []);

  function handleCredentialResponse(response: any) {
    console.log("Google ID Token:", response.credential);
    alert("Login success! Token printed in browser console.");
  }

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "100px" }}>
      <img src="/logo.png" alt="Logo" height={48} style={{ marginBottom: 20 }} />
      <h1>Welcome back!</h1>
      <p>Use Clay to turn any growth idea into reality — in minutes.</p>
      <div style={{
        backgroundColor: "#FEE2E2",
        color: "#991B1B",
        padding: "10px",
        borderRadius: "5px",
        margin: "20px auto",
        display: "inline-block"
      }}>
        ⚠️ Your session has expired. Please login to resume.
      </div>
      <div id="google-button" style={{ marginTop: 20 }}></div>
    </div>
  );
}
