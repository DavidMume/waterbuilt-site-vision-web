import { CheckCircle, XCircle, HelpCircle, MinusCircle } from 'lucide-react'
import { type Translations } from '../i18n/translations'

type Status   = 'present' | 'missing' | 'unclear' | 'na'
type Severity = 'ok' | 'warning' | 'critical'

const STATUS_CFG: Record<Status, { icon: typeof CheckCircle; cls: string }> = {
  present: { icon: CheckCircle,  cls: 'text-neon-green' },
  missing: { icon: XCircle,      cls: 'text-signal'     },
  unclear: { icon: HelpCircle,   cls: 'text-amber-warning' },
  na:      { icon: MinusCircle,  cls: 'text-zinc-600'   },
}

const SEV_BADGE: Record<Severity, string> = {
  ok:       'text-neon-green border-neon-green/30 bg-neon-muted',
  warning:  'text-amber-warning border-amber-warning/30 bg-amber-muted',
  critical: 'text-signal border-signal/30 bg-signal-muted',
}

interface Props { t: Translations }

export default function Checklist({ t }: Props) {
  const c = t.checklist
  return (
    <section id="checklist" className="py-24 border-t border-white/5">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="section-kicker">{c.kicker}</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">{c.title}</h2>
          <p className="text-sm text-zinc-500 max-w-prose">{c.intro}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {c.categories.map((cat) => (
            <div key={cat.name} className="glass rounded-sm overflow-hidden">
              <div className="px-5 py-3 border-b border-white/5 bg-white/[0.03]">
                <h3 className="text-xs font-mono uppercase tracking-widest text-signal">{cat.name}</h3>
              </div>
              <div className="divide-y divide-white/5">
                {cat.items.map((item) => {
                  const sCfg = STATUS_CFG[item.status as Status]
                  const Icon = sCfg.icon
                  return (
                    <div key={item.label} className="flex items-center gap-3 px-5 py-3 hover:bg-white/[0.02] transition-colors">
                      <Icon size={15} className={`${sCfg.cls} shrink-0`} />
                      <span className="text-xs text-zinc-300 flex-1 leading-snug">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full border ${SEV_BADGE[item.severity as Severity]}`}>
                          {c.severityLabels[item.severity as Severity]}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-600 w-16 text-right">
                          {c.statusLabels[item.status as Status]}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap gap-4 text-[10px] font-mono text-zinc-600">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-neon-green" />present · ok</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-warning" />unclear · warning</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-signal" />missing · critical</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-zinc-600" />n/a</span>
          <span className="ml-auto text-zinc-700">Demo data — sample values only</span>
        </div>
      </div>
    </section>
  )
}
