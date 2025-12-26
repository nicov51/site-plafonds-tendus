'use client';

export default function ConfianceSection() {
    return (
        <section className="confiance-section">
            <h2 className="confiance-section__title">
                POURQUOI NOUS FAIRE CONFIANCE ?
            </h2>

            <div className="confiance-section__content">
                <div className="confiance-section__column">
                    <p className="confiance-section__text">
                        <strong>Expertise spécialisée :</strong> La toile tendue est notre unique activité depuis 10 ans.
                    </p>
                    <p className="confiance-section__text">
                        <strong>Gamme complète :</strong> Nous proposons toutes les finitions : brillant, mat, satiné, acoustique et opalescent.
                    </p>
                </div>

                <div className="confiance-section__column">
                    <p className="confiance-section__text">
                        <strong>Technique premium :</strong> Nous privilégions le <strong>profilé pince</strong> offrant la finition la plus discrète du marché (&lt;5mm).
                    </p>

                    <div className="confiance-section__pricing">
                        <p className="confiance-section__pricing-title">
                            Transparence tarifaire
                        </p>
                        <p className="confiance-section__pricing-value">
                            À partir de 50€/m² TTC
                        </p>
                        <p className="confiance-section__text">
                            (pose incluse, dégressif selon surface)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
