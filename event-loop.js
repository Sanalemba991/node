const fs = require("fs");
const crypto = require("crypto");
const start = Date.now();

// (Optional) Set the thread pool size if needed for async crypto operations
process.env.UV_THREADPOOL_SIZE = 2;

console.log("Hello from the top-level code");

setTimeout(() => {
  console.log("setTimeout 1");
}, 0);

setImmediate(() => {
  console.log("setImmediate 1");
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
    // Correct usage of pbkdf2 (asynchronous) with a callback
    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", (err, derivedKey) => {
      if (err) throw err;
      console.log(Date.now() - start, "Password 1 encrypted");
    });

    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", (err, derivedKey) => {
      if (err) throw err;
      console.log(Date.now() - start, "Password 2 encrypted");
    });

    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", (err, derivedKey) => {
      if (err) throw err;
      console.log(Date.now() - start, "Password 3 encrypted");
    });

    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", (err, derivedKey) => {
      if (err) throw err;
      console.log(Date.now() - start, "Password 4 encrypted");
    });
  });
});
