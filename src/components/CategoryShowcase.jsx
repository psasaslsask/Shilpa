const cards = [
  {
    title: 'Dresses',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Sets',
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Accessories',
    image:
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80',
  },
];

function CategoryShowcase({ onQuickCategory }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-10">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-4xl md:text-5xl">Shop by Category</h2>
        <p className="text-xs uppercase tracking-[0.2em] text-black/60">A Studio Selection</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <article key={card.title} className="group relative overflow-hidden">
            <img
              src={card.image}
              alt={card.title}
              className="h-[460px] w-full object-cover transition duration-700 ease-luxury group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <button
              onClick={() => onQuickCategory(card.title)}
              className="absolute bottom-6 left-6 border border-white/65 bg-white/10 px-6 py-2 text-xs uppercase tracking-[0.2em] text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
            >
              {card.title}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CategoryShowcase;
