'use client'

const WHATSAPP_NUMBER = '573057510901'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola!%20Quiero%20ver%20el%20catálogo%20de%20camisetas`

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: 'var(--negro)',
    }}>

      {/* Fondo con patrón de rombos */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(204,17,17,0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 50%, rgba(11,114,185,0.1) 0%, transparent 50%)
        `,
        zIndex: 0,
      }} />

      {/* Líneas decorativas diagonales */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 40px,
          rgba(255,255,255,0.02) 40px,
          rgba(255,255,255,0.02) 41px
        )`,
        zIndex: 0,
      }} />

      {/* Contenido */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        padding: '0 24px',
        maxWidth: '900px',
      }}>

        {/* Badge */}
        <div style={{
          display: 'inline-block',
          backgroundColor: 'var(--dorado)',
          color: '#000',
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '3px',
          textTransform: 'uppercase',
          padding: '6px 16px',
          marginBottom: '24px',
          animation: 'badgeGlow 4s ease-in-out infinite',
        }}>
          ★ TIENDA #1 EN CALI
        </div>

        {/* Título principal */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(64px, 12vw, 120px)',
          lineHeight: 0.9,
          letterSpacing: '4px',
          marginBottom: '16px',
          color: 'var(--blanco)',
        }}>
          VISTE TU<br />
          <span style={{
            color: 'var(--rojo)',
            WebkitTextStroke: '1px var(--rojo)',
          }}>PASIÓN</span>
        </h1>

        {/* Subtítulo */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(16px, 2.5vw, 20px)',
          fontWeight: 400,
          color: 'var(--gris-texto)',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '48px',
        }}>
          La camiseta que sientes, al precio que mereces
        </p>

        {/* Botones */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <a
            href="#catalogo"
            style={{
              backgroundColor: 'var(--rojo)',
              color: 'var(--blanco)',
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              padding: '16px 40px',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'transform 0.2s, box-shadow 0.2s',
              animation: 'pulse 3s ease-in-out 3',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(204,17,17,0.4)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Ver colección
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'transparent',
              color: 'var(--blanco)',
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              padding: '16px 40px',
              textDecoration: 'none',
              display: 'inline-block',
              border: '2px solid var(--blanco)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'var(--blanco)'
              e.currentTarget.style.color = 'var(--negro)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'var(--blanco)'
            }}
          >
            Contáctanos
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          gap: '48px',
          justifyContent: 'center',
          marginTop: '64px',
          flexWrap: 'wrap',
        }}>
          {[
            { numero: '167+', label: 'Equipos disponibles' },
            { numero: '100%', label: 'Calidad garantizada' },
            { numero: '24/7', label: 'Atención WhatsApp' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '48px',
                color: 'var(--rojo)',
                letterSpacing: '2px',
                lineHeight: 1,
              }}>
                {stat.numero}
              </div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                color: 'var(--gris-texto)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginTop: '4px',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Barra inferior decorativa */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, var(--rojo), var(--dorado), var(--azul))',
      }} />

      <style>{`
        @keyframes badgeGlow {
          0%, 100% { box-shadow: 0 0 8px rgba(212,175,55,0.4); }
          50% { box-shadow: 0 0 20px rgba(212,175,55,0.8); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 rgba(204,17,17,0); }
          50% { box-shadow: 0 0 20px rgba(204,17,17,0.6); }
        }
      `}</style>
    </section>
  )
}