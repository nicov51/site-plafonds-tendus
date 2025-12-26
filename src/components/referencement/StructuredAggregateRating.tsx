'use client';

import reviews from "@/src/data/reviews";

export default function StructuredAggregateRating() {
  const totalNotes = reviews.reduce((acc, r) => acc + r.note, 0);
  const average = (totalNotes / reviews.length).toFixed(1);
  const reviewCount = reviews.length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Plafond Tendu Marne - Nicolas Viennot",
    "image": "https://nicolasviennot.fr/images/logo.jpg",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Fismes",
      "addressRegion": "Grand Est",
      "postalCode": "51170",
      "addressCountry": "FR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": average,
      "reviewCount": reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.note,
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": review.nom
      },
      "datePublished": review.date,
      "description": review.commentaire
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
