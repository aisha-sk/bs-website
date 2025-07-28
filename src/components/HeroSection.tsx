'use client'

import { Building2 } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="flex items-center justify-center min-h-[60vh] px-5 pt-32 pb-16 text-center">
      <div className="max-w-2xl animate-fadeInUp">
        <div className="inline-flex items-center gap-2 glass rounded-2xl px-4 py-2 text-sm font-medium text-white/80 mb-6">
          <Building2 className="w-4 h-4" />
          <span>City of Edmonton</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent leading-tight">
          Business Solutions
        </h1>
        
        <p className="text-lg text-white/80 leading-relaxed mb-10">
          Empowering Edmonton with innovative technology solutions, streamlined processes, 
          and data-driven insights to build a smarter, more connected city.
        </p>
      </div>
    </section>
  )
}