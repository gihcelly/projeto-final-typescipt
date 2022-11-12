import { BrowserRouter, Routes, Route, useParams  } from 'react-router-dom';
import Inicio from "./pages/inicio";
import Perfil from "./pages/perfil";

//usar o use params

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Inicio/>} />
        <Route path='userId'element={<Perfil/>} />
        <Route path="*" element={<div>Erro 404 - Página não encontrada.</div>} />
      </Routes>
    </BrowserRouter>
  )
}