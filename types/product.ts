export interface Categoria {
  id: string
  nombre: string
}

export interface Equipo {
  id: string
  nombre: string
  escudo_url: string | null
  tipo: string | null
}

export interface Calidad {
  id: string
  nombre: string
}

export interface Imagen {
  id: string
  url: string
  orden: number
}

export interface TallaStock {
  id: string
  talla: string
  cantidad: number
  precio: number
}

export interface Producto {
  id: string
  nombre: string
  descripcion: string | null
  temporada: string | null
  badge_manual: string | null
  activo: boolean
  categorias: Categoria | null
  equipos: Equipo | null
  calidades: Calidad | null
  imagenes: Imagen[]
  tallas_stock: TallaStock[]
}
