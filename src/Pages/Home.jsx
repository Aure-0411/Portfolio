import './Home.css'

export default function Home() {


  return (
    <main>
        <section className="hero">

          <div className="hero__content">

            <h1 className="hero__title">Découvrez mon Portfolio !</h1>
            <p className="hero__title-description">[Deux phrases pour te présenter : ta formation, ce qui te motive, et ce que tu recherches (stage, alternance, premier poste).]</p>

            <div className="hero__actions">
              <a className="hero__button" href="/projets">Découvrir mes projets</a>
              <a className="hero__button hero__button--secondary" href="/cv-aurelien-thibaut.pdf" download>Télécharger mon CV</a>
            </div>

          </div>

          <figure className="hero__media">
            <img className="hero__photo" src="/photo-aurelien.jpg" alt="Portrait d'Aurélien THIBAUT"></img>
            <figcaption className="hero__caption">BlablaBla</figcaption>
          </figure>
                
        </section>
    </main>
  )
}