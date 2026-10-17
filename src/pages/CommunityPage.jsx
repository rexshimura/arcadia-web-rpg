import { Link } from 'react-router-dom'
import MainLayout from '../components/MainLayout'
import { Construction, Clock } from 'lucide-react'

export default function CommunityPage() {
  return (
    <MainLayout>
      <div className="space-y-4 max-w-md mx-auto p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/90 dark:bg-zinc-900/80 backdrop-blur-md">
        <div className="w-12 h-12 rounded-xl bg-zinc-200 dark:bg-zinc-800 text-red-600 dark:text-red-500 flex items-center justify-center mx-auto">
          <Construction className="w-6 h-6" />
        </div>
        <div className="space-y-1.5">
          <h2 className="text-xl sm:text-2xl font-bold uppercase font-['Cinzel'] text-zinc-900 dark:text-white">
            Community Hub
          </h2>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-100 dark:bg-red-950/50 text-red-600 dark:text-red-400 text-[11px] font-semibold uppercase tracking-wider">
            <Clock className="w-3 h-3" />
            <span>Under Construction</span>
          </div>
        </div>
        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Will come in a future update. Guild forums, global player trading boards, and direct developer dispatches will be hosted here.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-block px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition"
          >
            Back to Overview
          </Link>
        </div>
      </div>
    </MainLayout>
  )
}
