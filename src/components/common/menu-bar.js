"use client";

import React from "react";
import { Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import Link from "next/link";

import {
  RiHome4Line,
  RiInformationLine,
  RiHeadphoneLine,
} from "react-icons/ri";
import { MdOutlineCorporateFare } from "react-icons/md";
import { VscReferences } from "react-icons/vsc";
import { AiOutlineProject } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";

const MenuBar = () => {
  return (
    <div>
      <Navbar bg="white" expand="lg" className="menubar">
        <Container>
          <Row className="align-items-center w-100 g-0">
            <Col xs={3} md={4} lg={6}>
              <Navbar.Brand as={Link} href="/">
                <Image
                  className="logo"
                  src="/assets/img/efeler-grup.png"
                  alt="Efeler Grup Esenyurt demir çelik logo"
                />
              </Navbar.Brand>
            </Col>
            <Col className="sticky-top" xs={9} md={8} lg={6}>
              <Navbar.Toggle aria-controls="navbarScroll" />

              <Navbar.Collapse id="navbarScroll">
                <Nav>
                  <Nav.Link as={Link} href="/">
                    <RiHome4Line /> ANASAYFA
                  </Nav.Link>
                  <Nav.Link as={Link} href="/about">
                    <MdOutlineCorporateFare /> HAKKIMIZDA
                  </Nav.Link>

                  <Nav.Link as={Link} href="/hizmetlerimiz">
                    <RiInformationLine /> HİZMETLERİMİZ
                  </Nav.Link>

                  <Nav.Link as={Link} href="/referanslar">
                    <VscReferences /> REFERANSLAR
                  </Nav.Link>

                  <Nav.Link as={Link} href="/projeler">
                    <AiOutlineProject /> PROJELER
                  </Nav.Link>
                  <Nav.Link as={Link} href="/galeri">
                    <GrGallery /> GALERİ
                  </Nav.Link>
                  <Nav.Link as={Link} href="/contact">
                    <RiHeadphoneLine /> İLETİŞİM
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar;
