import './Parcours.css'

export default function Parcours() {

  const steps = [

    {
      when: "Septembre 2026",
      title: "Première piscine : Développement Web",
      learned: "Les fondamentaux du développement web côté serveur : créer des pages interactives, gérer des formulaires, et faire communiquer une page avec un serveur sans recharger la page, jusqu'à connecter le tout à une base de données, à travers des exercices quotidiens.",
      progress: "D'un simple échange d'informations entre la page et le serveur jusqu'à un formulaire connecté à une base de données qui réagit en temps réel, chaque exercice reprenait et enrichissait les principes du précédent : j'ai appris à organiser mon code dès le départ pour qu'il reste clair en se complexifiant, et à être rigoureux sur les détails attendus plutôt que de me fier au seul résultat visuel.",
    },

    {
      when: "Du 21 septembre au 25 octobre 2026",
      title: "Construction du portfolio (projet de fond)",
      learned: "Concevoir et coder un site complet, de la maquette à la mise en ligne : React avec Vite, CSS en BEM et en rem, cinq pages, accessibilité et publication automatique avec GitHub Actions.",
      progress: "C'est mon projet de fond : j'ai appris à avancer étape par étape, à tester chaque page puis à corriger à partir des audits, jusqu'à obtenir 100 en accessibilité, bonnes pratiques et SEO sur Lighthouse mobile.",
    },

    {
      when: "Du 5 au 18 octobre 2026",
      title: "Job Board (premier projet après la piscine web)",
      learned: "Construire un site d'offres d'emploi avec React, une API FastAPI et une base SQLite, en travaillant en binôme avec Git, une branche chacun.",
      progress: "C'est mon premier projet avec un back-end : j'ai conçu la base et l'API, puis je les ai reliées à l'interface. J'ai appris à définir les routes de l'API avant de coder pour que nous avancions en parallèle.",
    },

    {
      when: "Octobre 2026",
      title: "Seconde piscine : Java",
      learned: "Les bases de Java, la programmation orientée objet, les packages puis l'héritage, à travers des exercices quotidiens.",
      progress: "À partir des packages, le même code évolue de tâche en tâche et il est vérifié plusieurs fois : j'ai appris à structurer mes classes dès le départ pour les faire évoluer sans tout reprendre.",
    },
  ]

  const skills = [
    { name: "Intégration HTML et CSS", level: "Intermédiaire", projects: "Portfolio, Job Board" },
    { name: "Responsive et accessibilité", level: "Intermédiaire", projects: "Portfolio" },
    { name: "React et composants", level: "Intermédiaire", projects: "Portfolio, Job Board" },
    { name: "API et base de données", level: "Notions", projects: "Job Board" },
    { name: "Git et déploiement automatisé", level: "Notions", projects: "Job Board & Portfolio" },
    { name: "SEO et performance", level: "Notions", projects: "Portfolio & Job Board" },
    { name: "Programmation orientée objet en Java", level: "Notions", projects: "Java Seminar" },
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
              <li>Entre la piscine web, React, l'API et Java, les notions se sont enchaînées très vite : il était difficile de tout comprendre, de tout retenir et de savoir les appliquer au bon moment. J'ai avancé étape par étape, en codant moi-même chaque étape et en testant avant de passer à la suivante.</li>
              <li>Les erreurs d'import bloquaient toute la construction du site : chemin relatif erroné, nom de fichier ou de composant mal écrit, comme un accent en trop. J'ai pris l'habitude de lire le message d'erreur, qui indique le fichier et la ligne, et de lancer npm run build avant chaque envoi sur GitHub.</li>
              <li>Le site construit affichait une page blanche : le chemin de base sous /Portfolio/ n'était pas pris en compte. Je l'ai corrigé dans la configuration de Vite et dans le routeur.</li>
              <li>Certaines règles CSS n'avaient aucun effet : une faute de frappe dans un nom de propriété, ou une règle placée avant celle qui devait l'emporter. J'ai appris à inspecter les styles avec les outils du navigateur.</li>
              <li>Le serveur de développement ne répondait plus depuis WSL : j'ai appris à repérer le processus qui bloquait le port et à relancer proprement l'environnement.</li>
            </ul>
          </div>

          <div className="challenges__block">

            <h2 className="challenges__title">Axes d'amélioration</h2>
            <ul className="challenges__list">
              <li>Consolider ce que j'apprends : refaire seul un petit exercice après chaque notion et noter les points qui m'ont posé problème.</li>
              <li>Optimiser les images (format WebP, poids réduit) pour améliorer les performances.</li>
              <li>Approfondir le back-end : sécurité de l'API, gestion des erreurs et tests.</li>
              <li>Aller plus loin en accessibilité, en testant mes pages avec un lecteur d'écran.</li>
              <li>Fiabiliser avant de publier : vérifier la construction, la navigation au clavier et l'audit Lighthouse avant chaque envoi.</li>
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