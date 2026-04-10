import { useState } from 'react';

function ProductDetail({ product, onBack, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState(product.size[0]);

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-10">
      <button onClick={onBack} className="mb-8 text-xs uppercase tracking-[0.2em] text-black/70 hover:text-gold">
        ← Back to products
      </button>
      <div className="grid gap-10 lg:grid-cols-2">
        <img src={product.image} alt={product.name} className="h-[640px] w-full object-cover" />
        <div className="pt-4">
          <p className="text-xs uppercase tracking-[0.2em] text-black/60">{product.category}</p>
          <h2 className="mt-2 text-5xl">{product.name}</h2>
          <p className="mt-5 max-w-xl text-black/75">{product.description}</p>
          <p className="mt-6 text-lg">${product.price}</p>

          <div className="mt-8">
            <p className="mb-3 text-xs uppercase tracking-[0.2em]">Size</p>
            <div className="flex flex-wrap gap-2">
              {product.size.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.15em] ${
                    selectedSize === size ? 'border-black bg-black text-white' : 'border-black/20'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => onAddToCart(product, selectedSize)}
            className="mt-10 w-full bg-black px-7 py-4 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-gold"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
