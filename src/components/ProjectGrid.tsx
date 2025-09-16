import { useState } from 'react'
import ProjectCard from './ProjectCard'
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: 'Begig',
    description: 'Freelancing platform connecting clients with talented professionals',
    category: 'Design' as const,
    icon: '/src/assets/begig-logo.svg'
  },
  {
    title: 'Woz',
    description: "Agentic AI to empower your customer success",
    category: 'Design' as const,
    icon: '/src/assets/woz-logo.svg'
  },
  {
    title: 'XUNO',
    description: 'Data Powered Advertising',
    category: 'Design' as const,
    icon: '/src/assets/xuno-logo.svg'
  },
  {
    title: 'Dither-er',
    description: 'Image dithering tool with customizable effects',
    category: 'Development' as const,
    icon: '/src/assets/ditherer-thumbnail.svg'
  },
  {
    title: 'Style Setuper',
    description: 'Figma text styles plugin',
    category: 'Development' as const,
    icon: '🎨'
  },
  {
    title: 'thePenTool',
    description: 'UI design assets shop',
    category: 'Design' as const,
    icon: '✏️'
  },
  {
    title: 'companies.tools 22 recap',
    description: 'Yearly recap website design',
    category: 'Development' as const,
    icon: '📈'
  },
  {
    title: 'Obviously AI',
    description: 'AI prediction marketing website',
    category: 'Development' as const,
    icon: '🤖'
  },
  {
    title: 'Better File Thumbnails',
    description: 'macOS file browser plugin',
    category: 'Development' as const,
    icon: '📁'
  },
  {
    title: 'Buyer acceptance rate at OLX',
    description: 'Payment rejection problem solution',
    category: 'Design' as const,
    icon: '✅'
  },
  {
    title: 'CureRate',
    description: 'Chronic conditions review platform',
    category: 'Development' as const,
    icon: '💊'
  },
  {
    title: 'New deal confirmation experience at OLX',
    description: 'Simplified deal confirmation flow',
    category: 'Design' as const,
    icon: '🤝'
  },
  {
    title: 'Handy Components',
    description: 'Figma component matching plugin',
    category: 'Development' as const,
    icon: '🧩'
  },
  {
    title: 'OOP Principles in Creative Coding',
    description: 'Exploring object-oriented programming concepts through interactive art and generative design',
    category: 'Research' as const,
    icon: '🔬'
  },
  {
    title: 'Neural Network Visualization',
    description: 'Interactive machine learning visualization',
    category: 'Research' as const,
    icon: '🧠'
  },
  {
    title: 'Generative Art Gallery',
    description: 'Algorithmic art using code',
    category: 'Development' as const,
    icon: '🎭'
  },
  {
    title: 'IoT Home Automation',
    description: 'Arduino smart home system',
    category: 'Development' as const,
    icon: '🏠'
  },
  {
    title: 'Amazeballs',
    description: 'Unity-powered game with custom wearable controller',
    category: 'Game Dev' as const,
    icon: '🎮'
  }
]

const categories = ['All', 'Design', 'Development', 'Game Dev', 'Research'] as const

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