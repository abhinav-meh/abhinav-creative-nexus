import { ChevronDown } from 'lucide-react'

export default function ScrollIndicator() {
  return (
    <div className="absolute inset-x-0 bottom-12 flex flex-col items-center gap-2 animate-bounce pointer-events-none">
      <span className="text-xs text-muted-foreground tracking-[0.2em]">
        SCROLL
      </span>

      <ChevronDown
        size={20}
        className="text-muted-foreground"
      />
    </div>
  )
}
