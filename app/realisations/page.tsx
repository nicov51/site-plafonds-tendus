


'use client';

import { useState } from 'react';
import Image from 'next/image';
import BeforeAfter from '@components/BeforeAfter';
import ContextArticle from '@components/ContextArticle';
import { Box, Paper } from '@mui/material';

const avantApres = [
    { avant: '/images/avantApres/avant1.webp', apres: '/images/avantApres/apres1.webp', alt: 'Salon avec ancien plafond' },
    { avant: '/images/avantApres/avant2.webp', apres: '/images/avantApres/apres2.webp', alt: 'Cuisine avant rénovation' },
    { avant: '/images/avantApres/avant3.webp', apres: '/images/avantApres/apres3.webp', alt: 'Chambre avant travaux' },
    { avant: '/images/avantApres/avant4.webp', apres: '/images/avantApres/apres4.webp', alt: 'Salle de bain avant pose' },
];

const carrousel = Array.from({ length: 6 }, (_, i) => ({
    src: `/images/realisations/realisation${i + 1}.webp`,
    alt: `Réalisation plafond tendu projet ${i + 1}`
}));

export default function RealisationsPage() {
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

    return (
        <div className="flex flex-col gap-20 py-16 px-6">
            {/* Section Avant / Après */}
            <section>
                <h1 className="text-3xl font-bold text-center mb-10">
                    Avant / Après
                </h1>
                <div className="flex flex-col gap-16 max-w-7xl mx-auto">
                    {avantApres.map((item, idx) => (
                        <div
                            key={idx}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
                        >
                            {/* Avant */}
                            <div
                                className="relative cursor-pointer group w-full"
                                onClick={() => setSelectedImage({ src: item.avant, alt: `${item.alt} - avant` })}
                            >
                                <div className="relative w-full aspect-[4/3]">
                                    <Image
                                        src={item.avant}
                                        alt={`${item.alt} - avant`}
                                        fill
                                        className="rounded-xl filter brightness-75 grayscale group-hover:brightness-90 group-hover:grayscale-0 transition object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        quality={85}
                                    />
                                </div>
                                <span className="absolute bottom-3 left-3 bg-black/70 text-white px-4 py-2 text-base rounded font-medium">
            Avant
          </span>
                            </div>

                            {/* Après */}
                            <div
                                className="relative cursor-pointer group w-full"
                                onClick={() => setSelectedImage({ src: item.apres, alt: `${item.alt} - après` })}
                            >
                                <div className="relative w-full aspect-[4/3]">
                                    <Image
                                        src={item.apres}
                                        alt={`${item.alt} - après`}
                                        fill
                                        className="rounded-xl shadow-lg group-hover:scale-[1.02] transition object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        quality={85}
                                    />
                                </div>
                                <span className="absolute bottom-3 left-3 bg-blue-600 text-white px-4 py-2 text-base rounded font-medium">
            Après
          </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* Section Contexte Détaillé */}
            <section>
                <Paper
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'stretch',
                        gap: 4,
                        my: 6,
                        p: { xs: 2, md: 4 },
                        borderRadius: 2,
                    }}
                >
                    <Box sx={{ flex: 1, minHeight: { xs: 300, sm: 400, md: 'auto' } }}>
                        <BeforeAfter
                            beforeSrc="/images/avantApres/avant1.webp"
                            afterSrc="/images/avantApres/apres1.webp"
                            alt="Plafond salon"
                        />
                    </Box>

                    <ContextArticle
                        title="Un salon transformé en moins de 24h"
                        chapo="Intervention rapide, propre et sans poussière, pour un résultat impeccable."
                        highlights={[
                            'Toile satinée blanche tendue à chaud',
                            'Intégration de spots LED encastrés',
                            'Profilé invisible (< 5mm) pour une finition haut de gamme',
                        ]}
                        description="Dans ce projet, notre client souhaitait redonner un coup d'éclat à son salon tout en modernisant l'éclairage. Nous avons retiré l'ancien faux plafond et installé une toile tendue en une journée seulement. Résultat : une pièce transformée, lumineuse et élégante."
                        finalNote="Ce type de projet est idéal pour les pièces de vie, sans engager de gros travaux."
                    />
                </Paper>
            </section>

            {/* Section Réalisations (Carrousel) */}
            <section>
                <h2 className="text-2xl font-semibold text-center mb-6">
                    Nos réalisations en images
                </h2>
                <div className="flex gap-4 overflow-x-auto pb-4">
                    {carrousel.map((item, idx) => (
                        <div
                            key={idx}
                            className="shrink-0 cursor-pointer"
                            onClick={() => setSelectedImage(item)}
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={300}
                                height={200}
                                className="rounded-lg hover:scale-105 transition-transform"
                                sizes="300px"
                                quality={80}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* MODALE */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            fill
                            className="object-contain"
                            quality={100}
                            priority
                            sizes="100vw"
                        />
                    </div>

                    {/* Bouton fermer */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(null);
                        }}
                        className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold transition-colors"
                    >
                        ✕
                    </button>
                </div>
            )}
        </div>
    );
}
