import React from "react";
const estilo = {};
export default function Footer() {
  let dataatual = new Date();
  let ano = dataatual.setFullYear();
  return (
    <>
      <div className="bg-dark mt-5" style={{ color: "#ffffff" }}>
        <div className="container ">
          <footer className="py-5">
            <div className="row">
              <div className="col-md-2">
                <h5>Menezes Aquino</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="/home" className="nav-link p-0 text-muted">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/sobrenos" className="nav-link p-0 text-muted">
                      Sobre nós
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href="/perguntasfrequentes"
                      className="nav-link p-0 text-muted"
                    >
                      Perguntas Frequêntes
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <h5>Áreas de Atuação</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a
                      href="/verareaatuacao/1"
                      className="nav-link p-0 text-muted"
                    >
                      Direito a Saúde
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href="/verareaatuacao/2"
                      className="nav-link p-0 text-muted"
                    >
                      Direito Médico
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href="verareaatuacao/3"
                      className="nav-link p-0 text-muted"
                    >
                      Direito Odontológico
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <h5>Veja mais</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="/artigos" className="nav-link p-0 text-muted">
                      Artigos
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/publicacoes" className="nav-link p-0 text-muted">
                      Publicações
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/depoimentos" className="nav-link p-0 text-muted">
                      Depoimentos
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-5 offset-1">
                <form>
                  <h5>Receba informações de Menezes Aquino Advocacia</h5>
                  <p>Receba nossas postagens</p>
                  <div className="d-flex w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                      Email
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                    <button className="btn btn-primary" type="button">
                      Inscrever
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="d-flex justify-content-between py-4 my-4 border-top">
              <p>
                <a href="" className="nav-link p-0 text-muted">
                  © {new Date().getFullYear()} Todos os direitos Reservados,
                  Desenvolvido por{" "}
                  <a href="https://www.swsagenciadigital.com.br">
                    SWS Agência Digital
                  </a>
                </a>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
