import React from 'react'
import { Container,Image,Nav, Navbar } from 'react-bootstrap'

import {RiHome4Line,RiInformationLine,RiHeadphoneLine} from "react-icons/ri";
import {MdOutlineCorporateFare} from "react-icons/md"
import {VscReferences} from "react-icons/vsc"
import {AiOutlineProject} from "react-icons/ai"
import {GrGallery} from "react-icons/gr"
import { Link } from 'react-router-dom';
import logo from "../../assets/img/efeler-grup.png";

const MenuBar = () => {
  return (
    <>
    <Navbar expand="md" className="menubar">
  <Container>
    <Navbar.Brand as={Link} to="/">
        <Image className='logo' src={logo} />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="ms-auto "> 
        <Nav.Link as={Link} to="/"><RiHome4Line/> ANASAYFA</Nav.Link>
        <Nav.Link as={Link} to="/about"><MdOutlineCorporateFare/> HAKKIMIZDA </Nav.Link>       
        <Nav.Link as={Link} to="/hizmetlerimiz"><RiInformationLine/> HİZMETLERİMİZ</Nav.Link>
        <Nav.Link as={Link} to="/referanslar"referanslar><VscReferences/> REFERANSLAR</Nav.Link>
        <Nav.Link as={Link} to="/projeler"><AiOutlineProject/> PROJELER</Nav.Link>
        <Nav.Link as={Link} to="/galeri"><GrGallery/> GALERİ</Nav.Link>
        <Nav.Link as={Link} to="/contact"><RiHeadphoneLine/> İLETİŞİM</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
  )
}

export default MenuBar