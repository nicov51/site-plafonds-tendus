"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function ZoneIntervention() {
  return (
    <Box mt={8}>
      <Typography variant="h5" gutterBottom>Zone d’intervention</Typography>
      <Image
        src="/images/zoneIntervention.png"
        alt="Zone d'intervention"
        width={800}
        height={600}
        className="rounded-lg shadow-lg"
      />
      <Typography variant="body1" mt={2}>
        Pour toute demande en dehors de cette zone, un devis à distance pourra vous être établi.
      </Typography>
    </Box>
  );
}