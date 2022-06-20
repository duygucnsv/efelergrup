import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            
        <ul>

            <li><Link to="/">Anasayfa</Link></li>           
            <li><Link to="/hizmetlerimiz">Hizmetlerimiz</Link></li>
            <li><Link to="/referanslar">Referanslar</Link></li>
            <li><Link to="/projeler">Projeler</Link></li>
            <li><Link to="/galeri">Galeri</Link></li>
            <li><Link to="/contact">İletişim</Link></li>

        </ul>
        <div>&copy;2021 - Copyright by Efeler Grup Demir Çelik Makina </div>
        </footer>
    )
}

export default Footer
