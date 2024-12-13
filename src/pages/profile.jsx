import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3009/profile", { withCredentials: true })
      .then((response) => setUser(response.data))
      .catch((err) => console.error("Error al obtener perfil:", err));
  }, []);

  return (
    <div className="profile-container">
      <h2>Perfil de Usuario</h2>
      {user ? (
        <div>
          <p>Hola, {user.displayName}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default Profile;