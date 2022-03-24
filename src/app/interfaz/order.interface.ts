export interface Orders {
    detalle: Detalle[];
    fecha: Date;
    cliente: string;
    mesa: number;
    mesero: string;
    id: string;
    status: string;
    //total: number;
}
export interface Detalle {
    cantidad: number;
    nombre: string;
    tipo: string;
    total: number;
    id: string;
}

export interface Item {
    nombre: string;
    cantidad: number;
    categoria: string;
    precio: number;
    tipo: string;
}

