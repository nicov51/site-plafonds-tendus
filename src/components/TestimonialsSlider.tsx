"use client"
import { Star } from "@mui/icons-material";

const avis = [
  { nom: "Julie D.", commentaire: "Travail impeccable, je recommande !", note: 5 },
  { nom: "Marc B.", commentaire: "Très pro et à l'écoute. Résultat top.", note: 4 },
  { nom: "Emma R.", commentaire: "Le rendu est superbe, merci encore !", note: 5 },
  { nom: "Lucas M.", commentaire: "Un peu de retard mais bon boulot.", note: 4 },
];

export default function TestimonialsSlider() {
  return (
    <section className="w-full py-12 overflow-x-auto">
      <h2 className="text-center text-2xl font-semibold mb-6">Ils nous ont fait confiance</h2>
      <div className="flex gap-4 px-6 w-max animate-scroll">
        {avis.map((a, idx) => (
          <div key={idx} className="min-w-[250px] bg-white rounded-xl shadow-md p-4">
            <p className="font-semibold mb-2">{a.nom}</p>
            <p className="text-sm mb-3 text-gray-700">{a.commentaire}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  fontSize="small"
                  className={i < a.note ? "text-yellow-500" : "text-gray-300"}
                />
              ))}
            </div>
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
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
