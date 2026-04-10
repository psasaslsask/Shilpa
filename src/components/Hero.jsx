function Hero({ onGoShop }) {
  return (
    <section className="relative flex h-screen min-h-[760px] items-end overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1800&q=80"
        alt="MAANJHA editorial collection"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/10" />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl justify-between px-5 pb-20 text-white md:px-10">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/75">Festive 2026 Collection</p>
          <h2 className="max-w-xl font-serif text-5xl leading-[0.95] md:text-7xl">Whispers of Gold</h2>
          <p className="mt-5 max-w-md text-sm text-white/85 md:text-base">
            Sculpted silhouettes, fluid drapes, and heirloom-inspired accents for statement evenings.
          </p>
          <button
            onClick={onGoShop}
            className="mt-8 border border-white px-9 py-3 text-xs uppercase tracking-[0.2em] transition duration-500 hover:bg-white hover:text-black"
          >
            Shop Now
          </button>
        </div>
        <div className="hidden items-end gap-2 pb-2 md:flex">
          <span className="h-[2px] w-16 bg-white" />
          <span className="h-[2px] w-6 bg-white/45" />
          <span className="h-[2px] w-6 bg-white/45" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
