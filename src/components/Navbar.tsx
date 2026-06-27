import { Github, ExternalLink, Eye } from 'lucide-react'
import { type Lang, type Translations } from '../i18n/translations'

const REPO_URL      = 'https://github.com/DavidMume/waterbuilt-site-vision'
const PORTFOLIO_URL = 'https://juandamunoz.com/'

interface Props { t: Translations; lang: Lang; setLanguage: (l: Lang) => void }

export default function Navbar({ t, lang, setLanguage }: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5" style={{ background: 'rgba(10,10,11,0.92)', backdropFilter: 'blur(16px)' }}>
      <nav className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center gap-4">

        {/* Brand */}
        <a href="#top" className="flex items-center gap-2 shrink-0 mr-4">
          <Eye size={16} className="text-signal" />
          <span className="text-sm font-semibold text-white hidden sm:inline">WaterBuilt</span>
          <span className="text-sm font-semibold text-signal hidden sm:inline">Site Vision</span>
        </a>

        {/* Nav links */}
        <div className="hidden lg:flex items-center gap-5 text-xs text-zinc-500 flex-1">
          {([
            ['#summary',      t.nav.summary],
            ['#pipeline',     t.nav.pipeline],
            ['#checklist',    t.nav.checklist],
            ['#vision',       t.nav.vision],
            ['#dashboard',    t.nav.dashboard],
            ['#architecture', t.nav.architecture],
          ] as const).map(([href, label]) => (
            <a key={href} href={href} className="hover:text-white transition-colors">{label}</a>
          ))}
        </div>

        <div className="flex items-center gap-3 ml-auto shrink-0">
          {/* Lang switcher */}
          <div className="flex items-center border border-white/10 rounded-full overflow-hidden text-xs font-mono">
            {(['es', 'en'] as const).map((l) => (
              <button key={l} type="button" onClick={() => setLanguage(l)}
                className={`px-3 py-1 transition-colors uppercase ${lang === l ? 'bg-signal text-white' : 'text-zinc-500 hover:text-white'}`}>
                {l}
              </button>
            ))}
          </div>

          <a href={REPO_URL} target="_blank" rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors">
            <Github size={14} />
            <span className="hidden md:inline">GitHub</span>
          </a>

          <a href={PORTFOLIO_URL} className="hidden sm:flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors">
            <ExternalLink size={14} />
            <span className="hidden md:inline">{t.nav.portfolio}</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
