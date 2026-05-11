import Link from 'next/link'
import Image from 'next/image'

const WHATSAPP_URL =
  'https://wa.me/573057510901?text=Hola!%20Quiero%20ver%20el%20catalogo%20de%20Pura%20Pasion'

const FD = { fontFamily: 'var(--font-bebas), sans-serif' }
const FB = { fontFamily: 'var(--font-barlow), sans-serif' }

const NAV = [
  { label: 'Catalogo', href: '/catalogo' },
  { label: 'Ofertas', href: '/catalogo' },
  { label: 'Novedades', href: '/catalogo' },
  { label: 'Contacto', href: '/contacto' },
]

const INFO = [
  'Cali, Colombia — Barrio Alcazares',
  'Envios a toda Colombia',
  'Pago contraentrega',
  'Atencion por WhatsApp',
]

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #080808 100%)', borderTop: '1px solid rgba(212, 175, 55, 0.12)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="relative w-11 h-11 shrink-0">
              <Image
                src="/logoprincipal.png"
                alt="Pura Pasion"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <p style={{ ...FD, fontSize: '26px', letterSpacing: '1px', lineHeight: 1 }}>
                Pura Pasion
              </p>
              <p
                style={{
                  ...FB,
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  color: '#404040',
                  textTransform: 'uppercase',
                  marginTop: '2px',
                }}
              >
                Futbol Store
              </p>
            </div>
          </div>

          <p
            className="leading-relaxed max-w-xs text-sm"
            style={{ ...FB, color: '#484848' }}
          >
            Tienda de camisetas futboleras en Cali. Clubes, selecciones y retro
            para todos los equipos.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full text-sm font-bold tracking-widest uppercase transition-opacity hover:opacity-80"
            style={{
              ...FB,
              background: 'rgba(37,211,102,0.1)',
              color: '#25D366',
              border: '1px solid rgba(37,211,102,0.22)',
            }}
          >
            <WAIcon />
            WhatsApp
          </a>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-3">
          <p
            className="text-xs font-bold tracking-[3px] uppercase mb-2"
            style={{ ...FB, color: '#383838' }}
          >
            Tienda
          </p>
          {NAV.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-bold tracking-widest uppercase transition-colors hover:text-[#EFEFEF]"
              style={{ ...FB, color: '#484848' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Info */}
        <div className="flex flex-col gap-3">
          <p
            className="text-xs font-bold tracking-[3px] uppercase mb-2"
            style={{ ...FB, color: '#383838' }}
          >
            Informacion
          </p>
          {INFO.map((item) => (
            <p
              key={item}
              className="text-sm"
              style={{ ...FB, color: '#484848' }}
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between gap-2"
        style={{ borderTop: '1px solid #141414' }}
      >
        <p style={{ ...FB, color: '#383838', fontSize: '12px' }}>
          &copy; 2025 Pura Pasion Futbol Store. Cali, Colombia.
        </p>
        <p style={{ ...FB, color: '#303030', fontSize: '12px' }}>
          Pagos y envios seguros en toda Colombia
        </p>
      </div>
    </footer>
  )
}

function WAIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.549 4.099 1.51 5.827L0 24l6.335-1.668A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.815 9.815 0 01-5.025-1.372l-.36-.214-3.735.984 1.002-3.636-.236-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
    </svg>
  )
}
