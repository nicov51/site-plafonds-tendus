"use client";

import { Box } from "@mui/material";
import Image from "next/image";

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
        src="/images/headerHero.png"
        alt="Plafond tendu moderne dans un salon lumineux"
        width={1920}
        height={800}
        style={{ objectFit: "cover", width: "100%", height: "auto" }}
        priority
        quality={90}  // ✅ Haute qualité pour image hero
        sizes="100vw" // ✅ Prend toute la largeur
        placeholder="blur"  // ✅ Effet de flou pendant chargement
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
        onError={(e) => {
          console.error("Erreur de chargement de l'image :", e)
          e.currentTarget.src = '/images/realisation1.webp' // Image de secours
        }}
      />
    </Box>
  );
}

