import "./App.css";
import InicioUsuario from "./pages/inicioUsuario.jsx";
import InicioAdmin from "./pages/inicioAdmin.jsx";
import LandingPage from "./pages/landingPage.jsx";
import Register from "./pages/registro.jsx";
import Login from "./pages/login.jsx";


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inicioUsuario" element={<InicioUsuario />} />
        <Route path="/admin" element={<InicioAdmin />} />


      </Routes>
    </Router>
    </>
  );
}

export default App;
