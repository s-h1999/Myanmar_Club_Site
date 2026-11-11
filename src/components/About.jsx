const placeholders = ['01', '02', '03']

function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              About Us
            </p>
            <h2 className="sr-only">About Us</h2>
            <div aria-hidden="true" className="mt-4 space-y-3">
              <div className="h-10 w-full max-w-sm rounded bg-slate-200 sm:h-12" />
              <div className="h-10 w-4/5 max-w-xs rounded bg-slate-200 sm:h-12" />
            </div>
          </div>
          <div aria-hidden="true" className="max-w-2xl self-end space-y-3">
            <div className="h-4 w-full rounded bg-slate-200" />
            <div className="h-4 w-11/12 rounded bg-slate-200" />
            <div className="h-4 w-3/4 rounded bg-slate-200" />
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {placeholders.map((number) => (
            <article
              key={number}
              className="rounded-2xl border border-slate-200 p-7"
            >
              <p className="text-sm font-bold text-indigo-600">{number}</p>
              <div aria-hidden="true" className="mt-5 space-y-3">
                <div className="h-5 w-3/4 rounded bg-slate-200" />
                <div className="h-3 w-full rounded bg-slate-100" />
                <div className="h-3 w-5/6 rounded bg-slate-100" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
