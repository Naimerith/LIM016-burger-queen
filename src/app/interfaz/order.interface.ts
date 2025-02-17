export interface Orders {
    detalle: Detalle[];
    fecha: Date;
    cliente: string;
    mesa: number;
    mesero: string;
    id?: string;
    status: string;
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
    id: string;
}

export interface ProductsCards {
  img: string;
  nombre: string;
  precio: number
}
