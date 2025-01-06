const fs = require("fs");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});
fs.readFile("test-file.txt", () => {
  console.log("I/O finished");
  console.log("-------------------");
  setTimeout(() => {
    console.log("setTimeout 2");
  }, 0);
  setTimeout(() => {
    console.log("setTimeout 3");
  }, 3000);

  setImmediate(() => {
    console.log("setImmediate 2");
  });
  process.nextTick(() => {
    console.log("Callback function is okay");
  });
});
console.log("Hello from the top-level code");
