import HizmetlerimizPage from "@/views/our-services-page";
import { buildPageMetadata } from "@/lib/seo/page-meta";
import { BreadcrumbJsonLd } from "@/features/seo/breadcrumb-json-ld";
import { ServiceListJsonLd } from "@/features/seo/service-list-json-ld";

export const metadata = buildPageMetadata({
  title: "Hizmetlerimiz | Demir Çelik & Çelik Konstrüksiyon Esenyurt",
  description:
    "Esenyurt'ta çelik konstrüksiyon, çelik çatı, demir doğrama, gezer vinç, yük asansörü ve sundurma hizmetleri. Efeler Grup uzman kadrosu ile projelerinizi hayata geçirir.",
  path: "/hizmetlerimiz",
  keywords: [
    "çelik konstrüksiyon hizmetleri",
    "çelik çatı Esenyurt",
    "gezer vinç montaj",
    "yük asansörü",
    "asma kat yapımı",
    "sundurma sistemleri",
    "demir doğrama Esenyurt",
  ],
});

export default function Hizmetlerimiz() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Hizmetlerimiz", path: "/hizmetlerimiz" }]} />
      <ServiceListJsonLd />
      <HizmetlerimizPage />
    </>
  );
}
