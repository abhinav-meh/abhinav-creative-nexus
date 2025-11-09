import ProjectCard from './ProjectCard'
import projectsData from '@/data/projects.json'

const projects = projectsData

export default function ProjectList() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-heading font-bold mb-20 text-center md:text-left">
          Selected Work
        </h2>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              category={project.category}
              slug={project.slug}
              number={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
