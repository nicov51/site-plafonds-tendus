"use client";
import ContactInfo from "@/components/Contact";
import DevisForm from "@/components/DevisForm";
import ZoneIntervention from "@/components/ZoneIntervention";

export default function ContactDevisPage() {
    return (
        <div className="devis-page">
            <h1 className="devis-page__title">Comment nous contacter ?</h1>

            <div className="devis-page__content">
                <div className="devis-page__section">
                    <ContactInfo />
                </div>
                <div className="devis-page__section">
                    <DevisForm />
                </div>
            </div>

            <ZoneIntervention />
        </div>
    );
}


