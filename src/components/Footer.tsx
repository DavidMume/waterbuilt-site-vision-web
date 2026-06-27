import { Github, ExternalLink } from 'lucide-react'
import { type Translations } from '../i18n/translations'

const REPO_URL       = 'https://github.com/DavidMume/waterbuilt-site-vision'
const GITHUB_PROFILE = 'https://github.com/DavidMume'
const PORTFOLIO_URL  = 'https://juandamunoz.com/'

interface Props { t: Translations }

export default function Footer({ t }: Props) {
  const f = t.footer
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm text-zinc-500">{f.copy}</p>
            <p className="text-xs font-mono text-zinc-700 mt-0.5">{f.note}</p>
          </div>
          <div className="flex items-center gap-5">
            <a href={GITHUB_PROFILE} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-600 hover:text-white transition-colors">
              <Github size={13} />{f.linkGithub}
            </a>
            <a href={REPO_URL} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-600 hover:text-white transition-colors">
              <ExternalLink size={13} />{f.linkRepo}
            </a>
            <a href={PORTFOLIO_URL}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-600 hover:text-signal transition-colors">
              <ExternalLink size={13} />{f.linkPortfolio}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
