let iterations = 1 << 16;

let random = Math.random();
let console = process.stdout;

while (iterations > 0) {
  random = Math.random();

  if (random <= 0.5) console.write("/");
  else console.write("\\");

  iterations--;
}
