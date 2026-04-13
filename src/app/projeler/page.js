import ProjelerPage from "@/views/projects-page";
import { buildPageMetadata } from "@/lib/seo/page-meta";
import { BreadcrumbJsonLd } from "@/features/seo/breadcrumb-json-ld";

export const metadata = buildPageMetadata({
  title: "Projeler | Çelik Yapı Referansları — Efeler Grup Esenyurt",
  description:
    "Tamamlanan çelik konstrüksiyon ve demir çelik projeleri. Efeler Grup Esenyurt’ta endüstriyel ve ticari çelik yapı deneyimi.",
  path: "/projeler",
});

export default function Projeler() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Projeler", path: "/projeler" }]} />
      <ProjelerPage />
    </>
  );
}
