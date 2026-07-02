//Exercice 4
//Utilise map pour créer un nouveau tableau avec chaque prix augmenté de 10%.
const prices = [10, 25, 8, 42, 16];
const doubled = prices.map((p) => p*1.1);

console.log(doubled);

//Exercice 5
//Avec le même tableau prices, utilise filter pour garder uniquement les prix supérieurs à 15.
const prices2 = [10, 25, 8, 42, 16];
const priceSup = prices2.filter(p => p > 15);

console.log(priceSup);

//Exercice 6
//Utilise reduce pour calculer la somme totale de tous les prix dans prices.
const prices3 = [10, 25, 8, 42, 16];
const total = prices3.reduce((acc, p) => acc + p, 0);

console.log(total);

//Exercice 7
//Utilise filter puis map (enchaînés) pour obtenir un tableau contenant uniquement les mots de plus de 3 lettres, écrits en majuscules.
const words = ["hello", "world", "foo", "bar", "javascript"];
const result = words.filter(w => w.length > 3).map(w => w.toUpperCase());

console.log(result);