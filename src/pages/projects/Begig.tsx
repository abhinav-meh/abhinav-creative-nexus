import ProjectLayout from '@/components/ProjectLayout'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import begigLogo from '@/assets/begig-logo.svg'

// Import BeGig screenshots
import clientDashboard from '@/assets/begig-client-dashboard.jpg'
import clientGigDetails from '@/assets/begig-client-gig-details.jpg'
import clientGigPosting from '@/assets/begig-client-gig-posting.jpg'
import clientSignup from '@/assets/begig-client-signup.jpg'
import freelancerDashboard from '@/assets/begig-freelancer-dashboard.jpg'
import freelancerPayment from '@/assets/begig-freelancer-payment.jpg'
import freelancerProposal from '@/assets/begig-freelancer-proposal.jpg'
import freelancerSignup from '@/assets/begig-freelancer-signup.jpg'

const Begig = () => {
  const buttons = (
    <Button 
      variant="outline" 
      size="sm"
      asChild
    >
      <a 
        href="https://begig.io/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <ExternalLink className="w-4 h-4 mr-2" />
        Visit Website
      </a>
    </Button>
  )

  return (
    <ProjectLayout
      title="BeGig"
      subtitle="Tech freelancing marketplace"
      icon={begigLogo}
      buttons={buttons}
    >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Year</h3>
                  <p className="text-lg text-foreground">2023</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">My role</h3>
                  <p className="text-lg text-foreground">Product Design, UX Research</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Team</h3>
                  <p className="text-lg text-foreground">Designers, Engineers, Product</p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">What's been done</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Designed a comprehensive freelancing marketplace connecting tech talent with companies. Built user flows for both clients and freelancers, including project management, proposal systems, and payment processing.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Context</h2>
                <p className="text-lg text-muted-foreground mb-12">
                  Traditional freelancing platforms often lack specialized focus on tech roles, leading to mismatched expectations and inefficient hiring processes. BeGig addresses this by creating a curated marketplace specifically for technical freelancers.
                </p>
              </div>

              {/* Client Experience Section */}
              <div className="mb-16">
                <h2 className="text-3xl font-semibold mb-8 text-foreground text-center">Client Experience</h2>
                
                <div className="mb-16">
                  <img 
                    src={clientSignup} 
                    alt="Client signup with tech skills selection"
                    className="w-4/5 max-w-4xl mx-auto rounded-lg border border-border mb-6 shadow-lg"
                    onError={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgb(39 39 42)';
                      e.currentTarget.style.minHeight = '400px';
                      e.currentTarget.style.display = 'flex';
                      e.currentTarget.style.alignItems = 'center';
                      e.currentTarget.style.justifyContent = 'center';
                      e.currentTarget.innerHTML = '<span style="color: rgb(161 161 170); font-size: 14px;">Client Signup Screenshot</span>';
                    }}
                  />
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto">
                    Clients can specify exactly what tech skills they're hiring for during the onboarding process
                  </p>
                </div>

                <div className="mb-16">
                  <img 
                    src={clientGigPosting} 
                    alt="Comprehensive gig posting form"
                    className="w-4/5 max-w-4xl mx-auto rounded-lg border border-border mb-6 shadow-lg"
                  />
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto">
                    Detailed gig posting form allows clients to specify requirements, budget, timeline, and project scope
                  </p>
                </div>

                <div className="mb-16">
                  <img 
                    src={clientDashboard} 
                    alt="Client dashboard showing project overview"
                    className="w-4/5 max-w-4xl mx-auto rounded-lg border border-border mb-6 shadow-lg"
                  />
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto">
                    Main dashboard provides overview of all posted gigs, received proposals, and ongoing projects
                  </p>
                </div>

                <div className="mb-16">
                  <img 
                    src={clientGigDetails} 
                    alt="Detailed gig management interface"
                    className="w-4/5 max-w-4xl mx-auto rounded-lg border border-border mb-6 shadow-lg"
                  />
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto">
                    Each gig has a dedicated management interface for tracking progress, managing proposals, and communication
                  </p>
                </div>
              </div>

              {/* Freelancer Experience Section */}
              <div className="mb-16">
                <h2 className="text-3xl font-semibold mb-8 text-foreground text-center">Freelancer Experience</h2>
                
                <div className="mb-16">
                  <img 
                    src={freelancerSignup} 
                    alt="Freelancer onboarding with skills and experience"
                    className="w-4/5 max-w-4xl mx-auto rounded-lg border border-border mb-6 shadow-lg"
                  />
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto">
                    Comprehensive freelancer onboarding captures skills, experience levels, and portfolio information
                  </p>
                </div>

                <div className="mb-16">
                  <img 
                    src={freelancerDashboard} 
                    alt="Freelancer dashboard with recommended gigs"
                    className="w-4/5 max-w-4xl mx-auto rounded-lg border border-border mb-6 shadow-lg"
                  />
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto">
                    Personalized dashboard shows recommended gigs, earnings tracking, and project management tools
                  </p>
                </div>

                <div className="mb-16">
                  <img 
                    src={freelancerProposal} 
                    alt="Proposal creation interface with milestones"
                    className="w-4/5 max-w-4xl mx-auto rounded-lg border border-border mb-6 shadow-lg"
                  />
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto">
                    Structured proposal system allows freelancers to break down projects into deliverables and milestones
                  </p>
                </div>

                <div className="mb-16">
                  <img 
                    src={freelancerPayment} 
                    alt="Payment expectation setting interface"
                    className="w-4/5 max-w-4xl mx-auto rounded-lg border border-border mb-6 shadow-lg"
                  />
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto">
                    Transparent rate setting system helps freelancers communicate their expectations and availability
                  </p>
                </div>
              </div>

              <div className="bg-card/50 rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Features</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Tech-focused skill matching and recommendation system</li>
                  <li>• Structured proposal system with milestone-based payments</li>
                  <li>• Comprehensive project management and tracking tools</li>
                  <li>• Transparent rate setting and budget management</li>
                  <li>• Dedicated dashboards for both clients and freelancers</li>
                  <li>• Built-in communication and collaboration features</li>
                </ul>
              </div>
    </ProjectLayout>
  )
}

export default Begig