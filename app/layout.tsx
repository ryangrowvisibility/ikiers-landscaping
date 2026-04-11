import type { Metadata } from "next";
import { Vollkorn, Jost } from "next/font/google";
import "./globals.css";

const vollkorn = Vollkorn({
  variable: "--font-vollkorn",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ikiers Landscaping | Fresno, CA — Full Yard Transformations by Jose",
  description:
    "Fresno landscaping by Jose — trees, plants, drip irrigation, and landscape lighting. Complete yard transformations, personally handled. 5.0★. Call (559) 824-7953.",
  openGraph: {
    title: "Ikiers Landscaping | Fresno, CA",
    description:
      "Full yard transformations in Fresno — tree planting, drip irrigation, landscape lighting, and backyard design by Jose. 5.0★.",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ikiers Landscaping",
  description:
    "Full-service landscaping in Fresno, CA. Jose specializes in complete yard transformations including tree planting, plant installation, drip irrigation systems, and landscape lighting.",
  telephone: "(559) 824-7953",
  address: {
    "@type": "PostalAddress",
    streetAddress: "461 N Seventh St",
    addressLocality: "Fresno",
    addressRegion: "CA",
    postalCode: "93701",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 36.7378,
      longitude: -119.7871,
    },
    geoRadius: "40000",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
      opens: "07:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday"],
      opens: "00:00",
      closes: "23:59",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday"],
      opens: "07:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "07:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "2",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${vollkorn.variable} ${jost.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-[100dvh] flex flex-col">{children}</body>
    </html>
  );
}
