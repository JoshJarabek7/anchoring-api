import { Button } from "@/components/ui/button";
import { Particles } from "@/components/magicui/particles";
import { handleSignOut } from "@/app/actions/auth";

export default async function Dashboard() {
  // Authentication disabled for initial development

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="relative">
        <Particles
          className="absolute inset-0 -z-10"
          quantity={100}
          color="#3b82f6"
          staticity={30}
        />
        <div className="max-w-4xl mx-auto rounded-lg border bg-background p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <Button variant="outline">Sign out</Button>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Welcome to Anchoring API</h2>
            <p className="text-muted-foreground">
              This is your dashboard where you can manage your documentation and API settings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-md border p-6">
              <h3 className="font-semibold mb-2">Your Libraries</h3>
              <p className="text-sm text-muted-foreground mb-4">
                You haven't added any libraries yet. Add your first library to get started.
              </p>
              <Button>Add Library</Button>
            </div>
            
            <div className="rounded-md border p-6">
              <h3 className="font-semibold mb-2">API Keys</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Generate API keys to access the Anchoring API from your applications.
              </p>
              <Button variant="outline">Manage API Keys</Button>
            </div>
            
            <div className="rounded-md border p-6">
              <h3 className="font-semibold mb-2">Usage Stats</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Track how AI assistants are using your documentation.
              </p>
              <div className="h-32 bg-muted/30 rounded flex items-center justify-center">
                <p className="text-sm text-muted-foreground">No data available yet</p>
              </div>
            </div>
            
            <div className="rounded-md border p-6">
              <h3 className="font-semibold mb-2">Account Settings</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Manage your account settings and subscription.
              </p>
              <Button variant="outline">Account Settings</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}