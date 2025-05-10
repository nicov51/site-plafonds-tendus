"use client";

import Link from "next/link";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Contact", href: "/contact" },
  { label: "Demande de devis", href: "/devis" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  return (
    <AppBar position="fixed" elevation={1} sx={{
      backgroundColor: "var(--bg-header)",
      color: "white"
    }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          {/* Ton logo ici */}
          MonPlafond
        </Typography>
        <Box>
          {navItems.map((item) => (
            <Button
              key={item.href}
              component={Link}
              href={item.href}
              sx={{ textTransform: "none", mx: 1 }}
              color="inherit"
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
