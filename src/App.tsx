import { useState, useEffect } from 'react'
import { translations, type Lang } from './i18n/translations'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Summary from './components/Summary'
import Pipeline from './components/Pipeline'
import Checklist from './components/Checklist'
import VisionDemo from './components/VisionDemo'
import Dashboard from './components/Dashboard'
import PDFPreview from './components/PDFPreview'
import N8nSection from './components/N8nSection'
import Architecture from './components/Architecture'
import TechStack from './components/TechStack'
import WhyItMatters from './components/WhyItMatters'
import Limitations from './components/Limitations'
import Author from './components/Author'
import Footer from './components/Footer'

const STORAGE_KEY = 'wbsv-lang'

function getInitialLang(): Lang {
  try {
    const s = localStorage.getItem(STORAGE_KEY) as Lang | null
    if (s === 'es' || s === 'en') return s
  } catch (_) {}
  return 'en'
}

export default function App() {
  const [lang, setLang] = useState<Lang>(getInitialLang)

  const setLanguage = (l: Lang) => {
    setLang(l)
    try { localStorage.setItem(STORAGE_KEY, l) } catch (_) {}
  }

  useEffect(() => { document.documentElement.lang = lang }, [lang])

  const t = translations[lang]

  return (
    <div className="min-h-screen bg-obsidian font-sans text-zinc-300">
      <Navbar t={t} lang={lang} setLanguage={setLanguage} />
      <main>
        <Hero      t={t} />
        <Summary   t={t} />
        <Pipeline  t={t} />
        <Checklist t={t} />
        <VisionDemo t={t} />
        <Dashboard  t={t} />
        <PDFPreview t={t} />
        <N8nSection t={t} />
        <Architecture t={t} />
        <TechStack    t={t} />
        <WhyItMatters t={t} />
        <Limitations  t={t} />
        <Author  t={t} />
      </main>
      <Footer t={t} />
    </div>
  )
}
