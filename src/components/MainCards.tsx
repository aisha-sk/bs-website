'use client'

import { useState } from 'react'
import { Building2, Cog, Briefcase, ArrowRight } from 'lucide-react'

const cards = [
  {
    id: 'departments',
    title: 'Departments',
    description: 'Explore our organizational structure and team divisions',
    icon: Building2,
    href: '/departments'
  },
  {
    id: 'what-we-do',
    title: 'What We Do',
    description: 'Discover our services, solutions, and capabilities',
    icon: Cog,
    href: '/services'
  },
  {
    id: 'portfolios',
    title: 'Project Portfolios',
    description: 'View our current projects and success stories',
    icon: Briefcase,
    href: '/portfolios'
  }
]

export function MainCards() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const handleCardClick = (href: string) => {
    // Add ripple effect
    console.log(`Navigating to: ${href}`)
    // In a real app, you'd use Next.js router here
    // router.push(href)
  }

  return (
    <section className="px-5 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card) => {
          const IconComponent = card.icon
          const isHovered = hoveredCard === card.id
          
          return (
            <div
              key={card.id}
              className={`glass rounded-3xl p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-blue-400 min-h-[200px] flex flex-col justify-between relative overflow-hidden group ${
                isHovered ? 'bg-white/15' : ''
              }`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(card.href)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className={`w-15 h-15 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${
                  isHovered ? 'scale-110 rotate-6' : ''
                }`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {card.title}
                </h3>
                
                <p className="text-white/80 leading-relaxed mb-5 flex-grow">
                  {card.description}
                </p>
              </div>
              
              <div className={`self-end w-10 h-10 glass rounded-xl flex items-center justify-center transition-all duration-300 ${
                isHovered ? 'bg-blue-400 translate-x-1' : ''
              }`}>
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}