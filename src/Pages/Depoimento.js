import React, { useState, useEffect } from "react";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { urladminfoto, apiUrl } from "../config/App";

export default function Depoimento() {
  const [dadossobre, setDados] = useState([]);

  useEffect(() => {
    axios.get(apiUrl + "/depoimento").then((result) => {
      const resultado = result.data.data.data;
      console.log(resultado);
      setDados(resultado);
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col className="mt-5 mb-5 text-center ">
            <h1 style={{}}>Depoimentos</h1>
            <Row>
              <Col></Col>
              <Col>
                <hr
                  style={{
                    color: "#A45E4D",
                    backgroundColor: "#A45E4D",
                    height: 5,
                  }}
                />
              </Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>

        {dadossobre.map((resultado) => (
          <Row key={resultado.id_sobrenos}>
            <Col sm={12}>{resultado.titulo}</Col>
            <Col sm={12} key={resultado.id_sobrenos}>
              <img
                src={urladminfoto + "/" + resultado.foto}
                className="img-fluid"
              />
            </Col>
          </Row>
        ))}
      </Container>
      <Footer />
    </>
  );
}
