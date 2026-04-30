import { supabase } from "./supabase";
import { Producto, Equipo, Liga, Categoria, Calidad } from "@/types";

// ─── PRODUCTOS ───────────────────────────────────────────────

export async function getProductos() {
  const { data, error } = await supabase
    .from("productos")
    .select(
      `
      *,
      categoria:categorias(*),
      equipo:equipos(*),
      calidad:calidades(*),
      imagenes(*),
      tallas_stock(*)
    `,
    )
    .eq("activo", true)
    .order("creado_en", { ascending: false });

  if (error) throw error;
  return data as Producto[];
}

export async function getProductoById(id: string) {
  const { data, error } = await supabase
    .from("productos")
    .select(
      `
      *,
      categoria:categorias(*),
      equipo:equipos(*, pais:paises(*), liga:ligas(*)),
      calidad:calidades(*),
      imagenes(*),
      tallas_stock(*)
    `,
    )
    .eq("id", id)
    .eq("activo", true)
    .single();

  if (error) throw error;
  return data as Producto;
}

export async function getProductosByEquipo(equipoId: string) {
  const { data, error } = await supabase
    .from("productos")
    .select(
      `
      *,
      categoria:categorias(*),
      equipo:equipos(*),
      calidad:calidades(*),
      imagenes(*),
      tallas_stock(*)
    `,
    )
    .eq("equipo_id", equipoId)
    .eq("activo", true)
    .order("creado_en", { ascending: false });

  if (error) throw error;
  return data as Producto[];
}

export async function getProductosByLiga(ligaId: string) {
  const { data, error } = await supabase
    .from("productos")
    .select(
      `
      *,
      categoria:categorias(*),
      equipo:equipos(*),
      calidad:calidades(*),
      imagenes(*),
      tallas_stock(*)
    `,
    )
    .eq("equipo.liga_id", ligaId)
    .eq("activo", true)
    .order("creado_en", { ascending: false });

  if (error) throw error;
  return data as Producto[];
}

// ─── EQUIPOS ─────────────────────────────────────────────────

export async function getEquipos() {
  const { data, error } = await supabase
    .from("equipos")
    .select(`*, pais:paises(*), liga:ligas(*)`)
    .order("nombre");

  if (error) throw error;
  return data as Equipo[];
}

export async function getEquiposByLiga(ligaId: string) {
  const { data, error } = await supabase
    .from("equipos")
    .select(`*, pais:paises(*), liga:ligas(*)`)
    .eq("liga_id", ligaId)
    .order("nombre");

  if (error) throw error;
  return data as Equipo[];
}

// ─── LIGAS ───────────────────────────────────────────────────

export async function getLigas() {
  const { data, error } = await supabase
    .from("ligas")
    .select(`*, pais:paises(*)`)
    .eq("es_selecciones", false)
    .order("nombre");

  if (error) throw error;
  return data as Liga[];
}

// ─── CATEGORÍAS Y CALIDADES ──────────────────────────────────

export async function getCategorias() {
  const { data, error } = await supabase
    .from("categorias")
    .select("*")
    .order("nombre");

  if (error) throw error;
  return data as Categoria[];
}

export async function getCalidades() {
  const { data, error } = await supabase
    .from("calidades")
    .select("*")
    .order("nombre");

  if (error) throw error;
  return data as Calidad[];
}
