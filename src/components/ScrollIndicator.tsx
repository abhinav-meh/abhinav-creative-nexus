import { ChevronDown } from 'lucide-react'

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
      <span className="text-xs tracking-tighter text-muted-foreground">SCROLL</span>
      <ChevronDown size={20} className="text-muted-foreground" />
    </div>
  )
}
