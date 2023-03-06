"use strict";
// implementamos la clase RegistroAutomotor debe soportar → 
exports.__esModule = true;
exports.RegistroAutomotor = void 0;
//mostrar stock/consultar/borrar/actualziar/DarDeAlta
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
    }
    RegistroAutomotor.prototype.stock = function (array) {
        console.log(array);
    };
    RegistroAutomotor.prototype.consultar = function (auto, array) {
        var foundCar = array.filter(function (auto) { return (array['marca'] === auto) || (array['model'] === auto) || (array['engine'] === auto) || (array['año'] === auto); });
        if (foundCar) {
            foundCar.forEach(function (item) { return console.log(item); });
            return foundCar;
        }
        else {
            console.log("no se encontro el tipo de vehiculo especificado");
        }
    };
    RegistroAutomotor.prototype.borrar = function (auto, array) {
        var foundCar = array.findIndex(function (auto) { return (array['marca'] === auto) || (array['model'] === auto) || (array['engine'] === auto) || (array['año'] === auto); });
        if (foundCar) {
            array.splice(foundCar, 1);
            console.log(auto, 'fue eliminado de la lista');
            console.log(array);
        }
        else {
            console.log(auto, 'no ha sido eliminado');
        }
    };
    RegistroAutomotor.prototype.actualziar = function (auto, array, dato) {
        var modificar = array.filter(function (auto) { return (array['marca'] === auto) || (array['model'] === auto) || (array['engine'] === auto) || (array['año'] === auto); }); //this.consultar(auto:string, array:Car[])
        if (modificar) {
            dato = modificar;
            console.log("el vehiculo ".concat(auto, " a sido modificado por ").concat(dato));
        }
        else {
            console.log('no se a realizado ninguna modificacion');
        }
    };
    RegistroAutomotor.prototype.DarDeAlta = function (auto, array) {
        array.push(auto);
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
//export default RegistroAutomotor;
