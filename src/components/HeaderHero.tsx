"use client";

import { Box } from "@mui/material";
import Image from "next/image";

export default function HeaderHero() {
  return (
    <Box sx={{ width: "100%", height: "auto", position: "relative", marginTop: 0,  }}>
      <Image
        src="/images/headerHero.png" // Assurez-vous que le chemin est correct
        alt="Plafond tendu"
        width={800} // Largeur fixe pour éviter les problèmes de responsive
        height={400} // Hauteur fixe pour éviter les problèmes de responsive
        style={{ objectFit: "contain", width: "100%", height: "auto" }}
        priority
      />
    </Box>
  );
}

