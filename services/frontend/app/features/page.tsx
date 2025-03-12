import { HyperText } from "@/components/magicui/hyper-text";
import { BorderBeam } from "@/components/magicui/border-beam";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Features() {
  // Authentication disabled for initial development 
  const signUpUrl = "/dashboard";

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <HyperText className="text-4xl md:text-5xl font-bold mb-6">
            Features & Capabilities
          </HyperText>
          <p className="text-xl text-muted-foreground">
            Anchoring API provides a comprehensive solution for managing version-specific documentation.
          </p>
        </div>

        <div className="space-y-24">
          {/* Feature 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Version-Specific Retrieval</h2>
              <p className="text-muted-foreground">
                Access documentation for specific versions of libraries, ensuring AI assistants always use the correct documentation for your codebase version.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Precise version matching</li>
                <li>Support for semver ranges</li>
                <li>Latest version fallback options</li>
                <li>Historical version archiving</li>
              </ul>
            </div>
            <BorderBeam className="h-64 md:h-80 rounded-lg bg-muted/20">
              <div className="flex items-center justify-center h-full">
                <code className="text-sm">GET /api/v1/docs/react/18.2.0/hooks/useState</code>
              </div>
            </BorderBeam>
          </div>

          {/* Feature 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <BorderBeam className="h-64 md:h-80 rounded-lg bg-muted/20 md:order-first">
              <div className="flex items-center justify-center h-full">
                <div className="w-full max-w-xs p-4">
                  <div className="h-4 w-3/4 bg-primary/10 rounded mb-4"></div>
                  <div className="h-4 w-full bg-primary/10 rounded mb-2"></div>
                  <div className="h-4 w-5/6 bg-primary/10 rounded mb-4"></div>
                  <div className="h-4 w-4/5 bg-primary/10 rounded mb-2"></div>
                  <div className="h-4 w-full bg-primary/10 rounded"></div>
                </div>
              </div>
            </BorderBeam>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Vector Search</h2>
              <p className="text-muted-foreground">
                Advanced semantic search allows AI assistants to find relevant documentation even without exact keyword matches.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Multi-model embedding support</li>
                <li>Hybrid keyword + semantic search</li>
                <li>Code example indexing</li>
                <li>Customizable relevance tuning</li>
              </ul>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Simple Integration</h2>
              <p className="text-muted-foreground">
                Easily integrate with existing documentation workflows and AI assistants through our API and SDK.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>RESTful API</li>
                <li>GitHub Actions integration</li>
                <li>CI/CD pipeline support</li>
                <li>Pre-built integrations for popular AI assistants</li>
              </ul>
            </div>
            <BorderBeam className="h-64 md:h-80 rounded-lg bg-muted/20">
              <div className="flex items-center justify-center h-full">
                <code className="text-sm">npm install @anchoring/sdk</code>
              </div>
            </BorderBeam>
          </div>

          {/* Feature 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <BorderBeam className="h-64 md:h-80 rounded-lg bg-muted/20 md:order-first">
              <div className="flex items-center justify-center h-full">
                <div className="w-full max-w-xs space-y-4 p-4">
                  <div className="h-16 bg-primary/10 rounded"></div>
                  <div className="flex gap-4">
                    <div className="h-12 w-1/2 bg-primary/10 rounded"></div>
                    <div className="h-12 w-1/2 bg-primary/10 rounded"></div>
                  </div>
                  <div className="h-16 bg-primary/10 rounded"></div>
                </div>
              </div>
            </BorderBeam>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Analytics & Insights</h2>
              <p className="text-muted-foreground">
                Understand how AI assistants use your documentation with detailed analytics and insights.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Query tracking</li>
                <li>Version popularity metrics</li>
                <li>Documentation coverage analysis</li>
                <li>User behavior insights</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join library maintainers who are improving AI-assisted coding by providing accurate, versioned documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href={signUpUrl} className="px-8">Sign Up Now</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing" className="px-8">View Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}