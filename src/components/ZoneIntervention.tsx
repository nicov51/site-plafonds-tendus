"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function ZoneIntervention() {
  return (
    <Box mt={8} component="section" aria-labelledby="zone-intervention-title">
      <Typography variant="h5" gutterBottom id="zone-intervention-title">
        Zone d intervention dans la Marne et alentours
      </Typography>
      <Image
        src="/images/zoneIntervention.png"
        alt="Zone d'intervention couvrant Reims, Épernay, Châlons-en-Champagne et les communes alentours"
        width={800}
        height={600}
        className="rounded-lg shadow-lg"
        priority={false}
      />
      <Typography variant="body1" mt={2}>
        Nous intervenons principalement dans un rayon de 100km autour de Fismes, incluant :
      </Typography>
      <ul>
        {["Reims", "Épernay", "Châlons-en-Champagne", "Soissons", "Laon", "Rethel", "Meaux", "Vouziers", "Mourmelon", "Saint-Quentin"].map((ville) => (
          <li key={ville}>{ville}</li>
        ))}
      </ul>
      <Typography variant="body1" mt={2}>
        Pour toute demande en dehors de cette zone, un devis à distance pourra vous être établi.
      </Typography>
    </Box>
  );
}