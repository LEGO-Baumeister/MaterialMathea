const request = require("request");

request({
    url: "https://raw.githubusercontent.com/LEGO-Baumeister/MaterialMatheaConfigs/main/test.json",
    json: true
}, (err, response, body) => {
    console.log(body);
});