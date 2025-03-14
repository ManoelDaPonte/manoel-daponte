# Portfolio de Manoel Da Ponte

Un portfolio moderne pour un Full Stack Engineer &amp; Data Scientist, construit avec Next.js, Tailwind CSS et shadcn/ui.

![Capture d'écran du portfolio](public/screenshot.png)

## 🚀 Caractéristiques

-   Design responsive adapté à tous les appareils
-   Animations fluides avec Framer Motion
-   Thème clair/sombre automatique et manuel
-   Animation 3D interactive de nuage de technologies
-   Formulaire de contact fonctionnel
-   Sections complètes présentant compétences, projets et expériences
-   Construit avec les meilleures pratiques modernes

## 🧰 Technologies utilisées

-   **Frontend**: Next.js 15, React 19, Tailwind CSS 4
-   **UI Components**: shadcn/ui
-   **Animations**: Framer Motion
-   **Icônes**: Lucide React
-   **Formulaire de contact**: API Routes Next.js + Nodemailer
-   **Thème**: next-themes

## 📋 Structure du projet

```
/app                    # Dossier principal de l'application Next.js
  /api                  # API routes pour le formulaire de contact
  /globals.css          # Styles globaux
  /layout.js            # Layout racine de l'application
  /page.js              # Page d'accueil

/components             # Composants React
  /magicui              # Composants d'UI spéciaux (nuage d'icônes)
  /sections             # Sections du portfolio (Hero, About, etc.)
  /ui                   # Composants UI réutilisables

/lib                    # Utilitaires et fonctions helpers
  /utils.js             # Fonctions utilitaires

/public                 # Fichiers statiques
  /images               # Images du portfolio
  /...                  # Autres assets
```

## 🚀 Mise en route

### Prérequis

-   Node.js 18+
-   npm, yarn ou pnpm

### Installation

1. Clonez le dépôt

    ```bash
    git clone https://github.com/ManoelDaPonte/portfolio.git
    cd portfolio
    ```

2. Installez les dépendances

    ```bash
    npm install
    # ou
    yarn
    # ou
    pnpm install
    ```

3. Configuration des variables d'environnement
   Créez un fichier `.env.local` à la racine du projet avec les variables suivantes:

    ```
    EMAIL_HOST=your-smtp-host
    EMAIL_PORT=your-smtp-port
    EMAIL_USER=your-email
    EMAIL_PASSWORD=your-password
    ```

4. Démarrez le serveur de développement

    ```bash
    npm run dev
    # ou
    yarn dev
    # ou
    pnpm dev
    ```

5. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat

## 🌍 Déploiement

Ce projet est optimisé pour être déployé sur Vercel:

1. Créez un compte sur [Vercel](https://vercel.com) si vous n'en avez pas déjà un
2. Connectez votre dépôt GitHub à Vercel
3. Configurez les variables d'environnement dans l'interface Vercel
4. Déployez!

## 🧩 Personnalisation

### Contenu

Modifiez les fichiers dans `/components/sections/` pour mettre à jour:

-   Informations personnelles
-   Projets
-   Compétences
-   Expériences

### Style

-   Les styles principaux sont dans `/app/globals.css`
-   Les thèmes clair/sombre sont configurés dans ce même fichier
-   Les couleurs principales peuvent être ajustées dans les variables CSS root

## 📄 Licence

Ce projet est sous licence MIT.

## 👤 Contact

Manoel Da Ponte - [daponte.manoel@gmail.com](mailto:daponte.manoel@gmail.com)

---

Construit avec ❤️ par Manoel Da Ponte
