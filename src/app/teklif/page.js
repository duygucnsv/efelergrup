import TeklifPage from "@/views/quote-page";
import { buildPageMetadata } from "@/lib/seo/page-meta";
import { BreadcrumbJsonLd } from "@/features/seo/breadcrumb-json-ld";

export const metadata = buildPageMetadata({
  title: "Teklif Al | Esenyurt Demir Çelik — Form",
  description:
    "Çelik konstrüksiyon ve demir çelik işleri için hızlı teklif formu. Efeler Grup Esenyurt ile projenizi paylaşın.",
  path: "/teklif",
});

export default function Teklif() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Teklif Al", path: "/teklif" }]} />
      <TeklifPage />
    </>
  );
}
