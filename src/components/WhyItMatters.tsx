import { type Translations } from '../i18n/translations'

interface Props { t: Translations }

export default function WhyItMatters({ t }: Props) {
  const w = t.why
  return (
    <section id="why" className="py-24 border-t border-white/5 bg-obsidian-50">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <p className="section-kicker">{w.kicker}</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white leading-tight">{w.title}</h2>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {w.items.map((item, i) => (
              <article key={item.label} className="flex gap-4">
                <div className="font-mono text-xs text-signal shrink-0 pt-0.5">{String(i + 1).padStart(2, '0')}</div>
                <div className="border-t border-white/5 pt-4 flex-1">
                  <h3 className="text-sm font-semibold text-white mb-2">{item.label}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
