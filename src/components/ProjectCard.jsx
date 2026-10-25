export default function ProjectCard({ project }) {

  return (

    <article className="project" id={project.id}>

      <div className={`project__media project__media--${project.media}`}>
        <span className="project__placeholder" aria-hidden="true">[Capture du projet]</span>
      </div>

      <div className="project__body">

        <p className="project__tag">{project.tag}</p>
        <h2 className="project__title">{project.title}</h2>

        <div>
          <h3 className="project__label">Contexte et objectif</h3>
          <p className="project__text">{project.context}</p>
        </div>

        <div>
          <h3 className="project__label">Compétences et technologies</h3>
          <p className="project__text">{project.tech}</p>
        </div>

        <div>
          <h3 className="project__label">Ce que j'en retiens</h3>
          <p className="project__text">{project.lesson}</p>
        </div>

        <div className="project__links">

          {project.codeUrl && (
            <a className="project__link" href={project.codeUrl} target="_blank" rel="noopener noreferrer" aria-label={`Code source de ${project.title}`}>Code source</a>
          )}

          {project.demoUrl && (
            <a className="project__link" href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Démo en ligne de ${project.title}`}>Démo en ligne</a>
          )}

          {project.docUrl && (
            <a className="project__link" href={project.docUrl} target="_blank" rel="noopener noreferrer" aria-label={`Documentation de ${project.title}`}>Documentation</a>
          )}
          
        </div>

      </div>

    </article>
  )
}