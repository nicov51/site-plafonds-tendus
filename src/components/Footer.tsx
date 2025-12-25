"use client";
import Link from "next/link";

export default function Footer() {
  return (
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__grid">
            {/* Informations légales */}
            <div className="footer__section">
              <h3 className="footer__title">Informations légales</h3>
              <ul className="footer__list">
                <li>
                  <Link href="/footer/mentions-legales" className="footer__link">
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link href="/footer/cgv" className="footer__link">
                    CGV
                  </Link>
                </li>
                <li>
                  <Link href="/footer/conditions-utilisation" className="footer__link">
                    Conditions d utilisation
                  </Link>
                </li>
                <li>
                  <Link href="/footer/politique-confidentialite" className="footer__link">
                    Politique de confidentialité
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__section">
              <h3 className="footer__title">Contact</h3>
              <ul className="footer__list">
                <li className="footer__text">contact@monartisan.fr</li>
                <li className="footer__text">06 00 00 00 00</li>
                <li className="footer__text">123 rue de l Artisanat, 75000 Paris</li>
              </ul>
            </div>

            {/* À propos */}
            <div className="footer__section">
              <h3 className="footer__title">À propos</h3>
              <p className="footer__text">
                Spécialiste des plafonds tendus sur mesure, notre entreprise accompagne
                les particuliers et professionnels dans tous leurs projets d aménagement intérieur.
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer__copyright">
            &copy; 2025 MonArtisan. Tous droits réservés.
          </div>
        </div>
      </footer>
  );
}
