import { Meteors } from "@/components/magicui/meteors";
import { HyperText } from "@/components/magicui/hyper-text";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Code,
  Database,
  Server,
  Shield,
  Zap,
  Globe,
  ChevronDown,
} from "lucide-react";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { SpinningText } from "@/components/magicui/spinning-text";

export default function Home() {
  // Authentication disabled for initial development
  const signUpUrl = "/dashboard";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with animated particles and meteors */}
      <section className="relative flex items-center justify-center min-h-[90vh] overflow-hidden">
        {/* This div is intentionally left empty for the background particles defined in layout */}
        <div className="absolute inset-0 w-full h-full"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <Badge
              variant="outline"
              className="mb-8 py-2 px-5 border-indigo-500/30 bg-indigo-500/10 text-indigo-400 
                        shadow-lg shadow-indigo-900/20 rounded-full text-sm font-medium 
                        animate-fade-in tracking-wide"
            >
              Version-Specific Documentation for AI Coding
            </Badge>

            <HyperText
              className="text-6xl md:text-8xl font-extrabold mb-8 animate-fade-in [animation-delay:200ms] tracking-tight"
              duration={1}
            >
              Anchoring.io
            </HyperText>

            <p className="text-lg md:text-xl text-white font-medium mb-12 max-w-3xl animate-fade-in [animation-delay:400ms] leading-relaxed">
              Ensure AI tools generate flawless code by pinning documentation to
              your exact dependency versions
            </p>

            <div className="flex flex-col sm:flex-row gap-5 animate-fade-in [animation-delay:600ms] mb-16">
              <Button
                size="lg"
                asChild
                className="group rounded-full px-8 py-6 bg-gradient-to-r from-indigo-600 to-violet-500 hover:from-indigo-500 hover:to-violet-600 shadow-lg shadow-indigo-900/20 border-none font-medium transition-all duration-300"
              >
                <Link href="#features">
                  Explore Features
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full px-8 py-6 backdrop-blur-sm bg-background/50 border-indigo-500/20 hover:bg-background/80 hover:border-indigo-500/40 shadow-lg font-medium transition-all duration-300"
              >
                <Link href={signUpUrl}>Sign Up for Free</Link>
              </Button>
            </div>

            <div className="w-full max-w-xs mx-auto relative animate-fade-in [animation-delay:700ms] my-14">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 rounded-full filter blur-xl opacity-70 "></div>
              <SpinningText
                className="text-lg font-medium text-foreground"
                radius={6}
                duration={15}
              >
                version-accurate • context-aware
              </SpinningText>
            </div>

            <div className="animate-fade-in [animation-delay:800ms] flex flex-col items-center mt-14">
              <Badge className="bg-amber-200/90 text-amber-800 hover:bg-amber-200/90 border-none font-medium px-4 py-1.5 rounded-full shadow-md">
                Developer Preview
              </Badge>
              <a
                href="#features"
                className="mt-6 text-muted-foreground/70 flex items-center hover:text-muted-foreground/90 transition-colors"
              >
                <span className="mr-2">Discover how it works</span>
                <ChevronDown className="h-4 w-4 animate-bounce" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section - Fully transparent to show particles */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Badge
              variant="outline"
              className="mb-6 border-indigo-500/20 bg-indigo-500/10 text-indigo-400 px-4 py-1.5 rounded-full font-medium"
            >
              Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <AnimatedGradientText className="font-bold" speed={3}>
                How Anchoring.io Works
              </AnimatedGradientText>
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Bridging the gap between fast-evolving libraries and AI coding
              assistants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div>
              <Card className="h-full group hover:shadow-xl hover:shadow-indigo-900/10 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center mb-2">
                    <Code className="h-6 w-6 mr-2 text-blue-500" />
                    <CardTitle>{`Version Control`}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base text-muted-foreground/80">
                    Deliver precise documentation for any library version, ensuring AI assistants generate code that compiles on the first try.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="h-full group hover:shadow-xl hover:shadow-indigo-900/10 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center mb-2">
                    <Database className="h-6 w-6 mr-2 text-green-500" />
                    <CardTitle>{`Semantic Search`}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base text-muted-foreground/80">
                    Find relevant documentation instantly with our advanced embedding-based search technology.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="h-full group hover:shadow-xl hover:shadow-indigo-900/10 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center mb-2">
                    <Server className="h-6 w-6 mr-2 text-purple-500" />
                    <CardTitle>{`API Integration`}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base text-muted-foreground/80">
                    Connect effortlessly with our RESTful API designed specifically for AI coding tools and assistants.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="h-full group hover:shadow-xl hover:shadow-indigo-900/10 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-yellow-500/5 rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center mb-2">
                    <Zap className="h-6 w-6 mr-2 text-amber-500" />
                    <CardTitle>{`Revenue Sharing`}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base text-muted-foreground/80">
                    Open source maintainers earn from their documentation through our innovative profit-sharing model.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="h-full group hover:shadow-xl hover:shadow-indigo-900/10 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-rose-500/5 rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center mb-2">
                    <Shield className="h-6 w-6 mr-2 text-red-500" />
                    <CardTitle>{`Security First`}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base text-muted-foreground/80">
                    Rest easy with enterprise-grade security for all documentation and API interactions.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="h-full group hover:shadow-xl hover:shadow-indigo-900/10 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-blue-500/5 rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center mb-2">
                    <Globe className="h-6 w-6 mr-2 text-sky-500" />
                    <CardTitle>{`Global Distribution`}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base text-muted-foreground/80">
                    Access documentation with minimal latency through our globally distributed network infrastructure.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Fully transparent */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Badge
              variant="outline"
              className="mb-6 border-indigo-500/20 bg-indigo-500/10 text-indigo-400 px-4 py-1.5 rounded-full font-medium"
            >
              Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <AnimatedGradientText className="font-bold" speed={3}>
                The Anchoring Process
              </AnimatedGradientText>
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Transforming how AI tools generate accurate, version-specific code
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                title: "Library Maintainers Submit Documentation",
                description:
                  "Maintainers use our GitHub Actions to automatically submit documentation whenever a new version is released.",
                color: "from-blue-500/20 to-indigo-500/10",
                number: "01",
              },
              {
                title: "We Process and Index Content",
                description:
                  "Our system generates embeddings and indexes the documentation for rapid semantic retrieval.",
                color: "from-purple-500/20 to-violet-500/10",
                number: "02",
              },
              {
                title: "AI Tools Query for Accurate Information",
                description:
                  "AI coding assistants query our API for version-specific documentation, dramatically improving code suggestions.",
                color: "from-emerald-500/20 to-green-500/10",
                number: "03",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border border-muted-foreground/10 hover:border-muted-foreground/20 
                          backdrop-blur-sm bg-background/40 group hover:shadow-xl hover:shadow-indigo-900/5 
                          transition-all duration-500"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10 group-hover:opacity-30 transition-opacity duration-500 z-0 `}
                ></div>
                <div
                  className={`absolute top-6 right-6 text-5xl font-extrabold opacity-10 group-hover:opacity-20 transition-opacity z-0 
                                ${
                                  index === 0
                                    ? "text-blue-500"
                                    : index === 1
                                    ? "text-purple-500"
                                    : "text-green-500"
                                }`}
                >
                  {step.number}
                </div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl font-bold">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base text-muted-foreground/80">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases with Tabs - Fully transparent */}
      <section className="py-24 backdrop-blur-none">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Badge
              variant="outline"
              className="mb-6 border-indigo-500/20 bg-indigo-500/10 text-indigo-400 px-4 py-1.5 rounded-full font-medium"
            >
              Use Cases
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <AnimatedGradientText className="font-bold" speed={3}>
                Who Benefits?
              </AnimatedGradientText>
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Our ecosystem creates value for every participant
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="ai-vendors" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-10 bg-background/40 p-1.5 rounded-full backdrop-blur">
                <TabsTrigger
                  value="ai-vendors"
                  className="rounded-full px-8 py-2.5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-violet-500 data-[state=active]:text-white transition-all duration-300"
                >
                  AI Vendors
                </TabsTrigger>
                <TabsTrigger
                  value="maintainers"
                  className="rounded-full px-8 py-2.5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-violet-500 data-[state=active]:text-white transition-all duration-300"
                >
                  OSS Maintainers
                </TabsTrigger>
                <TabsTrigger
                  value="developers"
                  className="rounded-full px-8 py-2.5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-violet-500 data-[state=active]:text-white transition-all duration-300"
                >
                  Developers
                </TabsTrigger>
              </TabsList>

              <TabsContent
                value="ai-vendors"
                className="bg-card/20 p-8 rounded-2xl border border-indigo-500/10 shadow-xl backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold mb-6">
                  For AI Coding Tool Providers
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">
                      Deliver precise, version-specific code suggestions that
                      work the first time
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">
                      Eliminate hallucinations and deprecated syntax in your
                      generated code
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">
                      Build user trust and satisfaction through consistently
                      accurate code assistance
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">
                      Integrate easily with our comprehensive API and developer
                      resources
                    </span>
                  </li>
                </ul>
              </TabsContent>

              <TabsContent
                value="maintainers"
                className="bg-card/20 p-8 rounded-2xl border border-indigo-500/10 shadow-xl backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold mb-6">
                  For Open Source Maintainers
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">
                      Earn sustainable revenue from your documentation through
                      our profit-sharing model
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">
                      Ensure AI tools correctly implement your library&apos;s
                      APIs as you intended
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">
                      Set up once with our GitHub Actions for automatic
                      documentation submission
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">
                      Gain valuable insights with our detailed usage and revenue
                      analytics dashboard
                    </span>
                  </li>
                </ul>
              </TabsContent>

              <TabsContent
                value="developers"
                className="bg-card/20 p-8 rounded-2xl border border-indigo-500/10 shadow-xl backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold mb-6">
                  For Software Developers
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">
                      Receive version-compatible code suggestions that compile
                      and run immediately
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">
                      Eliminate wasted time fixing incorrect syntax and
                      deprecated methods
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">
                      Support open source maintainers while getting better AI
                      coding assistance
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">
                      Boost productivity with AI tools that understand your
                      exact environment
                    </span>
                  </li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Benefits Section - Fully transparent */}
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Badge
              variant="outline"
              className="mb-6 border-indigo-500/20 bg-indigo-500/10 text-indigo-400 px-4 py-1.5 rounded-full font-medium"
            >
              Benefits
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <AnimatedGradientText className="font-bold" speed={3}>
                The Problem We&apos;re Solving
              </AnimatedGradientText>
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              These statistics highlight why version-specific documentation is
              crucial
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "66% Don't Trust AI Code",
                description:
                  "Two-thirds of developers lack confidence in code generated by AI tools due to version inconsistencies.",
                color: "from-blue-500/20 to-indigo-500/10",
              },
              {
                title: "Only 10-30% Match Libraries",
                description:
                  "Most AI-generated code fails to align with the specific versions in developers' projects.",
                color: "from-violet-500/20 to-purple-500/10",
              },
              {
                title: "38% Use Deprecated APIs",
                description:
                  "Over a third of AI suggestions reference outdated or deprecated library methods and syntax.",
                color: "from-red-500/20 to-rose-500/10",
              },
              {
                title: "Hours Lost Weekly",
                description:
                  "Developers waste 5+ hours per week correcting and debugging AI-suggested code that doesn't match their versions.",
                color: "from-amber-500/20 to-yellow-500/10",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="bg-background/30 backdrop-blur border-indigo-500/10 hover:border-indigo-500/20 
                         group hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-500"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-50 group-hover:opacity-80 transition-opacity duration-500 rounded-lg `}
                ></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl font-bold">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base text-muted-foreground/80">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Fully transparent */}
      <section className="py-24 backdrop-blur-none">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Badge
              variant="outline"
              className="mb-6 border-indigo-500/20 bg-indigo-500/10 text-indigo-400 px-4 py-1.5 rounded-full font-medium"
            >
              Pricing
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <AnimatedGradientText className="font-bold" speed={3}>
                Simple, Transparent Pricing
              </AnimatedGradientText>
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Pay-per-query for AI platforms, completely free for library
              maintainers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <Card className="border-2 border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-indigo-500/10 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-500/30 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/10 opacity-50 group-hover:opacity-80 transition-opacity duration-500 rounded-lg "></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-bold text-blue-500">
                  AI Platforms
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-col gap-6">
                  <p className="text-5xl font-extrabold tracking-tight">
                    $0.001
                    <span className="text-xl font-normal text-muted-foreground/70">
                      {" "}
                      / query
                    </span>
                  </p>
                  <div className="space-y-4 mt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">
                        Precise, version-specific documentation access
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">
                        Streamlined RESTful API integration
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">
                        Support for all major programming languages and
                        frameworks
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500/20 bg-gradient-to-br from-green-500/5 to-emerald-500/10 backdrop-blur-sm hover:shadow-xl hover:shadow-green-900/5 hover:border-green-500/30 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/10 opacity-50 group-hover:opacity-80 transition-opacity duration-500 rounded-lg "></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-bold text-green-500">
                  Library Maintainers
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-col gap-6">
                  <p className="text-5xl font-extrabold tracking-tight">
                    Free
                    <span className="text-xl font-normal text-muted-foreground/70">
                      {" "}
                      + revenue share
                    </span>
                  </p>
                  <div className="space-y-4 mt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">
                        One-click GitHub integration with automatic updates
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">
                        Earn from every AI query that uses your documentation
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">
                        Comprehensive usage analytics and revenue dashboard
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Background fully transparent */}
      <section className="py-32 relative overflow-hidden">
        <Meteors
          number={40}
          className="opacity-90"
          minDuration={5}
          maxDuration={10}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <Badge
              variant="outline"
              className="mb-8 py-2 px-5 border-indigo-500/30 bg-indigo-500/10 text-indigo-400 
                  shadow-lg shadow-indigo-900/20 rounded-full text-sm font-medium 
                  animate-fade-in tracking-wide"
            >
              Limited Developer Preview
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              <AnimatedGradientText className="font-bold" speed={3}>
                Make AI-Generated Code Just Work
              </AnimatedGradientText>
            </h2>

            <p className="text-xl text-white font-medium mb-10 max-w-3xl leading-relaxed">
              Early adopters get priority access, personalized onboarding, and
              the chance to shape the future of AI-assisted development. Join us
              today.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button
                size="lg"
                asChild
                className="group rounded-full px-10 py-6 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-900/30 border-none font-medium transition-all duration-500"
              >
                <Link href={signUpUrl}>
                  Join Developer Preview
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full px-10 py-6 backdrop-blur-sm bg-background/50 border-indigo-500/30 hover:bg-background/80 hover:border-indigo-500/50 shadow-lg font-medium transition-all duration-500"
              >
                <Link href="/docs">View Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
