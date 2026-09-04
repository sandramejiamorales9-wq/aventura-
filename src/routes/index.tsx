import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Compass, Leaf, Backpack, BookOpen, CloudRain, Sun, Moon, ArrowRight, Lock, Map, LocateFixed, ZoomIn, ZoomOut, Sparkles, ShieldCheck } from 'lucide-react'
import { toast } from 'sonner'

const mapPoints = [
  { id: 'camp', label: 'Campamento base', type: 'Inicio', x: '18%', y: '66%', chapter: 0, description: 'Tu refugio entre helechos gigantes. Aquí comienza cada expedición.' },
  { id: 'yara', label: 'Ruinas de Yara', type: 'Reliquia', x: '53%', y: '34%', chapter: 1, description: 'Un templo milenario cubierto por raíces. Sus símbolos cambian con la luz.' },
  { id: 'river', label: 'Río que recuerda', type: 'Agua', x: '78%', y: '63%', chapter: 2, description: 'La corriente azul guarda ecos de todos los viajeros que la han cruzado.' },
  { id: 'observatory', label: 'Mirador del jaguar', type: 'Secreto', x: '70%', y: '16%', chapter: 1, description: 'Una plataforma perdida sobre el dosel. Nadie sabe quién la construyó.' },
]

const chapters = [
  { title: 'El Umbral Verde', location: 'Campamento base', text: 'La selva te observa desde el primer paso. Reúne tu equipo y sigue las marcas de la expedición perdida.', icon: Compass, tone: 'from-emerald-950 via-emerald-900 to-lime-950', state: 'DÍA 01', image: 'https://storage.googleapis.com/blink-core-storage/projects/aventura-quest-game-l9mek9up/ai-images/1788295269267-0d61a1f5-abf2-406f-88f7-07490ecf4334.png' },
  { title: 'Ruinas de Yara', location: 'Templo cubierto', text: 'Un antiguo mapa habla de una cámara sellada bajo las raíces. Cada símbolo es una decisión.', icon: Lock, tone: 'from-amber-950 via-orange-950 to-emerald-950', state: 'DÍA 06', image: 'https://storage.googleapis.com/blink-core-storage/projects/aventura-quest-game-l9mek9up/ai-images/1788295269269-96ec2332-bdbf-4915-963f-4bb3d3072b7e.png' },
  { title: 'El Río que Recuerda', location: 'Cuenca del Jaguar', text: 'Cuando llega la estación de lluvias, el río cambia el camino y revela lo que estaba oculto.', icon: CloudRain, tone: 'from-cyan-950 via-teal-950 to-emerald-950', state: 'LLUVIA', image: 'https://storage.googleapis.com/blink-core-storage/projects/aventura-quest-game-l9mek9up/ai-images/1788295269270-2b0947ab-360e-4558-8c5f-55a6c893b6b6.png' },
]

const weather = [
  { label: 'Seca', icon: Sun, detail: 'Senderos despejados', color: 'text-primary' },
  { label: 'Lluvia', icon: CloudRain, detail: 'El río crece', color: 'text-sky-300' },
  { label: 'Noche', icon: Moon, detail: 'Algo se mueve', color: 'text-violet-300' },
]

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Aventura Quest · La selva te está llamando' },
      { name: 'description', content: 'Explora una selva misteriosa, descubre ruinas antiguas y escribe tu propia historia en Aventura Quest.' },
    ],
  }),
  component: Home,
})

function Home() {
  const [activeChapter, setActiveChapter] = useState(0)
  const [weatherIndex, setWeatherIndex] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const progress = Math.min(2, Math.floor(window.scrollY / Math.max(1, window.innerHeight * 0.55)))
      setActiveChapter(progress)
      setWeatherIndex(progress % weather.length)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const beginAdventure = () => {
    setStarted(true)
    toast.success('Tu diario está listo. La expedición comienza.', { description: 'Explora las tres regiones para descubrir la señal perdida.' })
    document.getElementById('expeditions')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-dvh overflow-hidden bg-background text-foreground">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-10">
          <a href="#top" className="flex items-center gap-3 text-sm font-bold tracking-[0.16em] text-primary"><span className="grid size-8 place-items-center rounded-full border border-primary/50"><Compass className="size-4" /></span> AVENTURA QUEST</a>
          <div className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground md:flex"><a href="#expeditions" className="transition-colors hover:text-primary">Expediciones</a><a href="#journal" className="transition-colors hover:text-primary">Diario</a></div>
          <button onClick={beginAdventure} className="rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105 active:scale-95">Jugar ahora</button>
        </div>
      </nav>

      <section id="top" className="relative isolate flex min-h-[760px] items-end overflow-hidden px-5 pb-20 pt-28 lg:min-h-[860px] lg:px-10 lg:pb-28">
        <img src="https://storage.googleapis.com/blink-core-storage/projects/aventura-quest-game-l9mek9up/ai-images/1788295269267-0d61a1f5-abf2-406f-88f7-07490ecf4334.png" alt="Selva amazónica cubierta de niebla al amanecer" className="absolute inset-0 -z-20 size-full object-cover object-center opacity-65" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,oklch(0.08_0.03_145_/_0.94)_0%,oklch(0.1_0.03_145_/_0.7)_42%,oklch(0.1_0.025_145_/_0.18)_100%),linear-gradient(0deg,oklch(0.08_0.03_145_/_0.92),transparent_58%)]" />
        <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(oklch(0.8_0.1_83_/_0.08)_1px,transparent_1px),linear-gradient(90deg,oklch(0.8_0.1_83_/_0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute -right-28 top-28 -z-10 size-[480px] rounded-full border border-primary/20 bg-primary/5 blur-[1px] lg:size-[650px]" />
        <div className="mx-auto grid w-full max-w-7xl items-end gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div className="animate-rise max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-primary"><span className="h-px w-10 bg-primary" /> Una aventura de exploración narrativa</p>
            <h1 className="font-serif text-[clamp(4rem,11vw,9.5rem)] leading-[0.86] tracking-[-0.06em] text-foreground">La selva<br /><em className="text-primary">te llama.</em></h1>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">Un mundo abierto de ruinas olvidadas, senderos que cambian con el clima y secretos que solo aparecen cuando te atreves a mirar más de cerca.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4"><button onClick={beginAdventure} className="group flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/10 transition-all hover:-translate-y-1 hover:shadow-primary/25 active:translate-y-0">Comenzar expedición <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></button><span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Sin prisa · Sin caminos correctos</span></div>
          </div>
          <div className="relative hidden min-h-[390px] lg:block">
            <div className="absolute right-8 top-3 h-80 w-56 rotate-6 rounded-[45%_45%_12%_12%] border border-primary/30 bg-gradient-to-br from-emerald-700/40 via-emerald-950/70 to-background shadow-2xl shadow-emerald-950/60" />
            <div className="absolute right-28 top-16 h-80 w-56 -rotate-12 rounded-[45%_45%_12%_12%] border border-lime-200/20 bg-gradient-to-br from-lime-500/20 via-emerald-950/80 to-background" />
            <div className="absolute bottom-4 right-0 rounded-2xl border border-border bg-card/90 p-5 backdrop-blur-sm"><p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Estado del mundo</p><div className="mt-3 flex items-center gap-3"><span className="size-2 animate-pulse rounded-full bg-primary" /><span className="text-sm font-semibold">La estación está cambiando</span></div></div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-card/40 px-5 py-6 lg:px-10"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5"><p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">El mundo sigue vivo mientras exploras</p><div className="flex gap-2">{weather.map((item, index) => { const Icon = item.icon; return <button key={item.label} onClick={() => setWeatherIndex(index)} className={`flex items-center gap-2 rounded-full border px-3 py-2 text-xs transition-all hover:border-primary/60 ${weatherIndex === index ? 'border-primary/70 bg-primary/10 text-foreground' : 'border-border text-muted-foreground'}`}><Icon className={`size-3.5 ${item.color}`} /> {item.label}</button> })}</div><p className="flex items-center gap-2 text-xs text-muted-foreground"><span className="size-2 rounded-full bg-primary" /> {weather[weatherIndex].detail}</p></div></section>

      <section id="expeditions" className="px-5 py-24 lg:px-10 lg:py-36"><div className="mx-auto max-w-7xl"><div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-primary">/ Mapa de expediciones</p><h2 className="font-serif text-4xl tracking-tight lg:text-6xl">Cada sendero guarda<br /><em className="text-muted-foreground">una versión de ti.</em></h2></div><p className="max-w-xs text-sm leading-relaxed text-muted-foreground">Desplázate para cambiar la estación. Haz clic en una región para abrir sus páginas en tu diario.</p></div><div className="grid gap-5 lg:grid-cols-3">{chapters.map((chapter, index) => { const Icon = chapter.icon; const selected = activeChapter === index; return <motion.button key={chapter.title} onClick={() => { setActiveChapter(index); toast.info(`${chapter.title} añadida a tu ruta`) }} animate={{ y: selected ? -10 : 0 }} transition={{ duration: 0.35 }} className={`group relative min-h-[390px] overflow-hidden rounded-2xl border text-left transition-all duration-300 ${selected ? 'border-primary/70 shadow-lg shadow-primary/10' : 'border-border hover:-translate-y-1 hover:border-primary/40'}`}><img src={chapter.image} alt={`${chapter.title}, paisaje de aventura`} className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className={`absolute inset-0 bg-gradient-to-br ${chapter.tone} opacity-35 mix-blend-multiply`} /><div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,oklch(0.8_0.12_83_/_0.18),transparent_25%),linear-gradient(transparent,oklch(0.05_0.03_145_/_0.94))]" /><div className="relative flex h-full min-h-[390px] flex-col justify-between p-6"><div className="flex items-start justify-between"><span className="rounded-full border border-primary/40 bg-background/30 px-3 py-1 font-mono text-[10px] tracking-widest text-primary">{chapter.state}</span><Icon className="size-5 text-primary transition-transform group-hover:rotate-12" /></div><div><p className="mb-2 text-xs uppercase tracking-[0.16em] text-primary/80">{chapter.location}</p><h3 className="font-serif text-3xl text-foreground">{chapter.title}</h3><p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{chapter.text}</p><span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">Abrir región <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" /></span></div></div></motion.button> })}</div></div></section>

      <section id="journal" className="relative border-t border-border bg-secondary/30 px-5 py-24 lg:px-10 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center"><div><p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-primary">/ El diario del explorador</p><h2 className="font-serif text-4xl leading-tight lg:text-6xl">No coleccionas<br /><em className="text-primary">objetos.</em><br />Coleccionas señales.</h2><p className="mt-7 max-w-md text-muted-foreground">Tu inventario cuenta lo que has visto. Una pluma, una coordenada, una frase a medias. Lo pequeño puede abrir la puerta más grande.</p><button onClick={() => toast('El diario se desbloquea al encontrar tu primera reliquia')} className="mt-8 flex items-center gap-3 text-sm font-bold text-primary transition-transform hover:translate-x-1">Ver cómo funciona <BookOpen className="size-4" /></button></div><div className="grid grid-cols-2 gap-4"><div className="col-span-2 rounded-2xl border border-border bg-card p-6 shadow-md"><div className="flex items-center justify-between"><Backpack className="size-6 text-primary" /><span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Inventario · 03/12</span></div><div className="mt-8 flex gap-3"><div className="grid size-16 place-items-center rounded-xl border border-primary/30 bg-primary/10"><Leaf className="size-7 text-primary" /></div><div><p className="font-serif text-xl">Hoja de Yara</p><p className="mt-1 text-xs text-muted-foreground">Se mueve incluso cuando no hay viento.</p></div></div></div><div className="rounded-2xl border border-border bg-card p-5"><Sparkles className="size-5 text-primary" /><p className="mt-10 font-serif text-2xl">17</p><p className="mt-1 text-xs text-muted-foreground">señales encontradas</p></div><div className="rounded-2xl border border-border bg-card p-5"><ShieldCheck className="size-5 text-primary" /><p className="mt-10 font-serif text-2xl">01</p><p className="mt-1 text-xs text-muted-foreground">decisión pendiente</p></div></div></div></section>

      <footer className="border-t border-border px-5 py-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs text-muted-foreground md:flex-row md:items-center"><p className="font-mono uppercase tracking-widest">Aventura Quest · Temporada uno</p><p>{started ? 'Expedición activa · Guarda tu progreso en el diario' : 'Una historia que se descubre caminando'}</p></div></footer>
    </main>
  )
}
