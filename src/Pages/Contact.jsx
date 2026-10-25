import { useState } from 'react'
import './Contact.css'

export default function Contact() {

  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(data.get('subject'))
    const body = encodeURIComponent(`${data.get('message')}\n\n${data.get('name')} (${data.get('email')})`)
    window.location.href = `mailto:aurelien.thibaut@epitech.eu?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (

    <main id="contenu">

      <title>Contact | Aurélien Thibaut</title>
      <meta name="description" content="Contacter Aurélien Thibaut pour une alternance, une collaboration ou une question sur un projet : e-mail, réseaux professionnels et CV à télécharger." />

      <section className="contact-hero">
        <div className="contact-hero__inner">
          <h1 className="contact-hero__title">Contactez-moi</h1>
          <p className="contact-hero__text">Une opportunité, une question sur un projet ou une idée de collaboration : écrivez-moi et je répondrai dans les meilleurs délais.</p>
        </div>
      </section>

      <section className="contact-details" aria-label="Coordonnées et formulaire">
        <div className="contact-details__inner">

          <div className="contact-details__info">
            <h2 className="contact-details__title">Mes coordonnées</h2>

            <div>
              <h3 className="contact-details__label">E-mail</h3>
              <a className="contact-details__link" href="mailto:aurelien.thibaut@epitech.eu">aurelien.thibaut@epitech.eu</a>
            </div>

            <div>
              <h3 className="contact-details__label">Téléphone</h3>
              <a className="contact-details__link" href="#">[Ton numéro]</a>
            </div>

            <div>
              <h3 className="contact-details__label">Localisation</h3>
              <p className="contact-details__text">Paris, France</p>
            </div>

            <div>
              <h3 className="contact-details__label">Réseaux professionnels</h3>
              <div className="contact-details__networks">
                <a className="contact-details__link" href="https://www.linkedin.com/in/aur%C3%A9lien-thibaut-6593a7209/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className="contact-details__link" href="https://github.com/Aure-0411/" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>

          <form className="contact-form" aria-labelledby="contact-form-title" onSubmit={handleSubmit}>
            <h2 id="contact-form-title" className="contact-form__title">M'écrire un message</h2>

            <div className="contact-form__field">
              <label className="contact-form__label" htmlFor="contact-name">Nom</label>
              <input className="contact-form__input" id="contact-name" name="name" type="text" autoComplete="name" required />
            </div>

            <div className="contact-form__field">
              <label className="contact-form__label" htmlFor="contact-email">Adresse e-mail</label>
              <input className="contact-form__input" id="contact-email" name="email" type="email" autoComplete="email" required />
            </div>

            <div className="contact-form__field">
              <label className="contact-form__label" htmlFor="contact-subject">Sujet</label>
              <input className="contact-form__input" id="contact-subject" name="subject" type="text" required />
            </div>

            <div className="contact-form__field">
              <label className="contact-form__label" htmlFor="contact-message">Message</label>
              <textarea className="contact-form__input contact-form__input--message" id="contact-message" name="message" rows="6" required></textarea>
            </div>

            <button className="contact-form__button" type="submit">Envoyer le message</button>

            {sent && (
              <p className="contact-form__status" role="status">Ton application de messagerie devrait s'ouvrir avec le message prêt à partir. Sinon, écris-moi directement à aurelien.thibaut@epitech.eu.</p>
            )}
          </form>

        </div>
      </section>

      <section className="contact-cv" id="cv" aria-labelledby="contact-cv-title">
        <div className="contact-cv__inner">
          <div className="contact-cv__content">
            <h2 id="contact-cv-title" className="contact-cv__title">Mon CV</h2>
            <p className="contact-cv__text">Format PDF, 92 Ko, mis à jour le 25 octobre 2026.</p>
          </div>
          <a className="contact-cv__button" href={`${import.meta.env.BASE_URL}cv-aurelien-thibaut.pdf`} download>Télécharger le CV (PDF)</a>
        </div>
      </section>

    </main>

  )
}