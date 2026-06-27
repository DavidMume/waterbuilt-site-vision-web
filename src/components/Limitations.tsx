import { AlertTriangle } from 'lucide-react'
import { type Translations } from '../i18n/translations'

interface Props { t: Translations }

export default function Limitations({ t }: Props) {
  const l = t.limitations
  return (
    <section id="limitations" className="py-24 border-t border-white/5">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 items-start mb-10">
          <AlertTriangle size={22} className="text-amber-warning shrink-0 mt-0.5" />
          <div>
            <p className="section-kicker">{l.kicker}</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white leading-tight">{l.title}</h2>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {l.items.map((item) => (
            <article key={item.label}
              className="glass rounded-sm p-5 border border-amber-warning/10 hover:border-amber-warning/25 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-amber-warning" />
                <h3 className="text-xs font-semibold text-amber-warning uppercase tracking-wide">{item.label}</h3>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
