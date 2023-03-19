"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var direccion_1 = __importDefault(require("./direccion"));
var mail_1 = __importDefault(require("./mail"));
var telefono_1 = __importDefault(require("./telefono"));
var main_1 = require("./main");
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, DNI, cumpleanos, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._DNI = DNI;
        this._cumpleanos = cumpleanos;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }
    Object.defineProperty(Persona.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "apellidos", {
        get: function () {
            return this._apellidos;
        },
        set: function (value) {
            this._apellidos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (value) {
            this._edad = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "DNI", {
        get: function () {
            return this._DNI;
        },
        set: function (value) {
            this._DNI = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "cumpleanos", {
        get: function () {
            return this._cumpleanos;
        },
        set: function (value) {
            this._cumpleanos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "colorFavorito", {
        get: function () {
            return this._colorFavorito;
        },
        set: function (value) {
            this._colorFavorito = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (value) {
            this._sexo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "direcciones", {
        get: function () {
            return this._direcciones;
        },
        set: function (value) {
            this._direcciones = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "mails", {
        get: function () {
            return this._mails;
        },
        set: function (value) {
            this._mails = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "telefonos", {
        get: function () {
            return this._telefonos;
        },
        set: function (value) {
            this._telefonos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "notas", {
        get: function () {
            return this._notas;
        },
        set: function (value) {
            this._notas = value;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.mostrarDNI = function () {
        var num = this._DNI.substr(0, this._DNI.length - 1);
        var letra = this._DNI.substr(this._DNI.length - 1, 1);
        letra = letra.toUpperCase();
        var DNI = "N\u00FAmero ".concat(num, " Letra ").concat(letra);
        return DNI;
    };
    Persona.prototype.mostrarDatosSubClases = function (datos) {
        for (var i = 0; i < datos.length; i++) {
            var aux = datos[i];
            console.log("\u001B[35m", aux, '\x1b[0m');
        }
    };
    Persona.prototype.mostrarFecha = function () {
        var dia = this._cumpleanos.getDate() - 1;
        var mes = this._cumpleanos.getMonth();
        var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto"];
        var fecha = "".concat(dia, " de ").concat(meses[mes]);
        return fecha;
    };
    Persona.prototype.mostrarDatos = function () {
        var mensaje = "\v\tNombre: ".concat(this._nombre, "\n\t\n        Apellidos: ").concat(this._apellidos, "\n\t\n        Edad: ").concat(this._edad, "\n\t\n        DNI: ").concat(this.mostrarDNI(), "\n\t\n        Cumplea\u00F1os: ").concat(this.mostrarFecha(), "\n\t\n        Color Favorito: ").concat(this._colorFavorito, "\n\t\n        Sexo: ").concat(this._sexo, "\n\t");
        var notas = "\n\tNotas: ".concat(this._notas, "\v");
        console.log("\u001B[36m", mensaje, '\x1b[0m');
        this.mostrarDatosSubClases(this._direcciones);
        this.mostrarDatosSubClases(this._mails);
        this.mostrarDatosSubClases(this._telefonos);
        console.log('\x1b[36m', notas, '\x1b[0m');
        console.log(main_1.finaliz);
    };
    Persona.prototype.pushDATA = function (toFind) {
        if (this._DNI == toFind) {
            this._direcciones.push(new direccion_1.default("C/Pato", 54, 40, "4", 63420, "Ticotico", "Mi"));
            this._mails.push(new mail_1.default("nuevoMail", "thisIsMyNew@Mail.com"));
            this._telefonos.push(new telefono_1.default("NuevoTelefono", parseInt('000000001')));
            return true;
        }
        return false;
    };
    Persona.prototype.changeDATA = function (toFind) {
        if (this._DNI == toFind) {
            this._direcciones = [(new direccion_1.default("C/de la gata", 64, 45, "AEIOU", parseInt('03420'), "Landia", "Barcelona"))];
            this._mails = [(new mail_1.default("mailexemplo", "exemploemail@Mail.com"))];
            this._telefonos = [(new telefono_1.default("DeleteTelefono", parseInt('010000001')))];
            return true;
        }
        return false;
    };
    return Persona;
}());
exports.default = Persona;
