const { readFile } = require("fs");
const { readFile, writeFile } = require("fs").promises;

readFile("./contents/contents.txt", "utf-8", (err, data) => {
  if (err) {
    return;
  } else {
    console.log(data);
  }
});

const start = async () => {
  try {
    const first = await readFile("./contents/result-async.txt", "utf-8");
    const second = await readFile("./contents/contents.txt", "utf-8");
    await writeFile(
      "./contents/fourth-file.html",
      `<h2> Yes i can create HTML files</h2>`
    );
    console.log(first, second);
  } catch (error) {
    console.log("Error!!!...Check the file path");
  }
};
start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./contents/result-async.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
