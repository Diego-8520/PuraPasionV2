'use client'

import Link from 'next/link'
import styles from './Hero.module.css'

const WHATSAPP_NUMBER = '573057510901'

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola!%20Quiero%20ver%20el%20cat%C3%A1logo%20de%20camisetas%20de%20Pura%20Pasi%C3%B3n`

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.backgroundGlow} />
      <div className={styles.pattern} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>Camisetas de fútbol en Cali</p>

        <h1 id="hero-title" className={styles.title}>
          Viste tu pasión
          <span> sin pagar de más</span>
        </h1>

        <p className={styles.description}>
          Camisetas de equipos colombianos, europeos y selecciones.
          Compra fácil por WhatsApp y recibe atención rápida.
        </p>

        <div className={styles.actions}>
          <a
            className={styles.primaryButton}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Comprar por WhatsApp
          </a>

          <Link className={styles.secondaryButton} href="/catalogo">
            Ver catálogo
          </Link>
        </div>

        <div className={styles.trustBar} aria-label="Beneficios de compra">
          <div>
            <strong>+160</strong>
            <span>equipos</span>
          </div>
          <div>
            <strong>Cali</strong>
            <span>Alcázares</span>
          </div>
          <div>
            <strong>Colombia</strong>
            <span>envíos</span>
          </div>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.card}>
          <span className={styles.badge}>Nuevo drop</span>
          <div className={styles.shirtMockup}>
            <span>⚽</span>
          </div>
          <p>La camiseta que sientes, al precio que mereces</p>
        </div>
      </div>
    </section>
  )
}