import { Button } from '@/components/ui/button'
import { MousePointer, Paintbrush, Square, Circle, Trash2 } from 'lucide-react'

interface ToolbarProps {
  activeTool: 'select' | 'draw' | 'rectangle' | 'circle'
  onToolClick: (tool: 'select' | 'draw' | 'rectangle' | 'circle') => void
  onClear: () => void
}

export const Toolbar = ({ activeTool, onToolClick, onClear }: ToolbarProps) => {
  const tools = [
    { name: 'select' as const, icon: MousePointer, label: 'Select' },
    { name: 'draw' as const, icon: Paintbrush, label: 'Draw' },
    { name: 'rectangle' as const, icon: Square, label: 'Rectangle' },
    { name: 'circle' as const, icon: Circle, label: 'Circle' },
  ]

  return (
    <div className="flex gap-2 p-2 bg-muted rounded-lg">
      {tools.map((tool) => {
        const Icon = tool.icon
        return (
          <Button
            key={tool.name}
            variant={activeTool === tool.name ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onToolClick(tool.name)}
            className="flex items-center gap-2"
          >
            <Icon className="w-4 h-4" />
            {tool.label}
          </Button>
        )
      })}
      <div className="w-px bg-border mx-2" />
      <Button
        variant="outline"
        size="sm"
        onClick={onClear}
        className="flex items-center gap-2"
      >
        <Trash2 className="w-4 h-4" />
        Clear
      </Button>
    </div>
  )
}