# Notes

## Lancer le projet

```bash
npm install
npm run dev
```

## Choix

J'ai mis les variables du `:root` dans `@theme` en les renommant pour avoir des
classes plus lisibles (`bg-cream`, `text-muted`, `border-line`...). Pour les
arrondis et les espacements je n'ai rien ajouté, les valeurs par défaut de
Tailwind correspondaient déjà.

J'ai utilisé `@apply` seulement pour les boutons (`.btn`, `.btn-primary`,
`.btn-outline`) parce qu'ils sont utilisés une dizaine de fois sur les 3 pages.
Pour le reste j'ai mis les classes directement dans le HTML.

Pour le responsive j'ai tout refait en mobile-first :
- `sm` : nav en ligne, grilles en 2 colonnes, champs du formulaire côte à côte
- `md` : footer en 3 colonnes
- `lg` : hero en 2 colonnes, cartes en 3 colonnes, page contact en 2 colonnes
- `xl` : titre du hero plus grand
- `2k` (ajouté dans `@theme`, 2560px) : la taille de base du `html` passe à 125 %, donc tout le site grossit

L'animation du hero est déclarée dans `@theme` et désactivée avec
`motion-reduce:animate-none`. Les effets de survol des cartes et des boutons
sont aussi coupés avec `motion-reduce`.

Le `<dialog>` de réservation et la FAQ en `<details>` marchent toujours.
Je n'ai pas modifié `main.js`.

Dans la nav, j'ai remplacé la classe `nav__link--active` par
`aria-current="page"`, c'est plus correct pour l'accessibilité.

## Difficultés

- Le Preflight enlève les tailles et marges des titres et des paragraphes. J'ai
  remis le minimum dans un `@layer base`.
- Le dialog n'était plus centré à cause du `margin: 0` du Preflight, il a fallu
  ajouter `m-auto`.
- Tant que l'ancien CSS était là, il passait avant les classes Tailwind. Il
  fallait supprimer l'ancienne règle en même temps que je mettais les classes.
- Tailwind v4 a déjà une classe `container`, j'ai dû la remplacer par
  `mx-auto max-w-site px-6`.
- Pour le menu mobile sans toucher au JS, j'ai utilisé `peer-aria-expanded:block`
  sur la nav, puisque le script met déjà à jour `aria-expanded` sur le bouton.

## Ce qui reste en CSS classique

- le `@layer base` (titres, paragraphes, liens)
- les classes des boutons
- les classes `nav`, `nav__toggle` et `reservation-dialog__close` dans le HTML :
  elles n'ont plus de style, elles servent juste au JS
