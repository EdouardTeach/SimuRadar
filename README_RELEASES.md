# Publier SimuRadar pour ordinateur

Ce dépôt contient l’enveloppe Electron et le générateur de scénarios. Avant une publication, ajoutez les fichiers web du projet dans le dossier `app/` :

- `app/index.html` : le simulateur radar principal ;
- `app/generator.html` : le générateur de scénarios (la version fournie est déjà copiée ici).

Copiez aussi dans `app/` les ressources locales réellement utilisées par ces pages (images, données JSON, scripts, feuilles de style, etc.) en conservant leurs chemins relatifs. Le kit actuel contient une page de remplacement `app/index.html` parce que le fichier du simulateur n’était pas disponible. Remplacez-la par le véritable simulateur avant de publier.

## Créer une version

Après avoir ajouté/validé les fichiers, créez un tag et poussez-le :

```sh
git tag v1.0.0
git push --tags
```

Le workflow GitHub Actions se déclenche sur un tag `v*`. Il construit les paquets Windows (installateur NSIS et version portable), Linux (AppImage et `.deb`) et macOS (`.dmg` et `.zip`, x64 et arm64), puis les joint à la Release correspondante. Les versions macOS ne sont pas signées.

Les fichiers sont disponibles dans **GitHub → Releases → la version publiée**, après la fin des tâches de compilation.

## Avertissement de sécurité

Comme l’application n’est pas signée/notarisée, macOS peut afficher un avertissement Gatekeeper à l’ouverture, et Windows peut afficher SmartScreen. Cela ne signifie pas que l’application est malveillante : le système ne peut simplement pas vérifier un éditeur signé. Ne l’exécutez que si vous faites confiance à la source. Pour une distribution publique, la signature macOS et la signature de code Windows sont recommandées.

## Notes techniques

Electron sert les fichiers de `app/` sur une adresse locale `127.0.0.1` : cela permet notamment à `fetch()` de lire des fichiers JSON locaux, contrairement à une page ouverte directement en `file://`. Les connexions HTTP(S) des pages vers les API de côte et de balisage ne sont pas bloquées par une CSP ajoutée par le kit. Le menu **Fichier** permet de basculer entre simulateur et générateur. Gardez leurs noms de fichiers et liens relatifs afin que la navigation déjà codée dans les pages continue de fonctionner.
