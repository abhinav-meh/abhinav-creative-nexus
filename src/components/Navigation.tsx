import { useState } from 'react'

const navItems = [
  { label: 'Work', href: '#work', icon: '💼' },
  { label: 'About', href: '#about', icon: '👋' },
  { label: 'Lab', href: '#lab', icon: '🧪' }
]

export default function Navigation() {
  const [activeItem, setActiveItem] = useState('Work')

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-card/90 backdrop-blur-md border border-border rounded-full px-6 py-3 shadow-card">
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveItem(item.label)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                activeItem === item.label
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
              }`}
            >
              <span className="text-sm">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}