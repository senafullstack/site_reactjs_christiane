import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

const Home = lazy(() => import("./Pages/Home"));
const Sobrenos = lazy(() => import("./Pages/Sobrenos"));
const Perguntasfrequentes = lazy(() => import("./Pages/Perguntasfrequentes"));
const Verareaatuacao = lazy(() => import("./Pages/Verareaatuacao"));
const Publicacoes = lazy(() => import("./Pages/Publicacao"));
const Artigos = lazy(() => import("./Pages/Artigo"));
const Depoimento = lazy(() => import("./Pages/Depoimento"));
const Vernoticia = lazy(() => import("./Pages/Vernoticia"));
export default function Rotas() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense
        fallback={
          <div className="d-flex justify-content-center align-items-center mt-5 pt-5">
            <CircularProgress />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobrenos" element={<Sobrenos />} />
          <Route
            path="/perguntasfrequentes"
            element={<Perguntasfrequentes />}
          />
          <Route path="/verareaatuacao/:codigo" element={<Verareaatuacao />} />
          <Route path="/publicacoes" element={<Publicacoes />} />
          <Route path="/artigos" element={<Artigos />} />
          <Route path="/depoimentos" element={<Depoimento />} />

          <Route path="/vernoticia/:codigo" element={<Vernoticia />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
