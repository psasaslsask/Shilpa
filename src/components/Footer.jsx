function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10 bg-[#efe7d8] px-5 py-12 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-3xl">MAANJHA</h3>
          <p className="mt-3 text-sm text-black/65">Designer clothing studio in Jaipur by Shilpa Sen.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em]">Customer Care</p>
          <ul className="mt-3 space-y-2 text-sm text-black/70">
            <li>Shipping & Returns</li>
            <li>Size Guide</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em]">Newsletter</p>
          <div className="mt-4 flex border border-black/20 bg-white">
            <input placeholder="Email address" className="w-full bg-transparent px-4 py-3 text-sm outline-none" />
            <button className="border-l border-black/20 px-4 text-xs uppercase tracking-[0.2em]">Join</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
