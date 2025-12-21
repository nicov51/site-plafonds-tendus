'use client';

import dynamic from 'next/dynamic';

// Chargements dynamiques sécurisés (pas de SSR côté serveur)
const StructuredAggregateRating = dynamic(
  () => import('./StructuredAggregateRating'),
  { ssr: false }
);
const StructuredData = dynamic(
  () => import('./StructuredData'),
  { ssr: false }
);
const StructuredFaq = dynamic(
  () => import('./StructuredFaq'),
  { ssr: false }
);

type Props = {
  showFaq?: boolean;
};

export default function ClientSeoScripts({ showFaq = false }: Props) {
  return (
    <>
      <StructuredData />
      <StructuredAggregateRating />
      {showFaq && <StructuredFaq />}
    </>
  );
}
