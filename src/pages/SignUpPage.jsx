import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, Lock, Mail, User, ArrowLeft, ArrowRight, Sun, Moon, CheckCircle2 } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function SignUpPage() {
  const { theme, toggleTheme } = useTheme()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(true)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col justify-between font-sans transition-colors duration-200 selection:bg-red-500/20 selection:text-red-600 dark:selection:bg-red-500/30 dark:selection:text-red-300">
      <div />

      {/* Main Container */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 py-8">
        <div className="w-full max-w-sm sm:max-w-md animate-tab-enter space-y-2.5">
          {/* Upper Controls Placed Directly Above Container */}
          <div className="flex items-center justify-between px-1">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-400 transition-colors group cursor-pointer"
              title="Return to Overview"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Return</span>
            </Link>

            {/* Theme Switcher Button (with Alt + P shortcut) */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-1.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle theme (Alt + P)"
              title="Toggle Theme (Alt + P)"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-zinc-300 hover:text-red-400" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-700 hover:text-red-600" />
              )}
            </button>
          </div>

          {/* Create Character Card Container */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl shadow-zinc-200/50 dark:shadow-none p-6 sm:p-8 space-y-6">
            
            {/* Header Branding */}
            <div className="text-center space-y-2">
              <img
                src="/arcadia_icon.png"
                alt="Arcadia Emblem"
                className="w-12 h-12 object-contain mx-auto filter drop-shadow-[0_0_14px_rgba(220,38,38,0.35)]"
              />
              <h1 className="text-2xl font-bold uppercase font-['Cinzel'] tracking-tight text-zinc-900 dark:text-white">
                Create Character
              </h1>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Join the online RPG and start your quest today.
              </p>
            </div>

            {/* Sign Up Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username Input */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Username
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ironclad"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                  />
                  <User className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Valid Email Input */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Valid Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="player@arcadia.game"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                  />
                  <Mail className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                  />
                  <Lock className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Input */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                  />
                  <Lock className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition"
                    aria-label="Toggle confirm password visibility"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center justify-between pt-1 text-xs">
                <label className="flex items-center gap-2 cursor-pointer text-zinc-600 dark:text-zinc-400 select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-zinc-300 dark:border-zinc-700 accent-red-600 cursor-pointer"
                  />
                  <span>Remember me</span>
                </label>
              </div>

              {/* Success Notification */}
              {submitted && (
                <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-950 border border-red-600/40 text-red-600 dark:text-red-400 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-red-600 dark:text-red-500" />
                  <span>Character {username || 'Hero'} initialized! Welcome to Arcadia.</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-red-600/20 hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Create Account</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Link to Login */}
            <div className="text-center pt-1 text-xs text-zinc-500 dark:text-zinc-400">
              <span>
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="font-bold text-red-600 dark:text-red-400 hover:underline"
                >
                  Log In
                </Link>
              </span>
            </div>

          </div>
        </div>
      </main>

      {/* Sleek Bottom Strip */}
      <footer className="h-10 border-t border-zinc-200 dark:border-zinc-800/80 px-6 flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400 shrink-0">
        <span>Arcadia Online RPG</span>
        <span>Gateway Portal &bull; Protected</span>
      </footer>
    </div>
  )
}
