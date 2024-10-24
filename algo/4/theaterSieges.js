/*
Un employé de théâtre souhaite obtenir la liste de tous les sièges de sa salle principale.
Dans la salle les places sont réparties comme suit :
   - Il y a 26 colonnes de sièges, numérotées de "1" » à "26".
   - Chaque colonne contient 100 sièges, numérotés de "1" à "100".

Complète la fonction theaterSieges pour qu'elle renvoie un tableau
où chaque sous-tableau répertorie les positions des sièges dans une rangée.

exemple du résultat final :

[
  ["1-1", "1-2", "1-3", ..., "1-100"],
  ["2-1", "2-2", "2-3", ..., "2-100"],
  ...
  ["26-1", "26-2", "26-3", ..., "26-100"]
]
*/

function theaterSieges() {
		// Your code here !
		/*
    1 Créer mon tableau principal => DONE
    2 Boucler sur le nombre de colonnes (26) => DONE
    3 Pour chaque colonne, créer un tableau contenant la liste des sièges (1 - 100)
    4 Après chaque tour, insérer ce tableau dans le tableau principal
    5 Retourner le tableau principal
  */

    const list = [];
    // for(let i = 1; i <= 26; i++) {
    //   const column = [];
    //   for(let j = 1; j <= 100; j++) {
    //     column.push(`${i}-${j}`);
    //   }
    //   list.push(column);
    // }

    let i = 1;
    while(i <= 26) {
      const column = [];
      let j = 1;
      while(j <= 100) {
        column.push(`${i}-${j}`);
        j++
      }
      list.push(column);
      i++
    }
    return list;
	}

module.exports = theaterSieges;
