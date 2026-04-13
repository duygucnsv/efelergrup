import { absoluteUrl, siteConfig } from "@/config/site";

const SERVICES = [
  {
    name: "Çelik Konstrüksiyon",
    description:
      "Kolon, kiriş gibi taşıyıcı elemanları çelikten oluşan, fabrika, hangar, depo ve spor tesislerinde kullanılan depreme dayanıklı yapı sistemi.",
  },
  {
    name: "Çelik Çatı",
    description:
      "Yüksek ısı ve soğuğa dayanıklı, uzun ömürlü metal malzemelerden üretilen çelik çatı sistemleri. Fabrika ve sanayi yapıları için ideal.",
  },
  {
    name: "Çelik Konstrüksiyon Montaj",
    description:
      "Sertifikalı personel ile İSG yönetmeliklerine uygun çelik konstrüksiyon montaj hizmeti. Sanayi yapıları, AVM, hastane ve çok katlı konutlar.",
  },
  {
    name: "Asma Kat",
    description:
      "Sanayi tesislerinde alan verimliliğini artırmak için çelik asma kat sistemleri kurulumu.",
  },
  {
    name: "Sundurma Sistemleri",
    description:
      "Bina girişlerine ve otoparklara hava şartlarından korunmak amacıyla yapılan çelik sundurma sistemleri.",
  },
  {
    name: "Gezer Vinç",
    description:
      "Kirişler üzerine yerleştirilmiş raylar boyunca hareket eden, tek veya çift köprülü çelik gezer vinç sistemleri.",
  },
  {
    name: "Yük Asansörü",
    description:
      "Endüstriyel tesislerde malzeme ve yük taşımak için kurulan çelik yük asansörü sistemleri.",
  },
];

export function ServiceListJsonLd() {
  const payload = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Efeler Grup Hizmetleri",
    url: absoluteUrl("/hizmetlerimiz"),
    itemListElement: SERVICES.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
          "@type": "LocalBusiness",
          "@id": absoluteUrl("/#business"),
          name: siteConfig.legalName,
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Esenyurt, İstanbul",
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
