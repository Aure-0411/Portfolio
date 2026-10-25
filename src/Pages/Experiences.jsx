import './Experiences.css'

export default function Experiences() {

  const experiences = [
    {
      kind: "Séminaire",
      title: "Java Seminar",
      meta: "Epitech, octobre 2026",
      text: "Série d'exercices quotidiens pour apprendre Java : les bases du langage, la programmation orientée objet, les packages puis l'héritage. J'y apprends à structurer un programme en classes et à le faire évoluer d'une tâche à l'autre.",
    },

    {
      kind: "Hub",
      title: "[Activité au Hub]",
      meta: "[Ton rôle, période]",
      text: "[Ce que j'y ai fait et ce que cela m'a apporté : une compétence, une rencontre ou une méthode.]",
    },

    {
      kind: "Association",
      title: "[Nom de l'association]",
      meta: "[Ton rôle, période]",
      text: "[Ce que j'y ai fait et ce que cela m'a apporté : une compétence, une rencontre ou une méthode.]",
    },
  ]

  return (

    <main id="contenu">

      <title>Expériences | Aurélien Thibaut</title>
      <meta name="description" content="Les expériences d'Aurélien Thibaut en dehors des projets scolaires : piscines/bootcamp, engagements, philosophie professionnelle et centres d'intérêt." /> 

      <section className="experiences-hero">

        <div className="experiences-hero__inner">
          <h1 className="experiences-hero__title">Au-delà des projets scolaires</h1>
          <p className="experiences-hero__text">Le Hub, les associations et les événements : ce que j'y ai fait et ce que cela m'a apporté.</p>
        </div>

      </section>

      <section className="engagements" aria-labelledby="engagements-title">

        <div className="engagements__inner">

          <h2 id="engagements-title" className="engagements__title">Engagements et expériences</h2>
          <div className="engagements__list">

            {experiences.map((experience) => (
              <article className="engagements__card" key={experience.title}>
                <p className="engagements__kind">{experience.kind}</p>
                <h3 className="engagements__card-title">{experience.title}</h3>
                <p className="engagements__meta">{experience.meta}</p>
                <p className="engagements__text">{experience.text}</p>
              </article>
            ))}

          </div>
        </div>

      </section>

      <section className="philosophy" aria-labelledby="philosophy-title">

        <div className="philosophy__inner">
          <h2 id="philosophy-title" className="philosophy__title">Ma philosophie professionnelle</h2>
          <p className="philosophy__quote">Je préfère comprendre avant d'avancer : je code moi-même, étape par étape, je teste ce que j'écris et je demande des retours pour progresser. Un site lisible, accessible et soigné vaut mieux qu'un site spectaculaire que tout le monde ne peut pas utiliser.</p>
        </div>

      </section>

      <section className="extras" aria-label="Centres d'intérêt et œuvres qui m'inspirent">
        <div className="extras__inner">

          <div className="extras__block">
            <h2 className="extras__title">Centres d'intérêt</h2>
            <ul className="extras__chips">
              <li className="extras__chip">Développement web</li>
              <li className="extras__chip">Programmation en Java</li>
              <li className="extras__chip">[Loisir ou centre d'intérêt 3]</li>
              <li className="extras__chip">[Loisir ou centre d'intérêt 4]</li>
            </ul>
          </div>

          <div className="extras__block">
            <h2 className="extras__title">Œuvres qui m'inspirent</h2>
            <ul className="extras__works">
              <li><em>Le site de Ralph Lauren</em>, dont je me suis inspiré pour le design de ce portfolio.</li>
              <li><em>JobTeaser</em> et <em>Welcome to the Jungle</em>, dont je me suis inspiré pour le design du Job Board.</li>
              <li><em>[Titre de l'œuvre 3]</em>, [auteur ou créateur]</li>
            </ul>
          </div>

        </div>
      </section>

    </main>

  )
}