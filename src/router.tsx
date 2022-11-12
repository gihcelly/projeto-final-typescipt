import { BrowserRouter, Routes, Route, useParams  } from 'react-router-dom';
import Inicio from "./pages/inicio";
import Perfil from "./pages/perfil";
import Error from "./pages/error";

//usar o use params

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Inicio/>} />
        <Route path='userId'element={<Perfil/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  )
}