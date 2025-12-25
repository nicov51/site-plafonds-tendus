import "../styles/globals.scss";
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
      <html lang="fr" suppressHydrationWarning>
      <head>
        {/* ✅ Script qui s'exécute AVANT React */}
        <script
            dangerouslySetInnerHTML={{
              __html: `
              (function() {
                try {
                  if (localStorage.getItem('darkMode') === 'true') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch (e) {}
              })();
            `,
            }}
        />
      </head>
      <body>
      <AppRouterCacheProvider>
        <Navbar />
        <Box component="main">
          {children}
        </Box>
        <Footer />
      </AppRouterCacheProvider>
      </body>
      </html>
  );
}



