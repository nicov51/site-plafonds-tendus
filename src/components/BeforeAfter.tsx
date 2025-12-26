'use client'

import Image from 'next/image'
import { useState } from 'react'

type BeforeAfterProps = {
  readonly beforeSrc: string
  readonly afterSrc: string
  readonly alt?: string
}

export default function BeforeAfter({ beforeSrc, afterSrc, alt = 'Comparaison avant/après' }: BeforeAfterProps) {
  const [zoomSrc, setZoomSrc] = useState<string | null>(null)

  return (
    <>
      <div className="relative w-full max-w-4xl mx-auto h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-md group">
        {/* Images */}
        <div className="absolute inset-0 flex">
          {/* Image avant */}
          <div className="w-1/2 relative">
            <Image
              src={beforeSrc}
              alt={`${alt} - avant`}
              fill
              className="object-cover cursor-zoom-in transition-transform hover:scale-105"
              onClick={() => setZoomSrc(beforeSrc)}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 512px"
              quality={85}
              priority={false}
            />
          </div>

          {/* Image après */}
          <div className="w-1/2 relative">
            <Image
              src={afterSrc}
              alt={`${alt} - après`}
              fill
              className="object-cover cursor-zoom-in transition-transform hover:scale-105"
              onClick={() => setZoomSrc(afterSrc)}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 512px"
              quality={85}
              priority={false}
            />
          </div>
        </div>

        {/* Barre verticale */}
        <div
            className="absolute top-0 bottom-0 left-1/2 w-[6px] bg-blue-500 z-10 -translate-x-1/2 shadow-lg"
            aria-hidden="true"
        />

        {/* Lightbox zoom */}
        {zoomSrc && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center cursor-zoom-out"
            onClick={() => setZoomSrc(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image agrandie"
          >
            {/* Conteneur de l'image zoomée */}
            <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
              <Image
                  src={zoomSrc}
                  alt={`${alt} - agrandie`}
                  fill
                  className="object-contain"
                  quality={100}
                  priority
                  sizes="100vw"
              />
            </div>

            {/* Bouton fermer (visible) */}
            <button
                onClick={() => setZoomSrc(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors"
                aria-label="Fermer l'image agrandie"
            >
              ✕
            </button>

          </div>
        )}
      </div>
    </>
  )
}

