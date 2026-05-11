import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto | Pura Pasión Fútbol Store',
  description:
    'Visítanos en Cali o escríbenos por WhatsApp. Tienda física en Barrio Alcázares, Cali. Envíos contra entrega a todo Colombia.',
}

const FD = { fontFamily: 'var(--font-bebas), sans-serif' }
const FB = { fontFamily: 'var(--font-barlow), sans-serif' }

const WA_MESSAGE = encodeURIComponent(
  'Hola, quiero más información sobre las camisetas de Pura Pasión.',
)
const WA1_URL = `https://wa.me/573057510901?text=${WA_MESSAGE}`
const WA2_URL = `https://wa.me/573043401416?text=${WA_MESSAGE}`

const BENEFITS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.549 4.099 1.51 5.827L0 24l6.335-1.668A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.815 9.815 0 01-5.025-1.372l-.36-.214-3.735.984 1.002-3.636-.236-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
      </svg>
    ),
    titulo: 'Atención directa',
    desc: 'Hablás con nosotros, sin intermediarios ni bots.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    titulo: 'Entrega en Cali',
    desc: 'Recogida o entrega inmediata en Barrio Alcázares.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="1.5" />
        <circle cx="18.5" cy="18.5" r="1.5" />
      </svg>
    ),
    titulo: 'Pago contra entrega',
    desc: 'Envíos a todo Colombia. Pagás al recibir tu pedido.',
  },
]

export default function ContactoPage() {
  return (
    <main style={{ background: '#0A0A0A', color: '#EFEFEF', minHeight: '100vh' }}>

      {/* ─── HEADER ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden border-b border-[#1A1A1A] py-20 px-6"
        style={{
          background: 'linear-gradient(180deg, #0D0D0A 0%, #0A0A0A 100%)',
        }}
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.016) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.016) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
            maskImage: 'linear-gradient(to bottom, black 60%, transparent)',
          }}
        />
        {/* Gold ambient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(212, 175, 55, 0.05) 0%, transparent 60%)',
          }}
        />

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span
              style={{
                display: 'inline-block',
                width: '32px',
                height: '2px',
                background: '#D4AF37',
                borderRadius: '1px',
              }}
            />
            <p
              className="text-xs font-bold tracking-[4px] uppercase"
              style={{ ...FB, color: '#686868' }}
            >
              Pura Pasión — Cali, Colombia
            </p>
            <span
              style={{
                display: 'inline-block',
                width: '32px',
                height: '2px',
                background: '#D4AF37',
                borderRadius: '1px',
              }}
            />
          </div>

          <h1
            className="text-[#EFEFEF] leading-none"
            style={{
              ...FD,
              fontSize: 'clamp(64px, 10vw, 120px)',
              letterSpacing: '4px',
            }}
          >
            Contacto
          </h1>

          <p
            className="mt-5 leading-relaxed mx-auto max-w-2xl"
            style={{ ...FB, color: '#686868', fontSize: '16px' }}
          >
            Visítanos en Cali o pide tu camiseta por WhatsApp. Tenemos entrega
            inmediata en Cali y envíos contra entrega a todo Colombia.
          </p>
        </div>
      </section>

      {/* ─── MAIN SECTION ───────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* ── LEFT: Contact info ── */}
          <div className="flex flex-col gap-5">

            {/* WhatsApp numbers */}
            <div
              className="rounded-2xl p-6"
              style={{ background: '#111111', border: '1px solid #1E1E1E' }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span style={{ color: '#25D366' }}>
                  <WAIconFull />
                </span>
                <h2
                  className="leading-none"
                  style={{ ...FD, fontSize: '22px', letterSpacing: '1.5px', color: '#EFEFEF' }}
                >
                  WhatsApp
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                {/* WA #1 */}
                <div
                  className="flex items-center justify-between gap-4 rounded-xl p-4"
                  style={{ background: '#181818', border: '1px solid #242424' }}
                >
                  <div>
                    <p
                      className="text-xs font-bold tracking-[2.5px] uppercase mb-1"
                      style={{ ...FB, color: '#505050' }}
                    >
                      Línea principal
                    </p>
                    <p
                      style={{ ...FD, fontSize: '24px', letterSpacing: '1px', color: '#EFEFEF' }}
                    >
                      +57 305 751 0901
                    </p>
                  </div>
                  <a
                    href={WA1_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Escribir al WhatsApp principal"
                    className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
                    style={{
                      background: 'rgba(37, 211, 102, 0.12)',
                      border: '1px solid rgba(37, 211, 102, 0.25)',
                      color: '#25D366',
                    }}
                  >
                    <ChatIcon />
                  </a>
                </div>

                {/* WA #2 */}
                <div
                  className="flex items-center justify-between gap-4 rounded-xl p-4"
                  style={{ background: '#181818', border: '1px solid #242424' }}
                >
                  <div>
                    <p
                      className="text-xs font-bold tracking-[2.5px] uppercase mb-1"
                      style={{ ...FB, color: '#505050' }}
                    >
                      Línea secundaria
                    </p>
                    <p
                      style={{ ...FD, fontSize: '24px', letterSpacing: '1px', color: '#EFEFEF' }}
                    >
                      +57 304 340 1416
                    </p>
                  </div>
                  <a
                    href={WA2_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Escribir al WhatsApp secundario"
                    className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
                    style={{
                      background: 'rgba(37, 211, 102, 0.12)',
                      border: '1px solid rgba(37, 211, 102, 0.25)',
                      color: '#25D366',
                    }}
                  >
                    <ChatIcon />
                  </a>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-5">
                <a
                  href={WA1_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2.5 rounded-xl font-bold uppercase tracking-widest transition-all duration-200 active:scale-[0.98] hover:opacity-90"
                  style={{
                    ...FB,
                    fontSize: '13px',
                    minHeight: '50px',
                    background: '#25D366',
                    color: '#fff',
                    boxShadow: '0 6px 20px rgba(37,211,102,0.22)',
                  }}
                >
                  <WAIconSmall />
                  Escribir al WhatsApp 1
                </a>
                <a
                  href={WA2_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2.5 rounded-xl font-bold uppercase tracking-widest border transition-all duration-200 active:scale-[0.98] hover:bg-[rgba(37,211,102,0.06)]"
                  style={{
                    ...FB,
                    fontSize: '13px',
                    minHeight: '50px',
                    background: 'transparent',
                    color: '#25D366',
                    borderColor: 'rgba(37,211,102,0.28)',
                  }}
                >
                  <WAIconSmall />
                  Escribir al WhatsApp 2
                </a>
              </div>
            </div>

            {/* Address */}
            <div
              className="rounded-2xl p-6"
              style={{ background: '#111111', border: '1px solid #1E1E1E' }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span style={{ color: '#D4AF37' }}>
                  <PinIcon />
                </span>
                <h2
                  className="leading-none"
                  style={{ ...FD, fontSize: '22px', letterSpacing: '1.5px', color: '#EFEFEF' }}
                >
                  Dirección
                </h2>
              </div>

              <p
                className="leading-snug mb-1"
                style={{ ...FD, fontSize: '22px', letterSpacing: '0.5px', color: '#EFEFEF' }}
              >
                Barrio Alcázares
              </p>
              <p style={{ ...FB, color: '#686868', fontSize: '14px' }}>
                Cali, Valle del Cauca, Colombia
              </p>
            </div>

            {/* Commercial info */}
            <div
              className="rounded-2xl p-6"
              style={{ background: '#111111', border: '1px solid #1E1E1E' }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span style={{ color: '#D4AF37' }}>
                  <StoreIcon />
                </span>
                <h2
                  className="leading-none"
                  style={{ ...FD, fontSize: '22px', letterSpacing: '1.5px', color: '#EFEFEF' }}
                >
                  Información comercial
                </h2>
              </div>

              <ul className="flex flex-col gap-3">
                {[
                  { icon: <StoreIcon />, text: 'Tienda física en Cali' },
                  { icon: <BoltIcon />, text: 'Entrega inmediata en Cali' },
                  { icon: <TruckIcon />, text: 'Envíos pago contra entrega a todo el país' },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <span
                      className="shrink-0 flex items-center justify-center w-8 h-8 rounded-lg"
                      style={{
                        background: '#1A1A1A',
                        border: '1px solid #242424',
                        color: '#D4AF37',
                      }}
                    >
                      {item.icon}
                    </span>
                    <span
                      className="font-bold text-sm uppercase tracking-widest"
                      style={{ ...FB, color: '#EFEFEF' }}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── RIGHT: Map ── */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div
              className="overflow-hidden rounded-2xl"
              style={{
                border: '1px solid rgba(212, 175, 55, 0.2)',
                boxShadow: '0 16px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(0,0,0,0.4)',
                aspectRatio: '4/3',
                position: 'relative',
              }}
            >
              {/* Map label */}
              <div
                className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-lg"
                style={{
                  background: 'rgba(10,10,10,0.85)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <span style={{ color: '#D4AF37' }}>
                  <PinIconSm />
                </span>
                <span
                  className="font-bold uppercase tracking-widest text-xs"
                  style={{ ...FB, color: '#EFEFEF' }}
                >
                  Alcázares, Cali
                </span>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d248.901281548891!2d-76.49121154315334!3d3.48963454511046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1778533894615!5m2!1ses!2sco"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 0,
                  display: 'block',
                  filter: 'grayscale(60%) invert(90%) hue-rotate(180deg) brightness(0.85) contrast(0.9)',
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Pura Pasión Fútbol Store — Barrio Alcázares, Cali"
              />
            </div>

            {/* Below map CTA */}
            <a
              href={WA1_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full mt-4 rounded-xl font-bold uppercase tracking-widest transition-all duration-200 active:scale-[0.98] hover:opacity-90"
              style={{
                ...FB,
                fontSize: '14px',
                minHeight: '52px',
                background: '#25D366',
                color: '#fff',
                boxShadow: '0 8px 24px rgba(37,211,102,0.25)',
              }}
            >
              <WAIconSmall />
              Pedir mi camiseta por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM STRIP ───────────────────────────────────────────── */}
      <section
        className="border-t border-[#1A1A1A] py-14 px-6"
        style={{
          background: 'linear-gradient(180deg, #0D0D0A 0%, #0A0A0A 100%)',
          backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.04) 0%, transparent 55%)',
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="text-xs font-bold tracking-[4px] uppercase mb-3"
              style={{ ...FB, color: '#505050' }}
            >
              Por qué elegirnos
            </p>
            <h2
              className="leading-tight"
              style={{
                ...FD,
                fontSize: 'clamp(28px, 5vw, 52px)',
                letterSpacing: '2px',
                color: '#EFEFEF',
              }}
            >
              Compra fácil, rápido y seguro
              <br />
              <span style={{ color: '#25D366' }}>por WhatsApp</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {BENEFITS.map((b) => (
              <div
                key={b.titulo}
                className="flex flex-col items-center text-center gap-4 rounded-2xl p-6"
                style={{ background: '#111111', border: '1px solid #1E1E1E' }}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
                  style={{
                    background: '#181818',
                    border: '1px solid #242424',
                    color: '#D4AF37',
                  }}
                >
                  {b.icon}
                </div>
                <div>
                  <p
                    className="font-bold uppercase tracking-widest text-sm mb-1"
                    style={{ ...FB, color: '#EFEFEF' }}
                  >
                    {b.titulo}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ ...FB, color: '#505050' }}
                  >
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

/* ── Icons ───────────────────────────────────────────────────────── */

function WAIconFull() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.549 4.099 1.51 5.827L0 24l6.335-1.668A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.815 9.815 0 01-5.025-1.372l-.36-.214-3.735.984 1.002-3.636-.236-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
    </svg>
  )
}

function WAIconSmall() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.549 4.099 1.51 5.827L0 24l6.335-1.668A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.815 9.815 0 01-5.025-1.372l-.36-.214-3.735.984 1.002-3.636-.236-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PinIconSm() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function StoreIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function BoltIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="M16 8h4l3 5v3h-7V8z" />
      <circle cx="5.5" cy="18.5" r="1.5" />
      <circle cx="18.5" cy="18.5" r="1.5" />
    </svg>
  )
}
