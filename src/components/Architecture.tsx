import { Camera, Brain, ClipboardCheck, Database, Globe, Zap } from 'lucide-react'
import { type Translations } from '../i18n/translations'

const LAYER_ICONS = [Camera, Brain, ClipboardCheck, Database, Globe]
const LAYER_COLORS = [
  { border: 'border-steel/30',         bg: 'bg-steel-muted',       text: 'text-steel-light'    },
  { border: 'border-signal/30',        bg: 'bg-signal-muted',      text: 'text-signal'         },
  { border: 'border-amber-warning/30', bg: 'bg-amber-muted',       text: 'text-amber-warning'  },
  { border: 'border-concrete/20',      bg: 'bg-white/[0.03]',      text: 'text-concrete-light' },
  { border: 'border-neon-green/30',    bg: 'bg-neon-muted',        text: 'text-neon-green'     },
]

interface Props { t: Translations }

export default function Architecture({ t }: Props) {
  const a = t.architecture
  return (
    <section id="architecture" className="py-24 border-t border-white/5 bg-obsidian-50">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <p className="section-kicker">{a.kicker}</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">{a.title}</h2>
            <p className="text-sm text-zinc-500 leading-relaxed mb-6">{a.intro}</p>
            <p className="text-xs text-zinc-600 leading-relaxed border-l border-signal/30 pl-3">{a.note}</p>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-3">
            {a.layers.map((layer, i) => {
              const Icon = LAYER_ICONS[i] ?? Zap
              const c = LAYER_COLORS[i] ?? LAYER_COLORS[0]
              return (
                <div key={layer.label} className={`glass rounded-sm border ${c.border} p-5 flex gap-4 items-start hover:bg-white/[0.03] transition-colors`}>
                  <div className={`w-9 h-9 rounded-sm border ${c.border} ${c.bg} flex items-center justify-center shrink-0`}>
                    <Icon size={16} className={c.text} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-mono text-zinc-600">{String(i + 1).padStart(2, '0')}</span>
                      <h3 className={`text-xs font-semibold uppercase tracking-wide ${c.text}`}>{layer.label}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {layer.items.map((item) => (
                        <span key={item} className="text-[10px] font-mono text-zinc-500 bg-white/[0.04] border border-white/5 px-2 py-0.5 rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
