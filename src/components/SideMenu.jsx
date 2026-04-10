function SideMenu({ open, categories, onClose, activeCategory, setActiveCategory }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/35 transition-opacity duration-500 ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-72 bg-[#f4eee4] p-8 shadow-soft transition-transform duration-700 ease-luxury ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-lg uppercase tracking-[0.15em]">Collections</h2>
          <button onClick={onClose} className="text-xs uppercase tracking-[0.2em]">
            Close
          </button>
        </div>
        <nav className="flex flex-col gap-5">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveCategory(item);
                onClose();
              }}
              className={`text-left font-serif text-2xl transition hover:translate-x-1 hover:text-gold ${
                activeCategory === item ? 'text-gold' : ''
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default SideMenu;
