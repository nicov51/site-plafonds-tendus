'use client';

import Image from 'next/image';

type BeforeAfterSliderProps = {
    readonly avant: string;
    readonly apres: string;
    readonly alt?: string;
};

export default function BeforeAfterSlider({
                                              avant,
                                              apres,
                                              alt = 'Avant/Après',
                                          }: BeforeAfterSliderProps) {
    // Protection contre les props vides
    if (!avant || !apres) {
        console.error('BeforeAfterSlider: avant et apres sont requis');
        return null;
    }

    return (
        <div className="before-after-slider">
            {/* Image Avant (petite, à gauche) */}
            <div className="before-after-slider__before">
                <Image
                    src={avant}
                    alt={`${alt} - Avant`}
                    fill
                    sizes="(max-width: 768px) 35vw, 300px"
                    style={{ objectFit: 'cover' }}
                />
                <span className="before-after-slider__label">Avant</span>
            </div>

            {/* Image Après (grande, à droite) - SANS ZOOM */}
            <div className="before-after-slider__after">
                <Image
                    src={apres}
                    alt={`${alt} - Après`}
                    fill
                    sizes="(max-width: 768px) 60vw, 600px"
                    style={{ objectFit: 'cover' }}
                    priority
                />
                <span className="before-after-slider__label before-after-slider__label--highlight">
          Après
        </span>
            </div>
        </div>
    );
}



