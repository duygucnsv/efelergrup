import { absoluteUrl } from "@/config/site";

const ROUTES = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.85, changeFrequency: "monthly" },
  { path: "/hizmetlerimiz", priority: 0.9, changeFrequency: "monthly" },
  { path: "/referanslar", priority: 0.75, changeFrequency: "monthly" },
  { path: "/projeler", priority: 0.75, changeFrequency: "monthly" },
  { path: "/galeri", priority: 0.75, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.85, changeFrequency: "monthly" },
  { path: "/teklif", priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap() {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
