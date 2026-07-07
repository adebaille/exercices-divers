//Exercice 1
//Écris une arrow function multiply qui prend deux nombres et retourne leur produit. Utilise la syntaxe courte (sans accolades ni return explicite).
const multiply = (a, b) => a * b;

//Exercice 2
// Écris une fonction greet qui prend un name et retourne "Bonjour, [name] !". Appelle-la avec ton prénom.
function greet(name) {

    return `Bonjour, ${name} !`;
}
console.log(greet("Alison"));

//Exercice 3
//Prédit ce que ce code affiche avant de l'exécuter, et explique pourquoi :
const message = "global";

function foo() {
  const message = "local";
  console.log(message);
}

foo();
console.log(message);

/* Réponse : La variable message à l'intérieur de foo "masque" la variable globale du même nom, uniquement dans le scope de la fonction. Les deux coexistent sans se modifier.
JS cherche toujours une variable du scope le plus proche vers le plus lointain. Dans foo, il trouve message localement, il s'arrête là et n'ira pas chercher le message global. */

//Exercice 4 
// Écris une fonction makeMultiplier(factor) qui retourne une nouvelle fonction. Cette nouvelle fonction prend un nombre et le multiplie par factor.
function makeMultiplier(factor) {

  return function(n) {
    return factor * n;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15