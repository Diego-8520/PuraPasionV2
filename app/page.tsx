import Link from 'next/link'
import Image from 'next/image'
import {
  getProductos,
  getImagenPrincipal,
  getPrecioMinimo,
} from '@/services/productos'
import ProductCard from '@/components/catalogo/ProductCard'

const FD = { fontFamily: 'var(--font-bebas), sans-serif' }
const FB = { fontFamily: 'var(--font-barlow), sans-serif' }

const BENEFICIOS = [
  {
    titulo: 'Envíos a Colombia',
    desc: 'A todo el país',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="1.5" />
        <circle cx="18.5" cy="18.5" r="1.5" />
      </svg>
    ),
  },
  {
    titulo: 'Pago contraentrega',
    desc: 'Paga al recibir',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    titulo: 'Atención WhatsApp',
    desc: 'Respuesta rápida',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.549 4.099 1.51 5.827L0 24l6.335-1.668A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.815 9.815 0 01-5.025-1.372l-.36-.214-3.735.984 1.002-3.636-.236-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
      </svg>
    ),
  },
  {
    titulo: 'Entrega en Cali',
    desc: 'Barrio Alcázares',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

export default async function Home() {
  const productos = await getProductos().catch(() => [])

  const nuevos = productos.slice(0, 8)
  const destacados = productos.filter((p) => p.badge_manual).slice(0, 4)

  const categorias = [
    ...new Map(
      productos
        .filter((p) => p.categorias)
        .map((p) => [p.categorias!.id, p.categorias!]),
    ).values(),
  ]

  const heroProducto =
    productos.find((p) => getImagenPrincipal(p) !== null) ?? productos[0] ?? null
  const heroImagen = heroProducto ? getImagenPrincipal(heroProducto) : null

  const formatCOP = (n: number) =>
    new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(n)

  return (
    <main style={{ background: '#0A0A0A', color: '#EFEFEF' }}>

      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative border-b border-[#1A1A1A] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
            maskImage: 'linear-gradient(to bottom, black 55%, transparent)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-12 items-center min-h-[85dvh] py-24">

            {/* Left */}
            <div className="flex flex-col justify-center">
              <p
                className="text-xs font-bold tracking-[4px] uppercase mb-6"
                style={{ ...FB, color: '#505050' }}
              >
                Pura Pasión Fútbol Store — Cali, Colombia
              </p>

              <h1
                className="text-[#EFEFEF] leading-[0.88]"
                style={{
                  ...FD,
                  fontSize: 'clamp(62px, 9.5vw, 124px)',
                  letterSpacing: '2px',
                }}
              >
                Para cancha,
                <br />
                calle y
                <br />
                colección.
              </h1>

              <p
                className="mt-6 leading-relaxed max-w-md"
                style={{ ...FB, color: '#686868', fontSize: '17px' }}
              >
                Camisetas de clubes, selecciones y retro. Todos los estilos,
                todos los equipos, ninguna hinchada de por medio.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/catalogo"
                  className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                  style={{ ...FB, background: '#EFEFEF', color: '#0A0A0A' }}
                >
                  Explorar catálogo
                </Link>

                <Link
                  href="/catalogo"
                  className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-bold tracking-widest uppercase border border-[#2A2A2A] hover:border-[#444] transition-all duration-200 active:scale-[0.98]"
                  style={{ ...FB, color: '#EFEFEF' }}
                >
                  Ver novedades
                </Link>
              </div>

              {/* Stats bar */}
              <div className="mt-12 flex items-center gap-8 pt-8 border-t border-[#1A1A1A]">
                {[
                  { val: `${productos.length}+`, label: 'Productos' },
                  { val: '160+', label: 'Equipos' },
                  { val: 'COL', label: 'Envíos' },
                ].map((s, i) => (
                  <div key={s.label} className="flex items-center gap-8">
                    {i > 0 && (
                      <div className="w-px h-8 bg-[#1E1E1E]" />
                    )}
                    <div>
                      <p
                        style={{
                          ...FD,
                          fontSize: '28px',
                          letterSpacing: '1px',
                          lineHeight: 1,
                        }}
                      >
                        {s.val}
                      </p>
                      <p
                        className="text-xs font-bold tracking-widest uppercase mt-1"
                        style={{ ...FB, color: '#505050' }}
                      >
                        {s.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — hero product image */}
            <div className="hidden lg:flex items-center justify-end">
              {heroImagen ? (
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: '400px',
                    height: '520px',
                    borderRadius: '24px',
                    border: '1px solid #1E1E1E',
                  }}
                >
                  <Image
                    src={heroImagen}
                    alt={heroProducto?.nombre ?? 'Producto destacado'}
                    fill
                    unoptimized
                    className="object-cover"
                    priority
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.15) 45%, transparent 70%)',
                    }}
                  />
                  {heroProducto && (
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      {heroProducto.badge_manual && (
                        <span
                          className="inline-block px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3"
                          style={{ ...FB, background: '#D4AF37', color: '#0A0A0A' }}
                        >
                          {heroProducto.badge_manual}
                        </span>
                      )}
                      <p
                        className="text-xs font-bold tracking-widest uppercase mb-1"
                        style={{ ...FB, color: 'rgba(239,239,239,0.45)' }}
                      >
                        {heroProducto.equipos?.nombre ??
                          heroProducto.categorias?.nombre ??
                          ''}
                      </p>
                      <p
                        style={{
                          ...FD,
                          fontSize: '26px',
                          lineHeight: 1.05,
                          letterSpacing: '1px',
                          color: '#EFEFEF',
                        }}
                      >
                        {heroProducto.nombre}
                      </p>
                      {getPrecioMinimo(heroProducto) > 0 && (
                        <p
                          className="mt-1.5"
                          style={{
                            ...FD,
                            fontSize: '20px',
                            color: '#EFEFEF',
                            letterSpacing: '0.5px',
                          }}
                        >
                          {formatCOP(getPrecioMinimo(heroProducto))}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div
                  style={{
                    width: '400px',
                    height: '520px',
                    borderRadius: '24px',
                    border: '1px solid #1A1A1A',
                    background: '#141414',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg
                    width="72"
                    height="72"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(239,239,239,0.08)"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6l-2.5 4H6l2 3.5-1 3.5 5-1.5 5 1.5-1-3.5 2-3.5h-3.5L12 6z" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES ────────────────────────────────────────────────── */}
      <section className="border-b border-[#1A1A1A] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p
                className="text-xs font-bold tracking-[4px] uppercase mb-2"
                style={{ ...FB, color: '#505050' }}
              >
                Explorar
              </p>
              <h2
                style={{
                  ...FD,
                  fontSize: 'clamp(26px, 3.5vw, 38px)',
                  letterSpacing: '1.5px',
                }}
              >
                Compra por categoría
              </h2>
            </div>
            <Link
              href="/catalogo"
              className="text-xs font-bold tracking-widest uppercase shrink-0 transition-colors hover:text-[#EFEFEF]"
              style={{ ...FB, color: '#505050' }}
            >
              Ver todo
            </Link>
          </div>

          <div className="flex flex-wrap gap-2">
            {(categorias.length > 0
              ? categorias.map((c) => ({ id: c.id, nombre: c.nombre }))
              : ['Clubes', 'Selecciones', 'Retro', 'Entrenamiento', 'Ofertas'].map(
                  (n) => ({ id: n, nombre: n }),
                )
            ).map((cat) => (
              <Link
                key={cat.id}
                href="/catalogo"
                className="px-5 py-2.5 rounded-full text-sm font-bold tracking-widest uppercase border border-[#242424] hover:border-[#3A3A3A] hover:bg-[#141414] transition-all duration-200"
                style={{ ...FB, color: '#EFEFEF' }}
              >
                {cat.nombre}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NUEVOS INGRESOS ───────────────────────────────────────────── */}
      {nuevos.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between gap-4 mb-10">
              <div>
                <p
                  className="text-xs font-bold tracking-[4px] uppercase mb-2"
                  style={{ ...FB, color: '#505050' }}
                >
                  Llegaron
                </p>
                <h2
                  style={{
                    ...FD,
                    fontSize: 'clamp(26px, 3.5vw, 38px)',
                    letterSpacing: '1.5px',
                  }}
                >
                  Nuevos ingresos
                </h2>
              </div>
              <Link
                href="/catalogo"
                className="text-xs font-bold tracking-widest uppercase shrink-0 transition-colors hover:text-[#EFEFEF]"
                style={{ ...FB, color: '#505050' }}
              >
                Ver todo
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {nuevos.map((p) => (
                <ProductCard key={p.id} producto={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── BRAND BANNER ──────────────────────────────────────────────── */}
      <section
        className="border-y border-[#1A1A1A] py-20 px-6"
        style={{ background: '#141414' }}
      >
        <div className="max-w-5xl mx-auto">
          <p
            className="text-xs font-bold tracking-[4px] uppercase mb-5"
            style={{ ...FB, color: '#505050' }}
          >
            Pura Pasión
          </p>
          <h2
            className="text-[#EFEFEF] leading-[0.9]"
            style={{
              ...FD,
              fontSize: 'clamp(38px, 6.5vw, 88px)',
              letterSpacing: '2px',
            }}
          >
            Ropa futbolera
            <br />
            sin casarte con
            <br />
            un solo color.
          </h2>
          <p
            className="mt-6 leading-relaxed max-w-lg"
            style={{ ...FB, color: '#606060', fontSize: '15px' }}
          >
            Para la cancha, la calle y la colección. Encuentra tu camiseta por
            club, selección o estilo sin que tu elección defina tu hinchada.
          </p>
          <Link
            href="/catalogo"
            className="mt-8 inline-flex items-center px-7 py-3.5 rounded-full text-sm font-bold tracking-widest uppercase border border-[#2A2A2A] hover:border-[#444] hover:bg-[#1E1E1E] transition-all duration-200"
            style={{ ...FB, color: '#EFEFEF' }}
          >
            Explorar tienda
          </Link>
        </div>
      </section>

      {/* ─── MÁS VENDIDOS ──────────────────────────────────────────────── */}
      {destacados.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between gap-4 mb-10">
              <div>
                <p
                  className="text-xs font-bold tracking-[4px] uppercase mb-2"
                  style={{ ...FB, color: '#505050' }}
                >
                  Populares
                </p>
                <h2
                  style={{
                    ...FD,
                    fontSize: 'clamp(26px, 3.5vw, 38px)',
                    letterSpacing: '1.5px',
                  }}
                >
                  Más vendidos
                </h2>
              </div>
              <Link
                href="/catalogo"
                className="text-xs font-bold tracking-widest uppercase shrink-0 transition-colors hover:text-[#EFEFEF]"
                style={{ ...FB, color: '#505050' }}
              >
                Ver todo
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {destacados.map((p) => (
                <ProductCard key={p.id} producto={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── EQUIPOS POPULARES ─────────────────────────────────────────── */}
      <section
        className="border-t border-[#1A1A1A] py-14 px-6"
        style={{ background: '#0E0E0E' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p
                className="text-xs font-bold tracking-[4px] uppercase mb-2"
                style={{ ...FB, color: '#505050' }}
              >
                Busca tu camiseta
              </p>
              <h2
                style={{
                  ...FD,
                  fontSize: 'clamp(26px, 3.5vw, 38px)',
                  letterSpacing: '1.5px',
                }}
              >
                Compra por equipo
              </h2>
            </div>
            <Link
              href="/catalogo"
              className="text-xs font-bold tracking-widest uppercase shrink-0 transition-colors hover:text-[#EFEFEF]"
              style={{ ...FB, color: '#505050' }}
            >
              Ver catálogo
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {['AMÉRICA', 'NACIONAL', 'MILLONARIOS', 'REAL MADRID', 'BARCELONA', 'ARGENTINA', 'BRASIL', 'COLOMBIA'].map(
              (equipo) => (
                <Link
                  key={equipo}
                  href={`/catalogo?equipo=${encodeURIComponent(equipo)}`}
                  className="rounded-2xl border border-[#1E1E1E] bg-[#141414] px-4 py-6 text-center text-xs font-bold uppercase tracking-widest hover:border-[#3A3A3A] hover:bg-[#1A1A1A] transition-all duration-200"
                  style={{ ...FB, color: '#EFEFEF' }}
                >
                  {equipo}
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ──────────────────────────────────────────────────── */}
      <section
        className="border-t border-[#1A1A1A] py-12 px-6"
        style={{ background: '#141414' }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {BENEFICIOS.map((b) => (
            <div key={b.titulo} className="flex items-start gap-3">
              <div className="shrink-0 mt-0.5" style={{ color: '#505050' }}>
                {b.icon}
              </div>
              <div>
                <p
                  className="text-sm font-bold uppercase tracking-widest"
                  style={{ ...FB, color: '#EFEFEF' }}
                >
                  {b.titulo}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ ...FB, color: '#505050' }}
                >
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
