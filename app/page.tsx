

import HeaderHero from "@components/HeaderHero";
import TestimonialsSlider from "@components/TestimonialsSlider";
import { Container } from '@mui/material';
import PlafondTenduSection from '@components/PlafondTenduSection';
import ConfianceSection from '@components/ConfianceSection';
import CallToAction from "@components/CallToAction";
import type { Metadata } from 'next';
import ReviewButton from "@components/ReviewButton";
import ClientSeoScripts from '@components/referencement/ClientSeoScripts';


export const metadata: Metadata = {
  title: "Plafond tendu Marne 51 - Artisan spécialiste depuis 2009",
  description: "Entreprise artisanale à Fismes spécialisée dans la pose de plafonds tendus : rapide, esthétique, durable. Devis gratuit.",
  keywords: [
    "plafond tendu",
    "artisan plafond tendu Marne",
    "plafond tendu Champagne Ardennes Picardie",
    "pose plafond tendu",
    "plafond tendu salle de bain",
  ],
  openGraph: {
    title: "Plafond tendu grand Est- Artisan spécialiste",
    description: "Entreprise locale à Fismes experte en plafonds tendus. Finition soignée, devis gratuit.",
    url: "https://nicolasviennot.fr",
    siteName: "nicolasviennot",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://nicolasviennot.fr/images/headerHero.png",
        width: 1200,
        height: 630,
        alt: "Exemple de plafond tendu moderne à Reims",
      },
    ],
  }
};
export default function Home() {
    return (
      <>
        <ClientSeoScripts />
        <HeaderHero/>
        <Container
          maxWidth="lg"
          sx={{py: 4}}
          component="main"
          aria-label="Contenu principal"
        >
          <PlafondTenduSection/>
          <ConfianceSection/>
        </Container>
        <TestimonialsSlider/>
        <div className="text-center mt-8 mb-12">
          <h3 className="text-xl font-medium mb-4">Vous aussi, partagez votre expérience</h3>
          <ReviewButton/>
        </div>
        <CallToAction/>
      </>
    );
}