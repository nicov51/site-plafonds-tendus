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
      telephone="+33760462610"
      address={{
        streetAddress: "23 rue henri dambreville",
        addressLocality: "Fismes",
        addressRegion: "grand est",
        postalCode: "51170",
        addressCountry: "FR",
      }}
      geo={{
        latitude: 49.2583,
        longitude: 4.0317,
      }}
      sameAs={[
        "https://www.facebook.com/tonartisan",
        "https://www.instagram.com/tonartisan"
      ]}
    />
  );
}
