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
    <div>
      <Navbar bg="white" expand="lg" className="menubar">
        <Container>
          <Col xs={3} md={4} lg={6}>
            <Navbar.Brand as={Link} to="/">
              <Image className="logo" src={logo} />
            </Navbar.Brand>
          </Col>
          <Col className="sticky-top" xs={9} md={8} lg={6}>
            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">
              <Nav>
                <Nav.Link as={Link} to="/">
                  <RiHome4Line /> ANASAYFA
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  <MdOutlineCorporateFare /> HAKKIMIZDA
                </Nav.Link>

                <Nav.Link as={Link} to="/hizmetlerimiz">
                  <RiInformationLine /> HİZMETLERİMİZ
                </Nav.Link>

                <Nav.Link as={Link} to="/referanslar" referanslar>
                  <VscReferences /> REFERANSLAR
                </Nav.Link>

                <Nav.Link as={Link} to="/projeler">
                  <AiOutlineProject /> PROJELER
                </Nav.Link>
                <Nav.Link as={Link} to="/galeri">
                  <GrGallery /> GALERİ
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  <RiHeadphoneLine /> İLETİŞİM
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar;
