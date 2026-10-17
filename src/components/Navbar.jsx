import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const tabs = [
    { id: 'overview', label: 'Overview', path: '/' },
    { id: 'updates', label: 'Updates', path: '/news' },
    { id: 'community', label: 'Community', path: '/hub' },
  ]

  const currentTab = location.pathname === '/news' ? 'updates' : location.pathname === '/hub' ? 'community' : 'overview'

  return (
    <header className="shrink-0 z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/80 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Emblem & Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/arcadia_icon.png"
            alt="Arcadia Emblem"
            className="w-8 h-8 object-contain filter drop-shadow-[0_0_8px_rgba(220,38,38,0.4)] group-hover:scale-105 transition-transform"
          />
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-bold tracking-wider uppercase font-['Cinzel'] text-zinc-900 dark:text-zinc-100">
              Arcadia
            </span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-red-600 dark:text-red-500">
              RPG
            </span>
          </div>
        </Link>

        {/* Top Navigation Tabs: Overview (/) | Updates (/news) | Community (/hub) */}
        <nav className="hidden md:flex items-center gap-1">
          {tabs.map((tab) => {
            const isActive = currentTab === tab.id
            return (
              <Link
                key={tab.id}
                to={tab.path}
                className={`relative px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 rounded-lg ${
                  isActive
                    ? 'text-red-600 dark:text-red-400 font-bold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-red-600 dark:bg-red-500 rounded-full transition-all duration-300" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Toggle Button (with Alt + P indicator) */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-lg text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            aria-label="Toggle theme (Alt + P)"
            title="Toggle Theme (Alt + P)"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-zinc-300 hover:text-red-400" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-700 hover:text-red-600" />
            )}
          </button>

          <Link
            to="/login"
            className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
          >
            Log In
          </Link>

          <Link
            to="/login"
            className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm shadow-red-600/20 hover:shadow-red-600/30 transition-all flex items-center gap-1.5"
          >
            <span>Play Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            aria-label="Toggle theme (Alt + P)"
            title="Toggle Theme (Alt + P)"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-zinc-300" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-700" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-1">
            {tabs.map((tab) => {
              const isActive = currentTab === tab.id
              return (
                <Link
                  key={tab.id}
                  to={tab.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-left py-2 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider ${
                    isActive
                      ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/20 font-bold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                  }`}
                >
                  {tab.label}
                </Link>
              )
            })}
          </nav>
          <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-2">
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2 text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 rounded-lg border border-zinc-300 dark:border-zinc-800"
            >
              Log In
            </Link>
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2 text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm"
            >
              Play Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
