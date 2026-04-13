import { absoluteUrl, siteConfig } from "@/config/site";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url.replace(/\/$/, ""),
  };
}
