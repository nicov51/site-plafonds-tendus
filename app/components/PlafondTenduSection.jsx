'use client';
import CheckIcon from '@mui/icons-material/Check';

export default function PlafondTenduSection() {
    const advantages = [
        "Pose rapide et propre, le plus souvent en une seule journée sans débarrasser la pièce",
        "Durée de vie élevée (environ 25 ans et garanti 10 ans)",
        "Entretien aisé / lessivable facilement",
        "Permet d'intégrer tous les accessoires (éclairage, ventilation, détecteur de fumée...)",
        "Complément d'isolation grâce au vide d'air étanche entre la toile et l'ancien support",
        "Ne craint ni la condensation, ni les dégâts des eaux",
        "Classé au feu (BSD20), norme CE / NF",
        "100% recyclable"
    ];

    return (
        <section className="plafond-tendu">
            <div className="plafond-tendu__container">
                <div className="plafond-tendu__paper">
                    <h2 className="plafond-tendu__title">
                        Le plafond tendu, c'est quoi ?
                    </h2>

                    <div className="plafond-tendu__content">
                        <div className="plafond-tendu__text-block">
                            <p>
                                <strong>C'est une toile dont la composition est similaire au liner de piscine.</strong> Elle est maintenue par des profils spécifiques fixés en périphérie de la pièce.
                            </p>
                            <p>
                                Le système est né en France il y a 50 ans. Grâce à ses nombreux avantages, il s'exporte aujourd'hui dans le monde entier.
                            </p>
                        </div>

                        <div className="plafond-tendu__text-block">
                            <p>
                                Son utilisation s'est généralisée tant dans les espaces publics que chez les particuliers. S'il garde encore l'image d'un produit de luxe, son prix est devenu très compétitif.
                            </p>
                        </div>
                    </div>

                    <div className="plafond-tendu__advantages">
                        {advantages.map((item, index) => (
                            <div key={index} className="plafond-tendu__advantage-item">
                                <CheckIcon className="icon" fontSize="small" />
                                <span className="text">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
