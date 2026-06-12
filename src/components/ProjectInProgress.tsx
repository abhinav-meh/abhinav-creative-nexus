import ProjectLayout from '@/components/ProjectLayout'

interface ProjectInProgressProps {
  title: string
  preview: string
}

export default function ProjectInProgress({
  title,
  preview,
}: ProjectInProgressProps) {
  return (
    <ProjectLayout
      title={title}
      subtitle="Case study coming soon."
    >
      <section className="space-y-8">
        <img
          src={preview}
          alt={`${title} project preview`}
          className="aspect-video w-full rounded-2xl object-cover shadow-lg"
        />

        <div className="rounded-2xl border border-border bg-card/50 p-8">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            In progress
          </p>
          <h2 className="mb-4 text-2xl font-semibold">
            The full story is being prepared.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Project details, process, and outcomes for {title} will be added here
            soon.
          </p>
        </div>
      </section>
    </ProjectLayout>
  )
}
