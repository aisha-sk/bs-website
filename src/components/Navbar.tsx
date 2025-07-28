'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Search, Menu } from 'lucide-react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-2.5rem)] max-w-6xl transition-all duration-300 ${
      isScrolled ? '-translate-y-24' : 'translate-y-0'
    }`}>
      <div className="glass glass-hover rounded-2xl px-6 py-3 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">E</span>
          </div>
          <span className="font-semibold text-lg text-white hidden sm:block">
            Business Solutions
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className={`glass rounded-xl py-2 pl-10 pr-4 text-white placeholder-white/60 text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                searchFocused ? 'w-64' : 'w-48'
              }`}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>
          
          <button className="glass rounded-lg p-2 text-white hover:bg-white/20 transition-all duration-200 hover:scale-105">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  )
}