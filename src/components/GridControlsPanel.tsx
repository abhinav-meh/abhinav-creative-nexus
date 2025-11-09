import { useState, useEffect } from 'react'
import { Settings, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useDebounce } from '@/hooks/useDebounce'

interface GridControlsPanelProps {
  waveAmplitude: number
  particleSize: number
  waveSpeed: number
  onWaveAmplitudeChange: (value: number) => void
  onParticleSizeChange: (value: number) => void
  onWaveSpeedChange: (value: number) => void
  onReset: () => void
}

export default function GridControlsPanel({
  waveAmplitude,
  particleSize,
  waveSpeed,
  onWaveAmplitudeChange,
  onParticleSizeChange,
  onWaveSpeedChange,
  onReset,
}: GridControlsPanelProps) {
  const [localAmplitude, setLocalAmplitude] = useState(waveAmplitude)
  const [localSize, setLocalSize] = useState(particleSize)
  const [localSpeed, setLocalSpeed] = useState(waveSpeed)
  
  // Debounce values for performance
  const debouncedAmplitude = useDebounce(localAmplitude, 100)
  const debouncedSize = useDebounce(localSize, 100)
  const debouncedSpeed = useDebounce(localSpeed, 100)
  
  useEffect(() => {
    onWaveAmplitudeChange(debouncedAmplitude)
  }, [debouncedAmplitude, onWaveAmplitudeChange])
  
  useEffect(() => {
    onParticleSizeChange(debouncedSize)
  }, [debouncedSize, onParticleSizeChange])
  
  useEffect(() => {
    onWaveSpeedChange(debouncedSpeed)
  }, [debouncedSpeed, onWaveSpeedChange])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="fixed top-6 right-6 z-50 pointer-events-auto bg-background/95 backdrop-blur-sm shadow-minimal hover:shadow-card transition-all"
        >
          <Settings className="mr-2 h-4 w-4" />
          <span className="hidden md:inline">Customize Grid</span>
          <span className="md:hidden">Grid</span>
        </Button>
      </PopoverTrigger>
      
      <PopoverContent 
        align="end" 
        className="w-72 md:w-80 pointer-events-auto bg-background/95 backdrop-blur-md border-border shadow-card"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold tracking-tight">Grid Settings</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={onReset}
              className="h-8 px-2 text-xs"
            >
              <RotateCcw className="mr-1 h-3 w-3" />
              Reset
            </Button>
          </div>

          {/* Wave Amplitude */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-medium text-muted-foreground">
                Wave Amplitude
              </label>
              <span className="text-xs text-foreground font-mono">
                {localAmplitude.toFixed(2)}
              </span>
            </div>
            <Slider
              value={[localAmplitude]}
              onValueChange={(v) => setLocalAmplitude(v[0])}
              min={0.05}
              max={0.4}
              step={0.01}
              className="w-full"
            />
          </div>

          {/* Particle Size */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-medium text-muted-foreground">
                Particle Size
              </label>
              <span className="text-xs text-foreground font-mono">
                {localSize.toFixed(2)}
              </span>
            </div>
            <Slider
              value={[localSize]}
              onValueChange={(v) => setLocalSize(v[0])}
              min={0.05}
              max={0.2}
              step={0.01}
              className="w-full"
            />
          </div>

          {/* Wave Speed */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-medium text-muted-foreground">
                Wave Speed
              </label>
              <span className="text-xs text-foreground font-mono">
                {localSpeed.toFixed(1)}
              </span>
            </div>
            <Slider
              value={[localSpeed]}
              onValueChange={(v) => setLocalSpeed(v[0])}
              min={0.1}
              max={1.0}
              step={0.1}
              className="w-full"
            />
          </div>

          <p className="text-xs text-muted-foreground pt-2 border-t border-border">
            Changes are saved automatically
          </p>
        </div>
      </PopoverContent>
    </Popover>
  )
}
