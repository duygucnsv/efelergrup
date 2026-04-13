import { absoluteUrl, siteConfig } from "@/config/site";

export function WebSiteJsonLd() {
  const payload = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "tr-TR",
    publisher: { "@id": absoluteUrl("/#business") },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
