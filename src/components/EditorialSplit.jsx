function EditorialSplit({ onGoShop }) {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:px-10 lg:grid-cols-2">
      <img
        src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=80"
        alt="Editorial MAANJHA"
        className="h-[560px] w-full object-cover"
      />
      <div className="flex items-center bg-[#efe7d8] p-10 md:p-14">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-black/55">Studio Note</p>
          <h3 className="mt-4 text-5xl leading-[1.05]">Crafted in Jaipur, refined for modern celebrations.</h3>
          <p className="mt-5 max-w-md text-black/70">
            MAANJHA by Shilpa Sen presents hand-finished silhouettes balancing contemporary cut and artisanal details.
          </p>
          <button
            onClick={onGoShop}
            className="mt-9 border border-black px-7 py-3 text-xs uppercase tracking-[0.2em] transition hover:bg-black hover:text-white"
          >
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  );
}

export default EditorialSplit;
