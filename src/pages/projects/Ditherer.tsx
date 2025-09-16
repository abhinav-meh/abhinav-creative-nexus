import Navigation from "@/components/Navigation"
import InteractiveGrid from "@/components/InteractiveGrid"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { ExternalLink, Download, Upload, Palette, Zap, ArrowLeft, Lock, Smartphone } from "lucide-react"
import dithererThumbnail from "@/assets/ditherer-thumbnail.svg"
import dithererSection1 from "@/assets/dither-er-section-1.jpg"
import dithererSection2 from "@/assets/dither-er-section-2.jpg"

const Ditherer = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background relative">
      {/* Static Grid Pattern Background */}
      <div 
        className="absolute inset-0 bg-grid-pattern" 
        style={{backgroundSize: '64px 64px'}}
      ></div>
      
      {/* Interactive Grid Overlay */}
      <InteractiveGrid />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80"></div>
      
      <div className="relative z-10 pb-24">
        <div className="container mx-auto px-4 py-16">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-8 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Work
          </Button>
          
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center">
                <img 
                  src={dithererThumbnail} 
                  alt="Dither-er logo" 
                  className="w-12 h-12" 
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">Dither-er</h1>
                <p className="text-lg text-muted-foreground mb-4">
                  Fast, client-side image dithering tool that converts photos to bitmap-style aesthetics. 
                  All processing happens in your browser - no uploads, complete privacy.
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                >
                  <a href="https://dither-craft.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Launch App
                  </a>
                </Button>
              </div>
            </div>

            {/* Features Grid */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Upload className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Multiple Input Methods</h3>
                    <p className="text-sm text-muted-foreground">
                      Drag & drop, file picker, paste from clipboard, or load from URL. Supports PNG, JPEG, and WebP formats.
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Palette className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Dithering Algorithms</h3>
                    <p className="text-sm text-muted-foreground">
                      Floyd-Steinberg error diffusion, Ordered/Bayer matrices, and simple threshold binarization.
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Real-time Preview</h3>
                    <p className="text-sm text-muted-foreground">
                      Live before/after comparison with instant algorithm switching and parameter adjustments.
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Download className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Export Options</h3>
                    <p className="text-sm text-muted-foreground">
                      Download as PNG with original or custom scaling. Perfect pixel preservation for your dithered art.
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Lock className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Privacy First</h3>
                    <p className="text-sm text-muted-foreground">
                      All processing happens locally in your browser. No uploads, no tracking, no sign-up required.
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Smartphone className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Mobile Friendly</h3>
                    <p className="text-sm text-muted-foreground">
                      Responsive design that works seamlessly on desktop, tablet, and mobile devices.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Screenshots */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Interface Preview</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div className="space-y-4">
                  <img 
                    src={dithererSection2} 
                    alt="Dither-er upload interface"
                    className="rounded-lg shadow-lg w-full"
                  />
                  <p className="text-sm text-muted-foreground text-center">
                    Clean upload interface with drag & drop support
                  </p>
                </div>
                <div className="space-y-4">
                  <img 
                    src={dithererSection1} 
                    alt="Dither-er processing interface"
                    className="rounded-lg shadow-lg w-full"
                  />
                  <p className="text-sm text-muted-foreground text-center">
                    Real-time dithering with multiple algorithm options
                  </p>
                </div>
              </div>
            </section>

            {/* Technical Details */}
            <section className="mb-16">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Technical Implementation</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Algorithms</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Floyd-Steinberg error diffusion with proper kernel weights</li>
                      <li>• Ordered/Bayer 4×4 matrix dithering</li>
                      <li>• Simple threshold binarization</li>
                      <li>• 2-8 grayscale levels support</li>
                      <li>• Custom 2-color palette with HEX inputs</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Performance</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Canvas 2D API for optimal rendering</li>
                      <li>• Web Workers for non-blocking processing</li>
                      <li>• ImageBitmap for efficient image handling</li>
                      <li>• Sub-second processing for 2K images</li>
                      <li>• 95% client-only operations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Tools Used */}
            <section className="mb-16">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Tools & Technologies</h2>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    'React', 'TypeScript', 'Canvas API', 'Web Workers', 
                    'Tailwind CSS', 'Vite', 'HTML5 File API', 'ImageBitmap'
                  ].map((tool) => (
                    <Badge key={tool} variant="secondary" className="px-3 py-1">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Try Dither-er Today</h2>
                <p className="text-muted-foreground mb-8">
                  Transform your images into beautiful bitmap art with this fast, privacy-focused dithering tool.
                </p>
                <Button size="lg" className="gap-2" asChild>
                  <a href="https://dither-craft.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Launch Application
                  </a>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Navigation />
    </div>
  )
}

export default Ditherer