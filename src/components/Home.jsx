function Home() {
  return (
    <section
      id="home"
      className="scroll-mt-24 overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="sr-only">Home</h1>
          <div aria-hidden="true">
            <div className="mb-6 h-9 w-48 rounded-full border border-amber-300/40 bg-amber-300/10" />
            <div className="max-w-3xl space-y-3">
              <div className="h-12 w-full max-w-2xl rounded bg-white/15 sm:h-16" />
              <div className="h-12 w-4/5 max-w-xl rounded bg-amber-300/70 sm:h-16" />
            </div>
            <div className="mt-6 max-w-xl space-y-3">
              <div className="h-4 w-full rounded bg-slate-700" />
              <div className="h-4 w-5/6 rounded bg-slate-700" />
              <div className="h-4 w-2/3 rounded bg-slate-700" />
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <div className="h-12 w-40 rounded-lg bg-amber-300" />
              <div className="h-12 w-40 rounded-lg border border-slate-600" />
            </div>
          </div>
        </div>

        <div aria-hidden="true" className="rounded-3xl border border-white/10 bg-gradient-to-br from-amber-300/25 via-slate-900 to-slate-900 p-7 shadow-2xl sm:p-10">
          <div className="h-3 w-28 rounded bg-amber-200/50" />
          <div className="mt-8 aspect-[4/3] rounded-2xl border border-dashed border-white/20 bg-white/5 p-5">
            <div className="h-full rounded-xl bg-gradient-to-br from-amber-200/30 to-transparent" />
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
            <div>
              <div className="h-8 w-16 rounded bg-white/15" />
              <div className="mt-2 h-3 w-20 rounded bg-slate-700" />
            </div>
            <div>
              <div className="h-8 w-16 rounded bg-white/15" />
              <div className="mt-2 h-3 w-24 rounded bg-slate-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
