export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Troygym",
    image: "https://troygym.com/og-image.jpg",
    description: "Premium fitness gym and wellness center in Los Angeles",
    telephone: "+256759405095",
    email: "info@troygym.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3rd Floor, Forest Mall",
      addressLocality: "Lugogo",
      addressRegion: "Los Angeles",
      postalCode: "CA 90001",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "34.0195",
      longitude: "-118.2437",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "06:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "06:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "08:00",
        closes: "21:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/troygym",
      "https://www.instagram.com/troygym",
      "https://www.twitter.com/troygym",
      "https://www.tiktok.com/@troygym",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
