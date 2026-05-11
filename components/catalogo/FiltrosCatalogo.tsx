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
  { value: 'reciente', label: 'Más recientes' },
  { value: 'precio_asc', label: 'Menor precio' },
  { value: 'precio_desc', label: 'Mayor precio' },
  { value: 'nombre', label: 'A–Z' },
]

const SELECT_CLASS =
  'h-9 px-3 rounded-full text-xs font-semibold tracking-wider shrink-0 cursor-pointer focus:outline-none transition-colors'
const SELECT_STYLE = {
  background: '#1E1E1E',
  border: '1px solid #2E2E2E',
  color: '#F5F5F5',
  fontFamily: 'var(--font-barlow), sans-serif',
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

  const hayFiltros = !!(filtros.categoria || filtros.equipo || filtros.badge || filtros.busqueda)

  return (
    <div className="flex flex-col gap-3">
      {/* Search */}
      <div className="relative">
        <SearchIcon />
        <input
          type="search"
          placeholder="Buscar camisetas, equipos..."
          value={filtros.busqueda}
          onChange={set('busqueda')}
          className="w-full h-12 pl-11 pr-4 rounded-xl text-sm focus:outline-none transition-colors"
          style={{
            background: '#1E1E1E',
            border: '1px solid #2E2E2E',
            color: '#F5F5F5',
            fontFamily: 'var(--font-barlow), sans-serif',
          }}
        />
      </div>

      {/* Filter row */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
        {categorias.length > 0 && (
          <select
            value={filtros.categoria}
            onChange={set('categoria')}
            className={SELECT_CLASS}
            style={SELECT_STYLE}
          >
            <option value="">Todas las categorías</option>
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
            className={SELECT_CLASS}
            style={SELECT_STYLE}
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
            className={SELECT_CLASS}
            style={SELECT_STYLE}
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
          className={SELECT_CLASS}
          style={SELECT_STYLE}
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
              setFiltros({ busqueda: '', categoria: '', equipo: '', badge: '', orden: 'reciente' })
            }
            className="h-9 px-3 rounded-full text-xs font-semibold tracking-wider shrink-0 transition-colors hover:opacity-80"
            style={{
              border: '1px solid rgba(204,17,17,0.5)',
              color: '#CC1111',
              fontFamily: 'var(--font-barlow), sans-serif',
            }}
          >
            Limpiar
          </button>
        )}

        <span
          className="ml-auto shrink-0 text-xs whitespace-nowrap"
          style={{ color: '#A0A0A0', fontFamily: 'var(--font-barlow), sans-serif' }}
        >
          {total} producto{total !== 1 ? 's' : ''}
        </span>
      </div>
    </div>
  )
}

function SearchIcon() {
  return (
    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
      <svg
        className="w-4 h-4"
        style={{ color: '#A0A0A0' }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  )
}
