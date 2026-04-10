const sizeOptions = ['XS', 'S', 'M', 'L', 'One Size'];

function Filters({ filters, onChange, categories }) {
  return (
    <section className="mx-auto mt-10 max-w-7xl px-5 md:px-10">
      <div className="rounded-none border-y border-black/10 bg-transparent py-6">
        <div className="mb-5 flex flex-wrap gap-2">
          {['All', ...categories].map((category) => (
            <button
              key={category}
              onClick={() => onChange({ ...filters, category })}
              className={`filter-chip ${filters.category === category ? 'bg-black text-white' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <select
            value={filters.price}
            onChange={(e) => onChange({ ...filters, price: e.target.value })}
            className="rounded-full border border-black/20 bg-transparent px-4 py-2 text-xs uppercase tracking-[0.12em]"
          >
            <option value="all">All Prices</option>
            <option value="under300">Under $300</option>
            <option value="300to600">$300–$600</option>
            <option value="over600">Over $600</option>
          </select>

          <select
            value={filters.size}
            onChange={(e) => onChange({ ...filters, size: e.target.value })}
            className="rounded-full border border-black/20 bg-transparent px-4 py-2 text-xs uppercase tracking-[0.12em]"
          >
            <option value="all">All Sizes</option>
            {sizeOptions.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}

export default Filters;
