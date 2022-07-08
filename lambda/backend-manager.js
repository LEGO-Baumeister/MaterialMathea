const request = require("request");

var data = fs.readFileSync("https://raw.githubusercontent.com/LEGO-Baumeister/MaterialMatheaConfigs/main/Test.csv", "utf8");

data = data.split("\r\n");
fo