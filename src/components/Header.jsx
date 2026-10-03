export default function Header() {
  return (

    <header>

      <div className="header__bar">
        <p className="header__bar-text">Portfolio mis à jour à chaque nouveau projet</p>
        <a className="header__cv-link" href="/cv-aurelien-thibaut.pdf" download>Télécharger mon CV (PDF)</a>
      </div>

      <p className="header__name">Aurélien THIBAUT</p>

      <nav className="header__nav" aria-label="Navigation principale">
        <ul className="header__nav-list">
          <li className="header__nav-item"><a className="header__nav-link header__nav-link--active" href="/">Accueil</a></li>
          <li className="header__nav-item"><a className="header__nav-link" href="/projets">Projets</a></li>
          <li className="header__nav-item"><a className="header__nav-link" href="/parcours">Parcours</a></li>
          <li className="header__nav-item"><a className="header__nav-link" href="/experiences">Expériences</a></li>
          <li className="header__nav-item"><a className="header__nav-link" href="/contact">Contact</a></li>
        </ul>
      </nav>
      
    </header>

  )
}