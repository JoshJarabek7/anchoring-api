import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingPage() {
  // Authentication disabled for initial development
  const signUpUrl = "/dashboard";

  const tiers = [
    {
      name: "Free",
      id: "free",
      price: "$0",
      description: "For open source projects and individuals.",
      features: [
        "1 Library",
        "5,000 queries per month",
        "Basic documentation support",
        "Community support",
        "Standard API rate limits"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline",
      popular: false
    },
    {
      name: "Pro",
      id: "pro",
      price: "$49",
      description: "For professional developers and small teams.",
      features: [
        "10 Libraries",
        "50,000 queries per month",
        "Comprehensive documentation support",
        "Email support",
        "Advanced rate limits",
        "Analytics dashboard",
        "Version management tools"
      ],
      buttonText: "Subscribe",
      buttonVariant: "default",
      popular: true
    },
    {
      name: "Enterprise",
      id: "enterprise",
      price: "Custom",
      description: "For organizations with custom needs.",
      features: [
        "Unlimited Libraries",
        "Custom query volume",
        "Private documentation",
        "24/7 priority support",
        "Custom integrations",
        "Advanced analytics",
        "SLA guarantees",
        "Dedicated account manager"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
      popular: false
    }
  ];

  return (
    <div className="py-16">
      <div className="container px-4 mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Choose the plan that works for your needs, from open source projects to enterprise solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div 
              key={tier.id} 
              className={`rounded-lg border p-8 relative flex flex-col ${
                tier.popular ? "border-primary shadow-md" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold py-1 px-3 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
                <div className="flex justify-center items-end">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.id !== "enterprise" && (
                    <span className="text-muted-foreground ml-2">/month</span>
                  )}
                </div>
                <p className="text-muted-foreground mt-3">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                asChild 
                variant={tier.buttonVariant === "default" ? "default" : "outline"} 
                className="w-full"
              >
                <a href={tier.id === "enterprise" ? "/contact" : signUpUrl}>
                  {tier.buttonText}
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6 text-left">
            <div>
              <h3 className="font-semibold text-lg mb-2">How do you count API queries?</h3>
              <p className="text-muted-foreground">
                An API query is counted each time an AI assistant requests documentation. Multiple requests for the same documentation within a 24-hour period are cached and only count as one query.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">What happens if I exceed my monthly query limit?</h3>
              <p className="text-muted-foreground">
                You'll receive notifications as you approach your limit. If you exceed it, your account will continue to function with reduced rate limits until the next billing cycle.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-muted-foreground">
                Yes, you can change your plan at any time. Changes take effect immediately, with prorated billing adjustments.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Is there a discount for non-profits or educational institutions?</h3>
              <p className="text-muted-foreground">
                Yes, we offer special pricing for non-profits, educational institutions, and open source projects. Contact our sales team for details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}