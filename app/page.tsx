import Link from "next/link";

const equipos = [
  "AMÉRICA",
  "NACIONAL",
  "MILLONARIOS",
  "REAL MADRID",
  "BARCELONA",
  "ARGENTINA",
  "BRASIL",
  "COLOMBIA",
];

const beneficios = [
  {
    icono: "🚚",
    titulo: "ENVÍOS A TODA COLOMBIA",
    texto: "Recibe tus camisetas en casa de forma rápida y segura.",
  },
  {
    icono: "💬",
    titulo: "PEDIDOS POR WHATSAPP",
    texto: "Atención directa para confirmar talla, stock y envío.",
  },
  {
    icono: "🔥",
    titulo: "PRODUCTOS DESTACADOS",
    texto: "Camisetas de clubes y selecciones para verdaderos hinchas.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5]">
      <section className="relative overflow-hidden border-b border-[#2E2E2E]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#CC111133,transparent_45%)]" />

        <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center">
          <span className="mb-5 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-5 py-2 text-sm font-bold tracking-[0.25em] text-[#D4AF37]">
            PURA PASIÓN FÚTBOL STORE
          </span>

          <h1 className="max-w-5xl text-5xl font-black uppercase tracking-[0.12em] text-white sm:text-7xl lg:text-8xl">
            Viste tu pasión
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-[#A0A0A0] sm:text-xl">
            Camisetas de fútbol, clubes y selecciones para hinchas que viven el
            juego con el corazón.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/catalogo"
              className="rounded-full bg-[#CC1111] px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#e31818] hover:shadow-[0_0_30px_rgba(204,17,17,0.45)]"
            >
              Ver catálogo
            </Link>

            <a
              href="https://wa.me/573057510901?text=Hola! Quiero conocer el catálogo de Pura Pasión"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366] hover:text-[#25D366]"
            >
              Pedir por WhatsApp
            </a>
          </div>

          <div className="mt-14 rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-6 py-4 text-[#D4AF37]">
            ★ Tienda futbolera en Cali — envíos a toda Colombia
          </div>
        </div>
      </section>

      <section className="border-b border-[#2E2E2E] bg-[#1E1E1E]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-3">
          {beneficios.map((item) => (
            <article
              key={item.titulo}
              className="rounded-2xl border border-[#2E2E2E] bg-[#0A0A0A] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#CC1111]/60"
            >
              <div className="text-3xl">{item.icono}</div>
              <h2 className="mt-4 text-xl font-black tracking-[0.12em] text-white">
                {item.titulo}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#A0A0A0]">
                {item.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.25em] text-[#CC1111]">
              Equipos populares
            </span>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-[0.12em] text-white">
              Encuentra tu camiseta
            </h2>
          </div>

          <Link
            href="/catalogo"
            className="text-sm font-black uppercase tracking-[0.2em] text-[#D4AF37] transition-colors hover:text-white"
          >
            Explorar todo →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {equipos.map((equipo) => (
            <Link
              key={equipo}
              href={`/catalogo?equipo=${encodeURIComponent(equipo)}`}
              className="rounded-2xl border border-[#2E2E2E] bg-[#1E1E1E] px-4 py-6 text-center text-sm font-black uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#CC1111] hover:bg-[#CC1111]/10"
            >
              {equipo}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#1E1E1E]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 py-14 text-center sm:flex-row sm:text-left">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.25em] text-[#D4AF37]">
              Catálogo conectado
            </span>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-[0.12em] text-white">
              Productos desde Supabase
            </h2>
            <p className="mt-3 max-w-xl text-[#A0A0A0]">
              Revisa camisetas, precios, imágenes y stock cargados directamente
              desde la base de datos.
            </p>
          </div>

          <Link
            href="/catalogo"
            className="rounded-full bg-[#CC1111] px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#e31818]"
          >
            Ir al catálogo
          </Link>
        </div>
      </section>

      <a
        href="https://wa.me/573057510901?text=Hola! Quiero hacer un pedido en Pura Pasión"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-[#25D366] px-5 py-4 text-sm font-black uppercase tracking-[0.15em] text-black shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
      >
        WhatsApp
      </a>
    </main>
  );
}