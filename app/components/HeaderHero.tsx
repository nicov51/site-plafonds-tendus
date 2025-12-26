"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import headerHeroImage from "public/images/headerHero.webp";

export default function HeaderHero() {
  return (
    <Box
        sx={{
            width: "100%",
            height: "auto",
            position: "relative",
            marginTop: 0,
        }}
        component="header"
        role="banner"
    >
      <Image
        src={headerHeroImage}
        alt="Plafond tendu moderne dans un salon lumineux"
        width={1920}
        height={800}
        style={{ objectFit: "cover", width: "100%", height: "auto" }}
        priority
        quality={85}  //  Haute qualité pour image hero
        sizes="100vw" // Prend toute la largeur
        placeholder="blur"  // Effet de flou pendant chargement ( blurDataURL generé par next.js)
        // onError={(e) => {
        //   console.error("Erreur de chargement de l'image :", e)
        //   e.currentTarget.src = '/images/realisation1.webp' // Image de secours
        // }}
      />
    </Box>
  );
}

