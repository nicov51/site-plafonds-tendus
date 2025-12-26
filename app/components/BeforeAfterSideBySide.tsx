'use client';

import Image from 'next/image';
import { useState } from 'react';

type BeforeAfterSideBySideProps = {
    readonly beforeSrc: string;
    readonly afterSrc: string;
    readonly alt?: string;
};

export default function BeforeAfterSideBySide({
                                                  beforeSrc,
                                                  afterSrc,
                                                  alt = 'Comparaison avant/après',
                                              }: BeforeAfterSideBySideProps) {
    const [zoomSrc, setZoomSrc] = useState<string | null>(null);

    return (
        <>
            <div className="before-after-side">
                <div className="before-after-side__images">
                    {/* Image AVANT */}
                    <div className="before-after-side__image-wrapper">
                        <Image
                            src={beforeSrc}
                            alt={`${alt} - avant`}
                            fill
                            onClick={() => setZoomSrc(beforeSrc)}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 512px"
                            quality={85}
                            className="before-after-side__image"
                        />
                        <span className="before-after-side__label before-after-side__label--before">
              Avant
            </span>
                    </div>

                    {/* Image APRÈS */}
                    <div className="before-after-side__image-wrapper">
                        <Image
                            src={afterSrc}
                            alt={`${alt} - après`}
                            fill
                            onClick={() => setZoomSrc(afterSrc)}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 512px"
                            quality={85}
                            className="before-after-side__image"
                        />
                        <span className="before-after-side__label before-after-side__label--after">
              Après
            </span>
                    </div>
                </div>

                {/* Barre verticale bleue */}
                <div className="before-after-side__divider" aria-hidden="true" />
            </div>

            {/* Lightbox */}
            {zoomSrc && (
                <div
                    className="lightbox"
                    onClick={() => setZoomSrc(null)}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="lightbox__content">
                        <Image
                            src={zoomSrc}
                            alt={`${alt} - agrandie`}
                            fill
                            quality={100}
                            priority
                            sizes="100vw"
                        />
                    </div>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setZoomSrc(null);
                        }}
                        className="lightbox__close"
                        aria-label="Fermer"
                    >
                        ✕
                    </button>
                </div>
            )}
        </>
    );
}



