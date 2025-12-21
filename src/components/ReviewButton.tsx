
import Link from 'next/link';
export default function ReviewButton() {
  return (
    <Link
      href="https://g.page/r/CRx0uF1_cidCEBM/review" // Remplacez par votre lien
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 text-dark px-4 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Laisser un avis
    </Link>
  );
}