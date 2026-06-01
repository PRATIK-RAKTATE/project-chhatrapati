"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const nav = [
  ["/shivaji-maharaj", "History"],
  ["/battles", "Battles"],
  ["/forts", "Forts"],
  ["/military/shivaji-maharaj-military-strategy", "Military"],
  ["/navy/shivaji-maharaj-navy", "Navy"],
  ["/administration/ashta-pradhan-mandal", "Administration"],
  ["/family", "Family"],
  ["/timeline", "Timeline"]
];

const quickLinks = [
  { href: "/faq/who-was-shivaji-maharaj", label: "Who was Shivaji?", icon: "👑" },
  { href: "/faq/where-was-shivaji-born", label: "Birthplace", icon: "📍" },
  { href: "/faq/when-was-shivaji-crowned", label: "Coronation", icon: "🏛️" },
  { href: "/faq/how-many-forts-did-shivaji-have", label: "Forts Count", icon: "🏰" }
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [quickLinksOpen, setQuickLinksOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Add background opacity when scrolled
      setScrolled(currentScrollY > 20);
      
      // Hide header on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
    setQuickLinksOpen(false);
  }, [pathname]);

  return (
    <>
      <header 
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled 
            ? "border-b border-[#ff6b00]/20 bg-[#0a0a0a]/95 shadow-lg shadow-black/20" 
            : "border-b border-transparent bg-gradient-to-b from-[#0a0a0a] to-transparent"
        } backdrop-blur-md`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6" aria-label="Primary navigation">
          {/* Logo */}
          <Link 
            href="/" 
            className="group relative flex items-center gap-3"
          >
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-[#ff6b00] shadow-lg shadow-[#ff6b00]/20 transition-all duration-300 group-hover:shadow-[#ff6b00]/40">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 text-white">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
              <span className="absolute inset-0 bg-gradient-to-tr from-[#ff8c00] to-[#ff6b00] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </span>
            <span className="hidden flex-col sm:flex">
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff6b00]">Knowledge Hub</span>
              <span className="font-sans text-sm font-black uppercase tracking-[0.08em] text-white">
                Chhatrapati <span className="text-[#ff6b00]">Shivaji</span>
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {nav.map(([href, label], index) => {
              const isActive = pathname === href || pathname?.startsWith(href + "/");
              return (
                <div 
                  key={href} 
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    href={href} 
                    className={`relative px-4 py-2 font-sans text-sm font-medium transition-all duration-200 ${
                      isActive 
                        ? "text-white" 
                        : "text-[#909090] hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">{label}</span>
                    {/* Active indicator */}
                    <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[#ff6b00] transition-all duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`} />
                    {/* Hover indicator */}
                    <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[#ff6b00]/50 transition-all duration-300 ${
                      activeDropdown === index && !isActive ? "scale-x-100" : "scale-x-0"
                    }`} />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Quick Links Dropdown */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setQuickLinksOpen(!quickLinksOpen)}
                className={`flex h-10 items-center gap-2 rounded-lg border px-3 font-sans text-sm font-medium transition-all duration-200 ${
                  quickLinksOpen 
                    ? "border-[#ff6b00] bg-[#ff6b00]/10 text-[#ff6b00]" 
                    : "border-[#2a2a2a] text-[#909090] hover:border-[#ff6b00]/50 hover:text-white"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                <span className="hidden sm:inline">Quick Answers</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 ${quickLinksOpen ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Quick Links Dropdown Menu */}
              {quickLinksOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 overflow-hidden rounded-xl border border-[#2a2a2a] bg-[#141414] shadow-xl shadow-black/40">
                  <div className="border-b border-[#2a2a2a] px-4 py-3">
                    <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#ff6b00]">Popular Questions</span>
                  </div>
                  <div className="p-2">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#b0b0b0] transition-colors hover:bg-[#1a1a1a] hover:text-white"
                      >
                        <span className="text-lg">{link.icon}</span>
                        <span className="font-sans">{link.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-all duration-200 ${
                searchOpen 
                  ? "border-[#ff6b00] bg-[#ff6b00]/10 text-[#ff6b00]" 
                  : "border-[#2a2a2a] text-[#909090] hover:border-[#ff6b00]/50 hover:text-white"
              }`}
              aria-label="Search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-all duration-200 lg:hidden ${
                mobileOpen 
                  ? "border-[#ff6b00] bg-[#ff6b00]/10 text-[#ff6b00]" 
                  : "border-[#2a2a2a] text-[#909090] hover:border-[#ff6b00]/50 hover:text-white"
              }`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <div className="relative h-4 w-5">
                <span className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${mobileOpen ? "top-2 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 top-2 block h-0.5 w-5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${mobileOpen ? "top-2 -rotate-45" : "top-4"}`} />
              </div>
            </button>
          </div>
        </nav>

        {/* Search Bar */}
        <div className={`overflow-hidden transition-all duration-300 ${searchOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="border-t border-[#1a1a1a] bg-[#0a0a0a]/50 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 md:px-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ff6b00]">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search articles, forts, battles..."
                className="flex-1 bg-transparent font-sans text-base text-white placeholder-[#606060] outline-none"
              />
              <button 
                onClick={() => setSearchOpen(false)}
                className="font-sans text-sm text-[#606060] hover:text-white transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`overflow-hidden transition-all duration-300 lg:hidden ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="border-t border-[#1a1a1a] bg-[#0a0a0a]">
            <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
              {/* Mobile Nav Links */}
              <div className="grid gap-1">
                {nav.map(([href, label], index) => {
                  const isActive = pathname === href || pathname?.startsWith(href + "/");
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`flex items-center justify-between rounded-xl px-4 py-3.5 font-sans text-sm font-medium transition-all duration-200 ${
                        isActive 
                          ? "bg-[#ff6b00]/10 text-[#ff6b00]" 
                          : "text-[#a0a0a0] hover:bg-[#141414] hover:text-white"
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span>{label}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isActive ? "text-[#ff6b00]" : "text-[#404040]"}>
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Quick Links */}
              <div className="mt-4 border-t border-[#1a1a1a] pt-4">
                <span className="px-4 font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-[#606060]">Quick Answers</span>
                <div className="mt-2 grid gap-1">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-[#909090] transition-colors hover:bg-[#141414] hover:text-white"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ff6b00]">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                      <span className="font-sans text-xs">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[72px]" />
    </>
  );
}
