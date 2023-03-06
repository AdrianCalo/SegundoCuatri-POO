"use strict";
exports.__esModule = true;
var fs = require("fs");
var Car_1 = require("./Car");
var RegistroAutomotor_1 = require("./RegistroAutomotor");
var agencia = [];
try {
    var data = fs.readFileSync("./BaseDatosAuto.json", "utf8");
    var jsonFile = JSON.parse(data);
    agencia = jsonFile.map(function (item) { return item; });
}
catch (error) { }
var camioneta = new Car_1.Car('Ford', 'renger', '2.2 turbo disel', 2018);
var registro = new RegistroAutomotor_1.RegistroAutomotor;
registro.consultar("falcon", agencia);
