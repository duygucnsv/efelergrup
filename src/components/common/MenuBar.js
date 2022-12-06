import React from "react";
import { Col, Container, Image, Nav, Navbar } from "react-bootstrap";

import {
  RiHome4Line,
  RiInformationLine,
  RiHeadphoneLine,
} from "react-icons/ri";
import { MdOutlineCorporateFare } from "react-icons/md";
import { VscReferences } from "react-icons/vsc";
import { AiOutlineProject } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/efeler-grup.png";

const MenuBar = () => {
    const navigate = useNavigate();

  return (
    <>
      <Navbar expand="md" className="menubar">
        <Container>
          <Col className="contact">
            {/* <Navbar.Brand as={Link} to="/">
              <Image className="logo img-fluid" src={logo} />
            </Navbar.Brand> */}
            <Nav className="justify-content-start" defaultActiveKey="/" as="ul">
              <Nav.Item as="li">
                <Nav.Link
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <img
                    src={logo}
                    className="img-fluid shadow-2-strong"
                    alt=""
                  />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="ms-auto justify-content-end"
                defaultActiveKey="/"
                as="ul"
              >
                <Nav.Item as="li">
                  <Nav.Link
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    <RiHome4Line /> ANASAYFA
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link as={Link} to="/about">
                    <MdOutlineCorporateFare /> HAKKIMIZDA
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link as={Link} to="/hizmetlerimiz">
                    <RiInformationLine /> HİZMETLERİMİZ
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link as={Link} to="/referanslar" referanslar>
                    <VscReferences /> REFERANSLAR
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                  {" "}
                  <Nav.Link as={Link} to="/projeler">
                    <AiOutlineProject /> PROJELER
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link as={Link} to="/galeri">
                    <GrGallery /> GALERİ
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link as={Link} to="/contact">
                    <RiHeadphoneLine /> İLETİŞİM
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Container>
      </Navbar>

      <div style={{ height: 5 }}></div>
    </>
  );
};

export default MenuBar;
