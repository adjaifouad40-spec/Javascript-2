// Lancer avec : node test.js
const f = require("./functions");

const tests = [
  ["reverseString('bonjour')", f.reverseString("bonjour"), "ruojnob"],
  ["countCharacters('Hello World')", f.countCharacters("Hello World"), 11],
  ["capitalizeWords('le développement web')", f.capitalizeWords("le développement web"), "Le Développement Web"],
  ["findMax([3, 17, -4, 9])", f.findMax([3, 17, -4, 9]), 17],
  ["findMin([3, 17, -4, 9])", f.findMin([3, 17, -4, 9]), -4],
  ["sumArray([1, 2, 3, 4, 5])", f.sumArray([1, 2, 3, 4, 5]), 15],
  ["filterArray([1..6], pair)", f.filterArray([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0), [2, 4, 6]],
  ["factorial(5)", f.factorial(5), 120],
  ["factorial(0)", f.factorial(0), 1],
  ["isPrime(7)", f.isPrime(7), true],
  ["isPrime(12)", f.isPrime(12), false],
  ["isPrime(1)", f.isPrime(1), false],
  ["fibonacci(10)", f.fibonacci(10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]],
];

let ok = 0;
for (const [label, got, expected] of tests) {
  const pass = JSON.stringify(got) === JSON.stringify(expected);
  if (pass) ok++;
  console.log(`${pass ? "✅" : "❌"} ${label} -> ${JSON.stringify(got)}`);
}
console.log(`\n${ok}/${tests.length} tests réussis`);
process.exit(ok === tests.length ? 0 : 1);
