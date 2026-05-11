'use client'

import { useState, useMemo } from 'react'
import type { Producto } from '@/types/product'
import { getPrecioMinimo } from '@/services/productos'
import ProductCard from './ProductCard'
import FiltrosCatalogo, { type Filtros } from './FiltrosCatalogo'

const FILTROS_INIT: Filtros = {
  busqueda: '',
  categoria: '',
  equipo: '',
  badge: '',
  orden: 'reciente',
}

const FB = { fontFamily: 'var(--font-barlow), sans-serif' }

interface Props {
  productos: Producto[]
}

export default function CatalogoProductos({ productos }: Props) {
  const [filtros, setFiltros] = useState<Filtros>(FILTROS_INIT)

  const categorias = useMemo(() => {
    const map = new Map<string, string>()
    for (const p of productos) {
      if (p.categorias) map.set(p.categorias.id, p.categorias.nombre)
    }
    return Array.from(map, ([id, nombre]) => ({ id, nombre }))
  }, [productos])

  const equipos = useMemo(() => {
    const map = new Map<string, string>()
    for (const p of productos) {
      if (p.equipos) map.set(p.equipos.id, p.equipos.nombre)
    }
    return Array.from(map, ([id, nombre]) => ({ id, nombre })).sort((a, b) =>
      a.nombre.localeCompare(b.nombre),
    )
  }, [productos])

  const badges = useMemo(() => {
    const set = new Set<string>()
    for (const p of productos) {
      if (p.badge_manual) set.add(p.badge_manual)
    }
    return Array.from(set).sort()
  }, [productos])

  const productosFiltrados = useMemo(() => {
    let result = [...productos]

    if (filtros.busqueda.trim()) {
      const q = filtros.busqueda.toLowerCase().trim()
      result = result.filter(
        (p) =>
          p.nombre.toLowerCase().includes(q) ||
          p.equipos?.nombre.toLowerCase().includes(q) ||
          p.categorias?.nombre.toLowerCase().includes(q) ||
          p.badge_manual?.toLowerCase().includes(q),
      )
    }

    if (filtros.categoria) {
      result = result.filter((p) => p.categorias?.id === filtros.categoria)
    }

    if (filtros.equipo) {
      result = result.filter((p) => p.equipos?.id === filtros.equipo)
    }

    if (filtros.badge) {
      result = result.filter((p) => p.badge_manual === filtros.badge)
    }

    switch (filtros.orden) {
      case 'precio_asc':
        result.sort((a, b) => getPrecioMinimo(a) - getPrecioMinimo(b))
        break
      case 'precio_desc':
        result.sort((a, b) => getPrecioMinimo(b) - getPrecioMinimo(a))
        break
      case 'nombre':
        result.sort((a, b) => a.nombre.localeCompare(b.nombre))
        break
    }

    return result
  }, [productos, filtros])

  return (
    <div className="flex flex-col gap-6">
      {/* Sticky filter bar */}
      <div
        className="sticky top-0 z-30 py-4 -mx-4 px-4"
        style={{ background: 'rgba(10,10,10,0.96)', backdropFilter: 'blur(14px)' }}
      >
        <FiltrosCatalogo
          categorias={categorias}
          equipos={equipos}
          badges={badges}
          filtros={filtros}
          total={productosFiltrados.length}
          setFiltros={setFiltros}
        />
      </div>

      {/* Empty state */}
      {productosFiltrados.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-28 gap-5">
          <svg
            width="52"
            height="52"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(239,239,239,0.12)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <p
            className="text-center text-sm"
            style={{ ...FB, color: '#606060' }}
          >
            No encontramos productos con esos filtros.
          </p>
          <button
            onClick={() => setFiltros(FILTROS_INIT)}
            className="px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase border border-[#2A2A2A] text-[#EFEFEF] transition-colors hover:border-[#3A3A3A]"
            style={FB}
          >
            Limpiar filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {productosFiltrados.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </div>
  )
}
