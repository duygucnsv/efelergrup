/**
 * Tek kanallı site yapılandırması: metadata, JSON-LD ve sitemap aynı kaynağı kullanır.
 * Üretim ortamında NEXT_PUBLIC_SITE_URL mutlaka gerçek alan adınıza ayarlanmalıdır.
 */
export const siteConfig = {
  name: "Efeler Grup",
  legalName: "Efeler Grup Demir Çelik",
  /** Birincil anahtar kelime odağı (içerik ve başlıklarla doğal şekilde kullanılmalı) */
  primaryKeywords:
    "Esenyurt demir çelik, Esenyurt çelik konstrüksiyon, Esenyurt çelik çatı, demir doğrama Esenyurt",
  description:
    "Esenyurt'ta demir, çelik, çelik konstrüksiyon, çelik çatı, gezer vinç ve yük asansörü çözümleri sunan Efeler Grup. Kaliteli çelik yapı ve montaj hizmetleri için hemen iletişime geçin.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.efelergrupmakina.com",
  locale: "tr_TR",
  phone: "+905326955452",
  phoneDisplay: "+90 532 695 54 52",
  email: "efedemircelik@gmail.com",
  address: {
    streetAddress: "Osmangazi Mah. Mareşal Fevzi Çakmak Cd. No:33/1",
    addressLocality: "Esenyurt",
    addressRegion: "İstanbul",
    postalCode: "34522",
    addressCountry: "TR",
  },
  geo: {
    latitude: 41.041998579297406,
    longitude: 28.637662415841966,
  },
  googleSiteVerification: "oVlxZs-XywSJ7jtcYie1Av_C8oy43D6kKpTRNmYGm8M",
  googleAnalyticsId: "G-JWJSPNNZLM",
};

export function absoluteUrl(pathname = "/") {
  const base = siteConfig.url.replace(/\/$/, "");
  if (!pathname || pathname === "/") return `${base}/`;
  const p = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${p}`;
}
