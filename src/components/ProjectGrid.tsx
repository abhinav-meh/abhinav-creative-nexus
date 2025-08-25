import { useState } from 'react'
import ProjectCard from './ProjectCard'
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: 'Zori',
    description: 'Founding designer at the startup where we help people find professionals by recommendation',
    category: 'Product' as const,
    icon: '🔍'
  },
  {
    title: 'Sapera',
    description: 'Lead the design of a project management platform',
    category: 'Product' as const,
    icon: '📊'
  },
  {
    title: '2+ items in an order at OLX',
    description: 'Designed a way to purchase up to 5 items per deal on a platform that historically supported just 1',
    category: 'Feature' as const,
    icon: '🛒'
  },
  {
    title: 'Style Setuper',
    description: 'Created a Figma plugin that scans your frame and suggests better text styles',
    category: 'Product' as const,
    icon: '🎨'
  },
  {
    title: 'thePenTool',
    description: 'Founded thePenTool – online shop of UI design assets for designers that value their time',
    category: 'Website' as const,
    icon: '✏️'
  },
  {
    title: 'companies.tools 22 recap',
    description: 'Designed and shipped a yearly recap for companies.tools',
    category: 'Website' as const,
    icon: '📈'
  },
  {
    title: 'Obviously AI',
    description: 'Designed a multi page marketing website for AI data prediction tool',
    category: 'Website' as const,
    icon: '🤖'
  },
  {
    title: 'Better File Thumbnails',
    description: 'Created a macOS plugin that generates thumbnails to make it easier to find projects in the file browser',
    category: 'Product' as const,
    icon: '📁'
  },
  {
    title: 'Buyer acceptance rate at OLX',
    description: 'Designed a fix for a problem of sellers rejecting purchases with no payment in the post office',
    category: 'Feature' as const,
    icon: '✅'
  },
  {
    title: 'CureRate',
    description: 'Designed a platform for people with chronic conditions to find and review products that helped',
    category: 'Website' as const,
    icon: '💊'
  },
  {
    title: 'New deal confirmation experience at OLX',
    description: 'Redesigned the legacy flow, making it simpler for buyers to confirm a deal by selling it online',
    category: 'Feature' as const,
    icon: '🤝'
  },
  {
    title: 'Handy Components',
    description: 'Created a Figma plugin that scans your file and inserts components matching the style of your UI',
    category: 'Product' as const,
    icon: '🧩'
  },
  {
    title: 'Neural Network Visualization',
    description: 'Interactive 3D visualization of machine learning models using Three.js and D3',
    category: 'Research' as const,
    icon: '🧠'
  },
  {
    title: 'Generative Art Gallery',
    description: 'Algorithmic art pieces created using p5.js and creative coding techniques',
    category: 'Experiment' as const,
    icon: '🎭'
  },
  {
    title: 'IoT Home Automation',
    description: 'Arduino-based smart home system with custom mobile interface',
    category: 'Experiment' as const,
    icon: '🏠'
  }
]

const categories = ['All', 'Product', 'Website', 'Feature', 'Research', 'Experiment'] as const

export default function ProjectGrid() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Selected Projects</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            {filteredProjects.length} selected projects
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={`${project.title}-${index}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}