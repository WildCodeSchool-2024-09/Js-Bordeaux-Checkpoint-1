/*
Écris une fonction qui peut déterminer si une année est une année bissextile. Elle doit renvoyer `true` si c'est le cas, et `false` sinon.
Rappel : Une année bissextile vérifie **une** de ces règles :
- Elle est divisible par 4, sans être divisible par 100
- Elle est divisible par 400
Ex : 2004, 2016 et 2020 sont des années bissextiles
Rappel : Pour vérifier si un nombre est divisible par un autre, tu peux utiliser l'opérateur "modulo" (%)
*/

function isLeapYear(year) {
	if (year % 400 === 0) return true;
	// je verifie si elle est divisible par 400
	if (year % 4 === 0) return true;
	if (year % 100 === 0) return false;
	//je verifie si elle est divisible par 4 mais pas par 100
}

module.exports = isLeapYear;
