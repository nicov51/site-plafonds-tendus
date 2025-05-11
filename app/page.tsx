
import HeaderHero from "@components/HeaderHero";
import TestimonialsSlider from "@components/TestimonialsSlider";
import { Container } from '@mui/material';
import PlafondTenduSection from '@components/PlafondTenduSection';
import ConfianceSection from '@components/ConfianceSection';
import CallToAction from "@components/CallToAction";
export default function Home() {
    return (
      <>
        <HeaderHero />
        <Container
          maxWidth="lg"
          sx={{ py: 4}}
          component="main"
          aria-label="Contenu principal"
        >
          <PlafondTenduSection />
          <ConfianceSection />
        </Container>
        <TestimonialsSlider />
          <CallToAction />
      </>
    );
}