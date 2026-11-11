function JoinUs() {
  return (
    <section id="join-us" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 rounded-3xl bg-amber-400 p-8 text-slate-950 sm:p-12 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-950/70">Join Us</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="sr-only">Join Us</span>
            <span aria-hidden="true" className="block h-10 w-full max-w-md rounded bg-amber-950/15 sm:h-12" />
          </h2>
          <div aria-hidden="true" className="mt-5 max-w-xl space-y-3">
            <div className="h-4 w-full rounded bg-amber-950/15" />
            <div className="h-4 w-5/6 rounded bg-amber-950/15" />
          </div>
        </div>
        <div aria-hidden="true" className="h-12 w-40 shrink-0 rounded-lg bg-slate-950" />
      </div>
    </section>
  )
}

export default JoinUs