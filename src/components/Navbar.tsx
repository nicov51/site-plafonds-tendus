"use client";

import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Contact", href: "/contact" },
  { label: "Contact - Demande de devis", href: "/devis" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <IconButton sx={{ position: "absolute", top: 8, right: 8 }}>
        <CloseIcon />
      </IconButton>
      <Box sx={{ mt: 6, mb: 2 }}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={48}
          height={48}
        />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.href} disablePadding>
            <Button
              component={Link}
              href={item.href}
              sx={{
                width: "100%",
                textTransform: "none",
                justifyContent: "flex-start",
                px: 3,
                py: 1.5,
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
              color="inherit"
            >
              <ListItemText primary={item.label} />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" elevation={1} sx={{ backgroundColor: "var(--bg-header)", color: "white" }}>
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
          {/* Logo desktop & mobile */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/logo.png"
              alt="Logo"
              width={64}
              height={64}
              // style={{ width: 'auto', height: 'auto' }}
            />
          </Box>

          {/* Menu Desktop */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.href}
                component={Link}
                href={item.href}
                sx={{
                  textTransform: "none",
                  color: "white",
                  fontWeight: 500,
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.25)",
                    color: "white",
                  },
                  ...(item.label === "Demande de devis" && {
                    backgroundColor: "rgba(255,255,255,0.15)",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.3)",
                    },
                  }),
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Menu Burger */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: { backgroundColor: "var(--bg-header)", color: "white", width: "70%" },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}






