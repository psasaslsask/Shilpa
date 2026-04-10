function ProductCard({ product, onSelect }) {
  return (
    <article
      className="group cursor-pointer"
      onClick={() => onSelect(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(product)}
    >
      <div className="overflow-hidden bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="h-[420px] w-full object-cover transition duration-700 ease-luxury group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="font-serif text-2xl">{product.name}</h3>
        <p className="text-xs uppercase tracking-[0.2em] text-black/65">{product.category}</p>
        <p className="text-sm">${product.price}</p>
      </div>
    </article>
  );
}

export default ProductCard;
