export default function ProductPortfolio(): JSX.Element {
  return (
    <section id="product-portfolio" className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-[1180px] mx-auto">

        {/* Header Layout */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
          <div>
            <span className="text-[0.85rem] font-urbanist font-bold tracking-widest text-gold uppercase block mb-1">
              The Collection
            </span>
            <h2 className="font-serif text-[2.2rem] font-bold text-black leading-tight">
              Our Product Portfolio
            </h2>
            <div className="w-16 h-[3px] bg-gold mt-4" />
          </div>
          <p className="font-urbanist text-[0.85rem] text-slate-gray max-w-[320px] text-left md:text-right mt-4 md:mt-0 leading-relaxed font-semibold">
            A comprehensive range of premium commodities, processed to international standards.
          </p>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1: Spices & Seasonings (Tall, spans 2 rows) */}
          <div className="md:row-span-2 relative overflow-hidden rounded-sm group min-h-[480px] flex flex-col justify-end p-6 md:p-8">
            {/* Background Image */}
            <img
              src="/exports-spices.png"
              alt="Premium spices layout"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Linear Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                Spices & Seasonings
              </h3>
              <p className="font-sans text-[0.78rem] text-white/80 leading-relaxed mb-6 max-w-xs">
                Turmeric, Black Pepper, Cardamom, and Potent Cumin.
              </p>
              <a
                href="#sourcing-form"
                className="inline-flex items-center gap-1.5 font-sans font-bold text-[0.68rem] tracking-[0.12em] text-[#c8a84b] uppercase transition-colors hover:text-white"
              >
                Explore Grades <span className="text-[0.8rem]">→</span>
              </a>
            </div>
          </div>

          {/* Card 2: Grains & Pulses (Wide, spans 2 columns) */}
          <div className="md:col-span-2 relative overflow-hidden rounded-sm group min-h-[230px] flex flex-col justify-end p-6 md:p-8">
            {/* Background Image */}
            <img
              src="/exports-grains.png"
              alt="Premium basmati rice bowl"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Linear Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                Grains & Pulses
              </h3>
              <p className="font-sans text-[0.78rem] text-white/80 leading-relaxed mb-6 max-w-md">
                Aged Basmati, Chickpeas, and Nutritious Millets.
              </p>
              <a
                href="#sourcing-form"
                className="inline-flex items-center gap-1.5 font-sans font-bold text-[0.68rem] tracking-[0.12em] text-[#c8a84b] uppercase transition-colors hover:text-white"
              >
                View Varieties <span className="text-[0.8rem]">→</span>
              </a>
            </div>
          </div>

          {/* Card 3: Fruits & Veg */}
          <div className="relative overflow-hidden rounded-sm group min-h-[230px] flex flex-col justify-end p-6 md:p-8">
            {/* Background Image */}
            <img
              src="/exports-fruits-veg.png"
              alt="Fresh mangoes and onions layout"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Linear Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
              <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-6 leading-tight">
                Fruits & Veg
              </h3>
              <a
                href="#sourcing-form"
                className="inline-flex items-center gap-1.5 font-sans font-bold text-[0.68rem] tracking-[0.12em] text-[#c8a84b] uppercase transition-colors hover:text-white"
              >
                Freshness Index <span className="text-[0.8rem]">→</span>
              </a>
            </div>
          </div>

          {/* Card 4: Value-Added */}
          <div className="relative overflow-hidden rounded-sm group min-h-[230px] flex flex-col justify-end p-6 md:p-8">
            {/* Background Image */}
            <img
              src="/exports-value-added.png"
              alt="Value-added supplement jars"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Linear Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
              <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-6 leading-tight">
                Value-Added
              </h3>
              <a
                href="#sourcing-form"
                className="inline-flex items-center gap-1.5 font-sans font-bold text-[0.68rem] tracking-[0.12em] text-[#c8a84b] uppercase transition-colors hover:text-white"
              >
                Private Label <span className="text-[0.8rem]">→</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
