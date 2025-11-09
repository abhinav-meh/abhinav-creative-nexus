import { Slider } from '@/components/ui/slider'

interface CameraDebugPanelProps {
  positionY: number
  positionZ: number
  rotationX: number
  fov: number
  onPositionYChange: (value: number[]) => void
  onPositionZChange: (value: number[]) => void
  onRotationXChange: (value: number[]) => void
  onFovChange: (value: number[]) => void
}

export default function CameraDebugPanel({
  positionY,
  positionZ,
  rotationX,
  fov,
  onPositionYChange,
  onPositionZChange,
  onRotationXChange,
  onFovChange,
}: CameraDebugPanelProps) {
  return (
    <div className="fixed top-4 left-4 z-50 bg-black/80 backdrop-blur-sm text-white p-4 rounded-lg w-64 pointer-events-auto">
      <h3 className="text-sm font-semibold mb-3">Camera Debug</h3>
      
      <div className="space-y-4">
        {/* Position Y */}
        <div>
          <label className="text-xs text-white/70 block mb-1">
            Position Y: {positionY.toFixed(2)}
          </label>
          <Slider
            value={[positionY]}
            onValueChange={onPositionYChange}
            min={0}
            max={6}
            step={0.1}
            className="w-full"
          />
        </div>

        {/* Position Z */}
        <div>
          <label className="text-xs text-white/70 block mb-1">
            Position Z: {positionZ.toFixed(2)}
          </label>
          <Slider
            value={[positionZ]}
            onValueChange={onPositionZChange}
            min={5}
            max={15}
            step={0.1}
            className="w-full"
          />
        </div>

        {/* Rotation X */}
        <div>
          <label className="text-xs text-white/70 block mb-1">
            Rotation X: {rotationX.toFixed(3)} rad
          </label>
          <Slider
            value={[rotationX]}
            onValueChange={onRotationXChange}
            min={-1}
            max={0}
            step={0.01}
            className="w-full"
          />
        </div>

        {/* FOV */}
        <div>
          <label className="text-xs text-white/70 block mb-1">
            FOV: {fov.toFixed(0)}°
          </label>
          <Slider
            value={[fov]}
            onValueChange={onFovChange}
            min={40}
            max={80}
            step={1}
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}
