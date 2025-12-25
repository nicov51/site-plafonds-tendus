"use client";

import Image from "next/image";

export default function ZoneIntervention() {
    const villes = [
        "Reims",
        "Épernay",
        "Châlons-en-Champagne",
        "Soissons",
        "Laon",
        "Rethel",
        "Meaux",
        "Vouziers",
        "Mourmelon",
        "Saint-Quentin"
    ];

    return (
        <section className="zone-intervention" aria-labelledby="zone-intervention-title">
            <div className="zone-intervention__container">
                <h2 className="zone-intervention__title" id="zone-intervention-title">
                    Zone d intervention dans la Marne et alentours
                </h2>

                <div className="zone-intervention__content">
                    {/* Image */}
                    <div className="zone-intervention__image-wrapper">
                        <Image
                            src="/images/zoneIntervention.png"
                            alt="Zone d'intervention couvrant Reims, Épernay, Châlons-en-Champagne et les communes alentours"
                            width={800}
                            height={600}
                            priority={false}
                        />
                    </div>

                    {/* Texte et liste */}
                    <div className="zone-intervention__text-content">
                        <p className="zone-intervention__description">
                            Nous intervenons principalement dans un rayon de <strong>100km autour de Fismes</strong>, incluant :
                        </p>

                        <ul className="zone-intervention__list">
                            {villes.map((ville) => (
                                <li key={ville} className="zone-intervention__list-item">
                                    {ville}
                                </li>
                            ))}
                        </ul>

                        <div className="zone-intervention__note">
                            Pour toute demande en dehors de cette zone, un devis à distance pourra vous être établi.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
