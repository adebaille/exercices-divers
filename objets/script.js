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