import type { Metadata } from 'next'
import { getProductos } from '@/services/productos'
import CatalogoProductos from '@/components/catalogo/CatalogoProductos'

export const metadata: Metadata = {
  title: 'Catálogo | Pura Pasión Fútbol Store',
  description:
    'Camisetas de equipos colombianos, europeos y selecciones. Envíos a toda Colombia.',
}

export default async function CatalogoPage() {
  let productos = await getProductos().catch(() => [])

  return (
    <main className="min-h-screen" style={{ background: '#0A0A0A' }}>
      {/* Page header */}
      <div
        className="relative py-14 px-4 text-center overflow-hidden"
        style={{
          background:
            'radial-gradient(ellipse at 50% -10%, rgba(204,17,17,0.2) 0%, transparent 60%), #0A0A0A',
        }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.35,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '42px 42px',
            maskImage: 'linear-gradient(to bottom, black 60%, transparent)',
          }}
        />

        <p
          className="relative text-xs font-bold tracking-[5px] uppercase mb-3"
          style={{ color: '#D4AF37', fontFamily: 'var(--font-barlow), sans-serif' }}
        >
          Pura Pasión Fútbol Store
        </p>

        <h1
          className="relative leading-none"
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(52px, 10vw, 96px)',
            letterSpacing: '4px',
            color: '#F5F5F5',
          }}
        >
          Catálogo
        </h1>

        <p
          className="relative mt-3 max-w-sm mx-auto text-sm"
          style={{ color: '#A0A0A0', fontFamily: 'var(--font-barlow), sans-serif' }}
        >
          {productos.length} producto{productos.length !== 1 ? 's' : ''} • Envíos a toda Colombia
          &nbsp;•&nbsp; Pago contraentrega
        </p>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 pb-28">
        {productos.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <span className="text-8xl" style={{ opacity: 0.2 }}>
              ⚽
            </span>
            <p
              className="text-center"
              style={{ color: '#A0A0A0', fontFamily: 'var(--font-barlow), sans-serif' }}
            >
              No hay productos disponibles en este momento.
            </p>
          </div>
        ) : (
          <CatalogoProductos productos={productos} />
        )}
      </div>
    </main>
  )
}
