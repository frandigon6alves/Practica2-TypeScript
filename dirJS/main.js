"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.finaliz = void 0;
var direccion_1 = __importDefault(require("./direccion"));
var mail_1 = __importDefault(require("./mail"));
var telefono_1 = __importDefault(require("./telefono"));
var persona_1 = __importDefault(require("./persona"));
exports.finaliz = '\x1b[31m\n\t*************************************************\n\t\t\v\tDatos Finalizados\n\v\t*************************************************\n\n\x1b[0m';
var success = '\x1b[30m\x1b[41m\n\t*************************************************\n\t\t\v\tNuevos Datos\n\v\t*************************************************\x1b[0m\x1b[0m\n\n';
var newData = '\x1b[30m\x1b[42m\n\t*************************************************\n\t\t\vDatos Cambiados Satisfactoriamente\n\v\t*************************************************\x1b[0m\x1b[0m\n\n';
var persona1 = new persona_1.default("Marcos", "Marcolino Silva", 27, "01234567l", new Date("02-06-1995"), "Azul", "Masculino", [new direccion_1.default("Avenida de aqui", 23, 2, "ALI", 33420, "Pueblo", "Casa")], [new mail_1.default("Estudiante", "M_arcos@ali.com")], [new telefono_1.default("Estudios", 123544544), new telefono_1.default("Casa", 945644544)], "Trabajo");
var persona2 = new persona_1.default("Aninha", "Juli Miranda", 27, "07653321a", new Date(1995, 5, 11), "Rojo", "Femenino", [new direccion_1.default("Calle Pinguim", 2, 10, "", 12520, "Aquilandia", "MAdrid"), new direccion_1.default("C/Sin salida", 123, 0, "G", 33420, "NO SE", "MI CASA")], [new mail_1.default("Personal", "anamiaul@mial.com")], [new telefono_1.default("Estudios", 411242343)], "Mamis");
var persona3 = new persona_1.default("Mileide", "Afonsa", 52, "85687123f", new Date(1969, 0, 28), "Mileide", "Femenino", [new direccion_1.default("Calle perdido", 54, 3, "3", 23430, "Barcelona", "Barcelona")], [new mail_1.default("Trabajo", "Mileide_trabajo@miempresa.com"), new mail_1.default("Casasita", "Mileide_li@miau.com")], [new telefono_1.default("Particular", 666523444)], "Amiga");
var personas = [persona1, persona2, persona3];
function showData(personas) {
    for (var i = 0; i < personas.length; i++) {
        personas[i].mostrarDatos();
    }
}
var toFind = ['01234567l', '07654321j', '24687333f'];
function encontrarMailyPushear(toFind, personas) {
    console.log("\u001B[30m\n\t*************************************************\n\t\t\vDNI a a\u00F1adir datos ------>  ".concat(toFind, "\n\v\t*************************************************\u001B[0m\n\n"));
    for (var i = 0; i < personas.length; i++) {
        if (personas[i].pushDATA(toFind) == true) {
            console.log(newData);
            personas[i].mostrarDatos();
            console.log(success);
        }
    }
    showData(personas);
}
;
function encontrarMailyCambiar(toFind, personas) {
    console.log("\u001B[30m\n\t*************************************************\n\t\t\vDNI a cambiar los datos ------>  ".concat(toFind, "\n\v\t*************************************************\u001B[0m\n\n"));
    for (var i = 0; i < personas.length; i++) {
        if (personas[i].changeDATA(toFind) == true) {
            console.log(newData);
            personas[i].mostrarDatos();
            console.log(success);
        }
    }
    showData(personas);
}
;
showData(personas);
encontrarMailyPushear(toFind[1], personas);
encontrarMailyCambiar(toFind[1], personas);
