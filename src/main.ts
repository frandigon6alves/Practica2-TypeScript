import Direccion from "./direccion"
import Mail from './mail'
import Telefono from "./telefono"
import Persona from "./persona"

export const finaliz = '\x1b[31m\n\t*************************************************\n\t\t\v\tDatos Finalizados\n\v\t*************************************************\n\n\x1b[0m';
const success = '\x1b[30m\x1b[41m\n\t*************************************************\n\t\t\v\tNuevos Datos\n\v\t*************************************************\x1b[0m\x1b[0m\n\n';
const newData = '\x1b[30m\x1b[42m\n\t*************************************************\n\t\t\vDatos Cambiados Satisfactoriamente\n\v\t*************************************************\x1b[0m\x1b[0m\n\n';


let persona1: Persona = new Persona("Marcos", "Marcolino Silva", 27, "01234567l", new Date("02-06-1995"), "Azul", "Masculino", [new Direccion("Avenida de aqui", 23, 2, "ALI", 33420, "Pueblo", "Casa")], [new Mail("Estudiante", "M_arcos@ali.com")], [new Telefono("Estudios", 123544544), new Telefono("Casa", 945644544)], "Trabajo");
let persona2: Persona = new Persona("Aninha", "Juli Miranda", 27, "07653321a", new Date(1995, 0o5, 11), "Rojo", "Femenino", [new Direccion("Calle Pinguim", 2, 10, "", 12520, "Aquilandia", "MAdrid"), new Direccion("C/Sin salida", 123, 0, "G", 33420, "NO SE", "MI CASA")], [new Mail("Personal", "anamiaul@mial.com")], [new Telefono("Estudios", 411242343)], "Mamis");
let persona3: Persona = new Persona("Mileide", "Afonsa", 52, "85687123f", new Date(1969, 0o0, 28), "Mileide", "Femenino", [new Direccion("Calle perdido", 54, 3, "3", 23430, "Barcelona", "Barcelona")], [new Mail("Trabajo", "Mileide_trabajo@miempresa.com"), new Mail("Casasita", "Mileide_li@miau.com")], [new Telefono("Particular", 666523444)], "Amiga");


let personas = [persona1, persona2, persona3];

function showData(personas: any): void {
    for (let i = 0; i < personas.length; i++) {
        personas[i].mostrarDatos();
    }
}

let toFind: string[] = ['01234567l', '07654321j', '24687333f'];

function encontrarMailyPushear(toFind: string, personas: any): void {

    console.log(`\x1b[30m\n\t*************************************************\n\t\t\vDNI a añadir datos ------>  ${toFind}\n\v\t*************************************************\x1b[0m\n\n`);

    for (let i = 0; i < personas.length; i++) {
        if (personas[i].pushDATA(toFind) == true) {
            console.log(newData);
            personas[i].mostrarDatos();
            console.log(success);
        }
    }
    showData(personas);
};

function encontrarMailyCambiar(toFind: string, personas: any): void {

    console.log(`\x1b[30m\n\t*************************************************\n\t\t\vDNI a cambiar los datos ------>  ${toFind}\n\v\t*************************************************\x1b[0m\n\n`);

    for (let i = 0; i < personas.length; i++) {
        if (personas[i].changeDATA(toFind) == true) {
            console.log(newData);
            personas[i].mostrarDatos();
            console.log(success);
        }
    }
    showData(personas);
};

showData(personas);
encontrarMailyPushear(toFind[1], personas);
encontrarMailyCambiar(toFind[1], personas);
