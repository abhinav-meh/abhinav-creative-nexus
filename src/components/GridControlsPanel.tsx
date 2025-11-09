import { useState, useEffect } from 'react'
import { Settings, RotateCcw, Share2, Sliders } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useDebounce } from '@/hooks/useDebounce'
import { toast } from 'sonner'

interface GridControlsPanelProps {
  waveAmplitude: number
  particleSize: number
  waveSpeed: number
  cameraRotationX: number
  cameraPositionY: number
  cameraPositionZ: number
  fov: number
  onWaveAmplitudeChange: (value: number) => void
  onParticleSizeChange: (value: number) => void
  onWaveSpeedChange: (value: number) => void
  onCameraRotationXChange: (value: number) => void
  onCameraPositionYChange: (value: number) => void
  onCameraPositionZChange: (value: number) => void
  onFovChange: (value: number) => void
  onReset: () => void
}

export default function GridControlsPanel({
  waveAmplitude,
  particleSize,
  waveSpeed,
  cameraRotationX,
  cameraPositionY,
  cameraPositionZ,
  fov,
  onWaveAmplitudeChange,
  onParticleSizeChange,
  onWaveSpeedChange,
  onCameraRotationXChange,
  onCameraPositionYChange,
  onCameraPositionZChange,
  onFovChange,
  onReset,
}: GridControlsPanelProps) {
  const [open, setOpen] = useState(false)
  const [localAmplitude, setLocalAmplitude] = useState(waveAmplitude)
  const [localSize, setLocalSize] = useState(particleSize)
  const [localSpeed, setLocalSpeed] = useState(waveSpeed)
  const [localRotationX, setLocalRotationX] = useState(cameraRotationX)
  const [localPositionY, setLocalPositionY] = useState(cameraPositionY)
  const [localPositionZ, setLocalPositionZ] = useState(cameraPositionZ)
  const [localFov, setLocalFov] = useState(fov)
  
  // Debounce values for performance
  const debouncedAmplitude = useDebounce(localAmplitude, 100)
  const debouncedSize = useDebounce(localSize, 100)
  const debouncedSpeed = useDebounce(localSpeed, 100)
  const debouncedRotationX = useDebounce(localRotationX, 100)
  const debouncedPositionY = useDebounce(localPositionY, 100)
  const debouncedPositionZ = useDebounce(localPositionZ, 100)
  const debouncedFov = useDebounce(localFov, 100)
  
  useEffect(() => {
    onWaveAmplitudeChange(debouncedAmplitude)
  }, [debouncedAmplitude, onWaveAmplitudeChange])
  
  useEffect(() => {
    onParticleSizeChange(debouncedSize)
  }, [debouncedSize, onParticleSizeChange])
  
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

  const handleShareConfig = () => {
    const params = new URLSearchParams({
      amp: localAmplitude.toFixed(2),
      size: localSize.toFixed(2),
      speed: localSpeed.toFixed(1),
      rotX: localRotationX.toFixed(2),
      posY: localPositionY.toFixed(1),
      posZ: localPositionZ.toFixed(1),
      fov: localFov.toFixed(0),
    })
    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`
    navigator.clipboard.writeText(url)
    toast.success('Configuration copied to clipboard!')
  }

  return (
    <TooltipProvider>
      <Sheet open={open} onOpenChange={setOpen}>
        <Tooltip>
          <TooltipTrigger asChild>
            <SheetTrigger asChild>
              <Button
                size="icon"
                className="fixed bottom-6 right-6 z-50 pointer-events-auto h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 bg-primary/90 hover:bg-primary backdrop-blur-sm"
              >
                <Sliders className="h-6 w-6 text-primary-foreground" />
              </Button>
            </SheetTrigger>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Customize Grid</p>
          </TooltipContent>
        </Tooltip>
        
        <SheetContent 
          side="right" 
          className="w-full sm:w-[400px] pointer-events-auto overflow-y-auto"
        >
          <SheetHeader>
            <SheetTitle className="text-lg font-semibold">Grid Controls</SheetTitle>
          </SheetHeader>
          
          <div className="space-y-6 mt-6">
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

            <div className="border-t border-border pt-6" />

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
                max={0.4}
                step={0.01}
                className="w-full"
              />
            </div>

            {/* Particle Size */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-foreground">
                  Particle Size
                </label>
                <span className="text-sm text-muted-foreground font-mono">
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

            <div className="border-t border-border pt-6 space-y-3">
              <Button
                variant="outline"
                className="w-full"
                onClick={handleShareConfig}
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share Configuration
              </Button>
              
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

            <p className="text-xs text-muted-foreground text-center">
              Changes are saved automatically
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </TooltipProvider>
  )
}
