import { Github, ExternalLink } from 'lucide-react'
import { type Translations } from '../i18n/translations'

const GITHUB_PROFILE = 'https://github.com/DavidMume'
const PORTFOLIO_URL  = 'https://juandamunoz.com/'

interface Props { t: Translations }

export default function Author({ t }: Props) {
  const a = t.author
  return (
    <section id="author" className="py-24 border-t border-white/5 bg-obsidian-50">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div><p className="section-kicker">{a.kicker}</p></div>
          <div className="lg:col-span-2 flex gap-6 items-start">
            <div className="w-16 h-16 rounded-sm flex items-center justify-center shrink-0 border border-signal/30"
              style={{ background: 'rgba(215,25,32,0.08)' }}>
              <span className="font-serif text-2xl font-bold text-signal">JD</span>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-white mb-0.5">{a.name}</h2>
              <p className="text-xs font-mono text-signal mb-1">@{a.handle}</p>
              <p className="text-xs text-zinc-500 mb-4">{a.role}</p>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-prose mb-6">{a.bio}</p>
              <div className="flex gap-5">
                <a href={GITHUB_PROFILE} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                  <Github size={16} />{a.linkGithub}
                </a>
                <a href={PORTFOLIO_URL}
                  className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-signal transition-colors">
                  <ExternalLink size={16} />{a.linkPortfolio}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
