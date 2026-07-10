import { useState } from 'react'

interface PackageItem {
  id: string
  length: string
  width: string
  height: string
  qty: string
  weight: string
}

export default function CbmCalculator(): JSX.Element {
  const initialPackage = (): PackageItem => ({
    id: Math.random().toString(36).substring(2, 9),
    length: '',
    width: '',
    height: '',
    qty: '1',
    weight: '0'
  })

  const [packages, setPackages] = useState<PackageItem[]>([initialPackage()])
  const [dimensionUnit, setDimensionUnit] = useState<'cm' | 'in' | 'm'>('cm')
  const [shipmentMode, setShipmentMode] = useState<'sea' | 'air'>('sea')

  const addPackage = () => {
    setPackages([...packages, initialPackage()])
  }

  const removePackage = (id: string) => {
    if (packages.length > 1) {
      setPackages(packages.filter((p) => p.id !== id))
    } else {
      setPackages([initialPackage()])
    }
  }

  const updatePackage = (id: string, field: keyof PackageItem, value: string) => {
    setPackages(packages.map((p) => (p.id === id ? { ...p, [field]: value } : p)))
  }

  // Calculations
  let totalPackages = 0
  let totalCbm = 0
  let totalWeight = 0

  packages.forEach((pkg) => {
    const qty = parseInt(pkg.qty, 10) || 0
    const l = parseFloat(pkg.length) || 0
    const w = parseFloat(pkg.width) || 0
    const h = parseFloat(pkg.height) || 0
    const wt = parseFloat(pkg.weight) || 0

    totalPackages += qty
    totalWeight += wt * qty

    // Calculate volume of single package in CBM
    let volumeCbm = 0
    if (l > 0 && w > 0 && h > 0) {
      if (dimensionUnit === 'cm') {
        volumeCbm = (l * w * h) / 1000000
      } else if (dimensionUnit === 'in') {
        // 1 inch = 0.0254 meters
        volumeCbm = l * w * h * 0.000016387064
      } else if (dimensionUnit === 'm') {
        volumeCbm = l * w * h
      }
    }
    totalCbm += volumeCbm * qty
  })

  // Volumetric Weight
  // Sea: 1 CBM = 1000 kg. Air: 1 CBM = 167 kg.
  const volumetricWeightRatio = shipmentMode === 'sea' ? 1000 : 167
  const volumetricWeight = totalCbm * volumetricWeightRatio

  // Chargeable Weight
  let chargeableWeightText = ''
  if (shipmentMode === 'sea') {
    // Sea LCL: chargeable weight is max(CBM, actual weight in tons)
    const weightInTons = totalWeight / 1000
    const chargeableRt = Math.max(totalCbm, weightInTons)
    chargeableWeightText = `${chargeableRt.toFixed(3)} RT (W/M)`
  } else {
    // Air: chargeable weight is max(actual weight, volumetric weight) in kg
    const chargeableKg = Math.max(totalWeight, volumetricWeight)
    chargeableWeightText = `${Math.round(chargeableKg).toLocaleString()} kg`
  }

  // Container Utilisation percentages
  const util20 = totalCbm > 0 ? Math.min(100, Math.round((totalCbm / 28) * 100)) : 0
  const util40 = totalCbm > 0 ? Math.min(100, Math.round((totalCbm / 58) * 100)) : 0
  const util40hc = totalCbm > 0 ? Math.min(100, Math.round((totalCbm / 68) * 100)) : 0

  return (
    <section className="bg-[#fcfaf6] py-20 px-6 md:px-12" id="cbm-calculator">
      <div className="max-w-[1180px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-[700px] mx-auto">
          <span className="text-[0.70rem] font-extrabold tracking-[0.25em] uppercase text-[#c8a84b] block mb-3">
            Cargo Calculator
          </span>
          <h2 className="font-serif text-[clamp(2.0rem,3.5vw,2.4rem)] font-bold text-[#0d1b2e] leading-tight uppercase">
            CBM Calculator
          </h2>
          <div className="w-16 h-[3px] bg-[#c8a84b] mx-auto mt-4" />
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Dimensions Inputs */}
          <div className="lg:col-span-7 bg-white border border-[#f0ebe0] rounded-2xl shadow-[0_10px_30px_rgba(200,168,75,0.03)] p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 border-b border-dashed border-[#e8e8e4] pb-6">
              <div>
                <label className="block font-sans text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#0d1b2e] mb-2.5">
                  Dimension Unit
                </label>
                <select
                  value={dimensionUnit}
                  onChange={(e) => setDimensionUnit(e.target.value as any)}
                  className="w-full bg-[#faf8f4] border border-[#e8e8e4] rounded-lg px-4 py-3 font-sans text-[0.82rem] text-[#333] outline-none focus:border-[#c8a84b] cursor-pointer"
                >
                  <option value="cm">Centimetres (cm)</option>
                  <option value="in">Inches (in)</option>
                  <option value="m">Metres (m)</option>
                </select>
              </div>
              <div>
                <label className="block font-sans text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#0d1b2e] mb-2.5">
                  Shipment Mode
                </label>
                <select
                  value={shipmentMode}
                  onChange={(e) => setShipmentMode(e.target.value as any)}
                  className="w-full bg-[#faf8f4] border border-[#e8e8e4] rounded-lg px-4 py-3 font-sans text-[0.82rem] text-[#333] outline-none focus:border-[#c8a84b] cursor-pointer"
                >
                  <option value="sea">Sea (LCL) — 1 CBM = 1000 kg</option>
                  <option value="air">Air — 1 CBM = 167 kg</option>
                </select>
              </div>
            </div>

            {/* Inputs Column Headers */}
            <div className="hidden sm:grid sm:grid-cols-12 gap-3 mb-3 text-center pr-8">
              <div className="col-span-2 font-sans text-[0.58rem] font-bold tracking-[0.12em] uppercase text-slate-400">Length</div>
              <div className="col-span-2 font-sans text-[0.58rem] font-bold tracking-[0.12em] uppercase text-slate-400">Width</div>
              <div className="col-span-2 font-sans text-[0.58rem] font-bold tracking-[0.12em] uppercase text-slate-400">Height</div>
              <div className="col-span-2 font-sans text-[0.58rem] font-bold tracking-[0.12em] uppercase text-slate-400">Qty</div>
              <div className="col-span-4 font-sans text-[0.58rem] font-bold tracking-[0.12em] uppercase text-slate-400">Wt/Pc (kg)</div>
            </div>

            {/* Package Inputs Loop */}
            <div className="flex flex-col gap-4">
              {packages.map((pkg) => (
                <div key={pkg.id} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center pb-4 border-b sm:border-b-0 border-[#f0ebe0]">
                  {/* Length */}
                  <div className="col-span-2">
                    <label className="sm:hidden block font-sans text-[0.58rem] font-bold tracking-[0.12em] uppercase text-slate-400 mb-1">Length</label>
                    <input
                      type="number"
                      placeholder="L"
                      min="0"
                      step="any"
                      value={pkg.length}
                      onChange={(e) => updatePackage(pkg.id, 'length', e.target.value)}
                      className="w-full bg-[#faf8f4] border border-[#e8e8e4] rounded-lg px-3 py-2.5 font-sans text-[0.82rem] text-[#333] outline-none focus:border-[#c8a84b] text-center"
                    />
                  </div>
                  {/* Width */}
                  <div className="col-span-2">
                    <label className="sm:hidden block font-sans text-[0.58rem] font-bold tracking-[0.12em] uppercase text-slate-400 mb-1">Width</label>
                    <input
                      type="number"
                      placeholder="W"
                      min="0"
                      step="any"
                      value={pkg.width}
                      onChange={(e) => updatePackage(pkg.id, 'width', e.target.value)}
                      className="w-full bg-[#faf8f4] border border-[#e8e8e4] rounded-lg px-3 py-2.5 font-sans text-[0.82rem] text-[#333] outline-none focus:border-[#c8a84b] text-center"
                    />
                  </div>
                  {/* Height */}
                  <div className="col-span-2">
                    <label className="sm:hidden block font-sans text-[0.58rem] font-bold tracking-[0.12em] uppercase text-slate-400 mb-1">Height</label>
                    <input
                      type="number"
                      placeholder="H"
                      min="0"
                      step="any"
                      value={pkg.height}
                      onChange={(e) => updatePackage(pkg.id, 'height', e.target.value)}
                      className="w-full bg-[#faf8f4] border border-[#e8e8e4] rounded-lg px-3 py-2.5 font-sans text-[0.82rem] text-[#333] outline-none focus:border-[#c8a84b] text-center"
                    />
                  </div>
                  {/* Qty */}
                  <div className="col-span-2">
                    <label className="sm:hidden block font-sans text-[0.58rem] font-bold tracking-[0.12em] uppercase text-slate-400 mb-1">Qty</label>
                    <input
                      type="number"
                      placeholder="1"
                      min="1"
                      value={pkg.qty}
                      onChange={(e) => updatePackage(pkg.id, 'qty', e.target.value)}
                      className="w-full bg-[#faf8f4] border border-[#e8e8e4] rounded-lg px-3 py-2.5 font-sans text-[0.82rem] text-[#333] outline-none focus:border-[#c8a84b] text-center"
                    />
                  </div>
                  {/* Wt/Pc */}
                  <div className="col-span-3">
                    <label className="sm:hidden block font-sans text-[0.58rem] font-bold tracking-[0.12em] uppercase text-slate-400 mb-1">Weight Per Piece (kg)</label>
                    <input
                      type="number"
                      placeholder="0"
                      min="0"
                      step="any"
                      value={pkg.weight}
                      onChange={(e) => updatePackage(pkg.id, 'weight', e.target.value)}
                      className="w-full bg-[#faf8f4] border border-[#e8e8e4] rounded-lg px-3 py-2.5 font-sans text-[0.82rem] text-[#333] outline-none focus:border-[#c8a84b] text-center"
                    />
                  </div>
                  {/* Delete */}
                  <div className="col-span-1 flex justify-center sm:pt-0 pt-2">
                    <button
                      type="button"
                      onClick={() => removePackage(pkg.id)}
                      className="text-red-400 hover:text-red-600 transition-colors p-1 cursor-pointer"
                      title="Remove package type"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Add package action */}
            <div className="mt-6">
              <button
                type="button"
                onClick={addPackage}
                className="inline-flex items-center gap-2 border border-[#c8a84b] hover:bg-gold hover:text-white transition-all duration-200 text-[#b09038] font-mono font-bold text-[0.68rem] tracking-[0.10em] uppercase py-2.5 px-5 rounded-full cursor-pointer"
              >
                <span>+ Add Package Type</span>
              </button>
            </div>
          </div>

          {/* Right Column: Shipment Summary */}
          <div className="lg:col-span-5 bg-white border border-[#f0ebe0] rounded-2xl shadow-[0_10px_30px_rgba(200,168,75,0.03)] p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-[1.2rem] font-bold text-[#0d1b2e] mb-6">
                Shipment Summary
              </h3>
              
              {/* Summary Rows */}
              <div className="flex flex-col gap-4 text-[0.82rem] text-slate-500 font-urbanist">
                <div className="flex justify-between py-2 border-b border-[#f5f2eb]">
                  <span>Total Packages</span>
                  <span className="font-bold text-[#0d1b2e]">{totalPackages}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#f5f2eb]">
                  <span>Total Volume</span>
                  <span className="font-bold text-[#0d1b2e] font-serif text-[1.02rem]">
                    {totalCbm.toFixed(3)} <span className="text-[0.72rem] font-sans text-slate-500 font-normal">CBM</span>
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#f5f2eb]">
                  <span>Actual Weight</span>
                  <span className="font-bold text-[#0d1b2e]">
                    {totalWeight.toLocaleString()} <span className="text-[0.72rem] font-sans text-slate-500 font-normal">kg</span>
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#f5f2eb]">
                  <span>Volumetric Weight</span>
                  <span className="font-bold text-[#0d1b2e]">
                    {Math.round(volumetricWeight).toLocaleString()} <span className="text-[0.72rem] font-sans text-slate-500 font-normal">kg</span>
                  </span>
                </div>
              </div>

              {/* Highlighted Chargeable Weight Display */}
              <div className="bg-[#fffbeb] border border-[#fef3da] rounded-xl p-4.5 flex justify-between items-center my-6 shadow-sm">
                <span className="font-sans text-[0.68rem] font-extrabold uppercase text-slate-500 tracking-wider">
                  Chargeable Weight
                </span>
                <span className="text-[1.12rem] font-bold text-[#0d1b2e] font-serif">
                  {chargeableWeightText}
                </span>
              </div>

              {/* Container Utilisation */}
              <div className="mt-6 border-t border-[#f5f2eb] pt-6">
                <h4 className="font-sans text-[0.62rem] font-extrabold uppercase text-slate-400 tracking-widest mb-4">
                  Container Utilisation
                </h4>
                
                <div className="flex flex-col gap-4">
                  {/* 20' Standard */}
                  <div>
                    <div className="flex justify-between text-[0.72rem] font-bold text-slate-600 mb-1">
                      <span>20' Standard (~28 CBM)</span>
                      <span>{util20}%</span>
                    </div>
                    <div className="w-full h-2 bg-[#faf8f4] rounded-full overflow-hidden border border-[#e8e8e4]">
                      <div 
                        className="h-full bg-gold transition-all duration-500" 
                        style={{ width: `${util20}%` }}
                      />
                    </div>
                  </div>

                  {/* 40' Standard */}
                  <div>
                    <div className="flex justify-between text-[0.72rem] font-bold text-slate-600 mb-1">
                      <span>40' Standard (~58 CBM)</span>
                      <span>{util40}%</span>
                    </div>
                    <div className="w-full h-2 bg-[#faf8f4] rounded-full overflow-hidden border border-[#e8e8e4]">
                      <div 
                        className="h-full bg-gold transition-all duration-500" 
                        style={{ width: `${util40}%` }}
                      />
                    </div>
                  </div>

                  {/* 40' High Cube */}
                  <div>
                    <div className="flex justify-between text-[0.72rem] font-bold text-slate-600 mb-1">
                      <span>40' High Cube (~68 CBM)</span>
                      <span>{util40hc}%</span>
                    </div>
                    <div className="w-full h-2 bg-[#faf8f4] rounded-full overflow-hidden border border-[#e8e8e4]">
                      <div 
                        className="h-full bg-gold transition-all duration-500" 
                        style={{ width: `${util40hc}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Informational Alerts */}
              <div className="bg-[#ecf3fa] text-[#2c5282] rounded-xl p-3.5 text-[0.72rem] font-semibold font-sans mt-6 leading-relaxed flex items-start gap-2 border border-[#d2e2f2]">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0 mt-[2px]">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <div>
                  {totalCbm === 0 ? (
                    <span>Add package dimensions to see a container recommendation.</span>
                  ) : totalCbm <= 28 ? (
                    <span>Fits comfortably inside a 20' Standard container.</span>
                  ) : totalCbm <= 58 ? (
                    <span>Requires a 40' Standard container.</span>
                  ) : totalCbm <= 68 ? (
                    <span>Requires a 40' High Cube container.</span>
                  ) : (
                    <span>Exceeds single container capacity. Split shipments or breakbulk recommended.</span>
                  )}
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="w-full bg-[#0d1b2e] hover:bg-gold hover:text-[#0d1b2e] text-white font-mono font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all duration-300 shadow-md text-center block mt-6 cursor-pointer"
            >
              Get Exact Rate for This Cargo →
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
