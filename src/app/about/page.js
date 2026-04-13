import AboutPage from "@/views/about-page";
import { buildPageMetadata } from "@/lib/seo/page-meta";
import { BreadcrumbJsonLd } from "@/features/seo/breadcrumb-json-ld";

export const metadata = buildPageMetadata({
  title: "Hakkımızda | Esenyurt Demir Çelik Firması",
  description:
    "Efeler Grup: Esenyurt merkezli demir çelik ve çelik konstrüksiyon tecrübesi. Çelik çatı, yapı ve endüstriyel çözümlerde güvenilir ortağınız.",
  path: "/about",
  keywords: [
    "Efeler Grup hakkında",
    "Esenyurt demir çelik firması",
    "çelik konstrüksiyon şirketi Esenyurt",
    "demir çelik hakkımızda",
  ],
});

export default function About() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Hakkımızda", path: "/about" }]} />
      <AboutPage />
    </>
  );
}
