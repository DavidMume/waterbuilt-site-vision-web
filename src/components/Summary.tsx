import { Camera, Brain, ClipboardCheck, AlertTriangle, FileText, Database, Zap } from 'lucide-react'
import { type Translations } from '../i18n/translations'

const STEP_ICONS = [Camera, Brain, ClipboardCheck, AlertTriangle, FileText, Database, Zap]
const STEP_COLORS = ['steel', 'signal', 'concrete', 'amber', 'concrete', 'concrete', 'neon']
const COLOR_MAP: Record<string, string> = {
  steel:    'text-steel-light border-steel/40 bg-steel-muted',
  signal:   'text-signal border-signal/40 bg-signal-muted',
  concrete: 'text-concrete-light border-concrete/30 bg-white/[0.03]',
  amber:    'text-amber-warning border-amber-warning/40 bg-amber-muted',
  neon:     'text-neon-green border-neon-green/40 bg-neon-muted',
}

interface Props { t: Translations }

export default function Summary({ t }: Props) {
  const s = t.summary
  return (
    <section id="summary" className="py-24 border-t border-white/5">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
          <div>
            <p className="section-kicker">{s.kicker}</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white leading-tight text-balance">
              {s.title}
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-base text-zinc-400 leading-relaxed max-w-prose">
              {s.body}
            </p>
          </div>
        </div>

        {/* 7-step pipeline summary */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {s.steps.map((step, i) => {
            const Icon = STEP_ICONS[i]
            const colorKey = STEP_COLORS[i]
            const cls = COLOR_MAP[colorKey]
            return (
              <article key={step.label}
                className={`glass rounded-sm p-5 border hover:scale-[1.02] transition-transform duration-200 ${cls.split(' ').slice(1).join(' ')}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-8 h-8 rounded-sm border flex items-center justify-center ${cls}`}>
                    <Icon size={15} />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className={`text-sm font-semibold mb-2 ${cls.split(' ')[0]}`}>{step.label}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{step.detail}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
