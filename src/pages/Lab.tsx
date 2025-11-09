import P5Sandbox from '@/components/P5Sandbox'
import MinimalHeader from '@/components/MinimalHeader'

const Lab = () => {
  return (
    <div className="min-h-screen bg-background">
      <MinimalHeader />
      
      <div className="container mx-auto px-6 py-32">
        <div className="mb-16 max-w-3xl">
          <h1 className="text-hero font-bold mb-6">Creative Lab</h1>
          <p className="text-xl text-muted-foreground tracking-tight leading-relaxed">
            Interactive p5.js sandbox with generators for random objects and waves. 
            Use the controls to create and customize your artwork.
          </p>
        </div>

        <P5Sandbox />
      </div>
    </div>
  )
}

export default Lab
