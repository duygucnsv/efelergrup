import Script from "next/script";
import { Roboto } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/style.css";
import "react-toastify/dist/ReactToastify.min.css";

import { siteConfig } from "@/config/site";
import { LocalBusinessJsonLd } from "@/features/seo/local-business-json-ld";
import { WebSiteJsonLd } from "@/features/seo/web-site-json-ld";
import Footer from "@/components/common/footer";
import MenuBar from "@/components/common/menu-bar";
import TopBar from "@/components/common/top-bar";
import { ToastProvider } from "@/components/providers/toast-provider";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const defaultTitle = {
  default: `${siteConfig.name} | Esenyurt Demir Çelik & Çelik Konstrüksiyon`,
  template: `%s | ${siteConfig.name}`,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#004ce5",
};

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: defaultTitle,
  description: siteConfig.description,
  keywords: siteConfig.primaryKeywords.split(", ").concat([
    "çelik konstrüksiyon",
    "çelik çatı",
    "demir doğrama",
    "İstanbul çelik yapı",
  ]),
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  formatDetection: {
    email: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/assets/img/efeler-grup.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: siteConfig.locale.replace("_", "-"),
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: defaultTitle.default,
    description: siteConfig.description,
    images: [
      {
        url: "/assets/img/efeler-grup.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Esenyurt demir çelik`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle.default,
    description: siteConfig.description,
    images: ["/assets/img/efeler-grup.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: siteConfig.googleSiteVerification,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  other: {
    "geo.region": "TR-34",
    "geo.placename": "Esenyurt",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={roboto.className}>
      <body>
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteConfig.googleAnalyticsId}');
          `}
        </Script>
        <TopBar />
        <MenuBar />
        <main>{children}</main>
        <Footer />
        <ToastProvider />
      </body>
    </html>
  );
}
