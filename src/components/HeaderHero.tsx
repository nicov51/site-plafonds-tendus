"use client";

import { Box } from "@mui/material";
import Image from "next/image";

export default function HeaderHero() {
  return (
    <Box sx={{ width: "100%", height: "auto", position: "relative", marginTop: 0,  }}>
      <Image
        src="/images/headerHero.png"
        alt="Plafond tendu"
        width={800}
        height={400}
        style={{ objectFit: "contain", width: "100%", height: "auto" }}
        priority
      />
    </Box>
  );
}

