import Navbar from './Navbar'

const CURRENT_YEAR = new Date().getFullYear()

export default function MainLayout({ children }) {
  return (
    <div className="h-screen max-h-screen overflow-hidden flex flex-col justify-between bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-200 select-none">
      {/* Top Fixed Header with Tabs */}
      <Navbar />

      {/* Main Viewport Content (Non-Scrollable Viewport) */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
        {/* Subtle Ambient Red Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[280px] bg-red-600/[0.08] dark:bg-red-600/[0.14] blur-[100px] pointer-events-none rounded-full" />

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center animate-tab-enter space-y-6">
          {children}
        </div>
      </main>

      {/* Sleek, Non-Scrollable Bottom Bar */}
      <footer className="shrink-0 h-10 border-t border-zinc-200 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
        <div className="flex items-center gap-2">
          <span className="font-bold tracking-wider uppercase font-['Cinzel'] text-zinc-800 dark:text-zinc-200">
            Arcadia
          </span>
          <span className="text-zinc-400 dark:text-zinc-600">&bull;</span>
          <span>&copy; {CURRENT_YEAR}</span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px]">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
          <span className="text-zinc-600 dark:text-zinc-400">SHARD: PRIME</span>
        </div>

        <div className="text-zinc-500 dark:text-zinc-400">
          <span>WEBGL2 / WEBGPU</span>
        </div>
      </footer>
    </div>
  )
}
