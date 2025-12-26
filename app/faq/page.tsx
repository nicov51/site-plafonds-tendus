import { Metadata } from "next";
import FaqItem from "@/components/FaqItem";
import faqList from "@/data/faqList";
import Script from 'next/script';

export const metadata: Metadata = {
    title: "FAQ - Plafond Tendu | Votre Artisan Spécialiste",
    description: "Retrouvez les réponses aux questions fréquentes sur les plafonds tendus : pose, entretien, durée de vie, tarifs, et bien plus.",
};

export default function FaqPage() {
    return (
        <>
            {/* ✅ Scripts SEO directement dans la page (Server Component) */}
            <Script
                id="seo-aggregate-rating"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Nicolas Viennot - Plafond Tendu",
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": "127",
                            "bestRating": "5",
                            "worstRating": "1"
                        }
                    })
                }}
            />

            <Script
                id="seo-faq"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Quelle est la durée de vie d'un plafond tendu ?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Un plafond tendu bien posé peut durer plus de 20 ans sans entretien particulier."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Intervenez-vous dans ma région ?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Nous intervenons dans l'Aisne et la Marne : Reims, Épernay, Châlons-en-Champagne, Mourmelon, Château-Thierry, Soissons, Laon, Chauny, Saint-Quentin, Rethel..."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Quelle finition choisir pour mon plafond tendu ?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Plusieurs finitions : mat, satiné, laqué, translucide. Le choix dépend de vos goûts et de l'effet recherché."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Quel est le prix au m² d'un plafond tendu ?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Les tarifs démarrent à partir de 50€/m² TTC (pose comprise) et dégressent selon la surface."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Faut-il vider la pièce pour poser un plafond tendu ?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Non, la pose est propre et rapide. Il suffit de libérer un minimum d'espace pour accéder aux murs."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Le plafond tendu réduit-il la hauteur sous plafond ?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Très peu. On descend seulement 1 cm si on peut se fixer directement au plafond, 3 à 5 cm si on doit se fixer au mur, et 6-7 cm si on intègre des spots."
                                }
                            }
                        ]
                    })
                }}
            />

            <div className="faq-page">
                <div className="faq-page__container">
                    <h1 className="faq-page__title">Foire aux questions</h1>

                    <p className="faq-page__subtitle">
                        Vous vous posez des questions sur le plafond tendu ? Voici les réponses les plus courantes.
                    </p>

                    <div className="faq-page__divider" />

                    <div className="faq-page__list">
                        {faqList.map((faq, idx) => (
                            <FaqItem key={idx} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}



