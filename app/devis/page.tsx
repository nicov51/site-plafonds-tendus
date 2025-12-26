"use client";
import { Box, Typography } from "@mui/material";
import ContactInfo from "@components/Contact";
import DevisForm from "@components/DevisForm";
import ZoneIntervention from "@components/ZoneIntervention";

export default function ContactDevisPage() {
  return (
    <Box px={{ xs: 2, sm: 4 }} py={{ xs: 4, sm: 8 }} maxWidth="lg" mx="auto">
      <Typography variant="h4" component="h1" gutterBottom>
        Comment nous contacter ?
      </Typography>
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} mt={4} gap={4}>
        <Box flex={1}>
          <ContactInfo />
        </Box>
        <Box flex={1}>
          <DevisForm />
        </Box>
      </Box>
      <ZoneIntervention />
    </Box>
  );
}

