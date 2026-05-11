export default function Loading() {
  return (
    <main className="min-h-screen" style={{ background: '#0A0A0A' }}>
      {/* Header skeleton */}
      <div className="py-12 px-4 text-center">
        <div
          className="w-32 h-3 rounded-full mx-auto mb-3 animate-pulse"
          style={{ background: '#2E2E2E' }}
        />
        <div
          className="w-56 h-14 rounded-xl mx-auto mb-3 animate-pulse"
          style={{ background: '#2E2E2E' }}
        />
        <div
          className="w-72 h-4 rounded-full mx-auto animate-pulse"
          style={{ background: '#2E2E2E' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-24">
        {/* Filter bar skeleton */}
        <div className="flex gap-3 mb-6">
          <div
            className="h-12 flex-1 rounded-xl animate-pulse"
            style={{ background: '#1E1E1E' }}
          />
          <div
            className="h-12 w-36 rounded-full animate-pulse"
            style={{ background: '#1E1E1E' }}
          />
          <div
            className="h-12 w-36 rounded-full animate-pulse hidden sm:block"
            style={{ background: '#1E1E1E' }}
          />
        </div>

        {/* Grid skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden animate-pulse"
              style={{ background: '#1E1E1E' }}
            >
              <div className="aspect-square" style={{ background: '#2E2E2E' }} />
              <div className="p-4 flex flex-col gap-3">
                <div className="h-3 rounded-full w-2/3" style={{ background: '#2E2E2E' }} />
                <div className="h-5 rounded w-full" style={{ background: '#2E2E2E' }} />
                <div className="h-3 rounded-full w-1/2" style={{ background: '#2E2E2E' }} />
                <div className="h-px mt-1" style={{ background: '#2E2E2E' }} />
                <div className="h-7 rounded w-1/2" style={{ background: '#2E2E2E' }} />
                <div className="flex gap-2 mt-1">
                  <div className="h-10 flex-1 rounded-xl" style={{ background: '#2E2E2E' }} />
                  <div className="h-10 w-11 rounded-xl shrink-0" style={{ background: '#2E2E2E' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
