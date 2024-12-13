import Axios from "../services/apirest";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post("/registro", { username, password });
      setMessage("Registrado correctamente, Inicia sesión");
    } catch (e) {
      setMessage(e.response?.data?.message || "Error en el registro");
    }
  };

  return (
    <>
      <section className="bg-black min-h-screen flex items-center justify-center ">
        <div className="inset-0 bg-white/10 backdrop-blur-md flex rounded-2xl shadow-lg max-w-3x1 p-5 w-4/5">
        {/* Contenedor del  Registro */}

          
          {/* Contenedor de la imagen */}
          <div className="w-1/2 sm:block hidden">
            <img
              className="rounded-2xl"
              src="https://i.pinimg.com/736x/43/52/45/43524526adbe3b9efb8b9624f06fed6e.jpg"
            ></img>
          </div>
          {/* Contenedor del registro */}
          <div className="sm:w-1/2 px-16 text-center ">
            <h2 className="text-[40px] font-bold text-2x1 text-red-700">Registro</h2>
            

            <form
              onSubmit={handleRegister}
              className="flex flex-col gap-4 "
              action=""
            >
              <input
                className="bg-white p-2 mt-8 rounded-xl border text-gray-500"
                type="email"
                value={username}
                placeholder="Ingrese un correo electrónico"
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="relative">
                <input
                  className="bg-white text-gray-500 p-2 mt-8 rounded-xl border w-full"
                  type="password"
                  value={password}
                  placeholder="Ingrese la contraseña Contraseña"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="bg-red-700 rounded-xl text-white py-2"
              >
                Ingresar
              </button>
            </form>

            <div className="mt-10 grid grid-cols-3 items-center text-gray-500">
              <hr className="border-gray-500" />
              <p className="text-center ">or</p>
              <hr className="border-gray-500" />
            </div>
            <p className="text-sm mt-4 text-red-700">
              ¿Ya tienes una cuenta? <Link to="/login" className="text-blue-500 underline">Inicia sesión</Link>
            </p>
            {message && <p className=" text-red-700">{message}</p>}
          </div>
        </div>
      </section>
    </>
  );
}
export default Register;
