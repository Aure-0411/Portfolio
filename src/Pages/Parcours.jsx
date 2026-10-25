import './Parcours.css'

export default function Parcours() {

  const steps = [
    {
      when: "[Période 1]",
      title: "[Ce que j'ai abordé]",
      learned: "[Ce que j'ai appris : notions, outils, méthodes.]",
      progress: "[Progrès constaté : où tu en étais au début, où tu en es, avec une preuve à l'appui.]",
    },

    {
      when: "[Période 2]",
      title: "[Ce que j'ai abordé]",
      learned: "[Ce que j'ai appris : notions, outils, méthodes.]",
      progress: "[Progrès constaté : où tu en étais au début, où tu en es, avec une preuve à l'appui.]",
    },

    {
      when: "[Période 3]",
      title: "[Ce que j'ai abordé]",
      learned: "[Ce que j'ai appris : notions, outils, méthodes.]",
      progress: "[Progrès constaté : où tu en étais au début, où tu en es, avec une preuve à l'appui.]",
    },

    {
      when: "[Période 4]",
      title: "[Ce que j'ai abordé]",
      learned: "[Ce que j'ai appris : notions, outils, méthodes.]",
      progress: "[Progrès constaté : où tu en étais au début, où tu en es, avec une preuve à l'appui.]",
    },
  ]

  const skills = [
    { name: "Intégration HTML et CSS", level: "[Ton niveau]", projects: "[Projet 1], [Projet 3]" },
    { name: "Responsive et accessibilité", level: "[Ton niveau]", projects: "[Projet 1], [ce portfolio]" },
    { name: "SEO et performance", level: "[Ton niveau]", projects: "[Ce portfolio]" },
    { name: "Déploiement automatisé", level: "[Ton niveau]", projects: "[Ce portfolio], [Projet 2]" },
    { name: "Rédaction et communication", level: "[Ton niveau]", projects: "[Tous les projets]" },
  ]

  const diplomas = [
    { title: "[Diplôme ou formation]", detail: "[Établissement, année]" },
    { title: "[Certification]", detail: "[Organisme, année]" },
    { title: "[Distinction]", detail: "[Contexte, année]" },
  ]

  return (

    <main id="contenu">

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
              <li>[Difficulté 1 : ce qui a bloqué et comment tu l'as surmontée.]</li>
              <li>[Difficulté 2 : ce qui a bloqué et comment tu l'as surmontée.]</li>
              <li>[Difficulté 3 : ce qui a bloqué et comment tu l'as surmontée.]</li>
            </ul>
          </div>

          <div className="challenges__block">

            <h2 className="challenges__title">Axes d'amélioration</h2>
            <ul className="challenges__list">
              <li>[Axe 1 : ce que tu veux renforcer en priorité.]</li>
              <li>[Axe 2 : ce que tu veux renforcer ensuite.]</li>
              <li>[Axe 3 : un objectif à plus long terme.]</li>
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