const request = require("request");

const getLocation = function(id) {
    request({
    url: "https://raw.githubusercontent.com/LEGO-Baumeister/MaterialMatheaConfigs/main/test.json",
    json: true
}, (err, response, body) => {
    console.log(body);
});
}

