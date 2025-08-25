const updates = [
  {
    date: 'February 17, 2024',
    description: 'Hacked together an interactive new concept: drag to open links ↗',
    link: true
  },
  {
    date: 'January 13, 2024',
    description: 'Sold my startup companies.tools ↗',
    link: true
  },
  {
    date: 'December 19, 2023',
    description: 'Started teaching my 3rd product design cohort at Projector Institute ↗',
    link: true
  },
  {
    date: 'December 6, 2023',
    description: 'Received a grant from Figma for the Style Setuper plugin',
    link: false
  },
  {
    date: 'November 16, 2023',
    description: 'Finished teaching my 2nd product design cohort at Projector Institute',
    link: false
  },
  {
    date: 'October 8, 2023',
    description: 'Launched Neural Network Visualization tool',
    link: false
  },
  {
    date: 'September 22, 2023',
    description: 'Won Best Innovation Award at TechCrunch Disrupt',
    link: false
  },
  {
    date: 'August 15, 2023',
    description: 'Published research on "Human-AI Interaction Patterns"',
    link: false
  }
]

export default function Changelog() {
  return (
    <aside className="w-80 border-l border-border p-6 bg-secondary/30 backdrop-blur-sm">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <span>Changelog</span>
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
      </h2>
      
      <div className="space-y-6">
        {updates.map((update, index) => (
          <div 
            key={index} 
            className="group animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 shrink-0 group-hover:bg-primary transition-colors" />
              <div className="flex-1">
                <div className="text-xs text-muted-foreground mb-1">
                  {update.date}
                </div>
                <div className="text-sm leading-relaxed group-hover:text-foreground transition-colors">
                  {update.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="mt-8 text-sm text-primary hover:text-accent transition-colors font-medium">
        Read all updates →
      </button>
    </aside>
  )
}