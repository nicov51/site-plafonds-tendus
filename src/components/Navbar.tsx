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
    { label: "FAQ", href: "/faq" },
    { label: "Contact - Demande de devis", href: "/devis", isCTA: true },
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
                <Image src="/logo.png" alt="Logo" width={48} height={48} />
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
                                color: "white",
                                "&:hover": {
                                    backgroundColor: "rgba(255,255,255,0.1)",
                                },
                            }}
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
            <AppBar position="static" elevation={2} sx={{ backgroundColor: "#1e40af", color: "white" }}>
                <Toolbar sx={{ justifyContent: "space-between", alignItems: "center", py: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
                            <Image src="/logo.png" alt="Logo Plafonds Tendus" width={64} height={64} priority />
                        </Link>
                    </Box>

                    <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.href}
                                component={Link}
                                href={item.href}
                                sx={{
                                    textTransform: "none",
                                    color: "white",
                                    fontWeight: 500,
                                    px: 2,
                                    py: 1,
                                    borderRadius: "0.5rem",
                                    transition: "all 0.2s ease",
                                    ...(item.isCTA
                                        ? {
                                            backgroundColor: "#059669",
                                            "&:hover": {
                                                backgroundColor: "#047857",
                                                transform: "translateY(-1px)",
                                                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                            },
                                        }
                                        : {
                                            "&:hover": {
                                                backgroundColor: "rgba(255,255,255,0.15)",
                                                color: "white",
                                            },
                                        }),
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>

                    <IconButton
                        color="inherit"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ display: { md: "none" } }}
                        aria-label="Ouvrir le menu"
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
                    sx: {
                        backgroundColor: "#1e40af",
                        color: "white",
                        width: "75%",
                        maxWidth: "300px",
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
}







