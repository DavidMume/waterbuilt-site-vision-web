import { type Translations } from '../i18n/translations'

const COLOR_MAP: Record<string, { border: string; text: string }> = {
  steel:    { border: 'border-steel/30',         text: 'text-steel-light'    },
  signal:   { border: 'border-signal/30',        text: 'text-signal'         },
  concrete: { border: 'border-concrete/20',      text: 'text-concrete-light' },
  amber:    { border: 'border-amber-warning/30', text: 'text-amber-warning'  },
  neon:     { border: 'border-neon-green/30',    text: 'text-neon-green'     },
  safety:   { border: 'border-safety-orange/30', text: 'text-safety-orange'  },
}

interface Props { t: Translations }

export default function TechStack({ t }: Props) {
  const s = t.stack
  return (
    <section id="stack" className="py-24 border-t border-white/5">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="section-kicker">{s.kicker}</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white leading-tight">{s.title}</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {s.items.map((item) => {
            const c = COLOR_MAP[item.color] ?? COLOR_MAP['concrete']
            return (
              <div key={item.name} className={`glass rounded-sm p-5 border ${c.border} hover:bg-white/[0.04] hover:scale-[1.03] transition-all duration-200 group`}>
                <p className={`text-sm font-semibold mb-1 ${c.text} group-hover:brightness-110 transition-all`}>{item.name}</p>
                <p className="text-[10px] font-mono text-zinc-600 leading-snug">{item.role}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
