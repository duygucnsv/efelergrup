import ReferanslarPage from "@/views/references-page";
import { buildPageMetadata } from "@/lib/seo/page-meta";
import { BreadcrumbJsonLd } from "@/features/seo/breadcrumb-json-ld";

export const metadata = buildPageMetadata({
  title: "Referanslar | İş Ortakları ve Müşteriler — Demir Çelik Esenyurt",
  description:
    "Efeler Grup demir çelik referans listesi. Esenyurt ve çevresinde çelik yapı ve konstrüksiyon alanında güvenilen firmalar.",
  path: "/referanslar",
  keywords: [
    "Efeler Grup referanslar",
    "demir çelik müşterileri",
    "çelik konstrüksiyon iş ortakları",
    "Esenyurt çelik firma referansları",
  ],
});

export default function Referanslar() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Referanslar", path: "/referanslar" }]} />
      <ReferanslarPage />
    </>
  );
}
