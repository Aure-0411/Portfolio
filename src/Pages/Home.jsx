import './Home.css'
import projects from '../data/projects.js'
import { Link } from 'react-router'

export default function Home() {

  return (

    <main id="contenu">

      <title>Aurélien Thibaut – Portfolio développeur web | Epitech</title>
      <meta name="description" content="Portfolio d'Aurélien Thibaut, étudiant à Epitech en reconversion vers le développement : projets web, parcours, expériences et contact pour une alternance." />

      <section className="hero">

        <div className="hero__content">

          <h1 className="hero__title">Des interfaces précises, accessibles et élégantes.</h1>
          <p className="hero__title-description">Étudiant à Epitech en reconversion vers le développement, je conçois des projets web accessibles et responsive. Instructeur de taekwondo en club, j'ai appris à coordonner, encadrer et communiquer : je recherche une alternance pour mettre ces qualités au service d'une équipe technique.</p>

          <div className="hero__actions">
            <Link className="hero__button" to="/projets">Découvrir mes projets</Link>
            <a className="hero__button hero__button--secondary" href={`${import.meta.env.BASE_URL}cv-aurelien-thibaut.pdf`} download>Télécharger mon CV</a>
          </div>

        </div>

        <figure className="hero__media">
          <img className="hero__photo" src={`${import.meta.env.BASE_URL}photo-aurelien.jpg`} alt="Portrait d'Aurélien THIBAUT"></img>
          <figcaption className="hero__caption">Aurélien Thibaut, étudiant à Epitech et instructeur de taekwondo.</figcaption>
        </figure>

      </section>

      <section className="chapters" aria-labelledby="chapters-title">

        <h2 id="chapters-title" className="chapters__title">Le portfolio en trois chapitres</h2>
        <p className="chapters__intro">Chaque chapitre répond à une question : qu’ai-je réalisé, qu’ai-je appris, et que fais-je en dehors des cours.</p>

        <div className="chapters__list">

          <article className="chapters__card chapters__card--projects">
            <h3 className="chapters__card-title">Projets</h3>
            <p className="chapters__card-text">Pour chaque réalisation : le contexte, l’objectif, les compétences mobilisées et les liens utiles.</p>
            <Link className="chapters__card-link" to="/projets">Découvrir mes projets</Link>
          </article>

          <article className="chapters__card chapters__card--path">
            <h3 className="chapters__card-title">Parcours</h3>
            <p className="chapters__card-text">Ce que j’ai appris au fil de l’année et la façon dont j’ai progressé.</p>
            <Link className="chapters__card-link" to="/parcours">Suivre mon parcours</Link>
          </article>

          <article className="chapters__card chapters__card--experiences">
            <h3 className="chapters__card-title">Expériences</h3>
            <p className="chapters__card-text">Taekwondo, mission de Customer Success Manager, séminaire Java : tout ce qui se passe en dehors des projets scolaires.</p>
            <Link className="chapters__card-link" to="/experiences">Découvrir mes expériences</Link>
          </article>

        </div>

      </section>

      <section className="featured" aria-labelledby="featured-title">
        <div className="featured__inner">

          <div className="featured__header">
            <h2 id="featured-title" className="featured__title">Projets à la une</h2>
            <Link className="featured__all-link" to="/projets">Voir tous les projets</Link>
          </div>

          <div className="featured__list">

            {projects.slice(0, 3).map((project) => (
              <article className="featured__card" key={project.id}>
                {project.image ? (
                  <img className="featured__image" src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.imageAlt} />
                ) : (
                  <div className={`featured__media featured__media--${project.media}`}></div>
                )}
                <p className="featured__tag">{project.tag}</p>
                <h3 className="featured__card-title">{project.title}</h3>
                <p className="featured__text">{project.summary}</p>
                <p className="featured__tech">{project.stack}</p>
                <Link className="featured__link" to={`/projets#${project.id}`} aria-label={`Découvrir le projet ${project.title}`}>Découvrir le projet</Link>
              </article>
            ))}

          </div>

        </div>
      </section>

      <section className="skills" aria-labelledby="skills-title">

        <div className="skills__inner">

          <h2 id="skills-title" className="skills__title">Quatre skills à prouver</h2>

          <div className="skills__list">

            <div className="skills__item">
              <h3 className="skills__name">Communication</h3>
              <p className="skills__description">Un portfolio synthétique</p>
              <p className="skills__proof">Chaque projet tient en trois blocs courts : contexte et objectif, compétences, enseignements.</p>
            </div>

            <div className="skills__item">
              <h3 className="skills__name">Front-end</h3>
              <p className="skills__description">Un portfolio esthétique</p>
              <p className="skills__proof">Un site intégré avec React, un CSS organisé en BEM et une mise en page responsive jusqu'à 320 px.</p>
            </div>

            <div className="skills__item">
              <h3 className="skills__name">UI / UX</h3>
              <p className="skills__description">Un portfolio ergonomique</p>
              <p className="skills__proof">Un menu adapté au mobile, un lien d'évitement et un focus visible au clavier.</p>
            </div>

            <div className="skills__item">
              <h3 className="skills__name">Itération</h3>
              <p className="skills__description">Un portfolio mis à jour</p>
              <p className="skills__proof">Le site se met à jour à chaque git push, grâce à GitHub Actions.</p>
            </div>

          </div>

        </div>

      </section>

      <section className="contact-me" aria-labelledby="contact-me-title">

        <div className="contact-me__inner">
          <h2 id="contact-me-title" className="contact-me__title">Une opportunité à discuter ?</h2>
          <p className="contact-me__text">Stage, alternance, collaboration ou simple retour sur un projet : écrivez-moi, je vous répondrai dans les meilleurs délais.</p>
          <Link className="contact-me__button" to="/contact">Me contacter</Link>
        </div>

      </section>

    </main>
  )
}