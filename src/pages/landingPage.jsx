import React from "react";
import {useNavigate} from "react-router-dom";
import ("../App.css")

function LandingPage(){
    const navigate = useNavigate();
    const handleNavRegistro =()=>{
        navigate("/registro");
    }
    const handleNavLogin = ()=>{
        navigate("/login")
    }
    

    return(
        < body className="fondo">
            <header className="fixed w-[100%] justify-center flex ">
                <nav className="bg-black w-[30%] justify-center flex border border-black border rounded-bl-[20px] rounded-br-[20px]">
                    <button className="bg-red-800 m-2 text-white mx-4 w-[22%]" onClick={handleNavLogin}>Sign in</button>
                    <button className="bg-red-800 m-2 text-white mx-4 w-[22%]" onClick={handleNavRegistro}>Sign on</button>
                </nav>
            </header>
            <main>
                <section className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-[80px] font-extrabold uppercase  text-black">BIENVENIDO A MI PÁGINA WEB</h1>
                </section>
            </main>
        </body>
    )
}
export default LandingPage