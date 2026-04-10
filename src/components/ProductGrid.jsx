import ProductCard from './ProductCard';

function ProductGrid({ products, onSelect }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-10">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-black/10 pb-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-black/60">Collection</p>
          <h2 className="text-4xl md:text-5xl">Ready to Wear</h2>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-black/50">{products.length} styles</p>
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
