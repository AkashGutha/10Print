let iters: number = 1 << 16;

let rand: number = Math.random();
let debug = process.stdout;

while (iters > 0) {
  rand = Math.random();

  if (rand <= 0.5) debug.write("/");
  else debug.write("\\");

  iters--;
}
