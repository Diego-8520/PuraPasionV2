'use client'

import { useState } from 'react'
import Link from 'next/link'

const WHATSAPP_NUMBER = '573057510901'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Franja superior */}
      <div style={{
        backgroundColor: 'var(--rojo)',
        padding: '8px 0',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}>
        <div style={{
          display: 'inline-block',
          animation: 'ticker 30s linear infinite',
          fontFamily: 'var(--font-body)',
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'var(--blanco)',
        }}>
          🔥 ENVÍOS A TODA COLOMBIA &nbsp;&nbsp;&nbsp; ⚡ PIDE POR WHATSAPP YA &nbsp;&nbsp;&nbsp;
          🏆 PRODUCTOS DE CALIDAD GARANTIZADA &nbsp;&nbsp;&nbsp; 🚚 ENTREGA RÁPIDA &nbsp;&nbsp;&nbsp;
          🔥 ENVÍOS A TODA COLOMBIA &nbsp;&nbsp;&nbsp; ⚡ PIDE POR WHATSAPP YA &nbsp;&nbsp;&nbsp;
          🏆 PRODUCTOS DE CALIDAD GARANTIZADA &nbsp;&nbsp;&nbsp; 🚚 ENTREGA RÁPIDA &nbsp;&nbsp;&nbsp;
        </div>
      </div>

      {/* Header principal */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'var(--negro)',
        borderBottom: '2px solid var(--rojo)',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '28px',
            letterSpacing: '3px',
            color: 'var(--blanco)',
            lineHeight: 1,
          }}>
            PURA <span style={{ color: 'var(--rojo)' }}>PASIÓN</span>
          </span>
        </Link>

        {/* Menú desktop */}
        <nav style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'center',
        }} className="hidden-mobile">
          {['Inicio', 'Equipos', 'Ofertas', 'Novedades', 'Contacto'].map((item) => (
            <Link
              key={item}
              href={item === 'Inicio' ? '/' : `/${item.toLowerCase()}`}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'var(--gris-texto)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--blanco)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--gris-texto)')}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Íconos derecha */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#25D366',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '4px',
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="hidden-mobile">Pedir ya</span>
          </a>

          {/* Hamburguesa móvil */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="show-mobile"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: 'block',
                width: '24px',
                height: '2px',
                backgroundColor: 'var(--blanco)',
                transition: 'all 0.3s',
              }} />
            ))}
          </button>
        </div>
      </header>

      {/* Menú móvil */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '80%',
          maxWidth: '300px',
          height: '100vh',
          backgroundColor: 'var(--gris-card)',
          zIndex: 200,
          padding: '80px 32px 32px',
          borderRight: '1px solid var(--gris-borde)',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}>
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'none',
              border: 'none',
              color: 'var(--blanco)',
              fontSize: '24px',
              cursor: 'pointer',
            }}
          >✕</button>
          {['Inicio', 'Equipos', 'Ofertas', 'Novedades', 'Contacto'].map((item) => (
            <Link
              key={item}
              href={item === 'Inicio' ? '/' : `/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '28px',
                letterSpacing: '2px',
                color: 'var(--blanco)',
                textDecoration: 'none',
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      )}

      {/* Overlay menú móvil */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            zIndex: 150,
          }}
        />
      )}

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}