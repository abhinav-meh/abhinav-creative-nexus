import Navigation from '@/components/Navigation'
import InteractiveGrid from '@/components/InteractiveGrid'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import wozOverview from '@/assets/woz-overview.jpg'
import wozAccountSelect from '@/assets/woz-account-select.jpg'
import wozConversationAnalysis from '@/assets/woz-conversation-analysis.jpg'
import wozCustomerData from '@/assets/woz-customer-data.jpg'

const Woz = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background relative">
      {/* Static Grid Pattern Background */}
      <div 
        className="absolute inset-0 bg-grid-pattern" 
        style={{backgroundSize: '64px 64px'}}
      ></div>
      
      {/* Interactive Grid Overlay */}
      <InteractiveGrid />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80"></div>
      
      <div className="relative z-10 pb-24">
        <div className="container mx-auto px-4 py-16">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-8 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Work
          </Button>
          
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center text-4xl">
                🤖
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">WOZ.AI</h1>
                <p className="text-lg text-muted-foreground">
                  Conversational AI Analytics Platform
                </p>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                A comprehensive analytics platform for conversational AI, providing insights into chatbot performance, customer sentiment, and engagement metrics across multiple product lines.
              </p>
              
              <div className="bg-card/50 rounded-lg p-8 border border-border mb-8">
                <h2 className="text-2xl font-semibold mb-4">Project Context</h2>
                <p className="text-muted-foreground mb-4">
                  WOZ.AI is a sophisticated conversational AI platform that enables businesses to manage multiple chatbots, analyze customer interactions, and gain valuable insights into user behavior and sentiment.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-foreground">Role:</strong> Product Designer & Developer
                  </div>
                  <div>
                    <strong className="text-foreground">Timeline:</strong> 6 months
                  </div>
                  <div>
                    <strong className="text-foreground">Team:</strong> 4 engineers, 2 designers
                  </div>
                  <div>
                    <strong className="text-foreground">Platform:</strong> Web Application
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-8">Platform Overview</h2>
                <img 
                  src={wozOverview} 
                  alt="WOZ.AI Dashboard Overview showing analytics, active users, and conversation metrics"
                  className="w-4/5 max-w-4xl mx-auto rounded-lg border border-border mb-6 shadow-lg"
                />
                <p className="text-muted-foreground mb-8">
                  The main dashboard provides a comprehensive view of chatbot performance with real-time metrics including QR code scans, conversation volumes, chatbot uptime, and user engagement analytics.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-8">Product Management</h2>
                <img 
                  src={wozAccountSelect} 
                  alt="Product selection interface showing different chatbots for Nike products with user and conversation counts"
                  className="w-4/5 max-w-4xl mx-auto rounded-lg border border-border mb-6 shadow-lg"
                />
                <p className="text-muted-foreground mb-8">
                  The platform enables management of multiple product-specific chatbots, each with detailed user engagement metrics and conversation tracking for different product lines.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-8">Conversation Analytics</h2>
                <img 
                  src={wozConversationAnalysis} 
                  alt="Detailed conversation analysis showing sentiment tracking, keyword clouds, and performance metrics"
                  className="w-4/5 max-w-4xl mx-auto rounded-lg border border-border mb-6 shadow-lg"
                />
                <p className="text-muted-foreground mb-8">
                  Advanced sentiment analysis provides insights into customer satisfaction across different topics, with visual representations of sentiment trends and keyword frequency analysis.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-8">Customer Insights</h2>
                <img 
                  src={wozCustomerData} 
                  alt="Customer data table showing user information, ratings, and interaction history"
                  className="w-4/5 max-w-4xl mx-auto rounded-lg border border-border mb-6 shadow-lg"
                />
                <p className="text-muted-foreground mb-8">
                  Comprehensive customer data management with detailed user profiles, interaction history, and engagement ratings to help businesses understand their audience better.
                </p>
              </div>

              <div className="bg-card/50 rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Multi-Product Management</h3>
                    <p className="text-muted-foreground text-sm">Manage chatbots across multiple product lines with individual performance tracking</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Real-time Analytics</h3>
                    <p className="text-muted-foreground text-sm">Live dashboard with conversation metrics, user engagement, and system uptime</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Sentiment Analysis</h3>
                    <p className="text-muted-foreground text-sm">Advanced AI-powered sentiment tracking across conversation topics</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Customer Insights</h3>
                    <p className="text-muted-foreground text-sm">Detailed user profiles with interaction history and engagement metrics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Navigation />
    </div>
  )
}

export default Woz