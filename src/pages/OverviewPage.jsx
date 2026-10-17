import { Link } from 'react-router-dom'
import MainLayout from '../components/MainLayout'
import { ArrowRight } from 'lucide-react'

export default function OverviewPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Emblem Logo */}
        <div className="relative inline-block">
          <img
            src="/arcadia_icon.png"
            alt="Arcadia Emblem"
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain mx-auto filter drop-shadow-[0_0_24px_rgba(220,38,38,0.35)] hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Tag / Badge */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            <span>Online Action RPG &bull; Play In Browser</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="space-y-2 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase leading-[1.08]">
            <span className="block font-['Cinzel'] text-zinc-900 dark:text-white">
              Enter The World Of
            </span>
            <span className="block font-['Cinzel'] text-red-600 dark:text-red-500">
              Arcadia
            </span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto font-normal leading-relaxed pt-1">
            A persistent browser-based action RPG. Master real-time tactical combat, conquer deep dungeons, and forge your legend alongside players worldwide.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/login"
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/20 hover:shadow-red-600/35 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <span>Play Now Free</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/login"
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold text-xs uppercase tracking-wider transition flex items-center justify-center"
          >
            Sign In
          </Link>
        </div>
      </div>
    </MainLayout>
  )
}
