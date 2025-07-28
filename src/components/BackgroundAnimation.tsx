'use client'

export function BackgroundAnimation() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="absolute w-20 h-20 bg-white/5 rounded-full top-1/5 left-1/10 animate-float" 
           style={{ animationDelay: '0s' }} />
      <div className="absolute w-30 h-30 bg-white/5 rounded-full top-3/5 right-3/20 animate-float" 
           style={{ animationDelay: '-5s' }} />
      <div className="absolute w-15 h-15 bg-white/5 rounded-full bottom-1/3 left-1/5 animate-float" 
           style={{ animationDelay: '-10s' }} />
      <div className="absolute w-25 h-25 bg-white/5 rounded-full top-1/10 right-3/10 animate-float" 
           style={{ animationDelay: '-15s' }} />
    </div>
  )
}