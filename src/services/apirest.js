import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:3009/api/auth",
  headers: {
    'Content-Type': 'application/json',
  },
});

export default Axios;
/* Contraseña de app= ipiv mmdg nzqn okdm */
