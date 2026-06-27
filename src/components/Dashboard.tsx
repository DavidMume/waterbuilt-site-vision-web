import { type Translations } from '../i18n/translations'

const COLOR_MAP: Record<string, { border: string; text: string; glow: string }> = {
  steel:    { border: 'border-steel/30',         text: 'text-steel-light',    glow: '#2d5a8e' },
  signal:   { border: 'border-signal/30',        text: 'text-signal',         glow: '#D71920' },
  concrete: { border: 'border-concrete/20',      text: 'text-concrete-light', glow: '#8b8c8e' },
  amber:    { border: 'border-amber-warning/30', text: 'text-amber-warning',  glow: '#f59e0b' },
  neon:     { border: 'border-neon-green/30',    text: 'text-neon-green',     glow: '#22c55e' },
  safety:   { border: 'border-safety-orange/30', text: 'text-safety-orange',  glow: '#f97316' },
}

interface Props { t: Translations }

export default function Dashboard({ t }: Props) {
  const d = t.dashboard
  return (
    <section id="dashboard" className="py-24 border-t border-white/5">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="section-kicker">{d.kicker}</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white leading-tight">{d.title}</h2>
          </div>
          <div className="glass-signal rounded-sm px-4 py-2 text-xs font-mono text-signal shrink-0">
            {d.demoNote}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {d.kpis.map((kpi) => {
            const c = COLOR_MAP[kpi.color] ?? COLOR_MAP['concrete']
            return (
              <div key={kpi.label}
                className={`glass rounded-sm p-6 border ${c.border} hover:bg-white/[0.04] transition-colors group`}>
                <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-4">{kpi.label}</p>
                <p className={`font-mono text-3xl font-bold mb-1 transition-all duration-300 group-hover:scale-105 ${c.text}`}
                  style={{ textShadow: `0 0 20px ${c.glow}40` }}>
                  {kpi.value}
                </p>
                <p className="text-[10px] font-mono text-zinc-700">{kpi.sub}</p>
              </div>
            )
          })}
        </div>

        <p className="mt-6 text-xs font-mono text-zinc-700 text-center">{d.intro}</p>
      </div>
    </section>
  )
}
