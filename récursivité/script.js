//Exercice 1
//Écris une fonction récursive sum(n) qui retourne la somme de tous les entiers de 1 à n.
function sum(n) {
    if (n <= 1) return 1;

    return n + sum(n-1);
}
console.log(sum(4));

//Exercice 2
//Écris une fonction récursive countdown(n) qui affiche les nombres de n jusqu'à 0.
function countdown(n) {
    if (n <=0) return;
    console.log(n);
    countdown(n - 1);
}
console.log(countdown(3));