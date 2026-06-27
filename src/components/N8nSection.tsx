import { AlertTriangle, Mail, Phone, Users, Hash, Zap, ArrowRight } from 'lucide-react'
import { type Translations } from '../i18n/translations'

const CHANNEL_ICONS: Record<string, typeof Mail> = { mail: Mail, phone: Phone, users: Users, hash: Hash, zap: Zap }

interface Props { t: Translations }

export default function N8nSection({ t }: Props) {
  const n = t.n8n
  return (
    <section id="n8n" className="py-24 border-t border-white/5">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="section-kicker">{n.kicker}</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">{n.title}</h2>
          <p className="text-sm text-zinc-500 max-w-prose leading-relaxed">{n.intro}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: flow diagram */}
          <div className="flex flex-col gap-0">
            {/* Trigger */}
            <div className="glass-signal rounded-sm p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-sm bg-signal/20 border border-signal/40 flex items-center justify-center">
                <AlertTriangle size={18} className="text-signal" />
              </div>
              <div>
                <p className="text-xs font-mono text-signal uppercase tracking-widest">{n.trigger}</p>
                <p className="text-[10px] font-mono text-zinc-500 mt-0.5">risk_level ≥ ALERT_THRESHOLD (.env)</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center py-2">
              <div className="flex flex-col items-center gap-0.5">
                {[0,1,2].map((i) => <div key={i} className="w-px h-1.5 bg-signal/30" style={{ opacity: 1 - i * 0.25 }} />)}
                <ArrowRight size={14} className="text-signal rotate-90" />
              </div>
            </div>

            {/* n8n node */}
            <div className="glass rounded-sm p-5 flex items-center gap-4 border border-neon-green/20">
              <div className="w-10 h-10 rounded-sm bg-neon-muted border border-neon-green/30 flex items-center justify-center">
                <Zap size={18} className="text-neon-green" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">n8n webhook</p>
                <p className="text-[10px] font-mono text-zinc-500">POST → N8N_WEBHOOK_URL</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center py-2">
              <div className="flex flex-col items-center gap-0.5">
                {[0,1,2].map((i) => <div key={i} className="w-px h-1.5 bg-neon-green/20" style={{ opacity: 1 - i * 0.25 }} />)}
                <ArrowRight size={14} className="text-neon-green rotate-90" />
              </div>
            </div>

            {/* Channels */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {n.channels.map((ch) => {
                const Icon = CHANNEL_ICONS[ch.icon] ?? Zap
                return (
                  <div key={ch.label} className="glass rounded-sm p-3 text-center border border-white/5 hover:border-neon-green/20 transition-colors">
                    <Icon size={16} className="mx-auto mb-2 text-neon-green" />
                    <p className="text-[10px] font-semibold text-zinc-300">{ch.label}</p>
                    <p className="text-[9px] font-mono text-zinc-600 leading-tight">{ch.sub}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: payload + advantage */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-2">Webhook payload</p>
              <pre className="glass rounded-sm p-5 text-[11px] font-mono text-neon-green leading-relaxed overflow-x-auto border border-neon-green/10">
                {n.payload}
              </pre>
            </div>
            <div className="glass rounded-sm p-5 border border-white/5">
              <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-3">Design rationale</p>
              <p className="text-sm text-zinc-400 leading-relaxed">{n.advantage}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
