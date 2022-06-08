import React, { useEffect, useState, useRef } from "react";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";

import {
  Container,
  Card,
  Row,
  Col,
  Accordion,
  Carousel,
  Image,
} from "react-bootstrap";
import { Button } from "@material-ui/core";
import Banner from "../Componentes/Banner";
import axios from "axios";
import { Link } from "react-router-dom";
import { apiUrl, urladminfoto } from "../config/App";
import { GrCircleQuestion } from "react-icons/gr";
import { MdOutlineStar } from "react-icons/md";
import FormataHtml from "../Componentes/FormataHtml";

export default function Home() {
  const conteudoHtml = useRef(null);
  const [dados, setDados] = useState([]);
  const [dadosperguntas, setDadosperguntas] = useState([]);
  const [dadosdepoimento, setDadosdepoimento] = useState([]);
  const [dadosartigo, setDadosartigo] = useState([]);
  const [dadospublicacao, setDadospublicacao] = useState([]);
  const [dadossobre, setDadossobre] = useState([]);
  useEffect(() => {
    axios.get(apiUrl + "/areaatuacao").then((res) => {
      const resposta = res.data.data.data;
      setDados(resposta);
    });

    axios.get(apiUrl + "/perguntasfrequentes").then((res) => {
      const per = res.data.data.data;
      setDadosperguntas(per);
    });

    axios.get(apiUrl + "/depoimento").then((res) => {
      let result = res.data.data.data;
      setDadosdepoimento(result);
    });

    axios.get(apiUrl + "/artigoone/1").then((result) => {
      let res = result.data.data.data;
      setDadosartigo(res);
    });
    axios.get(apiUrl + "/publicacaoone/1").then((res) => {
      let dado = res.data.data.data;
      setDadospublicacao(dado);
    });
    axios.get(apiUrl + "/sobrenos").then((res) => {
      let dados = res.data.data.data;
      setDadossobre(dados);
    });
  }, []);
  return (
    <>
      <Header />

      <Banner />
      <Container>
        <Row>
          <Col className="mt-5 mb-5 text-center ">
            <h1 style={{}}> Áreas de Atuação</h1>
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
        <Row>
          {dados.map((resposta) => (
            <Col
              sm={3}
              key={resposta.id_areaatuacao}
              className="pt-5 d-flex justify-content-center align-items-center"
            >
              <Card>
                <Card.Img
                  variant="top"
                  src={urladminfoto + "/" + resposta.foto}
                />
                <Card.Body>
                  <Card.Title>{resposta.titulo} </Card.Title>
                  <Card.Text ref={conteudoHtml}>
                    <FormataHtml
                      texto={resposta.texto.substring(0, 200)}
                      style={{}}
                    />
                    ...
                  </Card.Text>

                  <Link
                    className="btn btn-primary"
                    to={"/verareaatuacao/" + resposta.id_areaatuacao}
                  >
                    veja mais
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Row className="mt-5 mb-5 pb-5 fundo  ">
        <Col>
          <Container>
            <Row>
              <Col className="mt-5  text-center ">
                <h1 style={{}}> Sobre Nós</h1>
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
                <Col
                  sm={4}
                  className="pt-5 d-flex justify-content-center align-items-center"
                >
                  <Image
                    src={urladminfoto + "/" + resultado.foto}
                    fluid
                    rounded
                    thumbnail
                  />
                </Col>
                <Col sm={8} className="pt-5 ">
                  <Card>
                    <Card.Header
                      className="text-center"
                      style={{ backgroundColor: "#a45e4d", color: "#fff" }}
                    >
                      <h2>Conheça um pouco nossa história </h2>
                    </Card.Header>
                    <Card.Body>
                      <FormataHtml texto={resultado.texto} style={{}} />

                      <Link to="/sobrenos" className="btn btn-primary">
                        {" "}
                        veja mais
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            ))}
          </Container>
        </Col>
      </Row>

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
        <Row>
          <Col>
            <Accordion defaultActiveKey="1">
              {dadosperguntas.map((resultado) => (
                <Accordion.Item
                  key={resultado.id_perguntasfrequentes}
                  eventKey={resultado.id_perguntasfrequentes}
                >
                  <Accordion.Header>
                    <GrCircleQuestion className="m-2" /> {resultado.pergunta}
                  </Accordion.Header>
                  <Accordion.Body>
                    <FormataHtml texto={resultado.resposta} style={{}} />
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>

      <Row className="mt-5 mb-5 pb-5 fundo  ">
        <Col>
          <Container>
            <Row>
              <Col className="mt-5 mb-5 text-center ">
                <h1 style={{}}>Confira Quem Aprova Nossos Serviços</h1>
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
          </Container>
          <Container>
            <Row>
              <Col
                sm={6}
                className="pt-5 d-flex justify-content-center align-items-center"
              >
                <Card>
                  <Card.Header
                    className="text-center"
                    style={{ backgroundColor: "#a45e4d" }}
                  >
                    <MdOutlineStar
                      style={{ color: "#ffff00", fontSize: "2em" }}
                    />
                    <MdOutlineStar
                      style={{ color: "#ffff00", fontSize: "2em" }}
                    />
                    <MdOutlineStar
                      style={{ color: "#ffff00", fontSize: "2em" }}
                    />
                    <MdOutlineStar
                      style={{ color: "#ffff00", fontSize: "2em" }}
                    />
                    <MdOutlineStar
                      style={{ color: "#ffff00", fontSize: "2em" }}
                    />
                  </Card.Header>
                  <Card.Body>
                    <Carousel>
                      {dadosdepoimento.map((result) => (
                        <Carousel.Item key={result.id_depoimento}>
                          <Card.Title className="text-center">
                            {result.titulo}
                          </Card.Title>
                          <img
                            className="d-block w-100"
                            src={urladminfoto + "/" + result.foto}
                            alt={result.titulo}
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/img/christiane-depoimento.png"
                  }
                  className="img-fluid"
                />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>

      <div className="mt-5 mb-5 pb-5 ">
        <Container>
          <Row>
            <Col className="mt-5 mb-5 text-center ">
              <h1 style={{}}> Artigos</h1>
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
        </Container>

        <Container>
          {dadosartigo.map((dados) => (
            <Row key={dados.id_noticia}>
              <Col sm={2}>
                <Image
                  src={urladminfoto + "/" + dados.foto}
                  fluid
                  rounded
                  thumbnail
                />
              </Col>
              <Col sm={10} className="justify-content-left align-items-left">
                <h1>{dados.titulo}</h1>
                <Link
                  className="btn btn-primary"
                  to={"/vernoticia/" + dados.id_noticia}
                >
                  veja mais
                </Link>
              </Col>
            </Row>
          ))}
        </Container>
      </div>

      <div className="mt-5 mb-5 pb-5 fundo ">
        <Container>
          <Row>
            <Col className="mt-5 mb-5 text-center ">
              <h1 style={{}}> Publicações</h1>
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
        </Container>

        <Container>
          {dadospublicacao.map((dados) => (
            <Row key={dados.id_noticia}>
              <Col sm={2}>
                <Image
                  src={urladminfoto + "/" + dados.foto}
                  fluid
                  rounded
                  thumbnail
                />
              </Col>
              <Col sm={10} className="justify-content-left align-items-left">
                <h1>{dados.titulo}</h1>
                <Link
                  className="btn btn-primary"
                  to={"/vernoticia/" + dados.id_noticia}
                >
                  veja mais
                </Link>
              </Col>
            </Row>
          ))}
        </Container>
      </div>
      <Footer />
    </>
  );
}
