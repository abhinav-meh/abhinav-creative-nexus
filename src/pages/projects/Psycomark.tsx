import ProjectLayout from '@/components/ProjectLayout'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Brain, Database, FileText, BarChart3, Code2, Search } from "lucide-react"

const Psycomark = () => {
  const buttons = (
    <Button 
      variant="outline" 
      size="sm"
      asChild
    >
      <a href="https://github.com/sudeepben/psycomark-project" target="_blank" rel="noopener noreferrer">
        <ExternalLink className="w-4 h-4 mr-2" />
        View on GitHub
      </a>
    </Button>
  )

  return (
    <ProjectLayout
      title="Psycomark"
      subtitle="An NLP research project for detecting conspiracy theories in social media using RoBERTa-based classification and named entity recognition for psychological marker extraction."
      buttons={buttons}
    >
      {/* Features Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Components</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="p-6">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">RoBERTa Classifier</h3>
              <p className="text-sm text-muted-foreground">
                Fine-tuned RoBERTa-base model for binary conspiracy theory detection in Reddit comments.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">NER Marker Extraction</h3>
              <p className="text-sm text-muted-foreground">
                Span-based named entity recognition to identify psychological markers within conspiratorial text.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Data Rehydration</h3>
              <p className="text-sm text-muted-foreground">
                Custom pipeline to rehydrate redacted Reddit comments from SemEval datasets into full training data.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Dataset Preparation</h3>
              <p className="text-sm text-muted-foreground">
                Processed classification CSV and span-based NER JSONL datasets ready for model training.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Training Pipeline</h3>
              <p className="text-sm text-muted-foreground">
                HuggingFace Trainer-based pipeline with configurable training arguments and evaluation metrics.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Reproducible Workflow</h3>
              <p className="text-sm text-muted-foreground">
                Conda environment setup with documented steps for full reproducibility of results.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Details */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Details</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Models & Approach</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• RoBERTa-base for conspiracy classification</li>
                <li>• Token-level NER for marker extraction</li>
                <li>• SemEval starter pack integration</li>
                <li>• Reddit comment rehydration pipeline</li>
                <li>• Binary and span-based annotation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Stack & Tools</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• HuggingFace Transformers & Datasets</li>
                <li>• PyTorch for model training</li>
                <li>• Jupyter notebooks for experiments</li>
                <li>• Conda for environment management</li>
                <li>• Python data processing scripts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Used */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Tools & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Python', 'PyTorch', 'Transformers', 'HuggingFace Datasets',
              'RoBERTa', 'NER', 'Jupyter', 'Conda', 'BeautifulSoup'
            ].map((tool) => (
              <Badge key={tool} variant="secondary" className="px-3 py-1">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Explore the Project</h2>
          <p className="text-muted-foreground mb-8">
            Check out the full codebase, datasets, and training notebooks on GitHub.
          </p>
          <Button size="lg" className="gap-2" asChild>
            <a href="https://github.com/sudeepben/psycomark-project" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              View on GitHub
            </a>
          </Button>
        </div>
      </section>
    </ProjectLayout>
  )
}

export default Psycomark
