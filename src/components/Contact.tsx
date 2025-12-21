"use client";

import { Stack, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Stack spacing={2}>
      <Typography variant="h5" gutterBottom>Coordonnées</Typography>
      <Typography><strong>Nom de l entreprise :</strong> Viennot</Typography>
      <Typography><strong>Email :</strong> nicolas.viennot@laposte.net </Typography>
      <Typography><strong>Téléphone :</strong> 07 60 46 26 10</Typography>
      <Typography><strong>Site :</strong> www.nicolasviennot.fr</Typography>
      <Typography><strong>Réseaux :</strong> Instagram, Facebook</Typography>
    </Stack>
  );
}