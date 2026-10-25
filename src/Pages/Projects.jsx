import { useState, useEffect } from 'react'
import './Projects.css'
import ProjectCard from '../components/ProjectCard.jsx'
import projects from '../data/projects.js'
import { Link, useLocation } from 'react-router'

export default function Projects () {

    const [filter, setFilter] = useState('all')

    const { hash } = useLocation()

    const filters = [
        { id: 'all', label: 'Tous les projets' },
        { id: 'school', label: 'Projets scolaires' },
        { id: 'personal', label: 'Projets personnels' },
    ]

    const visibleProjects = projects.filter((project) => filter === 'all' || project.kind === filter)

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.slice(1))
            if (element) {
                element.scrollIntoView()
            }
        }
    }, [hash])

    return (

        <main id="contenu">

            <section className="projects-hero">

                <div className="projects-hero__inner">

                    <h1 className="projects-hero__title">Réalisations</h1>
                    <p className="projects-hero__text">Chaque projet précise son contexte et son objectif, les compétences et technologies mobilisées, et les liens utiles : code source, démo en ligne, documentation.</p>

                    <div className="projects-hero__filters" role="group" aria-label="Filtrer les projets">
                        {filters.map((item) => (
                        <button key={item.id} type="button" className={`projects-hero__filter ${filter === item.id ? 'projects-hero__filter--active' : ''}`} aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>{item.label}</button>
                        ))}
                    </div>

                </div>
            </section>

            <section className="projects-list" aria-label="Liste des projets">

                {visibleProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}

                {visibleProjects.length === 0 && (
                    <p className="projects-list__empty" role="status">Aucun projet dans cette catégorie pour le moment.</p>
                )}

            </section>

            <section className="projects-cta" aria-labelledby="projects-cta-title">

                <div className="projects-cta__inner">
                    <h2 id="projects-cta-title" className="projects-cta__title">Une question sur l'un de mes projets ?</h2>
                    <Link className="projects-cta__button" to="/contact">Me contacter</Link>
                </div>

            </section>

        </main>

        )
}