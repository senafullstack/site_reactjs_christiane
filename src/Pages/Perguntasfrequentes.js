import React, { useState, useEffect } from "react";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";
import { GrCircleQuestion } from "react-icons/gr";
import {
  Container,
  Card,
  Row,
  Col,
  Accordion,
  Carousel,
} from "react-bootstrap";
import axios from "axios";
import { urladminfoto, apiUrl } from "../config/App";
import FormataHtml from "../Componentes/FormataHtml";

export default function Sobrenos() {
  const [dadosperguntasfrequentes, setDadosperguntasfrequentes] = useState([]);

  useEffect(() => {
    axios.get(apiUrl + "/perguntasfrequentes").then((result) => {
      const resultado = result.data.data.data;
      console.log(resultado);
      setDadosperguntasfrequentes(resultado);
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col className="mt-5 mb-5 text-center ">
            <h1 style={{}}>Perguntas Frequêntes</h1>
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
        <Accordion defaultActiveKey="0">
          {dadosperguntasfrequentes.map((resultado) => (
            <Accordion.Item
              key={resultado.id_perguntasfrequentes}
              eventKey={resultado.id_perguntasfrequentes}
            >
              <Accordion.Header>
                <GrCircleQuestion className="m-2" />
                <FormataHtml texto={resultado.pergunta} style={{}} />
              </Accordion.Header>
              <Accordion.Body>
                <FormataHtml texto={resultado.resposta} style={{}} />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
      <Footer />
    </>
  );
}
