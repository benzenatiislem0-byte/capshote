# Mise en ligne du portfolio (GitHub + Supabase)

## 1. Supabase (la base de données, gratuit)
1. Crée un compte sur supabase.com puis un nouveau projet.
2. Menu **SQL Editor** : colle tout le contenu de `supabase.sql`, clique **Run**.
3. Menu **Authentication > Users > Add user** : crée-toi avec l'email **benzenatiislem0@gmail.com** et un mot de passe (coche « Auto Confirm User »). C'est ta connexion admin.
4. Menu **Project Settings > API** : copie **Project URL** et la clé **anon public**.
   (Ne copie jamais la clé « service_role ».)

## 2. Le site
1. Ouvre `script.js`, cherche `COLLE_ICI_TON_URL_SUPABASE` et `COLLE_ICI_TA_CLE_ANON`, remplace-les par tes deux valeurs.
2. Pour mettre ton nom, tes réseaux : `NAME`, `EMAIL` et `SOC` sont en haut de `script.js`.

## 3. GitHub (mise à jour automatique)
1. Crée un dépôt GitHub, envoie-y ces fichiers (dont le dossier `.github`).
2. Dépôt > **Settings > Pages > Source : GitHub Actions**.
3. À chaque modification envoyée sur la branche `main`, le site se redéploie tout seul (onglet **Actions**, ~1 min).

## Utilisation
- Ton espace admin : clique 3 fois sur le « © » en bas du site (ou ajoute `#admin` à l'adresse), puis connecte-toi.
- Les vidéos ajoutées dans l'admin apparaissent tout de suite, sans redéployer.
- Limite gratuite Supabase : 50 Mo par fichier vidéo ; pour du plus lourd, mets un lien YouTube.
