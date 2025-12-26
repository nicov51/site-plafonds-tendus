"use client";
import { Star } from "@mui/icons-material";
import reviews from "@/data/reviews";

export default function TestimonialsSlider() {
    // Dupliquer les avis pour l'effet de boucle infinie
    const duplicatedReviews = [...reviews, ...reviews];

    return (
        <section className="testimonials" aria-label="Avis clients">
            <h2 className="testimonials__title">Ils nous ont fait confiance</h2>

            <div className="testimonials__slider-wrapper">
                <div className="testimonials__slider">
                    {duplicatedReviews.map((review, idx) => (
                        <article key={idx} className="testimonials__card">
                            <p className="testimonials__author">{review.nom}</p>

                            <p className="testimonials__comment">
                                {review.commentaire}
                            </p>

                            <div className="testimonials__rating">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`star ${i < review.note ? 'star--filled' : 'star--empty'}`}
                                    />
                                ))}
                            </div>

                            <p className="testimonials__meta">
                                {review.ville} – {new Date(review.date).toLocaleDateString('fr-FR', {
                                year: 'numeric',
                                month: 'long'
                            })}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
