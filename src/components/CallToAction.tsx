"use client";

import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="w-full py-20 bg-gray-100 text-center px-6">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">
        Un projet à réaliser ?
      </h2>
      <p className="text-gray-700 mb-8 max-w-xl mx-auto">
        Nous sommes à votre écoute pour concrétiser vos idées. Contactez-nous ou demandez un devis directement.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/contact"
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          Nous contacter
        </Link>
        <Link
          href="/devis"
          className="border border-black px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          Demande de devis
        </Link>
      </div>
    </section>
  );
}