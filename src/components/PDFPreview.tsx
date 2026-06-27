import { FileText, AlertTriangle } from 'lucide-react'
import { type Translations } from '../i18n/translations'

interface Props { t: Translations }

export default function PDFPreview({ t }: Props) {
  const p = t.pdf
  const v = p.sampleValues
  const f = p.fields
  const actions = v.actions.split('\n')

  return (
    <section id="pdf" className="py-24 border-t border-white/5 bg-obsidian-50">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <p className="section-kicker">{p.kicker}</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">{p.title}</h2>
            <p className="text-sm text-zinc-500 leading-relaxed">{p.intro}</p>
          </div>

          {/* PDF mockup */}
          <div className="lg:col-span-2">
            <div className="rounded-sm overflow-hidden shadow-2xl shadow-black/60 border border-white/10"
              style={{ background: '#f8f8f6', color: '#1a1a1a' }}>

              {/* PDF header bar */}
              <div className="flex items-center gap-3 px-5 py-3 border-b border-zinc-200" style={{ background: '#1a1a1a' }}>
                <FileText size={14} className="text-white" />
                <span className="text-xs font-mono text-zinc-300">SiteGuard Vision — Audit Report</span>
                <span className="ml-auto text-[10px] font-mono text-zinc-500">PDF · ReportLab</span>
              </div>

              <div className="p-8">
                {/* Report header */}
                <div className="flex items-start justify-between mb-6 pb-6 border-b border-zinc-200">
                  <div>
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1">SiteGuard Vision</p>
                    <h3 className="font-serif text-2xl font-bold text-zinc-900 mb-1">Safety Audit Report</h3>
                    <p className="text-xs text-zinc-500">{v.date} · {v.time}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-bold text-white"
                      style={{ background: '#D71920' }}>
                      <AlertTriangle size={12} /> {v.risk}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">Overall risk</span>
                  </div>
                </div>

                {/* Metadata grid */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-6 text-xs">
                  {[
                    [f.project, v.project],
                    [f.site,    v.site],
                    [f.model,   v.model],
                    [f.provider,v.provider],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <p className="text-zinc-500 font-mono uppercase tracking-widest text-[10px] mb-0.5">{label}</p>
                      <p className="text-zinc-800 font-medium">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Immediate actions */}
                <div className="mb-6 p-4 rounded-sm border-l-4" style={{ background: '#fff5f5', borderColor: '#D71920' }}>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3">{f.actions}</p>
                  {actions.map((a) => (
                    <p key={a} className="text-xs text-zinc-700 leading-relaxed mb-1">{a}</p>
                  ))}
                </div>

                {/* Mini checklist table */}
                <div className="mb-6">
                  <table className="w-full text-[10px]">
                    <thead>
                      <tr className="border-b border-zinc-200">
                        <th className="text-left font-mono text-zinc-500 uppercase tracking-widest pb-2">Item</th>
                        <th className="text-center font-mono text-zinc-500 uppercase tracking-widest pb-2">Status</th>
                        <th className="text-center font-mono text-zinc-500 uppercase tracking-widest pb-2">Severity</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {[
                        ['Temporary fencing',  'present', 'ok'],
                        ['Access control',     'missing', 'critical'],
                        ['Public walkway',     'missing', 'critical'],
                        ['PPE visible',        'present', 'ok'],
                        ['Clear pathways',     'missing', 'critical'],
                        ['Signage',            'unclear', 'warning'],
                      ].map(([item, st, sv]) => (
                        <tr key={item}>
                          <td className="py-1.5 text-zinc-700">{item}</td>
                          <td className="py-1.5 text-center font-mono" style={{
                            color: st === 'present' ? '#16a34a' : st === 'missing' ? '#D71920' : '#d97706'
                          }}>{st}</td>
                          <td className="py-1.5 text-center font-mono font-semibold" style={{
                            color: sv === 'ok' ? '#16a34a' : sv === 'critical' ? '#D71920' : '#d97706'
                          }}>{sv.toUpperCase()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Disclaimer */}
                <div className="p-3 rounded-sm bg-zinc-100 border border-zinc-200">
                  <p className="text-[9px] font-mono text-zinc-500 leading-relaxed">{f.disclaimer}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
