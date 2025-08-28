import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Palette } from 'lucide-react'

interface ColorPickerProps {
  color: string
  onChange: (color: string) => void
}

export const ColorPicker = ({ color, onChange }: ColorPickerProps) => {
  const presetColors = [
    '#3b82f6', // blue
    '#ef4444', // red
    '#22c55e', // green
    '#f59e0b', // yellow
    '#8b5cf6', // purple
    '#ec4899', // pink
    '#06b6d4', // cyan
    '#84cc16', // lime
    '#f97316', // orange
    '#6b7280', // gray
    '#000000', // black
    '#ffffff', // white
  ]

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <div 
            className="w-4 h-4 rounded border border-border"
            style={{ backgroundColor: color }}
          />
          <Palette className="w-4 h-4" />
          Color
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Custom Color</label>
            <div className="flex gap-2">
              <Input
                type="color"
                value={color}
                onChange={(e) => onChange(e.target.value)}
                className="w-12 h-8 p-1 border rounded"
              />
              <Input
                type="text"
                value={color}
                onChange={(e) => onChange(e.target.value)}
                className="flex-1"
                placeholder="#000000"
              />
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Preset Colors</label>
            <div className="grid grid-cols-6 gap-2">
              {presetColors.map((presetColor) => (
                <button
                  key={presetColor}
                  className={`w-8 h-8 rounded border-2 transition-all ${
                    color === presetColor 
                      ? 'border-primary scale-110' 
                      : 'border-border hover:scale-105'
                  }`}
                  style={{ backgroundColor: presetColor }}
                  onClick={() => onChange(presetColor)}
                />
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}