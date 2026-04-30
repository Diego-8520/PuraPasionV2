export type Liga = {
  id: string;
  nombre: string;
  pais_id: string | null;
  es_selecciones: boolean;
  creado_en: string;
};

export type Pais = {
  id: string;
  nombre: string;
  bandera_url: string | null;
  creado_en: string;
};

export type Equipo = {
  id: string;
  nombre: string;
  escudo_url: string | null;
  pais_id: string;
  liga_id: string | null;
  tipo: "club" | "seleccion";
  creado_en: string;
  // relaciones
  pais?: Pais;
  liga?: Liga;
};

export type Categoria = {
  id: string;
  nombre: string;
  creado_en: string;
};

export type Calidad = {
  id: string;
  nombre: string;
  creado_en: string;
};

export type Imagen = {
  id: string;
  producto_id: string;
  url: string;
  orden: number;
  creado_en: string;
};

export type TallaStock = {
  id: string;
  producto_id: string;
  talla: "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
  cantidad: number;
  precio: number;
  creado_en: string;
};

export type Producto = {
  id: string;
  nombre: string;
  descripcion: string | null;
  categoria_id: string;
  equipo_id: string | null;
  pais_id: string | null;
  calidad_id: string;
  temporada: string | null;
  badge_manual:
    | "NUEVO"
    | "OFERTA"
    | "DESTACADO"
    | "MAS VENDIDO"
    | "ULTIMAS UNIDADES"
    | null;
  activo: boolean;
  creado_en: string;
  actualizado_en: string;
  // relaciones
  categoria?: Categoria;
  equipo?: Equipo;
  calidad?: Calidad;
  imagenes?: Imagen[];
  tallas_stock?: TallaStock[];
};

// Badge efectivo (lógica del frontend)
export function getBadge(producto: Producto): string | null {
  if (producto.badge_manual) return producto.badge_manual;
  const dias = Math.floor(
    (Date.now() - new Date(producto.creado_en).getTime()) /
      (1000 * 60 * 60 * 24),
  );
  return dias < 30 ? "NUEVO" : null;
}
