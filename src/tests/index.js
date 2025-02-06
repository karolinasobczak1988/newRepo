"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var port = 3000;
app.get('/', function (_, res) {
    res.send("\n    <html>\n      <head>\n        <style>\n          body {\n            background-color: purple;\n            color: white;\n            font-family: Arial, sans-serif;\n            text-align: center;\n            margin-top: 20%;\n            font-size: 36px;\n          }\n        </style>\n      </head>\n      <body>\n        <h1>Hello World</h1>\n      </body>\n    </html>\n  ");
});
app.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port));
});
