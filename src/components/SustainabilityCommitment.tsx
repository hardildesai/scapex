export default function SustainabilityCommitment(): JSX.Element {
  const commitItems = [
    {
      title: 'Regenerative Agriculture',
      text: 'Improving soil health and reducing chemical inputs through partner cooperatives.',
    },
    {
      title: 'Zero-Waste Processing',
      text: 'Recovering husks, oils, and by-products for secondary usage in our spice line.',
    },
    {
      title: 'Regenerative Agriculture',
      text: 'Fair pricing, advance payments, and crop insurance for 5000+ members.',
    },
    {
      title: 'Green Logistics',
      text: 'Low-emission freight routing and carbon offset programs for global supply.',
    },
  ]

  return (
    <section id="sustainability-commitment" className="bg-warm-cream py-30 px-6 md:px-12">
      <div className="max-w-[1180px] mx-auto bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12">

        {/* Left Column: Content */}
        <div className="lg:col-span-7 p-8 md:p-30 flex flex-col justify-center">
          <h2 className="font-serif text-[2.2rem] md:text-[2.6rem] font-bold text-slate-900 leading-tight">
            Sustainability Commitment
          </h2>
          <div className="w-16 h-[2px] bg-gold mt-4 mb-6" />

          <p className="font-urbanist text-[0.85rem] text-slate-600 max-w-[480px] mb-10 leading-relaxed">
            Embedded in every step of the supply chain - from how we work with farmers to how we process and ship.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {commitItems.map((item, index) => (
              <div key={index}>
                <h3 className="font-serif text-[0.95rem] font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="font-urbanist text-[0.78rem] text-slate-500 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
          <img
            src="/exportsustain.webp"
            alt="Farming sustainability commitment"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  )
}
