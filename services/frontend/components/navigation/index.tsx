"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";
import { cn } from '@/lib/utils';
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Navigation() {
  const pathname = usePathname();
  const [signInUrl, setSignInUrl] = useState("/dashboard");
  const [signUpUrl, setSignUpUrl] = useState("/dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    // For initial development, we'll use dummy URLs
    setSignInUrl('/dashboard');
    setSignUpUrl('/dashboard');

    // Add scroll listener for enhanced header
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Documentation', href: '/docs' },
  ];

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full backdrop-blur transition-all duration-300",
      isScrolled 
        ? "bg-background/95 border-b border-border/40 shadow-sm" 
        : "bg-background/50"
    )}>
      <div className="px-4 md:px-6 mx-auto flex h-16 items-center justify-between max-w-screen-2xl">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl tracking-tighter pl-1">
              ANCHORING<span className="text-primary">.IO</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-muted-foreground transition-colors hover:text-foreground",
                  pathname === item.href 
                    ? "text-foreground font-medium" 
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="hidden md:flex items-center gap-4 pr-1">
          <ThemeToggle />
          
          <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
            <a href={signInUrl}>Sign in</a>
          </Button>
          <Button asChild className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white border-none">
            <a href={signUpUrl}>Sign up</a>
          </Button>
        </div>
        
        <div className="flex items-center md:hidden gap-4 pr-1">
          <ThemeToggle />
          
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-md">
          <div className="px-4 py-4 flex flex-col gap-4 max-w-screen-2xl mx-auto">
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md transition-colors",
                    pathname === item.href 
                      ? "bg-accent text-accent-foreground font-medium" 
                      : "hover:bg-accent/50 text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="flex flex-col gap-2 mt-2 border-t pt-4">
              <Button asChild variant="ghost" className="justify-start">
                <a href={signInUrl}>Sign in</a>
              </Button>
              <Button asChild className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white border-none">
                <a href={signUpUrl}>Sign up</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

