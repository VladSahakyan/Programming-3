// var os = require("os");
// var message = "The platform is ";
// function main() {
//     console.log(message + os.platform());
// }
// main();

// var express = require("express");
// var app = express();
// app.get("/", function (req, res) {
//     res.send("Hello world");
// });
// app.listen(3000, function () {
//     console.log("Example is running on port 3000");
// });

// var express = require("express");
// var app = express();
// app.get("/", function (req, res) {
//     res.send("<h1>Hello world</h1>");
// });
// app.get("/name/:name", function (req, res) {
//     var name = req.params.name;
//     res.send("<h1>Hello " + name + "</h1>");
// });
// app.listen(4000, function () {
//     console.log("Example is running on port 4000");
// });

// var fs = require('fs');

// function main() {
//     var file = "hello.txt";
//     fs.appendFileSync(file, "Hello world\n");
// }
// main();

// var express = require("express");
// var app = express();
// app.use(express.static("Lesson3"));
// app.get("/", function (req, res) {
//     res.redirect("Programming-3");
// });
// app.listen(7877, function () {
//     console.log("Example is running on port 7877");
// });

// var fs = require('fs');
// var dummyText = "Apple yep";
// function main() {
//     fs.writeFileSync("dummytext.txt", dummyText);
//     var text = fs.readFileSync("dummytext.txt").toString();
//     console.log(dummyText == text);
//     console.log(text);
//     fs.writeFileSync("undummytext.txt",
//         text.replace("Apple", "Microsoft")
//     );
// }
// main();

// app.get("/name/:name", function (req, res) {
//     var name = req.params.name;
//     res.send("<h1>Hello " + name + "</h1>");
// });