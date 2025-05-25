import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <button
        onClick={() => signIn("google")}
        style={{
          padding: "12px 24px",
          background: "#4285F4",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
}
