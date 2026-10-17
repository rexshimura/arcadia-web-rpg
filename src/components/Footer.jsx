import { Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950 text-zinc-500 dark:text-zinc-400 text-xs transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded bg-red-600 text-white flex items-center justify-center">
            <Shield className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold tracking-wider uppercase font-['Cinzel'] text-zinc-900 dark:text-zinc-100">
            Arcadia
          </span>
          <span className="text-zinc-400 dark:text-zinc-600">&bull;</span>
          <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
            &copy; {CURRENT_YEAR} Arcadia Online RPG.
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs font-medium">
          <Link to="/" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
            Home
          </Link>
          <Link to="/login" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
            Play Now
          </Link>
          <a href="#about" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
            Terms & Privacy
          </a>
        </div>
      </div>
    </footer>
  )
}
