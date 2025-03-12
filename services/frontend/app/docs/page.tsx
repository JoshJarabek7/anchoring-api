import { Terminal } from "@/components/magicui/terminal";
import { HyperText } from "@/components/magicui/hyper-text";

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <HyperText className="text-4xl md:text-5xl font-bold mb-6">
            Documentation
          </HyperText>
          <p className="text-xl text-muted-foreground">
            Learn how to integrate and use the Anchoring API
          </p>
        </div>

        <div className="space-y-16">
          {/* Getting Started */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
            <p className="text-muted-foreground mb-6">
              Anchoring API helps AI coding assistants access accurate, version-specific documentation. Follow these steps to get started:
            </p>
            
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">1. Create an Account</h3>
                <p className="text-muted-foreground mb-4">
                  Sign up for an Anchoring API account and choose the plan that fits your needs.
                </p>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">2. Generate an API Key</h3>
                <p className="text-muted-foreground mb-4">
                  Create an API key from your dashboard to authenticate your requests.
                </p>
                <Terminal
                  title="API Key Example"
                  content={`# Example API key
ANCHORING_API_KEY=anch_123456789abcdefghijklmnopqrstuvwxyz`}
                />
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">3. Submit Documentation</h3>
                <p className="text-muted-foreground mb-4">
                  Add your library and submit documentation using our GitHub integration or API.
                </p>
                <Terminal
                  title="Documentation Submission"
                  content={`# Using the API to submit documentation
curl -X POST https://api.anchoringapi.com/v1/libraries \\
  -H "Authorization: Bearer anch_123456789abcdefghijklmnopqrstuvwxyz" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "my-library",
    "version": "1.0.0",
    "repository_url": "https://github.com/username/my-library",
    "documentation_url": "https://docs.mylibrary.com/v1"
  }'`}
                />
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">4. Query the API</h3>
                <p className="text-muted-foreground mb-4">
                  AI assistants can now query your documentation using the Anchoring API.
                </p>
                <Terminal
                  title="API Query Example"
                  content={`# Basic query example
curl https://api.anchoringapi.com/v1/query \\
  -H "Authorization: Bearer anch_123456789abcdefghijklmnopqrstuvwxyz" \\
  -H "Content-Type: application/json" \\
  -d '{
    "library": "my-library",
    "version": "1.0.0",
    "query": "How to use the createWidget function"
  }'`}
                />
              </div>
            </div>
          </section>
          
          {/* API Reference */}
          <section>
            <h2 className="text-3xl font-bold mb-6">API Reference</h2>
            <p className="text-muted-foreground mb-6">
              Explore the core endpoints of the Anchoring API:
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Authentication</h3>
                <p className="text-muted-foreground mb-2">
                  All API requests require an API key passed in the Authorization header.
                </p>
                <Terminal
                  title="Authentication Header"
                  content={`Authorization: Bearer anch_123456789abcdefghijklmnopqrstuvwxyz`}
                />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Libraries</h3>
                <p className="text-muted-foreground mb-2">
                  Manage libraries and their versions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="border rounded p-3">
                    <code className="text-sm">GET /v1/libraries</code>
                    <p className="text-xs text-muted-foreground mt-1">List all your libraries</p>
                  </div>
                  <div className="border rounded p-3">
                    <code className="text-sm">POST /v1/libraries</code>
                    <p className="text-xs text-muted-foreground mt-1">Create a new library</p>
                  </div>
                  <div className="border rounded p-3">
                    <code className="text-sm">GET /v1/libraries/{"{name}"}</code>
                    <p className="text-xs text-muted-foreground mt-1">Get library details</p>
                  </div>
                  <div className="border rounded p-3">
                    <code className="text-sm">PUT /v1/libraries/{"{name}"}</code>
                    <p className="text-xs text-muted-foreground mt-1">Update library information</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Versions</h3>
                <p className="text-muted-foreground mb-2">
                  Manage documentation versions for a library.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="border rounded p-3">
                    <code className="text-sm">GET /v1/libraries/{"{name}"}/versions</code>
                    <p className="text-xs text-muted-foreground mt-1">List all versions</p>
                  </div>
                  <div className="border rounded p-3">
                    <code className="text-sm">POST /v1/libraries/{"{name}"}/versions</code>
                    <p className="text-xs text-muted-foreground mt-1">Add new version</p>
                  </div>
                  <div className="border rounded p-3">
                    <code className="text-sm">GET /v1/libraries/{"{name}"}/versions/{"{version}"}</code>
                    <p className="text-xs text-muted-foreground mt-1">Get version documentation</p>
                  </div>
                  <div className="border rounded p-3">
                    <code className="text-sm">DELETE /v1/libraries/{"{name}"}/versions/{"{version}"}</code>
                    <p className="text-xs text-muted-foreground mt-1">Delete version documentation</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Queries</h3>
                <p className="text-muted-foreground mb-2">
                  Search and query documentation.
                </p>
                <Terminal
                  title="Query API Example"
                  content={`# Example query request
POST /v1/query

{
  "library": "react",
  "version": "18.2.0",
  "query": "How do I use useState hook?",
  "limit": 5
}

# Response
{
  "results": [
    {
      "title": "useState Hook",
      "content": "useState is a Hook that lets you add React state to function components...",
      "url": "https://reactjs.org/docs/hooks-state.html",
      "relevance": 0.95,
      "code_examples": [
        "const [count, setCount] = useState(0);"
      ]
    },
    // More results...
  ]
}`}
                />
              </div>
            </div>
          </section>
          
          {/* SDKs */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Client Libraries</h2>
            <p className="text-muted-foreground mb-6">
              We offer official client libraries to help you integrate with Anchoring API easily:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">JavaScript/TypeScript</h3>
                <Terminal
                  title="JavaScript SDK Installation"
                  content={`npm install @anchoring/sdk`}
                />
                <div className="mt-4">
                  <a href="#" className="text-primary hover:underline">View on GitHub</a>
                </div>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Python</h3>
                <Terminal
                  title="Python SDK Installation"
                  content={`pip install anchoring-api`}
                />
                <div className="mt-4">
                  <a href="#" className="text-primary hover:underline">View on GitHub</a>
                </div>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Go</h3>
                <Terminal
                  title="Go SDK Installation"
                  content={`go get github.com/anchoring/sdk-go`}
                />
                <div className="mt-4">
                  <a href="#" className="text-primary hover:underline">View on GitHub</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}