import ProjectLayout from '@/components/ProjectLayout'
import amazeballsMainMenu from '@/assets/amazeballs-main-menu.png'
import amazeballsLevel from '@/assets/amazeballs-level.png'
import amazeballsLevel2 from '@/assets/amazeballs-level-2.png'
import controllerDevelopment from '@/assets/amazeballs-controller-development.jpg'
import wearableController from '@/assets/amazeballs-wearable-controller.jpg'

const Amazeballs = () => {
  return (
    <ProjectLayout
      title="Amazeballs"
      subtitle="Unity-powered game with custom wearable controller"
      icon="🎮"
    >
              <p className="text-lg text-muted-foreground mb-8">
                A Unity-powered maze game featuring custom wearable controller integration. Navigate through challenging levels while collecting items in this immersive gaming experience.
              </p>
              
              <div className="bg-card/50 rounded-lg p-8 border border-border mb-8">
                <h2 className="text-2xl font-semibold mb-4">Game Features</h2>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Multiple difficulty levels (Easy, Mid, Hard)</li>
                  <li>• Collectible system with progress tracking</li>
                  <li>• Timer-based challenges</li>
                  <li>• Custom wearable controller integration</li>
                  <li>• Immersive space-themed environments</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card/30 rounded-lg overflow-hidden border border-border">
                  <img 
                    src={amazeballsMainMenu} 
                    alt="Amazeballs main menu with difficulty selection"
                    className="w-full h-auto"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">Main Menu</h3>
                    <p className="text-sm text-muted-foreground">Choose your difficulty level and start your maze adventure</p>
                  </div>
                </div>

                <div className="bg-card/30 rounded-lg overflow-hidden border border-border">
                  <img 
                    src={amazeballsLevel} 
                    alt="Amazeballs game level showing maze layout"
                    className="w-full h-auto"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">Game Level</h3>
                    <p className="text-sm text-muted-foreground">Navigate through intricate maze patterns</p>
                  </div>
                </div>
              </div>

              <div className="bg-card/30 rounded-lg overflow-hidden border border-border">
                <img 
                  src={amazeballsLevel2} 
                  alt="Amazeballs gameplay with collectibles and timer"
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Active Gameplay</h3>
                  <p className="text-sm text-muted-foreground">Collect blue crystals while racing against time in this challenging maze environment</p>
                </div>
              </div>

              <div className="bg-card/50 rounded-lg p-8 border border-border mb-8">
                <h2 className="text-2xl font-semibold mb-8">Custom Wearable Hardware</h2>
                <p className="text-muted-foreground mb-6">
                  The Amazeballs game features a custom-built wearable controller that provides an immersive gaming experience. 
                  The controller uses motion sensors and wireless connectivity to translate player movements into game controls.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-card/30 rounded-lg overflow-hidden border border-border">
                    <img 
                      src={controllerDevelopment} 
                      alt="Arduino-based controller development showing microcontroller and sensor modules"
                      className="w-full h-auto"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">Controller Development</h3>
                      <p className="text-sm text-muted-foreground">Arduino-based prototype with integrated sensors for motion detection and wireless communication</p>
                    </div>
                  </div>

                  <div className="bg-card/30 rounded-lg overflow-hidden border border-border">
                    <img 
                      src={wearableController} 
                      alt="Finished wearable controller with custom 3D-printed purple case worn on wrist"
                      className="w-full h-auto"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">Wearable Design</h3>
                      <p className="text-sm text-muted-foreground">Final wearable form factor with custom 3D-printed enclosure for comfortable gameplay</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Hardware Components</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Arduino Uno microcontroller</li>
                      <li>• Motion sensors (accelerometer/gyroscope)</li>
                      <li>• Wireless communication module</li>
                      <li>• Custom PCB design</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Design Features</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• 3D-printed ergonomic case</li>
                      <li>• Adjustable wrist strap</li>
                      <li>• Low-power operation</li>
                      <li>• Real-time response</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Functionality</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Motion-based navigation</li>
                      <li>• Gesture recognition</li>
                      <li>• Wireless Unity integration</li>
                      <li>• Haptic feedback</li>
                    </ul>
                  </div>
                </div>
              </div>
    </ProjectLayout>
  )
}

export default Amazeballs