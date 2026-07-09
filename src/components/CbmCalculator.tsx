import { useState } from 'react'

export default function CbmCalculator(): JSX.Element {
  const [length, setLength] = useState<string>('')
  const [width, setWidth] = useState<string>('')
  const [height, setHeight] = useState<string>('')
  const [quantity, setQuantity] = useState<string>('')
  const [cbmResult, setCbmResult] = useState<number | null>(null)
  const [cftResult, setCftResult] = useState<number | null>(null)

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()
    const l = parseFloat(length) || 0
    const w = parseFloat(width) || 0
    const h = parseFloat(height) || 0
    const q = parseInt(quantity, 10) || 0

    if (l > 0 && w > 0 && h > 0 && q > 0) {
      // Calculate cubic meters (L * W * H in cm / 1,000,000) * Quantity
      const cbm = (l * w * h * q) / 1000000
      // Calculate cubic feet (CBM * 35.3147)
      const cft = cbm * 35.3147

      setCbmResult(parseFloat(cbm.toFixed(3)))
      setCftResult(parseFloat(cft.toFixed(2)))
    } else {
      setCbmResult(null)
      setCftResult(null)
    }
  }

  const handleClear = () => {
    setLength('')
    setWidth('')
    setHeight('')
    setQuantity('')
    setCbmResult(null)
    setCftResult(null)
  }

  return (
    <section className="bg-ice-blue py-20 px-6 md:px-12" id="cbm-calculator">
      <div className="max-w-[1180px] mx-auto text-center">
        
        {/* Header */}
        <div className="mb-12">
          <span className="text-[0.70rem] font-bold tracking-[0.20em] uppercase text-gold block mb-2">
            Cargo Calculator
          </span>
          <h2 className="font-bricolage text-[clamp(2.0rem,4vw,2.8rem)] font-extrabold text-[#0d1b2e] tracking-tight uppercase">
            CBM Calculator
          </h2>
          <div className="w-16 h-[3px] bg-gold mx-auto mt-4" />
        </div>

        {/* Input Card Container */}
        <div className="bg-white border border-[#e8e8e4] rounded-2xl shadow-xl p-8 md:p-10 max-w-4xl mx-auto text-left">
          
          <form onSubmit={handleCalculate} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            
            {/* Length */}
            <div>
              <label htmlFor="cbm-len" className="block font-sans text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#0d1b2e] mb-2.5">
                Length (cm)
              </label>
              <input
                id="cbm-len"
                type="number"
                placeholder="Length"
                min="0"
                step="any"
                className="block w-full bg-transparent border-b border-[#c8c8c4] outline-none font-sans text-[0.82rem] text-[#333] py-2 transition-colors focus:border-[#c8a84b]"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
            </div>

            {/* Width */}
            <div>
              <label htmlFor="cbm-width" className="block font-sans text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#0d1b2e] mb-2.5">
                Width (cm)
              </label>
              <input
                id="cbm-width"
                type="number"
                placeholder="Width"
                min="0"
                step="any"
                className="block w-full bg-transparent border-b border-[#c8c8c4] outline-none font-sans text-[0.82rem] text-[#333] py-2 transition-colors focus:border-[#c8a84b]"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
              />
            </div>

            {/* Height */}
            <div>
              <label htmlFor="cbm-height" className="block font-sans text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#0d1b2e] mb-2.5">
                Height (cm)
              </label>
              <input
                id="cbm-height"
                type="number"
                placeholder="Height"
                min="0"
                step="any"
                className="block w-full bg-transparent border-b border-[#c8c8c4] outline-none font-sans text-[0.82rem] text-[#333] py-2 transition-colors focus:border-[#c8a84b]"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>

            {/* Quantity */}
            <div>
              <label htmlFor="cbm-qty" className="block font-sans text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#0d1b2e] mb-2.5">
                Quantity (pcs)
              </label>
              <input
                id="cbm-qty"
                type="number"
                placeholder="Quantity"
                min="1"
                className="block w-full bg-transparent border-b border-[#c8c8c4] outline-none font-sans text-[0.82rem] text-[#333] py-2 transition-colors focus:border-[#c8a84b]"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            {/* Action buttons */}
            <div className="md:col-span-4 flex justify-end gap-3 mt-4">
              <button
                type="button"
                className="border border-[#c8c8c4] hover:bg-slate-50 transition-colors text-slate-gray font-mono font-bold text-[0.68rem] tracking-[0.12em] uppercase py-3 px-6 rounded"
                onClick={handleClear}
              >
                Clear
              </button>
              <button
                type="submit"
                className="bg-[#c8a84b] hover:bg-[#b09038] transition-colors text-white font-mono font-bold text-[0.68rem] tracking-[0.12em] uppercase py-3 px-8 rounded"
              >
                Calculate
              </button>
            </div>

          </form>

          {/* Results Block */}
          {cbmResult !== null && cftResult !== null && (
            <div className="mt-8 pt-8 border-t border-[#e8e8e4] grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gold/[0.04] p-6 rounded-xl">
              <div>
                <span className="block font-sans text-[0.58rem] font-bold tracking-[0.16em] uppercase text-slate-gray mb-1">
                  Total Volume (CBM)
                </span>
                <span className="text-[2.0rem] font-bricolage font-extrabold text-[#0d1b2e]">
                  {cbmResult} <span className="text-[1.1rem] font-semibold text-slate-gray">m³</span>
                </span>
              </div>
              <div>
                <span className="block font-sans text-[0.58rem] font-bold tracking-[0.16em] uppercase text-slate-gray mb-1">
                  Total Volume (CFT)
                </span>
                <span className="text-[2.0rem] font-bricolage font-extrabold text-[#c8a84b]">
                  {cftResult} <span className="text-[1.1rem] font-semibold text-slate-gray">ft³</span>
                </span>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  )
}
