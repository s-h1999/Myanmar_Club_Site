const placeholders = ['01', '02', '03']

function Events() {
  return (
    <section id="events" className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            Events & activities
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Events & Activities
          </h2>
          <div aria-hidden="true" className="mt-5 max-w-xl space-y-3">
            <div className="h-4 w-full rounded bg-slate-200" />
            <div className="h-4 w-4/5 rounded bg-slate-200" />
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {placeholders.map((number) => (
            <article
              key={number}
              className="flex flex-col rounded-2xl bg-stone-50 p-7 ring-1 ring-slate-200"
            >
              <p className="text-sm font-bold text-indigo-600">{number}</p>
              <div aria-hidden="true" className="mt-5 flex flex-1 flex-col gap-4">
                <div className="h-6 w-3/4 rounded bg-slate-200" />
                <div className="space-y-2">
                  <div className="h-3 w-full rounded bg-slate-200" />
                  <div className="h-3 w-5/6 rounded bg-slate-200" />
                </div>
                <div className="mt-auto flex gap-2 pt-3">
                  <div className="h-6 w-16 rounded-full bg-slate-200" />
                  <div className="h-6 w-20 rounded-full bg-slate-200" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events