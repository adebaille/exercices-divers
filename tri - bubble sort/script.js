//Exercice 1
//Applique bubbleSort sur ce tableau et dis-moi le résultat attendu sans exécuter le code
bubbleSort([4, 2, 7, 1, 9, 3])
/*
Tour 1 :
4 > 2 → échange → [2, 4, 7, 1, 9, 3]
4 > 7 ? → rien  → [2, 4, 7, 1, 9, 3]
7 > 1 → échange → [2, 4, 1, 7, 9, 3]
7 > 9 ? → rien  → [2, 4, 1, 7, 9, 3]
9 > 3 → échange → [2, 4, 1, 7, 3, 9]

Tour 2 :
2 > 4 ? → rien  → [2, 4, 1, 7, 3, 9]
4 > 1 → échange → [2, 1, 4, 7, 3, 9]
7 > 4 ? → rien  → [2, 1, 4, 7, 3, 9]
7 > 3 → échange → [2, 1, 4, 3, 7, 9]
9 > 7 ? → rien  → [2, 1, 4, 3, 7, 9]

Tour 3 :
1 > 2 → échange → [1, 2, 4, 3, 7, 9]
4 > 2 ? → rien  → [1, 2, 4, 3, 7, 9]
4 > 3 → échange → [1, 2, 3, 4, 7, 9] Trié */

//Exercice 2
//Écris une fonction linearSearch qui cherche une valeur dans un tableau et retourne son index, ou -1 si elle n'est pas trouvée. Teste avec
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

linearSearch([10, 25, 8, 42, 16], 42) // 3
linearSearch([10, 25, 8, 42, 16], 99) // -1