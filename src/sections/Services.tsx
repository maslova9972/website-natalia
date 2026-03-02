import { Card, Container, Section } from '../components/ui'

const services = [
  {
    title: 'Смысловая упаковка бренда',
    pain: 'Выглядите как «инфобизнесмен», теряя лояльность премиальных клиентов.',
    result: 'Статус признанного лидера рынка, которому доверяют в Германии.',
  },
  {
    title: 'Магнит нетворкинга (Pitch 30s)',
    pain: 'Тратите часы на бизнес-встречи, но уходите без реальных договоренностей.',
    result: 'Убойный спич, который прошибает внимание и приносит 20-30 лидов за раз.',
  },
  {
    title: 'Экосистема партнерств',
    pain: 'Полная зависимость от соцсетей и страх, что завтра охваты упадут до нуля.',
    result: 'Система лидогенерации через профессиональные сообщества и коллаборации.',
  },
] as const

export function Services() {
  return (
    <Section id="services">
      <Container>
        <div className="flex flex-col gap-3">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">Услуги</h2>
          <p className="max-w-2xl text-base text-white/70">
            Никаких шаблонных воронок и чужих фраз. Только система, которая усиливает ваш голос, репутацию и продажи.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {services.map((s, idx) => (
            <Card key={s.title} className="flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <div className="text-lg font-semibold text-white/95">{s.title}</div>
                <div className={`mt-1 h-2 w-2 shrink-0 rounded-full ${idx % 2 === 0 ? 'bg-[color:var(--accent)]' : 'bg-[color:var(--accent-2)]'}`} />
              </div>

              <div className="mt-4 rounded-xl border border-[color:var(--border)] bg-black/20 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-white/70">Боль</div>
                <div className="mt-2 text-sm text-white/72">{s.pain}</div>
              </div>

              <div className="mt-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--panel-strong)] p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-white/80">Результат</div>
                <div className="mt-2 text-sm text-white/82">{s.result}</div>
              </div>

              <div className="mt-5 text-sm text-white/65">
                Формат: диагностика, внедрение в реальные касания и сопровождение до первых устойчивых результатов.
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
