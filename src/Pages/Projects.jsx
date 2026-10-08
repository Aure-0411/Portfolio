import './Projects.css'

export default function Projects () {

        return (

            <main id="contenu">

                <section className="projects-hero">
                    <div className="projects-hero__inner">
                    <h1 className="projects-hero__title">Réalisations</h1>
                    <p className="projects-hero__text">Chaque projet précise son contexte et son objectif, les compétences et technologies mobilisées, et les liens utiles : code source, démo en ligne, documentation.</p>
                    <div className="projects-hero__filters" role="group" aria-label="Filtrer les projets">
                        <button type="button" className="projects-hero__filter projects-hero__filter--active">Tous les projets</button>
                        <button type="button" className="projects-hero__filter">Projets scolaires</button>
                        <button type="button" className="projects-hero__filter">Projets personnels</button>
                    </div>
                    </div>
                </section>

                <section className="projects-list" aria-label="Liste des projets">

                    <article className="project" id="projet-1">

                    <div className="project__media project__media--navy">
                        <span className="project__placeholder" aria-hidden="true">[Capture du projet]</span>
                    </div>
                    
                    <div className="project__body">

                        <p className="project__tag">Projet scolaire, [mois 2026]</p>
                        <h2 className="project__title">[Nom du projet 1]</h2>

                        <div>
                            <h3 className="project__label">Contexte et objectif</h3>
                            <p className="project__text">[Cadre du projet, durée, travail seul ou en équipe. Objectif : ce que le projet devait accomplir.]</p>
                        </div>

                        <div>
                            <h3 className="project__label">Compétences et technologies</h3>
                            <p className="project__text">[Technologie 1], [Technologie 2], [Compétences clés]</p>
                        </div>

                        <div>
                            <h3 className="project__label">Ce que j'en retiens</h3>
                            <p className="project__text">[La principale difficulté rencontrée et ce que je ferais autrement aujourd'hui.]</p>
                        </div>

                        <div className="project__links">
                            <a className="project__link" href="#" aria-label="Code source de [Nom du projet 1">Code source</a>
                            <a className="project__link" href="#" aria-label="Démo en ligne de [Nom du projet 1">Démo en ligne</a>
                            <a className="project__link" href="#" aria-label="Documentation de [Nom du projet 1]">Documentation</a>
                        </div>

                    </div>
                    </article>

                </section>

                <section className="projects-cta" aria-labelledby="projects-cta-title">

                    <div className="projects-cta__inner">
                        <h2 id="projects-cta-title" className="projects-cta__title">Une question sur l'un de mes projets ?</h2>
                        <a className="projects-cta__button" href="/contact">Me contacter</a>
                    </div>

                </section>

</main>

        )
}