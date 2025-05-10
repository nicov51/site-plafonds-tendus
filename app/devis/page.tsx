"use client"

import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  Snackbar,
} from "@mui/material";

export default function DevisPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    ville: "",
    date: "",
    surface: "",
    description: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpenSnackbar(true);
    setFormData({ nom: "", email: "", ville: "", date: "", surface: "", description: "" });
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Demande de devis
      </Typography>
      <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
        <TextField
          required
          label="Nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
        />
        <TextField
          required
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          required
          label="Ville"
          name="ville"
          value={formData.ville}
          onChange={handleChange}
        />
        <TextField
          label="Date de réalisation souhaitée"
          name="date"
          type="date"
          slotProps={{ inputLabel: { shrink: true } }}
          value={formData.date}
          onChange={handleChange}
        />
        <TextField
          required
          label="Surface (en m²)"
          name="surface"
          type="number"
          value={formData.surface}
          onChange={handleChange}
        />
        <TextField
          label="Description du projet"
          name="description"
          multiline
          minRows={4}
          placeholder="ex: cuisine de 15m² avec 6 spots"
          value={formData.description}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Envoyer la demande
        </Button>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message="Votre demande a bien été prise en compte, nous la traiterons dans les meilleurs délais."
      />
    </Container>
  );
}
