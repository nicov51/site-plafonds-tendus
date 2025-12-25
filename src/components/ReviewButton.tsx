
import Link from 'next/link';
import StarIcon from '@mui/icons-material/Star';

export default function ReviewButton() {
  return (
      <Link
          href="https://g.page/r/CRx0uF1_cidCEBM/review"
          target="_blank"
          rel="noopener noreferrer"
          className="review-button"
      >
        <StarIcon className="review-button__icon" />
        Laisser un avis
      </Link>
  );
}
