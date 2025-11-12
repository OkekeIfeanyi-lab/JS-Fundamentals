const x = parseInt(process.argv[2]);

if (!process.argv[2] || isNaN(x)) {
  console.log("Missing number of occurrences");
} else if (x > 0) {
  let i = 0;
  while (i < x) {
    console.log("C is fun");
    i++;
  }
}
