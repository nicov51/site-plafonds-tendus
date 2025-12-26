"use client";

import Link from "next/link";

export default function CallToAction() {
    return (
        <section className="w-full py-20 bg-white text-center px-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900">
                Un projet à réaliser ?
            </h2>
            <p className="text-slate-600 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
                Nous sommes à votre écoute pour concrétiser vos idées. Contactez-nous ou demandez un devis directement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* CTA Principal - Devis */}
                <Link
                    href="/devis"
                    className="bg-slate-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-slate-800 transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                    Demander un devis gratuit
                </Link>

                {/* CTA Secondaire - Contact */}
                <Link
                    href="/contact"
                    className="bg-white text-slate-900 px-8 py-4 rounded-xl font-medium border-2 border-slate-300 hover:border-slate-900 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                    Nous contacter
                </Link>
            </div>
        </section>
    );
}

