function Contact() {
  return (
    <section id="gallery" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Gallery</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">Photos and memories.</h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          A visual collection of the people, places, and moments that make the club special.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
          {['01', '02', '03', '04'].map((item) => (
            <div key={item} className="flex aspect-square items-end rounded-2xl border border-dashed border-slate-300 bg-gradient-to-br from-amber-100 via-stone-100 to-slate-200 p-4 text-sm font-semibold text-slate-500">
              Photo {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact

function JoinUs() {
  return (
    <section id="contact" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 rounded-3xl bg-amber-400 p-8 text-slate-950 sm:p-12 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-950/70">
            Join us / Contact
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Ready to connect?
          </h2>
          <p className="mt-5 text-lg leading-8 text-amber-950/80">
            Add your membership details, contact information, and a friendly invitation for new people to get involved.
          </p>
        </div>
        <a
          className="inline-flex shrink-0 items-center justify-center rounded-lg bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
          href="mailto:hello@community.club"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}

export { JoinUs }
