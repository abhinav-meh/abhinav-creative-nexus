import ProjectLayout from '@/components/ProjectLayout'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import wozLogo from '@/assets/woz-logo.svg'
import wozOverview from '@/assets/woz-overview.jpg'
import wozAccountSelect from '@/assets/woz-account-select.jpg'
import wozConversationAnalysis from '@/assets/woz-conversation-analysis.jpg'
import wozCustomerData from '@/assets/woz-customer-data.jpg'
import wozChatbotWelcome from '@/assets/woz-chatbot-welcome.jpg'
import wozChatbotVoice from '@/assets/woz-chatbot-voice.jpg'
import wozChatbotProduct from '@/assets/woz-chatbot-product.jpg'

const Woz = () => {
  const buttons = (
    <>
      <Button 
        variant="outline" 
        size="sm"
        asChild
      >
        <a 
          href="https://www.woz.ai/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Visit Website
        </a>
      </Button>
      <Button 
        variant="outline" 
        size="sm"
        asChild
      >
        <a 
          href="https://chat.woz.ai/nike" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Visit Chatbot
        </a>
      </Button>
    </>
  )

  return (
    <ProjectLayout
      title="WOZ.AI"
      subtitle="Conversational AI Analytics Platform"
      icon={wozLogo}
      buttons={buttons}
    >
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
                    <strong className="text-foreground">Timeline:</strong> 3 months
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
                <h2 className="text-3xl font-semibold mb-8 text-center">Platform Overview</h2>
                <img 
                  src={wozOverview} 
                  alt="WOZ.AI Dashboard Overview showing analytics, active users, and conversation metrics"
                  className="w-4/5 max-w-4xl mx-auto rounded-lg border border-border mb-6 shadow-lg"
                  onError={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgb(39 39 42)';
                    e.currentTarget.style.minHeight = '400px';
                    e.currentTarget.style.display = 'flex';
                    e.currentTarget.style.alignItems = 'center';
                    e.currentTarget.style.justifyContent = 'center';
                    e.currentTarget.innerHTML = '<span style="color: rgb(161 161 170); font-size: 14px;">Platform Overview Screenshot</span>';
                  }}
                />
                <p className="text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
                  The main dashboard provides a comprehensive view of chatbot performance with real-time metrics including QR code scans, conversation volumes, chatbot uptime, and user engagement analytics.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-8 text-center">Product Management</h2>
                <img 
                  src={wozAccountSelect} 
                  alt="Product selection interface showing different chatbots for Nike products with user and conversation counts"
                  className="w-4/5 max-w-4xl mx-auto rounded-lg border border-border mb-6 shadow-lg"
                />
                <p className="text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
                  The platform enables management of multiple product-specific chatbots, each with detailed user engagement metrics and conversation tracking for different product lines.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-8 text-center">Conversation Analytics</h2>
                <img 
                  src={wozConversationAnalysis} 
                  alt="Detailed conversation analysis showing sentiment tracking, keyword clouds, and performance metrics"
                  className="w-4/5 max-w-4xl mx-auto rounded-lg border border-border mb-6 shadow-lg"
                />
                <p className="text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
                  Advanced sentiment analysis provides insights into customer satisfaction across different topics, with visual representations of sentiment trends and keyword frequency analysis.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-8 text-center">Customer Insights</h2>
                <img 
                  src={wozCustomerData} 
                  alt="Customer data table showing user information, ratings, and interaction history"
                  className="w-4/5 max-w-4xl mx-auto rounded-lg border border-border mb-6 shadow-lg"
                />
                <p className="text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
                  Comprehensive customer data management with detailed user profiles, interaction history, and engagement ratings to help businesses understand their audience better.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-8 text-center">Chatbot User Interface</h2>
                
                <div className="mb-8">
                  <img 
                    src={wozChatbotWelcome} 
                    alt="Chatbot welcome interface with personalized Nike product recommendations and quick action cards"
                    className="w-4/5 max-w-4xl mx-auto rounded-lg border border-border mb-4 shadow-lg"
                  />
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto text-sm">
                    Personalized welcome experience with contextual product recommendations and quick action buttons for common user queries.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <img 
                      src={wozChatbotVoice} 
                      alt="Voice interaction interface with circular progress indicator and clean typography"
                      className="w-full rounded-lg border border-border mb-4 shadow-lg"
                    />
                    <p className="text-muted-foreground text-center text-sm">
                      Voice-enabled interface with elegant loading states and seamless speech-to-text integration.
                    </p>
                  </div>
                  <div>
                    <img 
                      src={wozChatbotProduct} 
                      alt="Product showcase interface displaying Nike apparel with detailed descriptions and purchase options"
                      className="w-full rounded-lg border border-border mb-4 shadow-lg"
                    />
                    <p className="text-muted-foreground text-center text-sm">
                      Rich product displays with comprehensive details and integrated purchasing workflows.
                    </p>
                  </div>
                </div>
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
    </ProjectLayout>
  )
}

export default Woz