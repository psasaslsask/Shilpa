function CartDrawer({ open, items, onClose, onCheckout }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <aside
      className={`fixed right-0 top-0 z-50 h-full w-full max-w-md bg-[#f9f4eb] p-7 shadow-soft transition-transform duration-500 ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="mb-8 flex items-center justify-between border-b border-black/10 pb-5">
        <h3 className="text-2xl">Shopping Bag</h3>
        <button onClick={onClose} className="text-xs uppercase tracking-[0.18em]">
          Close
        </button>
      </div>

      <div className="space-y-5 overflow-y-auto pb-28">
        {items.length === 0 ? (
          <p className="text-sm text-black/60">Your cart is empty.</p>
        ) : (
          items.map((item, i) => (
            <div key={`${item.id}-${i}`} className="flex gap-4 border-b border-black/10 pb-4">
              <img src={item.image} alt={item.name} className="h-20 w-16 object-cover" />
              <div>
                <p className="font-serif text-xl">{item.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-black/55">Size {item.selectedSize}</p>
                <p className="mt-1 text-sm">${item.price}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full border-t border-black/10 bg-[#f9f4eb] p-7">
        <div className="mb-4 flex justify-between text-sm">
          <span>Subtotal</span>
          <span>${total}</span>
        </div>
        <button
          onClick={onCheckout}
          disabled={!items.length}
          className="w-full bg-black py-4 text-xs uppercase tracking-[0.18em] text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          Checkout
        </button>
      </div>
    </aside>
  );
}

export default CartDrawer;
