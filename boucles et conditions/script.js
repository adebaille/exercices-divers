//Exercice 1
for (let i = 1; i < 11; i++) {
  console.log(i);
}

//Exercice 2
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

//Exercice 3

const scores = [12, 7, 18, 5, 14, 9];

for (const score of scores) {
  if (score >= 10) {
    console.log(`${score} ✓`);
  } else {
    console.log(`${score} X`);
  }
}
