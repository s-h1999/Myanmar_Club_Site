const activities = [
  {
    number: '01',
    title: 'Upcoming events',
    description: 'A clear space for meetups, celebrations, talks, and other events on the club calendar.',
    tags: ['Date', 'Location', 'Details'],
  },
  {
    number: '02',
    title: 'Regular activities',
    description: 'Showcase the recurring activities and ways members can spend time together.',
    tags: ['Groups', 'Workshops', 'Social'],
  },
  {
    number: '03',
    title: 'Get involved',
    description: 'A callout for volunteering, contributing ideas, or helping make the next event happen.',
    tags: ['Volunteer', 'Participate', 'Connect'],
  },
]

function Services() {
  return (
    <section id="events" className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            Events & activities
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            There is always something to look forward to.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Use this space for the club calendar, activity highlights, and
            simple ways for members to take part.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {activities.map((service) => (
            <article
              key={service.number}
              className="flex flex-col rounded-2xl bg-stone-50 p-7 ring-1 ring-slate-200"
            >
              <p className="text-sm font-bold text-indigo-600">
                {service.number}
              </p>
              <h3 className="mt-5 text-2xl font-semibold">{service.title}</h3>
              <p className="mt-3 flex-1 leading-7 text-slate-600">
                {service.description}
              </p>
              <ul className="mt-7 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
