import { useEffect, useRef, useState } from 'react'
import { type Translations } from '../i18n/translations'

type Severity = 'ok' | 'warning' | 'critical'

const SEV: Record<Severity, { border: string; label: string }> = {
  ok:       { border: '#22c55e', label: 'text-neon-green'   },
  warning:  { border: '#f59e0b', label: 'text-amber-warning' },
  critical: { border: '#D71920', label: 'text-signal'        },
}

interface Props { t: Translations }

export default function VisionDemo({ t }: Props) {
  const v = t.vision
  const [scanY, setScanY] = useState(0)
  const [activeBox, setActiveBox] = useState<number | null>(null)
  const rafRef = useRef<number>(0)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts
      const elapsed = (ts - startRef.current) % 3000
      setScanY(Math.round((elapsed / 3000) * 100))
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setActiveBox(i % v.detections.length)
      i++
    }, 1600)
    return () => clearInterval(timer)
  }, [v.detections.length])

  return (
    <section id="vision" className="py-24 border-t border-white/5 bg-obsidian-50">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <p className="section-kicker">{v.kicker}</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">{v.title}</h2>
            <p className="text-sm text-zinc-500 leading-relaxed mb-6">{v.intro}</p>
            <div className="glass-signal rounded-sm px-4 py-3">
              <p className="text-xs font-mono text-signal">{v.demoLabel}</p>
            </div>

            {/* Detection list */}
            <div className="mt-6 space-y-2">
              {v.detections.map((d, i) => {
                const s = SEV[d.severity as Severity]
                return (
                  <div key={d.label}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-sm border transition-all duration-300 cursor-default ${
                      activeBox === i
                        ? 'bg-white/5 border-white/15 shadow-sm'
                        : 'border-transparent bg-transparent'
                    }`}
                    onMouseEnter={() => setActiveBox(i)}
                    onMouseLeave={() => setActiveBox(null)}>
                    <div className="w-2 h-2 rounded-sm border" style={{ borderColor: s.border, background: `${s.border}30` }} />
                    <span className={`text-xs font-mono ${s.label}`}>{d.label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Camera frame */}
          <div className="lg:col-span-2">
            <div className="glass rounded-sm overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-white/[0.03]">
                <div className="w-2 h-2 rounded-full bg-signal animate-pulse-slow" />
                <span className="text-xs font-mono text-zinc-400">CAM-01 · FRAME 0047 · 07:32:05</span>
                <span className="ml-auto text-[10px] font-mono text-zinc-600">DEMO</span>
              </div>

              <div className="relative bg-obsidian-100 grid-bg" style={{ paddingTop: '56.25%' }}>
                <div className="absolute inset-0">
                  {/* Construction scene */}
                  <div className="absolute inset-0 flex items-end justify-center pb-4">
                    {/* Ground */}
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-obsidian-200" />
                    {/* Vertical struts */}
                    {[15,25,45,55,70,80].map((x) => (
                      <div key={x} className="absolute bottom-12 w-px bg-zinc-700" style={{ left: `${x}%`, height: '55%' }} />
                    ))}
                    {/* Horizontal bars */}
                    {[30,50,70].map((y) => (
                      <div key={y} className="absolute left-10 right-10 h-px bg-zinc-800" style={{ top: `${y}%` }} />
                    ))}
                    {/* Figure silhouette */}
                    <div className="absolute" style={{ left: '18%', top: '28%', width: '6%', paddingTop: '12%' }}>
                      <div className="absolute inset-0 bg-zinc-700 rounded-t-full opacity-60" />
                    </div>
                  </div>

                  {/* Detection boxes */}
                  {v.detections.map((d, i) => {
                    const s = SEV[d.severity as Severity]
                    const isActive = activeBox === i
                    return (
                      <div
                        key={d.label}
                        className="absolute transition-all duration-300"
                        style={{
                          left: `${d.x}%`, top: `${d.y}%`,
                          width: `${d.w}%`, height: `${d.h}%`,
                          border: `1.5px solid ${s.border}`,
                          opacity: isActive ? 1 : 0.6,
                          boxShadow: isActive ? `0 0 12px ${s.border}40` : 'none',
                        }}>
                        <span
                          className={`absolute -top-5 left-0 text-[9px] font-mono px-1 py-0.5 ${s.label}`}
                          style={{ background: '#0a0a0b' }}>
                          {d.label}
                        </span>
                      </div>
                    )
                  })}

                  {/* Scan line */}
                  <div className="absolute left-0 right-0 h-px pointer-events-none"
                    style={{ top: `${scanY}%`, background: 'linear-gradient(90deg,transparent,rgba(215,25,32,0.4),transparent)' }} />

                  {/* Crosshairs */}
                  {(['top-2 left-2','top-2 right-2','bottom-2 left-2','bottom-2 right-2']).map((pos) => (
                    <div key={pos} className={`absolute w-5 h-5 ${pos}`}
                      style={{ border: '1px solid rgba(215,25,32,0.25)', clipPath: pos.includes('right') && pos.includes('bottom') ? 'polygon(60% 0,100% 0,100% 100%,0 100%,0 60%)' : pos.includes('right') ? 'polygon(0 0,100% 0,100% 100%,60% 100%,60% 40%)' : pos.includes('bottom') ? 'polygon(0 0,40% 0,40% 60%,100% 60%,100% 100%,0 100%)' : 'polygon(0 0,40% 0,40% 40%,100% 40%,100% 60%,0 60%)' }} />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-2.5 border-t border-white/5">
                <span className="text-[10px] font-mono text-zinc-600">claude-sonnet-4-5</span>
                <span className="text-[10px] font-mono text-zinc-700 ml-auto">Demo frame — not real model output</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
