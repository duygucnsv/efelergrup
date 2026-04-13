import HomePage from "@/views/home-page";
import { buildPageMetadata } from "@/lib/seo/page-meta";

export const metadata = buildPageMetadata({
  title:
    "Esenyurt Demir Çelik | Çelik Konstrüksiyon ve Çelik Çatı | Efeler Grup",
  description:
    "Esenyurt'ta demir ve çelik işleri, çelik konstrüksiyon, çelik çatı, gezer vinç ve yük asansörü. Efeler Grup ile güvenilir çelik yapı çözümleri ve montaj.",
  path: "/",
  keywords: [
    "Esenyurt demir",
    "Esenyurt çelik",
    "Esenyurt demir çelik",
    "çelik konstrüksiyon Esenyurt",
    "çelik çatı Esenyurt",
  ],
});

export default function Home() {
  return <HomePage />;
}
