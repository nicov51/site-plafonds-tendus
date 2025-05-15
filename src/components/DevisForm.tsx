"use client";

import React, { useState } from "react";
import { Box, TextField, Button, Snackbar } from "@mui/material";

export default function DevisForm() {
  const [formData, setFormData] = useState({
    nom: "", email: "", ville: "", date: "", surface: "", description: "",
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
    <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>

      <TextField
        required label="Nom" name="nom" value={formData.nom} onChange={handleChange}
      />

      <TextField
        required label="Email" name="email" type="email" value={formData.email} onChange={handleChange}
      />

      <TextField
        required label="Ville" name="ville" value={formData.ville} onChange={handleChange}
      />

      <TextField
        label="Date souhaitée" name="date" type="date"  slotProps={{
        inputLabel: {
          shrink: true,
        },
      }} value={formData.date} onChange={handleChange}
      />

      <TextField
        required label="Surface (m²)" name="surface" type="number" value={formData.surface} onChange={handleChange}
      />

      <TextField
        label="Description du projet" name="description" multiline minRows={4} value={formData.description} onChange={handleChange}
      />

      <Button
        variant="contained" type="submit">Envoyer la demande
      </Button>

      <Snackbar
        open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)} message="Votre demande a bien été prise en compte."
      />
    </Box>
  );
}
