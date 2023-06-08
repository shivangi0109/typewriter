const sentence = "hello there from lighthouse labs";

let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;  // Increase the delay by 50ms for each character
}

// Add an additional setTimeout after the last character to print the newline character
setTimeout(() => {
  console.log(); // Print a newline
}, delay);

