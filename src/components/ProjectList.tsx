import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Tempo',
    description: 'A mobile app designed to help users manage their time and focus on what matters most through intentional task planning and distraction-free focus sessions.',
    category: 'Design',
    icon: 'tempo-logo.svg'
  },
  {
    title: 'Begig',
    description: 'A freelancing platform connecting clients with talented freelancers. Features include gig posting, proposal management, secure payments, and project tracking.',
    category: 'Development',
    icon: 'begig-logo.svg'
  },
  {
    title: 'Woz',
    description: 'An AI-powered Wizard of Oz testing platform for conversational interfaces. Enables researchers to simulate AI responses and gather insights before building the actual system.',
    category: 'Research',
    icon: 'woz-logo.svg'
  },
  {
    title: 'XUNO',
    description: 'A comprehensive design system and component library for building consistent, accessible web applications with modern UI patterns.',
    category: 'Design',
    icon: 'xuno-logo.svg'
  },
  {
    title: 'Dither-er',
    description: 'An interactive web tool for applying dithering effects to images. Experiment with various algorithms and export high-quality dithered artwork.',
    category: 'Tool',
    icon: 'ditherer-thumbnail.svg'
  },
  {
    title: 'OOP Principles in Creative Coding',
    description: 'An academic paper exploring how object-oriented programming principles can be applied to creative coding practices and generative art.',
    category: 'Research',
    icon: '📄'
  },
  {
    title: 'Amazeballs',
    description: 'An immersive maze game with innovative wearable controller integration. Navigate through procedurally generated mazes using custom hardware.',
    category: 'Development',
    icon: '🎮'
  },
  {
    title: 'Confluence',
    description: 'A collaborative platform exploring the intersection of design and development workflows. Tools for seamless team communication and asset management.',
    category: 'Tool',
    icon: 'confluence-thumbnail.svg'
  }
]

export default function ProjectList() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-heading font-bold mb-20 text-center md:text-left">
          Selected Work
        </h2>
        
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              number={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
