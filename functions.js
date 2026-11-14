// =============================================================
//  Checkpoint JavaScript Project 2
//  Fonctions sur les chaînes, les tableaux et les nombres
// =============================================================

// ---------- 1. Fonctions de manipulation de chaînes ----------

/**
 * Inverse une chaîne : "bonjour" -> "ruojnob"
 * split("") découpe en caractères, reverse() inverse le tableau, join("") recolle.
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

/**
 * Compte le nombre de caractères d'une chaîne (espaces compris).
 * On utilise une boucle pour montrer le principe (str.length donne la même chose).
 */
function countCharacters(str) {
  let count = 0;
  for (const char of str) {
    count++;
  }
  return count;
}

/**
 * Met en majuscule la première lettre de chaque mot :
 * "le développement web" -> "Le Développement Web"
 */
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => (word.length > 0 ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word))
    .join(" ");
}

// ---------- 2. Fonctions sur les tableaux ----------

/** Renvoie la plus grande valeur d'un tableau de nombres. */
function findMax(numbers) {
  if (numbers.length === 0) return undefined;
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) max = numbers[i];
  }
  return max;
}

/** Renvoie la plus petite valeur d'un tableau de nombres. */
function findMin(numbers) {
  if (numbers.length === 0) return undefined;
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) min = numbers[i];
  }
  return min;
}

/** Calcule la somme de tous les éléments d'un tableau. */
function sumArray(numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

/**
 * Filtre un tableau selon une condition donnée (une fonction qui renvoie true/false).
 * Exemple : filterArray([1, 2, 3, 4], n => n % 2 === 0) -> [2, 4]
 */
function filterArray(array, condition) {
  const result = [];
  for (const element of array) {
    if (condition(element)) result.push(element);
  }
  return result;
}

// ---------- 3. Fonctions mathématiques ----------

/** Factorielle : n! = 1 × 2 × ... × n (avec 0! = 1). */
function factorial(n) {
  if (n < 0) return undefined; // pas de factorielle pour un nombre négatif
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

/**
 * Vérifie si un nombre est premier (divisible seulement par 1 et par lui-même).
 * On teste les diviseurs jusqu'à la racine carrée de n.
 */
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * Génère les n premiers termes de la suite de Fibonacci.
 * Chaque terme est la somme des deux précédents : 0, 1, 1, 2, 3, 5, 8, ...
 */
function fibonacci(n) {
  const sequence = [];
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    sequence.push(a);
    [a, b] = [b, a + b];
  }
  return sequence;
}

// Export pour Node.js (tests). Dans le navigateur, les fonctions restent globales.
if (typeof module !== "undefined") {
  module.exports = {
    reverseString, countCharacters, capitalizeWords,
    findMax, findMin, sumArray, filterArray,
    factorial, isPrime, fibonacci,
  };
}
