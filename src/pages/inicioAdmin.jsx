import { useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import Axios from "../services/apirest.js"
import ModalUpdate from "../components/ModalUpdate.jsx"

import ("../App.css")
function InicioAdmin(){
    const [showModal, setShowModal]= useState(false)
    const navigate = useNavigate()
    const handleExit =()=>{
        localStorage.removeItem("token")
        sessionStorage.removeItem("token");
        navigate("/")

    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const[id, setId]=useState("")
    const Updated = async()=>{
        if(!id) return;
        try{
            const modificar = await Axios.put(`/updated/${id}`,{username,password})
            console.log("Usuario modificado", modificar.data)
            setShowModal(false)
            ListaUsers();
        }catch(e){
            console.error("Error desde Updated",e)
        }
    }

    const Delete= async(id)=>{
        try{
            const eliminar = await Axios.delete(`/delete/${id}`)
            console.log("Usuario eliminado:", eliminar.data);
            ListaUsers()
        }catch(e){
            console.error("Error desde Delete",e)
        }
    }
    const [users, setUsers]= useState([])
    const ListaUsers = async()=>{
        try{
            const consulta = await Axios.get("/listar");
            console.log("Sin problema desde LsitaUsers");
            setUsers(consulta.data);
        }catch(e){
            console.error("Error desde ListaUser", e.response?.data || e.message)
        }
    }
    useEffect(()=>{
        ListaUsers()
    },[])

    return(
        <body className="fondo2">
            <header className="fixed w-[100%] justify-center flex h-[60px]">
                <nav className="bg-black w-[30%] justify-center flex border border-black border rounded-bl-[20px] rounded-br-[20px]">
                    <button className="bg-red-800 h-[80%]" onClick={handleExit}>Cerrar sesión</button>
                </nav>
            </header>
            
            <main className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <table>
                    <thead>
                        <tr className="bg-blue-100">
                            <th className="border border-gray-400 p-4 text-blue-900">Correo de Usuario</th>
                            <th className="border border-gray-400 p-4 text-blue-900">Password</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {users.map((user)=>(
                            <tr key={user._id || user.id}>
                                <td className="border border-gray-400 p-2">{user.username}</td>
                                <td className="border border-gray-400 p-2 flex ">
                                    <i onClick={()=> Delete(user._id || user.id)}><svg class="h-8 w-8 text-red-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg></i>      
                                    <button onClick={() => {
                                        setUsername(user.username); // Establecer los valores actuales
                                        setPassword(user.password); 
                                        setId(user._id || user.id); // Establecer el ID del usuario a actualizar
                                        setShowModal(true); // Mostrar el modal
                                    }}>Editar </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {showModal && (
                    <ModalUpdate 
                    isVisible={showModal}
                    onClose={()=>setShowModal(false)}>
                    <section>
                        <section>
                            <label htmlFor="correo">Digitar nuevo correo</label>
                            <input className="bg-white p-2 mt-8 rounded-xl border text-gray-500" type="email" value={username} name="correo" placeholder="Correo" onChange={(e) => setUsername(e.target.value)}/>
                        </section>
                        <section>
                            <label htmlFor="correo">Digitar nuevo correo</label>
                            <input className="bg-white p-2 mt-8 rounded-xl border text-gray-500" type="password" value={password} name="correo" placeholder="Correo" onChange={(e) => setPassword(e.target.value)}/>
                        </section >
                        <button className="m-2" type="submit" onClick={Updated}>Guardar Cambios</button>
                        </section>
                    </ModalUpdate>
                )}
            </main>

        </body>
    )
}

export default InicioAdmin