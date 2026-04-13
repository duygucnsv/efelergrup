import { absoluteUrl, siteConfig } from "@/config/site";

/** Sayfa bazlı metadata oluşturur — başlık şablonu root layout’taki template ile birleşir */
export function buildPageMetadata({
  title,
  description = siteConfig.description,
  path,
  keywords,
}) {
  const url = absoluteUrl(path);
  const kw = keywords?.length ? keywords : siteConfig.primaryKeywords.split(", ");

  return {
    title,
    description,
    keywords: kw,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale.replace("_", "-"),
      type: "website",
      images: [
        {
          url: "/assets/img/efeler-grup.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/img/efeler-grup.png"],
    },
  };
}
