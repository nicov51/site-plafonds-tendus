"use client";

import Link from "next/link";

export default function CallToAction() {
    return (
        <section className="cta">
            <h2 className="cta__title">
                Un projet à réaliser ?
            </h2>
            <p className="cta__description">
                Nous sommes à votre écoute pour concrétiser vos idées. Contactez-nous ou demandez un devis directement.
            </p>
            <div className="cta__buttons">
                {/* CTA Principal */}
                <Link href="/devis" className="cta__btn cta__btn--primary">
                    Demander un devis gratuit
                </Link>

                {/* CTA Secondaire */}
                <Link href="/contact" className="cta__btn cta__btn--secondary">
                    Nous contacter
                </Link>
            </div>
        </section>
    );
}


