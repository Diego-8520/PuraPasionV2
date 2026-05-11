import type { Metadata } from 'next'
import { getProductos } from '@/services/productos'
import CatalogoProductos from '@/components/catalogo/CatalogoProductos'

const FD = { fontFamily: 'var(--font-bebas), sans-serif' }
const FB = { fontFamily: 'var(--font-barlow), sans-serif' }

export const metadata: Metadata = {
  title: 'Catalogo | Pura Pasion Futbol Store',
  description:
    'Camisetas de equipos colombianos, europeos y selecciones. Envios a toda Colombia.',
}

export default async function CatalogoPage() {
  const productos = await getProductos().catch(() => [])

  return (
    <main className="min-h-screen" style={{ background: '#0A0A0A' }}>

      {/* ── PAGE HEADER ── */}
      <div
        className="relative py-14 px-4 text-center overflow-hidden border-b border-[#1A1A1A]"
        style={{ background: '#0A0A0A' }}
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.3,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
            maskImage: 'linear-gradient(to bottom, black 50%, transparent)',
          }}
        />

        <p
          className="relative text-xs font-bold tracking-[5px] uppercase mb-3"
          style={{ ...FB, color: '#505050' }}
        >
          Pura Pasion Futbol Store
        </p>

        <h1
          className="relative leading-none text-[#EFEFEF]"
          style={{
            ...FD,
            fontSize: 'clamp(52px, 10vw, 96px)',
            letterSpacing: '4px',
          }}
        >
          Catalogo
        </h1>

        <p
          className="relative mt-3 max-w-sm mx-auto text-sm"
          style={{ ...FB, color: '#505050' }}
        >
          {productos.length} producto{productos.length !== 1 ? 's' : ''}&nbsp;&middot;&nbsp;
          Envios a toda Colombia&nbsp;&middot;&nbsp;Pago contraentrega
        </p>
      </div>

      {/* ── PRODUCTS ── */}
      <div className="max-w-7xl mx-auto px-4 pb-28">
        {productos.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 gap-5">
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(239,239,239,0.1)"
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 2L2 6l2 2 2-2v12a2 2 0 002 2h8a2 2 0 002-2V6l2 2 2-2-4-4H6z" />
              <path d="M9 2v3m6-3v3" />
            </svg>
            <p
              className="text-center text-sm"
              style={{ ...FB, color: '#505050' }}
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
