import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Http } from "../config/Http";
import { apiUrl, rootUrl } from "../config/App";
import axios from "axios";
import {
  FaBalanceScale,
  FaFacebookF,
  FaInstagramSquare,
  FaWhatsapp,
  FaHome,
} from "react-icons/fa";
import FloatingWhatsApp from "react-floating-whatsapp";
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import Logo from "../logo.png";
const style = {
  backgroundColor: " #533730",
};
const stylemenu = {
  backgroundColor: "#A45E4D",
};

export default class Headernovo extends Component {
  state = {
    areaatuacao: [],
  };

  componentDidMount() {
    axios.get(apiUrl + "/areaatuacao").then((res) => {
      const dados = res.data.data.data;

      this.setState({ areaatuacao: dados });
    });
  }
  render() {
    return (
      <>
        <FloatingWhatsApp
          phoneNumber={"557184765333"}
          accountName="Menezes Aquino Advogados"
          className="whatsapp"
          statusMessage="Online"
          avatar={Logo}
          chatMessage="Precisa de ajuda? fale conosco! "
          placeholder="Enviar Mensagem"
          allowClickAway={true}
        />
        <Navbar
          className="shadow-lg"
          collapseOnSelect
          expand="lg"
          variant="dark"
          style={style}
        >
          <Container>
            <Navbar.Brand href="/">
              <FaBalanceScale /> Menezes Aquino Advogados
            </Navbar.Brand>

            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <Nav.Link
                  eventKey={2}
                  href="https://api.whatsapp.com/send/?phone=557184765333"
                  target="_blank"
                >
                  <FaWhatsapp /> Agende seu atendimento
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Row>
            <Col className="d-flex justify-content-center align-items-center"></Col>
            <Col
              md={4}
              sm={12}
              className="p-5 d-flex justify-content-center align-items-center"
            >
              <Link to="/">
                <img
                  src={process.env.PUBLIC_URL + "/img/logo.png"}
                  className="img-fluid"
                  style={{ width: "95%" }}
                />
              </Link>
            </Col>
            <Col className="d-flex justify-content-center align-items-center  ">
              <a
                target="_blank"
                href="https://www.facebook.com/101344471268492/posts/726116852124581/?d=n&substory_index=0"
              >
                <FaFacebookF
                  className="m-2"
                  style={{
                    color: "#A45E4D",
                    fontSize: "45px",
                  }}
                />
              </a>
              <a
                href="https://www.instagram.com/christiane_aquino/"
                target="_blank"
              >
                <FaInstagramSquare
                  className="m-2"
                  style={{
                    color: "#A45E4D",
                    fontSize: "45px",
                  }}
                />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=557184765333"
                target="_blank"
              >
                <FaWhatsapp
                  style={{
                    color: "#A45E4D",
                    fontSize: "45px",
                  }}
                  className="m-2"
                />
              </a>
            </Col>
          </Row>
        </Container>
        <Row>
          <Col>
            <Navbar
              className="shadow-lg mt-5"
              collapseOnSelect
              expand="lg"
              variant="dark"
              style={stylemenu}
            >
              <Container>
                <Navbar.Brand href="/home">
                  <FaHome />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/sobrenos">Sobre nós</Nav.Link>
                    <Nav.Link href="/perguntasfrequentes">
                      Perguntas Frequêntes
                    </Nav.Link>
                    <NavDropdown
                      title="Áreas de Atuação"
                      id="collasible-nav-dropdown"
                    >
                      {this.state.areaatuacao.map((dados) => (
                        <NavDropdown.Item
                          href={"/verareaatuacao/" + dados.id_areaatuacao}
                          key={dados.id_areaatuacao}
                        >
                          {dados.titulo}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                    <Nav.Link href="/artigos">Artigos</Nav.Link>
                    <Nav.Link href="/publicacoes">Publicações</Nav.Link>
                    <Nav.Link href="/depoimentos">Depoimentos</Nav.Link>
                  </Nav>
                  <Nav>
                    <Nav.Link
                      eventKey={2}
                      href="https://api.whatsapp.com/send/?phone=557184765333"
                      target="_blank"
                    >
                      <FaWhatsapp />
                      {""} (71){""} 98476-5333
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </>
    );
  }
}
