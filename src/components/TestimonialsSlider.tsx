"use client"
import { Star } from "@mui/icons-material";
import reviews from "@/src/data/reviews";



export default function TestimonialsSlider() {
  return (
    <section aria-label="Avis clients" className="w-full py-12 overflow-x-auto bg-gray-50">
      <h2 className="text-center text-2xl font-semibold mb-6 text-primary">Ils nous ont fait confiance</h2>
      <div className="flex gap-6 px-6 w-max animate-scroll">
        {reviews.map((a, idx) => (
          <div
            key={idx}
            className="min-w-[300px] max-w-[320px] bg-white rounded-xl shadow-md p-6 border border-gray-200"
          >
            <p className="font-semibold text-lg mb-2">{a.nom}</p>
            <p className="text-sm text-gray-700 italic mb-3">{`« ${a.commentaire} »`}</p>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  fontSize="small"
                  className={i < a.note ? "text-yellow-500" : "text-gray-300"}
                />
              ))}
            </div>
            <p className="text-xs text-gray-500">{a.ville} – {new Date(a.date).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long'
            })}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
          @keyframes scroll {
              0% {
                  transform: translateX(0%);
              }
              100% {
                  transform: translateX(-50%);
              }
          }

          .animate-scroll {
              animation: scroll 40s linear infinite;
          }
      `}</style>
    </section>
  );
}
