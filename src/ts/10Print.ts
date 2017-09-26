let iterations: number = 1 << 16;

let random: number = Math.random();
let Debug: Console = process.stdout;

while (iterations > 0) {
  random = Math.random();

  if (random <= 0.5) console.write("/");
  else console.write("\\");

  iterations--;
}
