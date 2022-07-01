const fs = require("fs");

var data = fs.readFileSync("https://raw.githubusercontent.com/LEGO-Baumeister/MaterialMatheaConfigs/main/Test.csv", "utf8");

data = data.split("\r\n");
for (let i in data) {
    data[i] = data[i].split(",");
}
