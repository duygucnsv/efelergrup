import GaleriPage from "@/views/gallery-page";
import { buildPageMetadata } from "@/lib/seo/page-meta";
import { BreadcrumbJsonLd } from "@/features/seo/breadcrumb-json-ld";

export const metadata = buildPageMetadata({
  title: "Galeri | Çelik Yapı ve Proje Fotoğrafları — Esenyurt",
  description:
    "Efeler Grup demir çelik projelerinden görüntüler: çelik çatı, konstrüksiyon ve endüstriyel uygulamalar Esenyurt ve İstanbul.",
  path: "/galeri",
});

export default function Galeri() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Galeri", path: "/galeri" }]} />
      <GaleriPage />
    </>
  );
}
