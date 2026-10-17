# Simulateur radar — déploiement statique

Dossier prêt à publier sur GitHub Pages ou GitLab Pages.

## Fichiers publiés

- `index.html` — copie de `simulateur.html`, point d’entrée du site.
- `generator.html` — copie de `generator.html`.
- `coast_data.js` — garde-fou local : le HTML source le référence, mais aucun fichier de données correspondant n’a été fourni. Il initialise `window.NE_COAST_RINGS` à un tableau vide.
- `.gitlab-ci.yml` — pipeline GitLab Pages.
- `LICENSE` — avis de licence PolyForm Noncommercial 1.0.0.

Les anciens fichiers d’attente et le portail de démonstration ont été retirés du dossier de publication.

## Références vérifiées

Les deux HTML ne référencent ni `costdata.js`, ni un fichier JSON de coûts, ni `fetch()`, `XMLHttpRequest`, `import` ou `require` pour des données de coûts.

`generator.html` référence :

- `coast_data.js` (désormais fourni dans ce dossier) ;
- Leaflet 1.9.4 via `https://unpkg.com` (CSS et JavaScript) ;
- des fonds cartographiques externes Esri, OpenTopoMap et OpenSeaMap lorsque la fonction « Côte réelle » est utilisée ;
- des chemins optionnels `cotes/*.json` pour les presets locaux, mais aucun dossier `cotes/` n’était présent dans les fichiers fournis.

Les deux pages contiennent un beacon Cloudflare Insights répété dans la source reçue. Il a été retiré des copies publiables : il n’est pas nécessaire au fonctionnement de l’application.

Les imports de côtes GeoJSON, GPX, OSM et XML restent locaux via le sélecteur de fichier. Sans connexion, l’interface radar et les scénarios intégrés fonctionnent ; Leaflet et les fonds de carte externes ne seront pas disponibles tant qu’ils ne sont pas vendus/localisés.

## Navigation

- `index.html` → `generator.html` via le lien « Générateur ».
- `generator.html` → `index.html` via le lien « Simulateur ».

Le lien retour pointe volontairement vers `index.html`, afin de fonctionner sur GitHub Pages, GitLab Pages et sous un chemin de projet.

## Publication gratuite

GitHub Pages et GitLab Pages peuvent héberger gratuitement ce site statique : aucun serveur à administrer, aucune base de données et aucun coût de serveur/logistique n’est requis pour ce déploiement. Les limites, quotas, disponibilité et conditions d’utilisation des plateformes restent applicables.

### GitHub ou GitLab ?

- GitHub est très répandu et ses Pages sont simples à activer ; la plateforme est propriétaire et appartient à Microsoft.
- GitLab fournit une offre Pages et GitLab CE est une édition open-core / open source de la plateforme, mais le service GitLab.com lui-même n’est pas identique à une instance libre auto-hébergée.
- Pour une philosophie FOSS, GitLab auto-hébergé ou une forge communautaire peut être préférable ; pour le coût et la simplicité, GitHub Pages et GitLab Pages conviennent tous deux.

Avec ce `.gitlab-ci.yml`, GitLab publie `index.html`, `generator.html`, `coast_data.js` et, s’ils existent, `costdata.js` et `cotes/`.

## Licence : non-commercial et FOSS

La licence fournie est **PolyForm Noncommercial 1.0.0**. Elle exprime clairement l’interdiction d’usage commercial, mais elle n’est pas une licence Open Source approuvée par l’OSI : l’Open Source Definition exige notamment l’absence de restriction discriminatoire sur les domaines d’activité, ce qui exclut une clause « non-commercial ».

**CC BY-NC-SA** peut être adaptée à des contenus pédagogiques, mais Creative Commons déconseille généralement ses licences pour les logiciels ; elle combine attribution, non-commercial et partage dans les mêmes conditions, et n’est pas OSI-approved.

**AGPL/GPL** sont des licences libres approuvées par l’OSI et imposent le copyleft (l’AGPL ajoute des obligations pour les logiciels utilisés via réseau), mais elles autorisent l’usage commercial. On ne peut donc pas avoir simultanément une licence OSI/FOSS standard et une interdiction générale d’usage commercial. Faire valider le choix par un juriste et vérifier les licences des composants et données tiers avant diffusion.

## Site web ou application téléchargeable ?

- **Site statique** : partage immédiat, mises à jour centralisées, aucun installateur ni support de plateformes ; dépend des CDN/cartes si ceux-ci restent externes.
- **ZIP hors ligne / HTML local** : simple à distribuer et très proche du site ; certains navigateurs limitent les modules, les requêtes locales et les APIs depuis `file://`. Tester via un petit serveur local est plus fiable.
- **PWA** : permet une installation et un cache hors ligne, mais demande un service worker, des tests de cache/version et HTTPS pour l’installation complète.
- **Tauri** : exécutable léger et plus proche d’une application native ; nécessite des builds et tests Windows/macOS/Linux.
- **Electron** : intégration riche et mature, mais paquets plus lourds et coût de maintenance supérieur.

Pour ce projet, le meilleur premier choix est **site statique + archive ZIP hors ligne**. Ajouter ensuite une PWA si l’usage terrain exige une installation hors ligne ; ne passer à Tauri/Electron que si des fonctions natives deviennent nécessaires.

## Test local

```bash
python3 -m http.server 8000
# ouvrir http://localhost:8000/
```

Tester les deux liens et la console du navigateur. La carte « Côte réelle » nécessite les CDN et services cartographiques externes ; pour un hors-ligne strict, empaqueter Leaflet, les tuiles et les fichiers `cotes/*.json` avec les licences/attributions correspondantes.
