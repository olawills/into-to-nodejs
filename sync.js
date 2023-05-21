const names = require("./index");

const { radFileSync, writeFileSync, readFileSync } = require("fs");

const first = readFileSync("./contents/contents.txt", "utf-8");
writeFileSync(
  "./contents/third_contents.txt",
  "Here is the third file i just created",
  { flag: "a" }
);

console.log(first);
