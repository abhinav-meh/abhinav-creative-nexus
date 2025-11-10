import { useState, useEffect } from 'react'
import { RotateCcw, Sliders } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { useDebounce } from '@/hooks/useDebounce'
import { FLAGS } from '@/config/flags'

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
  const debouncedAmplitude = useDebounce(localAmplitude, 80)
  const debouncedCount = useDebounce(localCount, 100)
  const debouncedSpeed = useDebounce(localSpeed, 80)
  const debouncedRotationX = useDebounce(localRotationX, 80)
  const debouncedPositionY = useDebounce(localPositionY, 80)
  const debouncedPositionZ = useDebounce(localPositionZ, 80)
  const debouncedFov = useDebounce(localFov, 80)
  
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
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      {/* Floating Label */}
      {FLAGS.fabLabel && (
        <div 
          className={`
            absolute right-20 bottom-2 text-sm text-foreground/60 pointer-events-none
            transition-opacity duration-500
            ${showLabel && !open ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            animation: showLabel ? 'fadeout 4s forwards' : 'none'
          }}
        >
          Customize Grid →
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="h-16 w-16 rounded-full bg-background border border-border/20 shadow-lg hover:shadow-xl transition-all hover:scale-105"
      >
        <Sliders className="h-7 w-7 mx-auto text-foreground" />
      </button>

      {open && (
        <div
          className="absolute bottom-20 right-0 w-[320px] max-w-[92vw] rounded-xl bg-background shadow-xl border border-border p-6"
          style={{ pointerEvents: 'auto' }}
        >
          <div className="space-y-5">
            <h3 className="text-base font-semibold">Grid Controls</h3>

            {/* Camera Rotation X */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-medium text-foreground">
                  Camera Rotation X
                </label>
                <span className="text-xs text-muted-foreground font-mono">
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
                <label className="text-xs font-medium text-foreground">
                  Camera Position Y
                </label>
                <span className="text-xs text-muted-foreground font-mono">
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
                <label className="text-xs font-medium text-foreground">
                  Camera Position Z
                </label>
                <span className="text-xs text-muted-foreground font-mono">
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
                <label className="text-xs font-medium text-foreground">
                  FOV
                </label>
                <span className="text-xs text-muted-foreground font-mono">
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

            {/* Wave Amplitude */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-medium text-foreground">
                  Wave Amplitude
                </label>
                <span className="text-xs text-muted-foreground font-mono">
                  {localAmplitude.toFixed(2)}
                </span>
              </div>
              <Slider
                value={[localAmplitude]}
                onValueChange={(v) => setLocalAmplitude(v[0])}
                min={0.15}
                max={0.8}
                step={0.01}
                className="w-full"
              />
            </div>

            {/* Particle Density */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-medium text-foreground">
                  Particle Density
                </label>
                <span className="text-xs text-muted-foreground font-mono">
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
                <label className="text-xs font-medium text-foreground">
                  Wave Speed
                </label>
                <span className="text-xs text-muted-foreground font-mono">
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

            <div className="border-t border-border pt-4 mt-6">
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => {
                  onReset()
                  setOpen(false)
                }}
              >
                <RotateCcw className="mr-2 h-3 w-3" />
                Reset to Default
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
