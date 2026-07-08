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
