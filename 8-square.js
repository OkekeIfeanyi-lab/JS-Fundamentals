const size = parseInt(process.argv[2]);

if (!process.argv[2] || isNaN(size)) {
  console.log("Missing size");
} else if (size > 0) {
  let i = 0;
  while (i < size) {
    console.log("X".repeat(size));
    i++;
  }
}
