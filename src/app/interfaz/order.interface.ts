export interface Orders {
    detalle: Detalle[];
    fecha: Date;
    cliente: string;
    mesa: number;
    mesero: string;
    id: string;
    //total: number;
}
export interface Detalle {
    cantidad: number;
    nombre: string;
    tipo: string;
    total: number;
    id: string;
}
