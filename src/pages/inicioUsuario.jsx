import {useNavigate} from "react-router-dom"; 
import { useState, useEffect } from "react";
function InicioUsuario(){
    const navigate = useNavigate();
    const [username, setUsername] = useState("");

    useEffect(()=>{
            const user = localStorage.getItem("username")|| "Usuario";
        setUsername(user)
    },[])
    const handleExit=()=>{
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        localStorage.removeItem("username")
        navigate("/")
    }
    return (
        <>
            <header>
                <h1>Bienvenido</h1>
            </header>
            <main>
                <h1>Haz iniciado sesión {username}</h1>

                <font>
                    
                </font>

                <button onClick={handleExit}>Cerrar sesión</button>
            </main>
        </>
    )
}
export default InicioUsuario;