import API from "../services/apirest";
import { useState, useEffect } from "react";
function Login() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/login", { correo, password });
      localStorage.setItem("token", response.data.token);
      setMessage("Inicio de sesion exitosa");
    } catch (e) {
      setMessage(e.response?.data?.error || "Error en el inicio de sesion");
    }
  };

  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center ">
        {/* Contenedor del  login */}
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3x1 p-5 w-4/5">
          <div className="sm:w-1/2 px-16">
            <h2 className="font-bold text-2x1 text-blue-800">Login</h2>
            <p className="text-sm mt-4 text-blue-800">
              ¿Ya tienes una cuenta? Inicia sesión
            </p>

            <form
              onSubmit={handleLogin}
              className="flex flex-col gap-4"
              action=""
            >
              <input
                className="bg-white p-2 mt-8 rounded-xl border text-gray-500"
                type="email"
                value={correo}
                placeholder="Correo"
                onChange={(e) => setCorreo(e.target.value)}
              />
              <div className="relative">
                <input
                  className="bg-white text-gray-500 p-2 mt-8 rounded-xl border w-full"
                  type="password"
                  value={password}
                  placeholder="Contraseña"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="bg-blue-800 rounded-xl text-white py-2"
              >
                Ingresar
              </button>
            </form>

            <div className="mt-10 grid grid-cols-3 items-center text-gray-500">
              <hr className="border-gray-500" />
              <p className="text-center ">or</p>
              <hr className="border-gray-500" />
            </div>
            {message && <p className=" text-blue-800">{message}</p>}
          </div>

          <div className="w-1/2 sm:block hidden">
            <img
              className="rounded-2xl"
              src="https://img.freepik.com/foto-gratis/adorable-gatito-pared-monocromatica-detras-ella_23-2148955142.jpg?t=st=1731529571~exp=1731533171~hmac=12479f78858df064a776322ad980cb526a02955a3b1d7c7a0e995570ef33d720&w=740"
            ></img>
          </div>
        </div>
      </section>
    </>
  );
}
export default Login;
