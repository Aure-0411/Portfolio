import './Parcours.css'

export default function Parcours() {

  const steps = [
    {
      when: "Début octobre 2026",
      title: "Concevoir le portfolio",
      learned: "Partir d'une maquette (version ordinateur et version mobile en 320 px), écrire un HTML sémantique, puis structurer le site en composants React avec Vite et React Router.",
      progress: "Je suis passé d'une page HTML unique à une application de cinq pages, avec un en-tête, un pied de page et des cartes réutilisés partout.",
    },

    {
      when: "Du 5 au 18 octobre 2026",
      title: "Réaliser le Job Board en binôme",
      learned: "Construire un site d'offres d'emploi avec React, une API FastAPI et une base SQLite, en travaillant avec Git sur une branche chacun.",
      progress: "C'est mon premier projet avec un back-end : j'ai conçu la base et l'API, puis je les ai reliées à l'interface.",
    },

    {
      when: "Depuis la mi-octobre 2026",
      title: "Apprendre Java et l'objet",
      learned: "Les bases du langage, les classes, les packages et l'héritage, à travers des exercices quotidiens au Java Seminar.",
      progress: "Je structure maintenant un programme en classes et je le fais évoluer d'une tâche à l'autre.",
    },

    {
      when: "Fin octobre 2026",
      title: "Publier et rendre le site accessible",
      learned: "Écrire un CSS organisé en BEM, adapter la mise en page jusqu'à 320 px, soigner l'accessibilité (lien d'évitement, focus visible, repères nommés) et publier avec GitHub Actions.",
      progress: "Le portfolio est en ligne et se met à jour à chaque git push, sans aucune étape manuelle.",
    },
  ]

  const skills = [
    { name: "Intégration HTML et CSS", level: "Intermédiaire", projects: "Portfolio, Job Board (page de détail)" },
    { name: "Responsive et accessibilité", level: "Intermédiaire", projects: "Portfolio" },
    { name: "React et composants", level: "Intermédiaire", projects: "Portfolio, Job Board" },
    { name: "API et base de données", level: "Notions", projects: "Job Board" },
    { name: "SEO et performance", level: "Notions", projects: "Portfolio" },
    { name: "Déploiement automatisé", level: "Notions", projects: "Portfolio" },
    { name: "Rédaction et communication", level: "Intermédiaire", projects: "Tous les projets" },
  ]

  const diplomas = [
    { title: "CQP MAM et diplôme d'assistant coach", detail: "FFTDA, juillet 2026" },
    { title: "Bachelor 3 Gestion du développement commercial", detail: "ESVE, La Défense, 2025 - 2026" },
    { title: "Diplôme fédéral de 2e Dan de Taekwondo", detail: "FFTDA, janvier 2025" },
    { title: "BTS MCO", detail: "Pôle STS ESM, Joinville-le-Pont, 2021 - 2023" },
  ]

  return (

    <main id="contenu">

      <title>Parcours | Aurélien Thibaut</title>
      <meta name="description" content="Ce qu'Aurélien Thibaut a appris au fil de l'année à Epitech : chronologie, compétences reliées aux projets, difficultés et axes d'amélioration." />

      <section className="path-hero">

        <div className="path-hero__inner">
          <h1 className="path-hero__title">Ce que j'ai appris, et comment j'ai progressé</h1>
          <p className="path-hero__text">Une lecture de l'année en quatre temps, puis les compétences reliées aux projets qui les illustrent.</p>
        </div>

      </section>

      <section className="timeline" aria-labelledby="timeline-title">

        <div className="timeline__inner">

          <h2 id="timeline-title" className="timeline__title">Chronologie de l'année</h2>
          <ol className="timeline__list">

            {steps.map((step) => (
              <li className="timeline__step" key={step.when}>
                <p className="timeline__when">{step.when}</p>
                <div className="timeline__content">
                  <h3 className="timeline__step-title">{step.title}</h3>
                  <p className="timeline__text">{step.learned}</p>
                  <p className="timeline__text">{step.progress}</p>
                </div>
              </li>
            ))}

          </ol>
        </div>

      </section>

      <section className="skills-matrix" aria-labelledby="skills-matrix-title">
        
        <div className="skills-matrix__inner">
          <h2 id="skills-matrix-title" className="skills-matrix__title">Compétences et projets liés</h2>
          <p className="skills-matrix__intro">Une même compétence peut apparaître dans plusieurs projets, avec une maîtrise différente selon le contexte.</p>
          <ul className="skills-matrix__list">

            {skills.map((skill) => (
              <li className="skills-matrix__row" key={skill.name}>
                <h3 className="skills-matrix__name">{skill.name}</h3>
                <p className="skills-matrix__detail"><span className="skills-matrix__label">Niveau : </span>{skill.level}</p>
                <p className="skills-matrix__detail"><span className="skills-matrix__label">Projets : </span>{skill.projects}</p>
              </li>
            ))}

          </ul>
        </div>

      </section>

      <section className="challenges" aria-label="Difficultés et axes d'amélioration">

        <div className="challenges__inner">

          <div className="challenges__block">
            <h2 className="challenges__title">Difficultés rencontrées</h2>
            <ul className="challenges__list">
              <li>Le site construit affichait une page blanche : le chemin de base sous /Portfolio/ n'était pas pris en compte. Je l'ai corrigé dans la configuration de Vite et dans le routeur.</li>
              <li>Certaines règles CSS n'avaient aucun effet : une faute de frappe dans un nom de propriété, ou une règle placée avant celle qui devait l'emporter. J'ai appris à inspecter les styles avec les outils du navigateur.</li>
              <li>Le serveur de développement ne répondait plus depuis WSL : j'ai appris à repérer le processus qui bloquait le port et à relancer proprement l'environnement.</li>
            </ul>
          </div>

          <div className="challenges__block">

            <h2 className="challenges__title">Axes d'amélioration</h2>
            <ul className="challenges__list">
              <li>Optimiser les images (format WebP, poids réduit) pour améliorer les performances.</li>
              <li>Approfondir le back-end : sécurité de l'API, gestion des erreurs et tests.</li>
              <li>Aller plus loin en accessibilité, en testant mes pages avec un lecteur d'écran.</li>
            </ul>

          </div>

        </div>

      </section>

      <section className="diplomas" aria-labelledby="diplomas-title">

        <div className="diplomas__inner">

          <h2 id="diplomas-title" className="diplomas__title">Diplômes, certifications et distinctions</h2>

          <div className="diplomas__list">
            {diplomas.map((diploma) => (
              <div className="diplomas__item" key={diploma.title}>
                <h3 className="diplomas__name">{diploma.title}</h3>
                <p className="diplomas__detail">{diploma.detail}</p>
              </div>
            ))}
          </div>
          
        </div>

      </section>

    </main>

  )
}