import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="m-auto">
      <ul>
        <li>
          <Link href="/">Anasayfa</Link>
        </li>
        <li>
          <Link href="/hizmetlerimiz">Hizmetlerimiz</Link>
        </li>
        <li>
          <Link href="/referanslar">Referanslar</Link>
        </li>
        <li>
          <Link href="/projeler">Projeler</Link>
        </li>
        <li>
          <Link href="/galeri">Galeri</Link>
        </li>
        <li>
          <Link href="/contact">İletişim</Link>
        </li>
      </ul>
      <div>
        &copy; {new Date().getFullYear()} — Copyright by Efeler Grup Demir
        Çelik — Esenyurt
      </div>
    </footer>
  );
};

export default Footer;
