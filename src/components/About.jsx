const values = [
  {
    number: '01',
    title: 'Our background',
    description:
      'A short introduction to how the club began and the people who make it what it is.',
  },
  {
    number: '02',
    title: 'Our mission',
    description:
      'A simple statement about the community we are building and the difference we hope to make.',
  },
  {
    number: '03',
    title: 'Our vision',
    description:
      'A look at the future we are working toward together, one connection at a time.',
  },
]

function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              About us
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Built around
              <br />
              belonging.
            </h2>
          </div>
          <p className="max-w-2xl self-end text-lg leading-8 text-slate-600">
            This section is ready for the club story, mission, and vision.
            Add the details that help visitors understand who you are and
            what brings the community together.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.number}
              className="rounded-2xl border border-slate-200 p-7"
            >
              <p className="text-sm font-bold text-indigo-600">{value.number}</p>
              <h3 className="mt-5 text-xl font-semibold">{value.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
