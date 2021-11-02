const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ' ];
let delay = 200;

spinner.forEach((elem) => {
  setTimeout(() => {
    process.stdout.write(elem);
  }, delay);
  delay += 200;
});
