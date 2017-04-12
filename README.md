# GUIRPG

### Histoire et idées en vrac :
- **n0** : enfermé dans une cage, écran completement noir
    - echappé du donjon, perdu dans la nature

- **n1** : rencontre avec des bûcherons mystérieux dans un camp de fortune

	--- Début de la partie ---

	- Débloque une partie de l'interface
	- Un villageois nous propose de faire pousser des carottes (début de l'autoincrémentation des ressources)
		- Feature : planter des carottes (une carotte rend 1pv perdue si mangée ?)

Dans le village :

	- Un marchand vend des items de base
	- Il a besoin de récupérer un objet en ville ? (Déblocage de la map suivante)

- **n2** : traverser une forêt pour rejoindre la ville
	- combats dans la forêt, débloque de l'xp

        Note : l'xp sert à augmenter les stats (pv, attack, magie (magie a débloquer en ville))

- **n3** : village moyen
    - divers marchands acceptent les légumes

    ...
    ...
    ...

- **nFin** : retourner au donjon et faire tomber l'empire ?

### Puzzle/mini jeux

- jeter un objet de quête, et le rechercher par terre

### Features à implémenter :

    Joueur :
	    - PV
	    - Attaque
	    - Magie
	    - XP

    Items : 
	    - Permettent d'avoir des bonus ou de débloquer une quête
	    - Visibles dans le sac
	    - Peuvent être stacké (consommables) ou non (objets de quête)

    Quêtes :
        - Objectif à remplir
        - Rewards

    Map :
        - Représentation graphique des niveaux (étapes)
        - Différents styles de niveaux :
	        - "Point & click" 
	        - Mouvement automatique du joueur sur un décor 2D 

    Evénements :
	    - Liste de rencontres fixe sur chaque Map.
		    - Rencontres avec des pnj
		    - Lieux cachés

    Sytème de combat :
	    - Mouvement automatique sur la map
	    - Attaque automatique
	    - Sort lancés manuellement (avec cooldown)

    Sytème de culture/farming :
	    - Possibilité de planter des légumes / graines (différentes variétés)
	    - Récolter les légumes
	    - Vendre les légumes

### Tests à réaliser ###

- [fonctionnalité]
	- [situation] : [situation finale]

- Joueur :
	- Si PV < 0
	- Si PV > max
	- Si légume mangé : PV++
	- Si Attaque < 0
	- Si Attaque > max
	- Si Magie (cooldown) > 0 : impossible de lancer un sort
	- Si Magie > max
	- Si Magie < 0
	- Si XP < nb : impossible d'augmenter les stats
		OU
	- Si XP > nb : apparition du bouton d'upgrade de stats

- Items :
	- Si objet de quête est looté plusieurs fois : ne fait rien
	- Si objet de quête est jeté : ??? (voir mini jeu plus haut)
	- Si consommable est looté plusieurs fois : stack de "charges"
	- Si consomable utilisé : disparaît de l'inventaire / reste à zéro charge ?

- Quêtes :
	- Si tous les objectifs sont remplis : tous les rewards sont obtenus

- Maps :
        - Si le joueur meurt sur la map : ne gagne pas les rewards de quêtes
        - Si le joueur tente d'accéder à une map bloquée : ne fait rien

- Evénements :
	- Si rencontre avec un PNJ : screen de discussion apparaît ??
	- Si clic sur un lieu caché
	- Si vendeur : liste de produits apparaît ?
		OU
	- Si clic sur un objet à vendre : choix d'achat possible

- Sytème de combat :
	- Si Mouvement automatique bloqué (obstacle)
	- Si Mouvement automatique emmène dans un trou : tombe
	- Si Mouvement automatique emmène au contact : attaque CC auto
	- Si Sorts en CD : décompte

- Sytème de culture/farming :
	- Si légume/graine planté(e) : production auto de ce légume
		OU
	- Si (???) : récolte possible des légumes
	- Si récolte : légumes++ dans l'inventaire ?
	- Si achat d'objet : légumes --
