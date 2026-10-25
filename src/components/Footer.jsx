import './Footer.css'
import { Link } from 'react-router'

export default function Footer() {

  return (
    <footer className="footer">

        <div className="footer__inner">

            <div className="footer__brand">
                 <p className="footer__name">Aurélien THIBAUT</p>
                 <p className="footer__tagline">Étudiant à Epitech, développeur web en formation et instructeur de taekwondo.</p>
            </div>

            <nav className="footer__nav" aria-label="Plan du site">
                <h2 className="footer__heading">Plan du site</h2>
                <Link className="footer__link" to="/">Accueil</Link>
                <Link className="footer__link" to="/projets">Projets</Link>
                <Link className="footer__link" to="/parcours">Parcours</Link>
                <Link className="footer__link" to="/experiences">Expériences</Link>
                <Link className="footer__link" to="/contact">Contact</Link>
            </nav>

            <div className="footer__social">
                <h2 className="footer__heading">Me retrouver</h2>
                <a className="footer__link" href="https://github.com/Aure-0411/" target="_blank" rel="noopener noreferrer" aria-label="GitHub (nouvel onglet)">GitHub</a>
                <a className="footer__link" href="https://www.linkedin.com/in/aur%C3%A9lien-thibaut-6593a7209/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (nouvel onglet)">LinkedIn</a>
                <a className="footer__link" href="mailto:aurelien.thibaut@epitech.eu">aurelien.thibaut@epitech.eu</a>
            </div>

            <div className="footer__credits">
                <h2 className="footer__heading">Crédits et ressources</h2>
                <p className="footer__credit">Polices : Cormorant Garamond et Jost, sous licence SIL Open Font.</p>
                <p className="footer__credit">Photo : portrait personnel.</p>
            </div>

        </div>

        <div className="footer__bottom">
            <span>© 2026 Aurélien THIBAUT</span>
            <span>Site publié avec GitHub Pages, code source disponible dans le dépôt du projet.</span>
        </div>

    </footer>


  )}