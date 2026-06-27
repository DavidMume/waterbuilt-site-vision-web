import { type Translations } from '../i18n/translations'

const COLOR_MAP: Record<string, { dot: string; text: string; border: string; bg: string }> = {
  steel:    { dot: 'bg-steel-light',     text: 'text-steel-light',     border: 'border-steel/40',         bg: 'bg-steel-muted'    },
  signal:   { dot: 'bg-signal',          text: 'text-signal',          border: 'border-signal/40',         bg: 'bg-signal-muted'   },
  amber:    { dot: 'bg-amber-warning',   text: 'text-amber-warning',   border: 'border-amber-warning/40',  bg: 'bg-amber-muted'    },
  concrete: { dot: 'bg-concrete-light',  text: 'text-concrete-light',  border: 'border-concrete/30',       bg: 'bg-white/[0.03]'   },
  neon:     { dot: 'bg-neon-green',      text: 'text-neon-green',      border: 'border-neon-green/40',     bg: 'bg-neon-muted'     },
}

interface Props { t: Translations }

export default function Pipeline({ t }: Props) {
  const p = t.pipeline
  return (
    <section id="pipeline" className="py-24 border-t border-white/5 bg-obsidian-50">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="section-kicker">{p.kicker}</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white leading-tight">{p.title}</h2>
        </div>

        {/* Horizontal pipeline (desktop) */}
        <div className="hidden lg:flex items-stretch gap-0">
          {p.nodes.map((node, i) => {
            const c = COLOR_MAP[node.color] ?? COLOR_MAP['concrete']
            const isLast = i === p.nodes.length - 1
            return (
              <div key={node.id} className="flex items-center flex-1">
                <div className={`flex-1 flex flex-col items-center text-center p-5 glass rounded-sm border ${c.border} ${c.bg} min-h-[120px] justify-center hover:scale-[1.03] transition-transform duration-200`}>
                  <div className={`w-2 h-2 rounded-full ${c.dot} mb-3`} />
                  <p className={`text-xs font-semibold mb-1 ${c.text}`}>{node.label}</p>
                  <p className="text-[10px] font-mono text-zinc-600 leading-snug">{node.sub}</p>
                </div>
                {!isLast && (
                  <div className="w-8 flex items-center justify-center shrink-0">
                    <svg width="32" height="12" viewBox="0 0 32 12" aria-hidden="true">
                      <path d="M0 6 H28 M22 1 L30 6 L22 11" stroke="rgba(215,25,32,0.4)" strokeWidth="1.5" fill="none" className="pipe-animate" />
                    </svg>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Vertical pipeline (mobile) */}
        <div className="lg:hidden flex flex-col gap-0">
          {p.nodes.map((node, i) => {
            const c = COLOR_MAP[node.color] ?? COLOR_MAP['concrete']
            const isLast = i === p.nodes.length - 1
            return (
              <div key={node.id} className="flex flex-col items-center">
                <div className={`w-full flex gap-4 items-center p-4 glass border ${c.border} ${c.bg} rounded-sm`}>
                  <div className={`w-2 h-2 rounded-full ${c.dot} shrink-0`} />
                  <div>
                    <p className={`text-xs font-semibold ${c.text}`}>{node.label}</p>
                    <p className="text-[10px] font-mono text-zinc-600">{node.sub}</p>
                  </div>
                </div>
                {!isLast && (
                  <div className="flex justify-center py-1">
                    <svg width="12" height="24" viewBox="0 0 12 24" aria-hidden="true">
                      <path d="M6 0 V20 M1 14 L6 22 L11 14" stroke="rgba(215,25,32,0.4)" strokeWidth="1.5" fill="none" />
                    </svg>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
