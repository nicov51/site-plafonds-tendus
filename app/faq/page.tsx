import { Metadata } from "next";
import FaqItem from "@components/FaqItem";
import faqList from "@/src/data/faqList";
import ClientSeoScripts from '@components/referencement/ClientSeoScripts';

export const metadata: Metadata = {
    title: "FAQ - Plafond Tendu | Votre Artisan Spécialiste",
    description: "Retrouvez les réponses aux questions fréquentes sur les plafonds tendus : pose, entretien, durée de vie, tarifs, et bien plus.",
};

export default function FaqPage() {
    return (
        <div className="faq-page">
            <div className="faq-page__container">
                <ClientSeoScripts showFaq />

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
    );
}


