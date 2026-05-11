"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useCart } from "@/hooks/useCart";

const WHATSAPP_NUMBER = "573057510901";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola!%20Quiero%20ver%20el%20catalogo%20de%20camisetas`;

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Ofertas", href: "/catalogo" },
  { label: "Novedades", href: "/catalogo" },
  { label: "Contacto", href: "/contacto" },
];

const tickerItems = [
  { icon: "🔥", label: "Envíos a toda Colombia" },
  { icon: "⚡", label: "Nuevas camisetas disponibles" },
  { icon: "👑", label: "Calidad premium garantizada" },
  { icon: "💬", label: "Pide fácil por WhatsApp" },
  { icon: "🚚", label: "Pago contraentrega" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemsCount } = useCart();

  return (
    <div className={styles.shell}>
      <div className={styles.topBar} aria-label="Informacion de compra">
        <div className={styles.ticker}>
          {[0, 1].map((group) => (
            <div
              className={styles.tickerGroup}
              key={group}
              aria-hidden={group === 1}
            >
              {tickerItems.map((item, i) => (
                <span
                  key={`${group}-${item.label}`}
                  className={styles.tickerItem}
                >
                  {i > 0 && (
                    <span className={styles.tickerSep} aria-hidden="true">
                      ◆
                    </span>
                  )}
                  <span className={styles.tickerIcon} aria-hidden="true">
                    {item.icon}
                  </span>
                  {item.label}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <header className={styles.inner}>
        <Link
          className={styles.brand}
          href="/"
          aria-label="Pura Pasion Futbol Store"
        >
          <span className={styles.logoFrame}>
            <Image
              className={styles.logo}
              src="/logoprincipal.png"
              alt="Pura Pasion Futbol Store"
              fill
              sizes="(max-width: 560px) 54px, 92px"
              priority
            />
          </span>
          <span className={styles.brandText}>
            <span className={styles.brandName}>Pura Pasion</span>
            <span className={styles.brandMeta}>Futbol Store</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Navegacion principal">
          {navItems.map((item) => (
            <Link
              className={styles.navLink}
              href={item.href}
              key={`${item.href}-${item.label}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link
            className={styles.iconButton}
            href="/catalogo"
            aria-label="Buscar productos"
          >
            <SearchIcon />
          </Link>
          <Link
            href="/carrito"
            className={styles.iconButton}
            style={{ position: "relative" }}
            aria-label={`Carrito${itemsCount > 0 ? ` (${itemsCount} productos)` : ""}`}
          >
            <CartIcon />
            {itemsCount > 0 && (
              <span className={styles.cartBadge}>
                {itemsCount > 99 ? "99+" : itemsCount}
              </span>
            )}
          </Link>
          <a
            className={styles.whatsapp}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
          >
            <WAIconSmall />
            <span className={styles.whatsappText}>WhatsApp</span>
          </a>
          <button
            className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ""}`}
            type="button"
            aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span className={styles.menuIcon} />
          </button>
        </div>
      </header>

      <nav
        className={`${styles.mobilePanel} ${menuOpen ? "" : styles.mobilePanelClosed}`}
        id="mobile-navigation"
        aria-label="Navegacion movil"
      >
        {navItems.map((item) => (
          <Link
            className={styles.mobileLink}
            href={item.href}
            key={`mob-${item.href}-${item.label}`}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <a
          className={styles.mobileWhatsapp}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Comprar por WhatsApp
        </a>
      </nav>
    </div>
  );
}

function WAIconSmall() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.549 4.099 1.51 5.827L0 24l6.335-1.668A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.815 9.815 0 01-5.025-1.372l-.36-.214-3.735.984 1.002-3.636-.236-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}
