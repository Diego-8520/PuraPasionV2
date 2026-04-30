'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.css'

const WHATSAPP_NUMBER = '573057510901'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola!%20Quiero%20ver%20el%20catalogo%20de%20camisetas`

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Equipos', href: '/equipos' },
  { label: 'Ofertas', href: '/ofertas' },
  { label: 'Novedades', href: '/novedades' },
  { label: 'Contacto', href: '/contacto' },
]

const tickerItems = [
  'Envios a toda Colombia',
  'Pide por WhatsApp',
  'Productos de calidad',
  'Entrega rapida',
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={styles.shell}>
      <div className={styles.topBar} aria-label="Informacion de compra">
        <div className={styles.ticker}>
          {[0, 1].map((group) => (
            <div className={styles.tickerGroup} key={group} aria-hidden={group === 1}>
              {tickerItems.map((item) => (
                <span key={`${group}-${item}`}>{item}</span>
              ))}
              <span className={styles.tickerDot} />
            </div>
          ))}
        </div>
      </div>

      <header className={styles.inner}>
        <Link className={styles.brand} href="/" aria-label="Pura Pasion Futbol Store">
          <span className={styles.logoFrame}>
            <Image
              className={styles.logo}
              src="/logoprincipal.png"
              alt=""
              fill
              sizes="(max-width: 560px) 54px, 78px"
              preload
            />
          </span>
          <span className={styles.brandText}>
            <span className={styles.brandName}>Pura Pasion</span>
            <span className={styles.brandMeta}>Futbol Store</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Navegacion principal">
          {navItems.map((item) => (
            <Link className={styles.navLink} href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <a className={styles.whatsapp} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <span aria-hidden="true">WA</span>
            <span className={styles.whatsappText}>Pedir ya</span>
          </a>
          <button
            className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ''}`}
            type="button"
            aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span className={styles.menuIcon} />
          </button>
        </div>
      </header>

      <nav
        className={`${styles.mobilePanel} ${menuOpen ? '' : styles.mobilePanelClosed}`}
        id="mobile-navigation"
        aria-label="Navegacion movil"
      >
        {navItems.map((item) => (
          <Link className={styles.mobileLink} href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
