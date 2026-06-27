import { useEffect, useRef, useState } from 'react'
import { Github, ArrowDown, ExternalLink, AlertTriangle, Camera, FileText } from 'lucide-react'
import { type Translations } from '../i18n/translations'

const REPO_URL      = 'https://github.com/DavidMume/waterbuilt-site-vision'
const PORTFOLIO_URL = 'https://juandamunoz.com/'

interface Props { t: Translations }

const RISK_LEVELS = [
  { label: 'LOW',      cls: 'border-neon-green text-neon-green bg-neon-muted' },
  { label: 'MEDIUM',   cls: 'border-amber-warning text-amber-warning bg-amber-muted' },
  { label: 'HIGH',     cls: 'border-safety-orange text-safety-orange bg-safety-muted' },
  { label: 'CRITICAL', cls: 'border-signal text-signal bg-signal-muted' },
]

function CranesSVG() {
  return (
    <svg viewBox="0 0 800 320" className="w-full h-full" aria-hidden="true">
      {/* Sky gradient */}
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a0a0b" />
          <stop offset="100%" stopColor="#1a1a2e" />
        </linearGradient>
        <linearGradient id="redglow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D71920" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#D71920" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="800" height="320" fill="url(#sky)" />

      {/* Ground */}
      <rect x="0" y="295" width="800" height="25" fill="#18181d" />
      <rect x="0" y="293" width="800" height="2" fill="#2e2e38" />

      {/* Scaffolding structure left */}
      <rect x="60" y="140" width="4" height="155" fill="#2e2e38" />
      <rect x="100" y="120" width="4" height="175" fill="#2e2e38" />
      <rect x="60" y="140" width="44" height="3" fill="#2e2e38" />
      <rect x="60" y="180" width="44" height="3" fill="#2e2e38" />
      <rect x="60" y="220" width="44" height="3" fill="#2e2e38" />
      <rect x="60" y="260" width="44" height="3" fill="#2e2e38" />
      {/* Diagonal braces */}
      <line x1="60" y1="140" x2="104" y2="183" stroke="#2e2e38" strokeWidth="1.5" />
      <line x1="60" y1="183" x2="104" y2="140" stroke="#2e2e38" strokeWidth="1.5" />
      <line x1="60" y1="220" x2="104" y2="263" stroke="#2e2e38" strokeWidth="1.5" />
      <line x1="60" y1="263" x2="104" y2="220" stroke="#2e2e38" strokeWidth="1.5" />

      {/* Tower crane 1 */}
      <rect x="280" y="30" width="6" height="265" fill="#22222a" />
      <rect x="180" y="30" width="106" height="5" fill="#22222a" />
      <rect x="280" y="30" width="180" height="5" fill="#2e2e38" />
      <rect x="455" y="35" width="5" height="30" fill="#22222a" />
      <line x1="283" y1="32" x2="460" y2="62" stroke="#22222a" strokeWidth="1.5" strokeDasharray="4 4" />
      <line x1="283" y1="32" x2="183" y2="62" stroke="#22222a" strokeWidth="1.5" strokeDasharray="4 4" />
      {/* Hook cable */}
      <line x1="380" y1="35" x2="380" y2="90" stroke="#2d5a8e" strokeWidth="1" strokeDasharray="2 3" />
      <rect x="372" y="88" width="16" height="10" rx="2" fill="#2d5a8e" />
      {/* Warning light */}
      <circle cx="283" cy="28" r="4" fill="#D71920" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Tower crane 2 (smaller, right) */}
      <rect x="580" y="80" width="5" height="215" fill="#22222a" />
      <rect x="510" y="80" width="75" height="4" fill="#22222a" />
      <rect x="580" y="80" width="130" height="4" fill="#2e2e38" />
      <line x1="583" y1="82" x2="706" y2="106" stroke="#22222a" strokeWidth="1.5" strokeDasharray="4 4" />
      <line x1="583" y1="82" x2="513" y2="106" stroke="#22222a" strokeWidth="1.5" strokeDasharray="4 4" />
      <circle cx="583" cy="78" r="3" fill="#D71920" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.15;0.7" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* Temporary fencing */}
      {[0,1,2,3,4,5,6,7,8].map((i) => (
        <g key={i}>
          <rect x={150 + i * 60} y="275" width="2" height="20" fill="#2e2e38" />
          <rect x={150 + i * 60} y="280" width="58" height="1.5" fill="#3a3a45" />
          <rect x={150 + i * 60} y="290" width="58" height="1.5" fill="#3a3a45" />
        </g>
      ))}

      {/* Red glow at base */}
      <rect x="120" y="200" width="560" height="95" fill="url(#redglow)" opacity="0.3" />

      {/* Site lights */}
      {[200, 400, 600].map((x) => (
        <g key={x}>
          <line x1={x} y1="240" x2={x} y2="295" stroke="#3a3a45" strokeWidth="2" />
          <circle cx={x} cy="238" r="6" fill="#f59e0b" opacity="0.6">
            <animate attributeName="opacity" values="0.6;0.3;0.6" dur={`${3 + x/200}s`} repeatCount="indefinite" />
          </circle>
          <ellipse cx={x} cy="260" rx="30" ry="8" fill="#f59e0b" opacity="0.04" />
        </g>
      ))}
    </svg>
  )
}

function CameraFeedCard(_props: { t: Translations }) {
  const [activeRisk, setActiveRisk] = useState(0)
  const [scanY, setScanY] = useState(0)
  const rafRef = useRef<number>(0)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    let riskTimer: ReturnType<typeof setInterval>
    riskTimer = setInterval(() => setActiveRisk((p) => (p + 1) % RISK_LEVELS.length), 2200)
    return () => clearInterval(riskTimer)
  }, [])

  useEffect(() => {
    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts
      const elapsed = (ts - startRef.current) % 3000
      setScanY(Math.round((elapsed / 3000) * 100))
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const risk = RISK_LEVELS[activeRisk]

  return (
    <div className="glass rounded-lg overflow-hidden w-full max-w-sm mx-auto shadow-2xl shadow-black/60">
      {/* Camera header */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5 bg-white/[0.03]">
        <div className="w-2 h-2 rounded-full bg-signal animate-pulse-slow" />
        <span className="text-xs font-mono text-zinc-400">CAM-01 · LIVE</span>
        <Camera size={12} className="ml-auto text-zinc-600" />
        <span className="text-xs font-mono text-zinc-600">07:32:05</span>
      </div>

      {/* Frame viewport */}
      <div className="relative bg-obsidian-100" style={{ aspectRatio: '4/3' }}>
        {/* Simulated scene */}
        <div className="absolute inset-0 grid-bg" />
        {/* Construction scene elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-obsidian-100 to-transparent" />
        <div className="absolute top-4 left-4 right-4 bottom-8">
          {/* Scaffolding lines */}
          <div className="absolute left-6 top-2 w-px bg-zinc-700" style={{ height: '70%' }} />
          <div className="absolute left-14 top-0 w-px bg-zinc-700" style={{ height: '80%' }} />
          <div className="absolute left-6 top-6 right-20 h-px bg-zinc-700" />
          <div className="absolute left-6 top-16 right-24 h-px bg-zinc-700" />
          {/* Detection boxes */}
          <div className="absolute border border-neon-green/70 rounded-sm" style={{ left: '18%', top: '15%', width: '22%', height: '28%' }}>
            <span className="absolute -top-4 left-0 text-[9px] font-mono text-neon-green bg-obsidian px-1">PPE ✓</span>
          </div>
          <div className="absolute border border-signal/80 rounded-sm animate-pulse" style={{ left: '55%', top: '8%', width: '34%', height: '22%' }}>
            <span className="absolute -top-4 left-0 text-[9px] font-mono text-signal bg-obsidian px-1">FENCE ✗</span>
          </div>
          <div className="absolute border border-amber-warning/70 rounded-sm" style={{ left: '8%', top: '62%', width: '28%', height: '20%' }}>
            <span className="absolute -top-4 left-0 text-[9px] font-mono text-amber-warning bg-obsidian px-1">HAZARD ⚠</span>
          </div>
        </div>

        {/* Scan line */}
        <div className="absolute left-0 right-0 h-px pointer-events-none"
          style={{ top: `${scanY}%`, background: 'linear-gradient(90deg, transparent, rgba(215,25,32,0.5), transparent)' }} />

        {/* Corner crosshairs */}
        {[['top-2 left-2', 'border-t border-l'], ['top-2 right-2', 'border-t border-r'], ['bottom-2 left-2', 'border-b border-l'], ['bottom-2 right-2', 'border-b border-r']].map(([pos, border]) => (
          <div key={pos} className={`absolute w-4 h-4 ${pos} ${border} border-signal/40`} />
        ))}
      </div>

      {/* Status bar */}
      <div className="flex items-center gap-2 px-3 py-2 border-t border-white/5">
        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border transition-all duration-500 ${risk.cls}`}>
          {risk.label}
        </span>
        <span className="text-[10px] font-mono text-zinc-500 ml-auto">claude-sonnet-4-5</span>
      </div>

      {/* Checklist mini */}
      <div className="px-3 pb-3 space-y-1">
        {[
          ['PPE visible',         'ok'],
          ['Fencing intact',      'critical'],
          ['Signage visible',     'warning'],
          ['Clear pathways',      'critical'],
        ].map(([item, sev]) => (
          <div key={item} className="flex items-center gap-2 text-[10px] font-mono">
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${sev === 'ok' ? 'bg-neon-green' : sev === 'warning' ? 'bg-amber-warning' : 'bg-signal'}`} />
            <span className="text-zinc-400">{item}</span>
            <span className={`ml-auto ${sev === 'ok' ? 'text-neon-green' : sev === 'warning' ? 'text-amber-warning' : 'text-signal'}`}>
              {sev === 'ok' ? 'present' : sev === 'warning' ? 'unclear' : 'missing'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Hero({ t }: Props) {
  const h = t.hero
  return (
    <section id="top" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Red top bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-signal z-10" />

      {/* Crane silhouette backdrop */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <CranesSVG />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-obsidian to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative flex-1 flex items-center pt-24 pb-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left */}
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-signal mb-6 border-l-2 border-signal pl-3">
                {h.kicker}
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
                {h.title}
              </h1>
              <p className="text-base text-zinc-400 leading-relaxed mb-8 max-w-prose">
                {h.subtitle}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {[h.badge1, h.badge2, h.badge3].map((b) => (
                  <span key={b} className="inline-flex items-center gap-1.5 text-xs font-mono bg-white/5 border border-white/10 text-zinc-300 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal" />{b}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#summary"
                  className="inline-flex items-center gap-2 bg-signal text-white px-5 py-2.5 rounded-sm text-sm font-semibold hover:bg-signal-light transition-colors">
                  {h.ctaExplore}<ArrowDown size={16} />
                </a>
                <a href={REPO_URL} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-white/15 text-zinc-200 px-5 py-2.5 rounded-sm text-sm font-medium hover:border-white/30 hover:text-white transition-colors">
                  <Github size={16} />{h.ctaGithub}
                </a>
                <a href={PORTFOLIO_URL}
                  className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-signal transition-colors px-2 py-2.5">
                  <ExternalLink size={14} />{h.ctaPortfolio}
                </a>
              </div>

              <p className="mt-8 text-xs text-zinc-600 leading-relaxed max-w-prose border-l border-white/10 pl-3">
                {h.note}
              </p>
            </div>

            {/* Right: Camera feed card */}
            <div className="flex flex-col gap-4 items-center lg:items-end">
              <CameraFeedCard t={t} />
              {/* PDF alert float card */}
              <div className="glass rounded-sm px-4 py-3 flex items-center gap-3 w-full max-w-sm">
                <FileText size={16} className="text-signal shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-white truncate">report_20260627_073205.pdf</p>
                  <p className="text-[10px] font-mono text-zinc-500">ReportLab · SQLite · n8n → email</p>
                </div>
                <AlertTriangle size={14} className="text-signal shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative flex justify-center pb-8">
        <div className="flex flex-col items-center gap-2 text-zinc-600">
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </div>
      </div>
    </section>
  )
}
