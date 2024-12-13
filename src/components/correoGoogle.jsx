import React from "react";

function GoogleLog() {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3009/auth/google"; 
  };

  return (
    <section className="login-container">
      <h2>Iniciar Sesión</h2>
      <button onClick={handleGoogleLogin}>
        Iniciar sesión con Google
      </button>
    </section>
  );
}

export default GoogleLog;