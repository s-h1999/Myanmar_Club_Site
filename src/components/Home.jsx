function Home() {
  return (
    <section
      id="home"
      className="scroll-mt-24 overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-6 inline-flex rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-200">
            A welcoming space for everyone
          </p>
          <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Find your people. <span className="text-amber-300">Make an impact.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            A community club built around shared interests, meaningful
            conversations, and experiences worth remembering.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              className="rounded-lg bg-amber-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-200"
              href="#about"
            >
              Discover the club
            </a>
            <a
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-slate-400"
              href="#events"
            >
              See what’s happening
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-amber-300/25 via-slate-900 to-slate-900 p-7 shadow-2xl sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
            At a glance
          </p>
          <div className="mt-8 aspect-[4/3] rounded-2xl border border-dashed border-white/20 bg-white/5 p-5">
            <div className="flex h-full items-end rounded-xl bg-gradient-to-br from-amber-200/30 to-transparent p-5">
              <p className="max-w-xs text-2xl font-semibold leading-snug">Your next shared experience starts here.</p>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
            <div>
              <p className="text-3xl font-bold">00</p>
              <p className="mt-1 text-sm text-slate-400">Members</p>
            </div>
            <div>
              <p className="text-3xl font-bold">00</p>
              <p className="mt-1 text-sm text-slate-400">Events this year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
