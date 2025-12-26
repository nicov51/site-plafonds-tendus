import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import React from "react";
import { Box } from "@mui/material";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';


export const metadata: Metadata = {
  title: "Plafonds tendus",
  description: "Artisan spécialiste du plafond tendu depuis 2009",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
    <body className="bg-white text-black p-0 m-0">
    <AppRouterCacheProvider>
    <Navbar />
      <Box >
        {children}
      </Box>
    <Footer />
    </AppRouterCacheProvider>
    </body>
    </html>
  );
}

