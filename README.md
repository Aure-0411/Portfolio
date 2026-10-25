# Portfolio d'Aurélien Thibaut

Portfolio en ligne : https://aure-0411.github.io/Portfolio/

Site vitrine réalisé dans le cadre du projet « Portfolio » d'Epitech. Il présente mes projets, mon parcours, mes expériences et mes coordonnées. Il est 100 % front-end : aucun serveur ni base de données.

## Pages

| Page | Adresse | Contenu |
|---|---|---|
| Accueil | `/` | accroche, photo, chapitres, projets à la une, compétences à prouver |
| Projets | `/projets` | fiches de projets filtrables (contexte, technologies, enseignements, liens) |
| Parcours | `/parcours` | chronologie de l'année, compétences reliées aux projets, difficultés, diplômes |
| Expériences | `/experiences` | engagements hors projets scolaires, philosophie, centres d'intérêt, œuvres |
| Contact | `/contact` | coordonnées, formulaire (ouvre la messagerie du visiteur), téléchargement du CV |

## Technologies

- **React 19** avec **Vite** pour le développement et la construction.
- **React Router** pour la navigation entre les pages.
- **CSS natif** : variables CSS, nommage **BEM**, tailles en `rem`, une feuille de style par composant ou page.
- **Polices** : Cormorant Garamond et Jost (Google Fonts).
- **GitHub Actions** et **GitHub Pages** pour la publication.

## Structure du dépôt

```
Portfolio/
├── .github/workflows/deploy.yml   publication automatique
├── public/                        fichiers servis tels quels
│   ├── cv-aurelien-thibaut.pdf
│   ├── photo-aurelien.jpg
│   ├── favicon.svg
│   └── images/projets/            captures des projets
├── src/
│   ├── components/                Header, Footer, ProjectCard (avec leur CSS)
│   ├── data/projects.js           liste des projets (source des fiches)
│   ├── Pages/                     Home, Projects, Parcours, Experiences, Contact (avec leur CSS)
│   ├── App.jsx                    routes, lien d'évitement, en-tête et pied de page
│   ├── main.jsx                   point d'entrée (routeur)
│   └── global.css                 variables, styles de base
├── index.html                     page unique, polices
├── vite.config.js                 configuration de Vite
└── package.json
```

## Lancer le site en local

Prérequis : Node.js 20.19 ou plus récent (ou 22.12 ou plus récent).

```bash
git clone git@github.com:Aure-0411/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Le terminal affiche l'adresse du site (en général `http://localhost:5173/`).

Pour tester la version construite, telle qu'elle sera publiée :

```bash
npm run build
npm run preview
```

Le site construit vit sous `/Portfolio/` : ouvrir `http://localhost:4173/Portfolio/`.

## Modifier le contenu

- **Projets** : ajouter ou modifier un objet dans `src/data/projects.js` (titre, période, contexte, technologies, enseignements, liens, image). Les liens à `null` ne s'affichent pas.
- **Textes des pages** : dans les fichiers de `src/Pages/`.
- **CV, photo et images** : dans `public/`, avec des noms sans espace ni accent.

## Publication

La publication est automatique : chaque `git push` sur la branche `main` met le site en ligne, sans aucune étape manuelle.

1. Le workflow `.github/workflows/deploy.yml` se lance à chaque push.
2. Il installe les dépendances (`npm ci`), construit le site (`npm run build`) puis copie `index.html` en `404.html`, pour que les adresses comme `/projets` fonctionnent aussi quand on recharge la page.
3. Il envoie le dossier `dist` sur GitHub Pages.

Réglage nécessaire dans GitHub : **Settings, Pages, Source : GitHub Actions**.

Le site étant servi sous `/Portfolio/`, ce chemin est géré à trois endroits :
- `vite.config.js` : `base` vaut `/Portfolio/` pour la version construite, `/` en développement ;
- `src/main.jsx` : le routeur reçoit `import.meta.env.BASE_URL` comme `basename` ;
- les liens vers les fichiers de `public/` passent par `import.meta.env.BASE_URL`.

## Responsive et accessibilité

- Le site s'adapte de 320 px de large jusqu'aux grands écrans. Le seuil de bascule est à 48 rem (768 px) : en dessous, le menu devient un bouton et les grilles passent sur une colonne.
- Lien d'évitement « Aller au contenu » et repères de navigation nommés (`aria-label`).
- Tous les éléments interactifs sont atteignables au clavier, avec un contour de focus visible.
- Titres hiérarchisés (un seul `h1` par page) et texte alternatif pour les images.
- Titre et description propres à chaque page, pour le référencement.

## Ressources et crédits

- **Polices** : Cormorant Garamond et Jost, sous licence SIL Open Font.
- **Photo de profil** : [auteur ou licence de la photo].
- **Capture du Job Board** : projet réalisé en binôme avec Melda.
- **Inspirations de design** : le site de Ralph Lauren pour ce portfolio, JobTeaser et Welcome to the Jungle pour le Job Board. Aucun de leurs éléments graphiques n'est réutilisé.

## Auteur

Aurélien Thibaut : aurelien.thibaut@epitech.eu
