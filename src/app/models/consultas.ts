
export class Consultas {
// el ? indica que puede llegar a venir como no venir
    _id?: number;
    nombre: string;
    email: string;
    whatsapp: number;
    fecha_ingreso: Date;
    fecha_salida: Date;
    mensaje: string;

    constructor(
        nombre: string,
        email: string,
        whatsapp: number,
        fecha_ingreso: Date,
        fecha_salida: Date,
        mensaje: string,

    ){
        this.nombre = nombre;
        this.email = email;
        this.whatsapp = whatsapp;
        this.fecha_ingreso = fecha_ingreso;
        this.fecha_salida = fecha_salida;
        this.mensaje = mensaje;
    }
}