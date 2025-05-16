import { Metadata } from "next";
import { Container, Typography, Box, Divider } from "@mui/material";
import FaqItem from "@components/FaqItem";
import faqList from "@/src/data/faqList";
import StructuredFaq from "@components/referencement/StructuredFaq";


export const metadata: Metadata = {
  title: "FAQ - Plafond Tendu | Votre Artisan Spécialiste",
  description: "Retrouvez les réponses aux questions fréquentes sur les plafonds tendus : pose, entretien, durée de vie, tarifs, et bien plus.",
};

export default function FaqPage() {
  return (
    <Container sx={{ py: 6 }}>
      <StructuredFaq />
      <Typography variant="h3" component="h1" align="center" gutterBottom color="primary">
        Foire aux questions
      </Typography>

      <Typography variant="subtitle1" align="center" gutterBottom>
        Vous vous posez des questions sur le plafond tendu ? Voici les réponses les plus courantes.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Box component="section" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {faqList.map((faq, idx) => (
          <FaqItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </Box>
    </Container>
  );
}

