import ProjectLayout from '@/components/ProjectLayout'

const StyleSetuper = () => {
  return (
    <ProjectLayout
      title="Style Setuper"
      subtitle="Figma text styles plugin"
      icon="🎨"
    >
      <p className="text-lg text-muted-foreground mb-8">
        Project content and media will be updated here.
      </p>
      
      <div className="bg-card/50 rounded-lg p-8 border border-border">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-muted-foreground">
          Content about the Style Setuper project will be added here.
        </p>
      </div>
    </ProjectLayout>
  )
}

export default StyleSetuper