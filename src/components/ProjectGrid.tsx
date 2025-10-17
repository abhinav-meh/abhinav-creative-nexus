import { useState } from 'react'
import ProjectCard from './ProjectCard'
import { Button } from "@/components/ui/button"
import begigLogo from '@/assets/begig-logo.svg'
import wozLogo from '@/assets/woz-logo.svg'
import xunoLogo from '@/assets/xuno-logo.svg'
import dithererThumbnail from '@/assets/ditherer-thumbnail.svg'
import confluenceThumbnail from '@/assets/confluence-thumbnail.svg'

const projects = [
  {
    title: 'Tempo',
    description: 'Time-management app helping working students balance studies, work, and energy levels',
    category: 'Design' as const,
    icon: '⏱️'
  },
  {
    title: 'Begig',
    description: 'Freelancing platform connecting clients with talented professionals',
    category: 'Design' as const,
    icon: begigLogo
  },
  {
    title: 'Woz',
    description: "Agentic AI to empower your customer success",
    category: 'Design' as const,
    icon: wozLogo
  },
  {
    title: 'XUNO',
    description: 'Data Powered Advertising',
    category: 'Design' as const,
    icon: xunoLogo
  },
  {
    title: 'Dither-er',
    description: 'Image dithering tool with customizable effects',
    category: 'Development' as const,
    icon: dithererThumbnail
  },
  {
    title: 'OOP Principles in Creative Coding',
    description: 'Exploring object-oriented programming concepts through interactive art and generative design',
    category: 'Research' as const,
    icon: '🔬'
  },
  {
    title: 'Amazeballs',
    description: 'Unity-powered game with custom wearable controller',
    category: 'Game Dev' as const,
    icon: '🎮'
  },
  {
    title: 'Confluence',
    description: 'Interactive digital water simulation built with TouchDesigner and controlled by accelerometer',
    category: 'Creative Tech' as const,
    icon: confluenceThumbnail
  }
]

const categories = ['All', 'Design', 'Development', 'Game Dev', 'Research', 'Creative Tech'] as const

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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