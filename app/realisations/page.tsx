'use client';

import { useState } from 'react';
import Image from 'next/image';

const avantApres = [
  { avant: '/images/avantApres/avant1.webp', apres: '/images/avantApres/apres1.webp' },
  { avant: '/images/avantApres/avant2.webp', apres: '/images/avantApres/apres2.webp' },
  { avant: '/images/avantApres/avant3.webp', apres: '/images/avantApres/apres3.webp' },
  { avant: '/images/avantApres/avant4.webp', apres: '/images/avantApres/apres4.webp' },
];

const carrousel = Array.from({ length: 6 }, (_, i) => `/images/realisations/realisation${i + 1}.webp`);

export default function RealisationsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-20 py-16 px-6">
      {/* Section Avant / Après */}
      <section>
        <h1 className="text-3xl font-bold text-center mb-10">Avant / Après</h1>
        <div className="flex flex-col gap-16">
          {avantApres.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center gap-6 md:gap-12"
            >
              {/* Avant */}
              <div
                className="relative cursor-pointer group"
                onClick={() => setSelectedImage(item.avant)}
              >
                <Image
                  src={item.avant}
                  alt={`Avant ${idx + 1}`}
                  width={500}
                  height={400}
                  className="rounded-xl filter brightness-75 grayscale group-hover:brightness-90 group-hover:grayscale-0 transition"
                />
                <span className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 text-sm rounded">
                  Avant
                </span>
              </div>

              {/* Après */}
              <div
                className="relative cursor-pointer group"
                onClick={() => setSelectedImage(item.apres)}
              >
                <Image
                  src={item.apres}
                  alt={`Après ${idx + 1}`}
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg group-hover:scale-[1.02] transition"
                />
                <span className="absolute bottom-2 left-2 bg-green-700 text-white px-2 py-1 text-sm rounded">
                  Après
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Réalisations */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-6">Nos réalisations en images</h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {carrousel.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`Réalisation ${idx + 1}`}
              width={300}
              height={200}
              className="rounded-lg shrink-0 cursor-pointer"
              onClick={() => setSelectedImage(src)}
            />
          ))}
        </div>
      </section>

      {/* Modale image agrandie */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <Image
            src={selectedImage}
            alt="Zoom"
            width={1000}
            height={800}
            className="max-w-full max-h-[90vh] rounded-lg"
          />
        </div>
      )}
    </div>
  );
}


