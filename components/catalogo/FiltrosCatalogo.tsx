'use client'

export interface Filtros {
  busqueda: string
  categoria: string
  equipo: string
  badge: string
  orden: string
}

interface Props {
  categorias: Array<{ id: string; nombre: string }>
  equipos: Array<{ id: string; nombre: string }>
  badges: string[]
  filtros: Filtros
  total: number
  setFiltros: React.Dispatch<React.SetStateAction<Filtros>>
}

const ORDENES = [
  { value: 'reciente', label: 'Mas recientes' },
  { value: 'precio_asc', label: 'Menor precio' },
  { value: 'precio_desc', label: 'Mayor precio' },
  { value: 'nombre', label: 'A–Z' },
]

const FB = { fontFamily: 'var(--font-barlow), sans-serif' }

const SELECT_BASE: React.CSSProperties = {
  ...FB,
  background: '#141414',
  border: '1px solid #242424',
  color: '#EFEFEF',
  appearance: 'none',
  WebkitAppearance: 'none',
}

export default function FiltrosCatalogo({
  categorias,
  equipos,
  badges,
  filtros,
  total,
  setFiltros,
}: Props) {
  const set =
    (key: keyof Filtros) =>
    (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) =>
      setFiltros((prev) => ({ ...prev, [key]: e.target.value }))

  const hayFiltros = !!(
    filtros.categoria ||
    filtros.equipo ||
    filtros.badge ||
    filtros.busqueda
  )

  return (
    <div className="flex flex-col gap-3">
      {/* Search */}
      <div className="relative">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(239,239,239,0.3)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </div>
        <input
          type="search"
          placeholder="Buscar camisetas, equipos..."
          value={filtros.busqueda}
          onChange={set('busqueda')}
          className="w-full h-11 pl-10 pr-4 rounded-xl text-sm focus:outline-none transition-colors focus:border-[#3A3A3A]"
          style={{
            ...SELECT_BASE,
            letterSpacing: '0.3px',
          }}
        />
      </div>

      {/* Filter row */}
      <div
        className="flex items-center gap-2 overflow-x-auto pb-1"
        style={{ scrollbarWidth: 'none' }}
      >
        {categorias.length > 0 && (
          <select
            value={filtros.categoria}
            onChange={set('categoria')}
            className="h-9 px-3 rounded-full text-xs font-semibold tracking-wider shrink-0 cursor-pointer focus:outline-none transition-colors"
            style={SELECT_BASE}
          >
            <option value="">Todas las categorias</option>
            {categorias.map((c) => (
              <option key={c.id} value={c.id}>
                {c.nombre}
              </option>
            ))}
          </select>
        )}

        {equipos.length > 0 && (
          <select
            value={filtros.equipo}
            onChange={set('equipo')}
            className="h-9 px-3 rounded-full text-xs font-semibold tracking-wider shrink-0 cursor-pointer focus:outline-none transition-colors"
            style={SELECT_BASE}
          >
            <option value="">Todos los equipos</option>
            {equipos.map((e) => (
              <option key={e.id} value={e.id}>
                {e.nombre}
              </option>
            ))}
          </select>
        )}

        {badges.length > 0 && (
          <select
            value={filtros.badge}
            onChange={set('badge')}
            className="h-9 px-3 rounded-full text-xs font-semibold tracking-wider shrink-0 cursor-pointer focus:outline-none transition-colors"
            style={SELECT_BASE}
          >
            <option value="">Todos los badges</option>
            {badges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        )}

        <select
          value={filtros.orden}
          onChange={set('orden')}
          className="h-9 px-3 rounded-full text-xs font-semibold tracking-wider shrink-0 cursor-pointer focus:outline-none transition-colors"
          style={SELECT_BASE}
        >
          {ORDENES.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>

        {hayFiltros && (
          <button
            onClick={() =>
              setFiltros({
                busqueda: '',
                categoria: '',
                equipo: '',
                badge: '',
                orden: 'reciente',
              })
            }
            className="h-9 px-3 rounded-full text-xs font-semibold tracking-wider shrink-0 border border-[#2A2A2A] transition-colors hover:border-[#3A3A3A] hover:text-[#EFEFEF]"
            style={{ ...FB, color: '#787878' }}
          >
            Limpiar
          </button>
        )}

        <span
          className="ml-auto shrink-0 text-xs whitespace-nowrap"
          style={{ ...FB, color: '#505050' }}
        >
          {total} producto{total !== 1 ? 's' : ''}
        </span>
      </div>
    </div>
  )
}
