//Exercice 1
//Crée un objet book avec les propriétés : title, author, year, isRead (boolean). Affiche chaque propriété avec un template literal.
const book = {
    title: "La colère des dragons",
    author: "Olivia Rose Darling",
    year: 2026,
    isRead: false,
};

console.log (`Titre ${book.title}`);
console.log (`Autrice ${book.author}`);
console.log (`Année de parution ${book.year}`);
console.log (`A t'il été lu ? ${book.isRead}`);

//Exercice 2
//Déstructure name et price dans des variables séparées, puis affiche : "Clavier coûte 49€".
const product = { name: "Clavier", price: 49, stock: 12 };
const {name, price} = product;

console.log(`${name} coûte ${price}€`);

//Exercice 3
//Fusionne-les avec le spread pour que les préférences de userSettings écrasent celles de defaults. Affiche le résultat.
const defaults = { theme: "light", language: "fr", notifications: true };
const userSettings = { theme: "dark", language: "en" };

const merged = {...defaults, ...userSettings};

console.log (merged);

//Exercice 4
//Utilise filter et map pour obtenir la liste des noms des utilisateurs actifs et majeurs (âge >= 18).
const users = [
  { name: "Alice", age: 25, isActive: true },
  { name: "Bob", age: 17, isActive: false },
  { name: "Charlie", age: 32, isActive: true },
];

const result = users.filter(u => u.age >= 18 && u.isActive).map((u => u.name));
console.log(result);