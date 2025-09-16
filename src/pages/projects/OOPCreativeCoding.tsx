import ProjectLayout from '@/components/ProjectLayout'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

const OOPCreativeCoding = () => {
  const buttons = (
    <>
      <Button 
        variant="outline" 
        size="sm"
        asChild
      >
        <a 
          href="https://github.com/abhinav-meh/CSCI_5448_Grad_Research.git" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Github className="w-4 h-4 mr-2" />
          View Repository
        </a>
      </Button>
      <Button 
        variant="outline" 
        size="sm"
        asChild
      >
        <a 
          href="/OOP_Principles_Creative_Coding_Paper.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          download="OOP_Principles_Creative_Coding_Paper.pdf"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Read Paper
        </a>
      </Button>
    </>
  )

  return (
    <ProjectLayout
      title="OOP Principles in Creative Coding"
      subtitle="A Comparative Study of Object-Oriented Principles in Creative Coding: Java AWT vs p5.js"
      icon="🔬"
      buttons={buttons}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Year</h3>
          <p className="text-lg text-foreground">2025</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Authors</h3>
          <p className="text-lg text-foreground">Abhinav Mehrotra, Vishnu Vardhan Mahajan</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Institution</h3>
          <p className="text-lg text-foreground">University of Colorado Boulder</p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Abstract</h2>
        <p className="text-lg text-muted-foreground mb-8">
          This research conducts a comparative analysis of object-oriented principles in creative coding by evaluating two environments: Java AWT and p5.js. The study examines how each platform implements key OO concepts such as classes, inheritance, and modular design in the development of interactive graphics and animations. Performance tests and usability assessments highlight the trade-offs between Java's comprehensive yet intricate approach and p5.js's streamlined, accessible methodology.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Research Overview</h2>
        <p className="text-lg text-muted-foreground mb-8">
          In today's digital landscape, creative coding has become an essential tool for artists and developers working in interactive media, digital art, and data visualization. This research explores how object-oriented programming (OOP) principles are applied in two different environments: Java AWT and p5.js, each offering unique approaches to coding creative projects.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-card/50 rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Java AWT</h3>
            <p className="text-muted-foreground mb-4">
              A well-established programming language known for its strong support of OOP concepts such as classes, inheritance, and encapsulation. Its robust framework allows for detailed and precise control over program structure and behavior.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Static type system with rigorous class-based architecture</li>
              <li>• Comprehensive frameworks (AWT, Swing, JavaFX)</li>
              <li>• Modular design with clear separation of concerns</li>
              <li>• Excellent for large-scale, maintainable applications</li>
            </ul>
          </div>
          
          <div className="bg-card/50 rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold mb-4 text-foreground">p5.js</h3>
            <p className="text-muted-foreground mb-4">
              A JavaScript library designed specifically for creative coding, providing a more accessible and streamlined framework that simplifies the process of building interactive graphics and animations.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Prototype-based inheritance with ES6 class syntax</li>
              <li>• User-friendly setup and draw methods</li>
              <li>• Focus on rapid prototyping and experimentation</li>
              <li>• Ideal for interactive graphics and web-based art</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Findings */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Key Findings</h2>
        <div className="space-y-6">
          <div className="bg-card/50 rounded-lg p-6 border border-border">
            <h3 className="text-lg font-semibold mb-3 text-foreground">Object-Oriented Implementation</h3>
            <p className="text-muted-foreground mb-4">
              Java AWT demonstrates strong adherence to traditional OOP principles with its comprehensive class hierarchy and strict type system. In contrast, p5.js offers a more flexible approach, allowing developers to choose between prototypical patterns and ES6 class syntax.
            </p>
          </div>
          
          <div className="bg-card/50 rounded-lg p-6 border border-border">
            <h3 className="text-lg font-semibold mb-3 text-foreground">Performance & Usability Trade-offs</h3>
            <p className="text-muted-foreground mb-4">
              While Java provides superior performance and structure for complex applications, p5.js excels in rapid prototyping and accessibility for creative coding newcomers. The choice between platforms depends on project scope, team expertise, and development timeline.
            </p>
          </div>
          
          <div className="bg-card/50 rounded-lg p-6 border border-border">
            <h3 className="text-lg font-semibold mb-3 text-foreground">Educational Implications</h3>
            <p className="text-muted-foreground mb-4">
              The study reveals that p5.js serves as an excellent entry point for learning OOP concepts in a creative context, while Java AWT provides deeper understanding of enterprise-level programming patterns and practices.
            </p>
          </div>
        </div>
      </div>

      {/* Methodology */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Research Methodology</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Comparative Analysis</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Implementation of core OOP concepts</li>
              <li>• Code structure and modularity assessment</li>
              <li>• Performance benchmarking</li>
              <li>• Developer experience evaluation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Practical Experiments</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Interactive graphics development</li>
              <li>• Animation system implementation</li>
              <li>• User interface creation</li>
              <li>• Cross-platform compatibility testing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Technical Contributions */}
      <div className="bg-card/50 rounded-lg p-8 border border-border">
        <h2 className="text-2xl font-semibold mb-6">Technical Contributions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Framework Comparison</h3>
            <p className="text-muted-foreground text-sm">Comprehensive analysis of OOP implementation patterns across Java AWT and p5.js environments</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Performance Metrics</h3>
            <p className="text-muted-foreground text-sm">Quantitative assessment of execution speed, memory usage, and development efficiency</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Best Practices Guide</h3>
            <p className="text-muted-foreground text-sm">Practical recommendations for choosing the right platform based on project requirements</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Educational Framework</h3>
            <p className="text-muted-foreground text-sm">Structured approach for teaching OOP concepts through creative coding projects</p>
          </div>
        </div>
      </div>
    </ProjectLayout>
  )
}

export default OOPCreativeCoding