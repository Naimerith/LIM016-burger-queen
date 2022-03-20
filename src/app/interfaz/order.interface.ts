export interface Orders {
    detalle: Detalle[];
    fecha: Date;
    cliente: string;
    mesa: number;
    //total: number;
}
export interface Detalle {
    cantidad: number;
    nombre: string;
    tipo: string;
    total: number;
}
