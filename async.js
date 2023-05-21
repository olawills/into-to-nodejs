const { readFile, writeFile } = require("fs");

readFile("./contents/contents.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  // console.log(result);

  readFile("./contents/second_contents.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./contents/result-async.txt",
      "What the fuck i can create things with javascript",
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
