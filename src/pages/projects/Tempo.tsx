import ProjectLayout from '@/components/ProjectLayout'
import tempoSection1 from '@/assets/tempo-section-1.jpg'
import tempoSection2 from '@/assets/tempo-section-2.jpg'

const Tempo = () => {
  return (
    <ProjectLayout
      title="Tempo"
      subtitle="A Time-Management App for Working Students"
      icon="⏱️"
    >
      <div className="space-y-12">
        {/* Overview */}
        <section>
          <p className="text-lg leading-relaxed">
            Tempo is a productivity app designed to help college students who juggle work and study manage their time, energy, and focus more effectively. The goal was to design a seamless experience that doesn't just track tasks but adapts to a student's energy levels, goals, and unpredictable schedules.
          </p>
        </section>

        {/* Project Details */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-y border-border">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Role</h3>
            <p className="font-medium">UX/UI Design, Research</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Category</h3>
            <p className="font-medium">Mobile App Design</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Focus</h3>
            <p className="font-medium">Productivity, Well-being</p>
          </div>
        </section>

        {/* Problem Statement */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">The Problem</h2>
          <p className="text-lg leading-relaxed mb-6">
            Many students today balance part-time or full-time jobs alongside coursework. Through initial research, several pain points emerged:
          </p>
          <ul className="space-y-3 ml-6">
            <li className="text-lg leading-relaxed list-disc">Irregular work schedules leading to missed deadlines</li>
            <li className="text-lg leading-relaxed list-disc">Exhaustion and low energy, especially after work shifts</li>
            <li className="text-lg leading-relaxed list-disc">Difficulty switching between 'work' and 'study' modes</li>
            <li className="text-lg leading-relaxed list-disc">Ineffective existing tools (e.g., generic calendar apps) that don't consider fluctuating energy levels or motivation</li>
          </ul>
        </section>

        {/* User Research */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">User Research</h2>
          <p className="text-lg leading-relaxed mb-6">
            To ground the design in real user behavior, interviews were conducted with working students. Participants shared struggles balancing jobs, coursework, and personal commitments.
          </p>
          
          <div className="bg-secondary/30 rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold">Key Findings</h3>
            <ul className="space-y-3">
              <li className="leading-relaxed"><strong>Time Management Struggles:</strong> Most relied on simple calendars but lacked flexibility</li>
              <li className="leading-relaxed"><strong>Work-Induced Stress:</strong> Physical and mental exhaustion was a constant barrier</li>
              <li className="leading-relaxed"><strong>Missed Deadlines:</strong> Common due to unpredictable shift changes</li>
              <li className="leading-relaxed"><strong>Coping Strategies:</strong> Pomodoro technique, caffeine, and music were recurring productivity aids</li>
              <li className="leading-relaxed"><strong>Aspirations:</strong> Students wanted to upskill (e.g., learn JavaScript, data science) but struggled to find time</li>
            </ul>
          </div>
        </section>

        {/* Design Goals */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Design Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Personalization</h3>
              <p className="text-muted-foreground">Adapt to the user's work and class schedule</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Energy Awareness</h3>
              <p className="text-muted-foreground">Help students align tasks with their most productive times</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Simplicity</h3>
              <p className="text-muted-foreground">Minimize friction and cognitive load through a calm, clean interface</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Motivation</h3>
              <p className="text-muted-foreground">Encourage consistency with gentle progress tracking and visual clarity</p>
            </div>
          </div>
        </section>

        {/* Onboarding Experience */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Onboarding Experience</h2>
          <p className="text-lg leading-relaxed mb-6">
            The onboarding flow is central to Tempo's adaptive design. Users go through a guided setup where they:
          </p>
          <img 
            src={tempoSection1} 
            alt="Tempo onboarding flow showing user setup process" 
            className="rounded-lg w-full shadow-lg mb-4"
          />
          <ol className="space-y-2 ml-6 mt-6">
            <li className="text-lg leading-relaxed list-decimal">Enter basic info (study program, work type)</li>
            <li className="text-lg leading-relaxed list-decimal">Share their weekly schedule (class + work)</li>
            <li className="text-lg leading-relaxed list-decimal">Assess their energy levels across the day</li>
            <li className="text-lg leading-relaxed list-decimal">Set weekly learning or wellness goals</li>
            <li className="text-lg leading-relaxed list-decimal">Sync their school/work calendars for automatic updates</li>
          </ol>
        </section>

        {/* UI Design */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">UI Design</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Visual Language</h3>
              <p className="text-lg leading-relaxed mb-4">
                Tempo's UI is minimal, organized, and modern — designed to reduce cognitive stress:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="leading-relaxed list-disc"><strong>Color palette:</strong> Balanced cool tones for focus, warm accents for motivation</li>
                <li className="leading-relaxed list-disc"><strong>Typography:</strong> Clean sans-serif with ample white space to convey calmness</li>
                <li className="leading-relaxed list-disc"><strong>Iconography:</strong> Soft, rounded edges that reinforce a friendly tone</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Core Screens</h3>
              <img 
                src={tempoSection2} 
                alt="Tempo core screens including dashboard, calendar, and task views" 
                className="rounded-lg w-full shadow-lg mb-6"
              />
              <ul className="space-y-2 ml-6">
                <li className="leading-relaxed list-disc"><strong>Home Dashboard:</strong> Snapshot of today's schedule, energy status, and tasks</li>
                <li className="leading-relaxed list-disc"><strong>Calendar View:</strong> Weekly breakdown combining work, class, and focus blocks</li>
                <li className="leading-relaxed list-disc"><strong>Tasks Tab:</strong> Categorized by 'Today / Tomorrow / This Week' with priority tags</li>
                <li className="leading-relaxed list-disc"><strong>Focus Mode:</strong> Integrated Pomodoro timer for study bursts</li>
                <li className="leading-relaxed list-disc"><strong>Profile Screen:</strong> Shows progress, energy trends, and linked calendars</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Prototype Highlights */}
        <section className="bg-secondary/30 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Prototype Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Dynamic Task Allocation</h3>
              <p className="text-muted-foreground">Based on available free time and energy levels</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Smart Suggestions</h3>
              <p className="text-muted-foreground">Encourages realistic daily goals</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Pomodoro Integration</h3>
              <p className="text-muted-foreground">Boosts focus through structured short sprints</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Energy Tracker</h3>
              <p className="text-muted-foreground">Visual indicator of mental fatigue or peak productivity</p>
            </div>
          </div>
        </section>

        {/* Outcome & Next Steps */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Outcome</h2>
          <p className="text-lg leading-relaxed mb-8">
            Tempo reimagines time management for students not as a rigid planner but as a companion that understands their day-to-day realities. By merging research-driven personalization with a calming interface, the design aims to improve focus, reduce burnout, and foster consistency.
          </p>

          <h3 className="text-xl font-semibold mb-4">Next Steps</h3>
          <ul className="space-y-2 ml-6">
            <li className="leading-relaxed list-disc">Usability testing with 5–7 working students to refine onboarding clarity</li>
            <li className="leading-relaxed list-disc">Integrate AI-driven scheduling for automatic time recommendations</li>
            <li className="leading-relaxed list-disc">Explore cross-platform syncing (Google Calendar, Outlook)</li>
          </ul>
        </section>

        {/* Key Takeaways */}
        <section className="bg-primary/5 rounded-lg p-8 border border-primary/20">
          <h2 className="text-2xl font-semibold mb-6">Key Takeaways</h2>
          <ul className="space-y-3">
            <li className="text-lg leading-relaxed">✓ Thoughtful onboarding can transform personalization</li>
            <li className="text-lg leading-relaxed">✓ Energy-aware design improves engagement for users under pressure</li>
            <li className="text-lg leading-relaxed">✓ Calm, minimal UI enhances usability for overwhelmed audiences</li>
          </ul>
        </section>
      </div>
    </ProjectLayout>
  )
}

export default Tempo
