import { useMemo, useState } from 'react';
import CartDrawer from './components/CartDrawer';
import CategoryShowcase from './components/CategoryShowcase';
import Checkout from './components/Checkout';
import EditorialSplit from './components/EditorialSplit';
import Filters from './components/Filters';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProductDetail from './components/ProductDetail';
import ProductGrid from './components/ProductGrid';
import SideMenu from './components/SideMenu';
import { categories, products } from './data/products';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [view, setView] = useState('home');
  const [filters, setFilters] = useState({ category: 'All', price: 'all', size: 'all' });

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory =
        filters.category === 'All' || product.category.toLowerCase() === filters.category.toLowerCase();
      const matchPrice =
        filters.price === 'all' ||
        (filters.price === 'under300' && product.price < 300) ||
        (filters.price === '300to600' && product.price >= 300 && product.price <= 600) ||
        (filters.price === 'over600' && product.price > 600);
      const matchSize = filters.size === 'all' || product.size.includes(filters.size);

      if (activeCategory !== 'All' && activeCategory !== 'New' && activeCategory !== 'Best Sellers') {
        return (
          matchCategory &&
          matchPrice &&
          matchSize &&
          product.category.toLowerCase() === activeCategory.toLowerCase()
        );
      }

      return matchCategory && matchPrice && matchSize;
    });
  }, [filters, activeCategory]);

  const addToCart = (product, selectedSize) => {
    setCartItems((current) => [...current, { ...product, selectedSize }]);
    setCartOpen(true);
  };

  const goHome = () => {
    setView('home');
    setSelectedProduct(null);
    setCheckoutOpen(false);
  };

  const goShop = () => {
    setView('shop');
    setSelectedProduct(null);
    setCheckoutOpen(false);
  };

  return (
    <div>
      <Navbar onMenuToggle={() => setMenuOpen(true)} onGoHome={goHome} onGoShop={goShop} />
      <SideMenu
        open={menuOpen}
        categories={['All', ...categories]}
        onClose={() => setMenuOpen(false)}
        activeCategory={activeCategory}
        setActiveCategory={(category) => {
          setActiveCategory(category);
          setView('shop');
        }}
      />

      <main className="pt-[112px]">
        {view === 'home' && !selectedProduct && !checkoutOpen && (
          <>
            <Hero onGoShop={goShop} />
            <CategoryShowcase
              onQuickCategory={(category) => {
                setFilters((current) => ({ ...current, category }));
                setView('shop');
              }}
            />
            <EditorialSplit onGoShop={goShop} />
          </>
        )}

        {view === 'shop' && !selectedProduct && !checkoutOpen && (
          <>
            <Filters filters={filters} onChange={setFilters} categories={categories} />
            <ProductGrid products={filteredProducts} onSelect={setSelectedProduct} />
          </>
        )}

        {selectedProduct && !checkoutOpen && (
          <ProductDetail
            product={selectedProduct}
            onBack={() => {
              setSelectedProduct(null);
              setView('shop');
            }}
            onAddToCart={addToCart}
          />
        )}

        {checkoutOpen && <Checkout onBack={() => setCheckoutOpen(false)} />}
      </main>

      <CartDrawer
        open={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onCheckout={() => {
          setCheckoutOpen(true);
          setCartOpen(false);
          setSelectedProduct(null);
        }}
      />

      {!cartOpen && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-6 right-6 z-30 rounded-full bg-black px-5 py-3 text-xs uppercase tracking-[0.2em] text-white shadow-soft hover:bg-gold"
        >
          Cart ({cartItems.length})
        </button>
      )}

      <Footer />
    </div>
  );
}

export default App;
