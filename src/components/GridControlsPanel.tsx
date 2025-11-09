import { useState, useEffect } from 'react'
import { RotateCcw, Sliders } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useDebounce } from '@/hooks/useDebounce'

interface GridControlsPanelProps {
  waveAmplitude: number
  particleCount: number
  waveSpeed: number
  cameraRotationX: number
  cameraPositionY: number
  cameraPositionZ: number
  fov: number
  onWaveAmplitudeChange: (value: number) => void
  onParticleCountChange: (value: number) => void
  onWaveSpeedChange: (value: number) => void
  onCameraRotationXChange: (value: number) => void
  onCameraPositionYChange: (value: number) => void
  onCameraPositionZChange: (value: number) => void
  onFovChange: (value: number) => void
  onReset: () => void
}

export default function GridControlsPanel({
  waveAmplitude,
  particleCount,
  waveSpeed,
  cameraRotationX,
  cameraPositionY,
  cameraPositionZ,
  fov,
  onWaveAmplitudeChange,
  onParticleCountChange,
  onWaveSpeedChange,
  onCameraRotationXChange,
  onCameraPositionYChange,
  onCameraPositionZChange,
  onFovChange,
  onReset,
}: GridControlsPanelProps) {
  const [open, setOpen] = useState(false)
  const [showLabel, setShowLabel] = useState(true)
  const [localAmplitude, setLocalAmplitude] = useState(waveAmplitude)
  const [localCount, setLocalCount] = useState(particleCount)
  const [localSpeed, setLocalSpeed] = useState(waveSpeed)
  const [localRotationX, setLocalRotationX] = useState(cameraRotationX)
  const [localPositionY, setLocalPositionY] = useState(cameraPositionY)
  const [localPositionZ, setLocalPositionZ] = useState(cameraPositionZ)
  const [localFov, setLocalFov] = useState(fov)
  
  // Hide label after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLabel(false)
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  // Hide label on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowLabel(false)
    }
    window.addEventListener('scroll', handleScroll, { once: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Debounce values for performance
  const debouncedAmplitude = useDebounce(localAmplitude, 100)
  const debouncedCount = useDebounce(localCount, 300) // Longer debounce for particle count
  const debouncedSpeed = useDebounce(localSpeed, 100)
  const debouncedRotationX = useDebounce(localRotationX, 100)
  const debouncedPositionY = useDebounce(localPositionY, 100)
  const debouncedPositionZ = useDebounce(localPositionZ, 100)
  const debouncedFov = useDebounce(localFov, 100)
  
  useEffect(() => {
    onWaveAmplitudeChange(debouncedAmplitude)
  }, [debouncedAmplitude, onWaveAmplitudeChange])
  
  useEffect(() => {
    onParticleCountChange(debouncedCount)
  }, [debouncedCount, onParticleCountChange])
  
  useEffect(() => {
    onWaveSpeedChange(debouncedSpeed)
  }, [debouncedSpeed, onWaveSpeedChange])

  useEffect(() => {
    onCameraRotationXChange(debouncedRotationX)
  }, [debouncedRotationX, onCameraRotationXChange])

  useEffect(() => {
    onCameraPositionYChange(debouncedPositionY)
  }, [debouncedPositionY, onCameraPositionYChange])

  useEffect(() => {
    onCameraPositionZChange(debouncedPositionZ)
  }, [debouncedPositionZ, onCameraPositionZChange])

  useEffect(() => {
    onFovChange(debouncedFov)
  }, [debouncedFov, onFovChange])

  return (
    <TooltipProvider>
      <div className="fixed bottom-6 right-6 z-50 pointer-events-auto flex items-end gap-3">
        {/* Floating Label */}
        <div 
          className={`
            hidden sm:flex items-center gap-2 px-4 py-2 bg-background/95 backdrop-blur-sm 
            rounded-full shadow-md border border-border text-sm font-medium text-foreground
            transition-all duration-500 pointer-events-none
            ${showLabel || open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
          `}
          onMouseEnter={() => setShowLabel(true)}
        >
          Customize Grid
          <span className="text-muted-foreground">→</span>
        </div>

        <Popover open={open} onOpenChange={setOpen}>
          <Tooltip>
            <TooltipTrigger asChild>
              <PopoverTrigger asChild>
                <Button
                  size="icon"
                  className="h-16 w-16 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 bg-primary/90 hover:bg-primary backdrop-blur-sm group"
                  onMouseEnter={() => setShowLabel(true)}
                >
                  <Sliders className="h-7 w-7 text-primary-foreground group-hover:rotate-90 transition-transform duration-300" />
                  <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                </Button>
              </PopoverTrigger>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Customize Grid</p>
            </TooltipContent>
          </Tooltip>
        
        <PopoverContent 
          align="end"
          side="top"
          sideOffset={20}
          className="w-[90vw] sm:w-[400px] pointer-events-auto bg-background/95 backdrop-blur-md border shadow-lg rounded-xl p-6 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Grid Controls</h3>
            </div>

            {/* Camera Rotation X */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-foreground">
                  Camera Rotation X
                </label>
                <span className="text-sm text-muted-foreground font-mono">
                  {localRotationX.toFixed(2)}
                </span>
              </div>
              <Slider
                value={[localRotationX]}
                onValueChange={(v) => setLocalRotationX(v[0])}
                min={-1}
                max={0}
                step={0.01}
                className="w-full"
              />
            </div>

            {/* Camera Position Y */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-foreground">
                  Camera Position Y
                </label>
                <span className="text-sm text-muted-foreground font-mono">
                  {localPositionY.toFixed(1)}
                </span>
              </div>
              <Slider
                value={[localPositionY]}
                onValueChange={(v) => setLocalPositionY(v[0])}
                min={0}
                max={6}
                step={0.1}
                className="w-full"
              />
            </div>

            {/* Camera Position Z */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-foreground">
                  Camera Position Z
                </label>
                <span className="text-sm text-muted-foreground font-mono">
                  {localPositionZ.toFixed(1)}
                </span>
              </div>
              <Slider
                value={[localPositionZ]}
                onValueChange={(v) => setLocalPositionZ(v[0])}
                min={5}
                max={15}
                step={0.1}
                className="w-full"
              />
            </div>

            {/* FOV */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-foreground">
                  FOV
                </label>
                <span className="text-sm text-muted-foreground font-mono">
                  {localFov.toFixed(0)}
                </span>
              </div>
              <Slider
                value={[localFov]}
                onValueChange={(v) => setLocalFov(v[0])}
                min={60}
                max={120}
                step={1}
                className="w-full"
              />
            </div>

            <div className="border-t border-border" />

            {/* Wave Amplitude */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-foreground">
                  Wave Amplitude
                </label>
                <span className="text-sm text-muted-foreground font-mono">
                  {localAmplitude.toFixed(2)}
                </span>
              </div>
              <Slider
                value={[localAmplitude]}
                onValueChange={(v) => setLocalAmplitude(v[0])}
                min={0.05}
                max={1.0}
                step={0.01}
                className="w-full"
              />
            </div>

            {/* Particle Density */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-foreground">
                  Particle Density
                </label>
                <span className="text-sm text-muted-foreground font-mono">
                  {localCount}
                </span>
              </div>
              <Slider
                value={[localCount]}
                onValueChange={(v) => setLocalCount(v[0])}
                min={1000}
                max={8000}
                step={100}
                className="w-full"
              />
            </div>

            {/* Wave Speed */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-foreground">
                  Wave Speed
                </label>
                <span className="text-sm text-muted-foreground font-mono">
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

            <div className="border-t border-border pt-6">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  onReset()
                  setOpen(false)
                }}
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset to Default
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center pt-2">
              Changes are saved automatically
            </p>
          </div>
        </PopoverContent>
      </Popover>
      </div>
    </TooltipProvider>
  )
}
