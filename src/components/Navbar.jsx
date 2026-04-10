import { AccountIcon, CartIcon, HeartIcon, SearchIcon } from './Icons';

function Navbar({ onMenuToggle, onGoHome, onGoShop }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-black/10 bg-cream/90 backdrop-blur-lg">
      <div className="border-b border-black/5 bg-[#efe6d7] px-4 py-2 text-center text-[10px] uppercase tracking-[0.24em] text-black/70 md:text-xs">
        Complimentary shipping in India on orders above ₹8,000
      </div>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
        <div className="flex items-center gap-5">
          <button
            onClick={onMenuToggle}
            className="text-xs uppercase tracking-[0.18em] transition hover:text-gold md:hidden"
          >
            Menu
          </button>
          <button onClick={onGoHome} className="hidden text-xs uppercase tracking-[0.16em] hover:text-gold md:block">
            Home
          </button>
          <button onClick={onGoShop} className="hidden text-xs uppercase tracking-[0.16em] hover:text-gold md:block">
            Shop
          </button>
        </div>

        <h1
          onClick={onGoHome}
          className="cursor-pointer font-serif text-2xl tracking-[0.14em] md:text-3xl"
          role="button"
          tabIndex={0}
        >
          MAANJHA
        </h1>

        <div className="flex items-center gap-3 md:gap-5">
          <button aria-label="Search">
            <SearchIcon />
          </button>
          <button aria-label="Account">
            <AccountIcon />
          </button>
          <button aria-label="Wishlist">
            <HeartIcon />
          </button>
          <button aria-label="Cart">
            <CartIcon />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
