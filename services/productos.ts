import { supabase } from '@/lib/supabase'
import type { Producto } from '@/types/product'

export async function getProductos(): Promise<Producto[]> {
  const { data, error } = await supabase
    .from('productos')
    .select(`
      id,
      nombre,
      descripcion,
      temporada,
      badge_manual,
      activo,
      categorias (id, nombre),
      equipos (id, nombre, escudo_url, tipo),
      calidades (id, nombre),
      imagenes (id, url, orden),
      tallas_stock (id, talla, cantidad, precio)
    `)
    .eq('activo', true)
    .order('creado_en', { ascending: false })
    .order('orden', { foreignTable: 'imagenes', ascending: true })

  console.log('Productos desde Supabase:', data)
  if (error) throw new Error(error.message)
  return (data ?? []) as unknown as Producto[]
}

export function getPrecioMinimo(producto: Producto): number {
  if (!producto.tallas_stock.length) return 0
  return Math.min(...producto.tallas_stock.map((t) => t.precio))
}

export function getStockTotal(producto: Producto): number {
  return producto.tallas_stock.reduce((sum, t) => sum + t.cantidad, 0)
}

export function getImagenPrincipal(producto: Producto): string | null {
  if (!producto.imagenes.length) return null
  return [...producto.imagenes].sort((a, b) => a.orden - b.orden)[0].url
}

export function getWhatsappUrl(producto: Producto): string {
  const text = encodeURIComponent(`Hola! Quiero pedir: ${producto.nombre}`)
  return `https://wa.me/573057510901?text=${text}`
}
