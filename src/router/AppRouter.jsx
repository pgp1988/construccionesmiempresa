import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Inicio } from "../components/main/Inicio";
import { QuienesSomos } from "../components/about/QuienesSomos";
import { Contacto } from "../components/contact/Contacto";
import { NuestrasObras } from "../components/proyects/NuestrasObras";
import { Servicios } from "../components/services/Servicios";

export const AppRouter = () => {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/about" element={<QuienesSomos />} />
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="/obras" element={<NuestrasObras />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </HashRouter>
    </>
  );
};
