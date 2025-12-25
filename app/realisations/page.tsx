'use client';

import { useState } from 'react';
import Image from 'next/image';
import BeforeAfterSlider from '@components/BeforeAfterSlider';
import BeforeAfterSideBySide from '@components/BeforeAfterSideBySide';
import ContextArticle from '@components/ContextArticle';

const avantApres = [
    { avant: '/images/avantApres/avant1.webp', apres: '/images/avantApres/apres1.webp', alt: 'Salon avec ancien plafond' },
    { avant: '/images/avantApres/avant2.webp', apres: '/images/avantApres/apres2.webp', alt: 'Cuisine avant rénovation' },
    { avant: '/images/avantApres/avant3.webp', apres: '/images/avantApres/apres3.webp', alt: 'Chambre avant travaux' },
    { avant: '/images/avantApres/avant4.webp', apres: '/images/avantApres/apres4.webp', alt: 'Salle de bain avant pose' },
];

const carrousel = Array.from({ length: 6 }, (_, i) => ({
    src: `/images/realisations/realisation${i + 1}.webp`,
    alt: `Réalisation plafond tendu projet ${i + 1}`,
}));

export default function RealisationsPage() {
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

    return (
        <div className="realisations-page">
            {/* Section Avant/Après avec SLIDER */}
            <section className="avant-apres-section">
                <h1 className="avant-apres-section__title">Avant / Après</h1>

                <div className="avant-apres-section__grid">
                    {avantApres.map((item, idx) => (
                        <BeforeAfterSlider
                            key={idx}
                            avant={item.avant}
                            apres={item.apres}
                            alt={item.alt}
                        />
                    ))}
                </div>
            </section>

            {/* Section Contexte avec SIDE BY SIDE */}
            <section className="contexte-section">
                <div className="contexte-section__image">
                    <BeforeAfterSideBySide
                        beforeSrc="/images/avantApres/avant1.webp"
                        afterSrc="/images/avantApres/apres1.webp"
                        alt="Plafond salon"
                    />
                </div>

                <div className="contexte-section__content">
                    <ContextArticle
                        title="Un salon transformé en moins de 24h"
                        chapo="Intervention rapide, propre et sans poussière."
                        highlights={[
                            'Toile satinée blanche tendue à chaud',
                            'Intégration de spots LED encastrés',
                            'Profilé invisible (< 5mm)',
                        ]}
                        description="Notre client souhaitait moderniser son salon. Nous avons installé une toile tendue en une journée seulement."
                        finalNote="Idéal pour les pièces de vie, sans gros travaux."
                    />
                </div>
            </section>

            {/* Section Carrousel */}
            <section className="carrousel-section">
                <h2 className="carrousel-section__title">Nos réalisations en images</h2>

                <div className="carrousel-section__scroll">
                    {carrousel.map((item, idx) => (
                        <div
                            key={idx}
                            className="carrousel-section__item"
                            onClick={() => setSelectedImage(item)}
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={300}
                                height={200}
                                sizes="300px"
                                quality={80}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Modale */}
            {selectedImage && (
                <div className="image-modal" onClick={() => setSelectedImage(null)}>
                    <div className="image-modal__content">
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            fill
                            quality={100}
                            priority
                            sizes="100vw"
                        />
                    </div>
                    <button
                        className="image-modal__close"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(null);
                        }}
                    >
                        ✕
                    </button>
                </div>
            )}
        </div>
    );
}

