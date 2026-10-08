import { useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router'

export default function Header() {

  const [isOpen, setIsOpen] = useState(false)

  return (

    <header>

      <div className="header__bar">
        <p className="header__bar-text">Portfolio mis à jour à chaque nouveau projet</p>
        <a className="header__cv-link" href="/cv-aurelien-thibaut.pdf" download>Télécharger mon CV (PDF)</a>
      </div>

      <div className="header__top">
        <button className="header__toggle" type="button" aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>{isOpen ? '✕' : '☰'}</button>
        <p className="header__name">Aurélien THIBAUT</p>
      </div>

      <nav className={`header__nav ${isOpen ? 'header__nav--open' : ''}`} aria-label="Navigation principale" onClick={() => setIsOpen(false)}>

        <ul className="header__nav-list">
          <li className="header__nav-item"><NavLink to="/" end className={({ isActive }) => `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`}>accueil</NavLink></li>
          <li className="header__nav-item"><NavLink to="/projets" className={({ isActive }) => `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`}>projets</NavLink></li>
          <li className="header__nav-item"><a className="header__nav-link" href="/parcours">parcours</a></li>
          <li className="header__nav-item"><a className="header__nav-link" href="/experiences">expériences</a></li>
          <li className="header__nav-item"><a className="header__nav-link" href="/contact">contact</a></li>
        </ul>

        <a className="header__menu-cv" href="/cv-aurelien-thibaut.pdf" download>Télécharger mon CV (PDF)</a>

      </nav>

    </header>

  )
}