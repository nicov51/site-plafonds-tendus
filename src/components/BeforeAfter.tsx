'use client'

import Image from 'next/image'
import { useState } from 'react'

type BeforeAfterProps = {
  beforeSrc: string
  afterSrc: string
  alt?: string
}

export default function BeforeAfter({ beforeSrc, afterSrc, alt = '' }: BeforeAfterProps) {
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
              alt={alt + ' avant'}
              fill
              className="object-cover cursor-zoom-in"
              onClick={() => setZoomSrc(beforeSrc)}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Image après */}
          <div className="w-1/2 relative">
            <Image
              src={afterSrc}
              alt={alt + ' après'}
              fill
              className="object-cover cursor-zoom-in"
              onClick={() => setZoomSrc(afterSrc)}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Barre verticale */}
        <div className="absolute top-0 bottom-0 left-1/2 w-[6px] bg-blue-500 z-10 -translate-x-1/2" />

        {/* Lightbox zoom */}
        {zoomSrc && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center cursor-zoom-out"
            onClick={() => setZoomSrc(null)}
          >
            <img src={zoomSrc} alt="Zoom" className="max-w-full max-h-full" />
          </div>
        )}
      </div>
    </>
  )
}

