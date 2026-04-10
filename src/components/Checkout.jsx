function Checkout({ onBack }) {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 md:px-10">
      <button onClick={onBack} className="mb-6 text-xs uppercase tracking-[0.2em] text-black/65 hover:text-gold">
        ← Return to cart
      </button>
      <h2 className="mb-8 text-5xl">Checkout</h2>
      <div className="grid gap-6 lg:grid-cols-[1.4fr,1fr]">
        <div className="space-y-5 rounded-2xl border border-black/10 bg-white p-6">
          <h3 className="text-2xl">Shipping Information</h3>
          <input className="w-full border border-black/20 p-3" placeholder="Full Name" />
          <input className="w-full border border-black/20 p-3" placeholder="Email" />
          <input className="w-full border border-black/20 p-3" placeholder="Address" />
          <div className="grid gap-4 md:grid-cols-2">
            <input className="border border-black/20 p-3" placeholder="City" />
            <input className="border border-black/20 p-3" placeholder="Postal Code" />
          </div>
        </div>

        <div className="rounded-2xl border border-black/10 bg-[#f6efe3] p-6">
          <h3 className="text-2xl">Payment</h3>
          <p className="mt-4 text-sm text-black/70">This is a UI-only checkout flow for preview purposes.</p>
          <button className="mt-8 w-full bg-black py-4 text-xs uppercase tracking-[0.2em] text-white">
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
