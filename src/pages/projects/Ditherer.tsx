import Navigation from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github, Download, Upload, Palette, Zap } from "lucide-react"

const Ditherer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-24">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-4">
              Development • 2025
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Dither-er
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Fast, client-side image dithering tool that converts photos to bitmap-style aesthetics. 
              All processing happens in your browser - no uploads, complete privacy.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <ExternalLink className="w-4 h-4" />
                Launch App
              </Button>
            </div>
          </div>
        </section>

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
                  <div className="w-6 h-6 text-primary">🔒</div>
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
                  <div className="w-6 h-6 text-primary">📱</div>
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
                src="/src/assets/dither-er-section-2.jpg" 
                alt="Dither-er upload interface"
                className="rounded-lg shadow-lg w-full"
              />
              <p className="text-sm text-muted-foreground text-center">
                Clean upload interface with drag & drop support
              </p>
            </div>
            <div className="space-y-4">
              <img 
                src="/src/assets/dither-er-section-1.jpg" 
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
              Transform your images into beautiful bitmap art with our fast, privacy-focused dithering tool.
            </p>
            <Button size="lg" className="gap-2">
              <ExternalLink className="w-4 h-4" />
              Launch Application
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Ditherer