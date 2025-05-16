"use client"

import { LocalBusinessJsonLd } from 'next-seo';

export default function StructuredData() {
  return (
    <LocalBusinessJsonLd
      type="Store"
      id="https://nicolasviennot.fr"
      name="Plafond Tendu Fismes - Nicolas Viennot"
      description="Spécialiste des plafonds tendus en Champagne Ardennes depuis 2009. Pose rapide et propre."
      url="https://nicolasviennot.fr"
      telephone="+33612345678"
      address={{
        streetAddress: "23 rue henri dambreville",
        addressLocality: "Fismes",
        addressRegion: "grand est",
        postalCode: "51170",
        addressCountry: "FR",
      }}
      geo={{
        latitude: 44.8378,
        longitude: -0.5792,
      }}
      sameAs={[
        "https://www.facebook.com/tonartisan",
        "https://www.instagram.com/tonartisan"
      ]}
    />
  );
}
