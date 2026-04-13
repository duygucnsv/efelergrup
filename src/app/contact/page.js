import ContactPage from "@/views/contact-page";
import { buildPageMetadata } from "@/lib/seo/page-meta";
import { BreadcrumbJsonLd } from "@/features/seo/breadcrumb-json-ld";

export const metadata = buildPageMetadata({
  title: "İletişim | Esenyurt Demir Çelik — Efeler Grup",
  description:
    "Esenyurt Osmangazi'de Efeler Grup demir çelik iletişim: telefon, e-posta ve harita. Çelik konstrüksiyon ve teklif için bize ulaşın.",
  path: "/contact",
});

export default function Contact() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "İletişim", path: "/contact" }]} />
      <ContactPage />
    </>
  );
}
