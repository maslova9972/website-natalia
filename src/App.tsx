import { Booking } from './sections/Booking'
import { Hero } from './sections/Hero'
import { Services } from './sections/Services'
import { Team } from './sections/Team'
import { Testimonials } from './sections/Testimonials'
import { Button, Container } from './components/ui'

export default function App() {
  return (
    <div className="min-h-dvh bg-[color:var(--bg)] text-white">
      <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--bg)]/75 backdrop-blur">
        <Container className="py-3">
          <div className="flex items-center justify-between gap-4">
            <a href="#hero" className="font-display text-lg tracking-tight">
              Система влиятельных продаж
            </a>
            <nav className="hidden items-center gap-5 text-sm text-white/70 md:flex">
              <a className="hover:text-white" href="#services">Услуги</a>
              <a className="hover:text-white" href="#team">Команда</a>
              <a className="hover:text-white" href="#testimonials">Отзывы</a>
              <a className="hover:text-white" href="#booking">Контакт</a>
            </nav>
            <a href="#booking" className="shrink-0">
              <Button className="px-3 py-2 text-sm">Диагностика</Button>
            </a>
          </div>
        </Container>
      </header>

      <main>
        <Hero />
        <Services />
        <Team />
        <Testimonials />
        <Booking />
      </main>

      <footer className="border-t border-[color:var(--border)] py-10">
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-white/65">© {new Date().getFullYear()} Система влиятельных продаж. Все права защищены.</div>
            <div className="flex flex-wrap gap-4 text-sm text-white/60">
              <a className="hover:text-white" href="#hero">Наверх</a>
              <a className="hover:text-white" href="#booking">Контакты</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  )
}
