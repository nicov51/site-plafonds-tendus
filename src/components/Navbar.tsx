"use client";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
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

    return (
        <>
            <nav className="navbar">
                <div className="navbar__toolbar">
                    {/* Logo */}
                    <Link href="/" className="navbar__logo-link">
                        <Image
                            src="/logo.png"
                            alt="Logo Plafonds Tendus"
                            width={64}
                            height={64}
                            priority
                            className="navbar__logo"
                        />
                    </Link>

                    {/* Navigation desktop */}
                    <div className="navbar__nav">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`navbar__link ${item.isCTA ? 'navbar__link--cta' : ''}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Bouton menu mobile */}
                    <button
                        className="navbar__menu-btn"
                        onClick={handleDrawerToggle}
                        aria-label="Ouvrir le menu"
                    >
                        <MenuIcon />
                    </button>
                </div>
            </nav>

            {/* Overlay */}
            <div
                className={`drawer-overlay ${mobileOpen ? 'drawer-overlay--visible' : ''}`}
                onClick={handleDrawerToggle}
            />

            {/* Drawer mobile */}
            <div className={`drawer ${mobileOpen ? 'drawer--open' : ''}`}>
                <button
                    className="drawer__close"
                    onClick={handleDrawerToggle}
                    aria-label="Fermer le menu"
                >
                    <CloseIcon />
                </button>

                <div className="drawer__logo">
                    <Image src="/logo.png" alt="Logo" width={48} height={48} />
                </div>

                <ul className="drawer__nav">
                    {navItems.map((item) => (
                        <li key={item.href} className="drawer__item">
                            <Link
                                href={item.href}
                                className="drawer__link"
                                onClick={handleDrawerToggle}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
