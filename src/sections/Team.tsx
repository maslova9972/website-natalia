import { Card, Container, Section } from '../components/ui'

const team = [
  {
    role: 'Стратег позиционирования',
    headline: 'Собирает сильный личный бренд без инфо-штампов',
    bio: 'Помогает сформулировать экспертность так, чтобы вас уважали коллеги и понимали клиенты в Германии.',
  },
  {
    role: 'Архитектор продаж',
    headline: 'Создает 30-секундный Pitch и систему касаний',
    bio: 'Переводит опыт в конкретные формулировки, которые приводят к диалогу, заявкам и повторным рекомендациям.',
  },
  {
    role: 'Куратор внедрения',
    headline: 'Сопровождает до первых стабильных лидов',
    bio: 'Дает поддержку после стратегии: помогает внедрять систему в реальных встречах, партнерствах и контенте.',
  },
] as const

export function Team() {
  return (
    <Section id="team">
      <Container>
        <div className="flex flex-col gap-3">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">Команда</h2>
          <p className="max-w-2xl text-base text-white/70">
            Три специалиста закрывают весь цикл: от смыслов и продаж до мягкого внедрения без потери индивидуальности.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {team.map((p, idx) => (
            <Card key={p.role}>
              <div className="text-xs font-semibold tracking-wide text-white/60">{p.role}</div>
              <div className="mt-2 text-lg font-semibold text-white/95">{p.headline}</div>
              <div className="mt-3 text-sm text-white/72">{p.bio}</div>

              <div className="mt-5 flex items-center gap-2 text-xs text-white/60">
                <span className={`h-1.5 w-1.5 rounded-full ${idx % 2 === 0 ? 'bg-[color:var(--accent-2)]' : 'bg-[color:var(--accent)]'}`} />
                Этичные продажи • Партнерская модель • DACH-контекст
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
