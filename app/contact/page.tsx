import Contact from "@/src/components/Contact";

export const metadata = {
    title: "Contact - Plafonds Tendus",
    description: "Contactez-nous pour votre projet de plafond tendu",
};

export default function ContactPage() {
    return (
        <main className="page-contact">
            <div className="container">
                <h1 className="page-contact__title">Nous contacter</h1>
                <Contact />
            </div>
        </main>
    );
}
