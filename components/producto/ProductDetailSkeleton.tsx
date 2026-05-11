export default function ProductDetailSkeleton() {
  return (
    <main className="min-h-screen" style={{ background: "#0A0A0A" }}>
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-10">
        {/* Breadcrumb skeleton */}
        <div className="mb-6 flex gap-2">
          {[80, 20, 96, 20, 160].map((w, i) => (
            <div
              key={i}
              className="h-3 animate-pulse rounded-full"
              style={{ width: w, background: "#1A1A1A" }}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16">
          {/* Gallery skeleton */}
          <div className="flex flex-col gap-3">
            <div
              className="aspect-square animate-pulse rounded-2xl"
              style={{ background: "#141414" }}
            />
            <div className="flex gap-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-[72px] w-[72px] shrink-0 animate-pulse rounded-lg"
                  style={{ background: "#141414" }}
                />
              ))}
            </div>
          </div>

          {/* Info skeleton */}
          <div className="flex flex-col gap-5">
            <div className="h-5 w-20 animate-pulse rounded-full" style={{ background: "#141414" }} />
            <div className="h-4 w-40 animate-pulse rounded-full" style={{ background: "#141414" }} />
            <div className="h-12 w-3/4 animate-pulse rounded-xl" style={{ background: "#141414" }} />
            <div className="h-4 w-32 animate-pulse rounded-full" style={{ background: "#141414" }} />
            <div className="h-10 w-1/3 animate-pulse rounded-xl" style={{ background: "#141414" }} />
            <div className="h-px w-full" style={{ background: "#141414" }} />
            <div className="h-4 w-24 animate-pulse rounded-full" style={{ background: "#141414" }} />
            <div className="flex gap-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-11 w-14 animate-pulse rounded-lg"
                  style={{ background: "#141414" }}
                />
              ))}
            </div>
            <div className="h-[52px] w-full animate-pulse rounded-xl" style={{ background: "#141414" }} />
            <div className="h-[52px] w-full animate-pulse rounded-xl" style={{ background: "#141414" }} />
          </div>
        </div>
      </div>
    </main>
  );
}
