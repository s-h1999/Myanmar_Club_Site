function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Gallery</p>
        <h2 className="sr-only">Gallery</h2>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
          {['01', '02', '03', '04'].map((item) => (
            <div
              key={item}
              role="img"
              aria-label={`Gallery image placeholder ${item}`}
              className="aspect-square rounded-2xl border border-dashed border-slate-300 bg-gradient-to-br from-amber-100 via-stone-100 to-slate-200"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery