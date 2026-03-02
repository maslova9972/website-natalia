import { Card, Container, Section } from '../components/ui'

const testimonials = [
  {
    name: 'Ирина К., коуч по карьерному переходу, Мюнхен',
    rating: 5,
    quote:
      'Я боялась, что продажи превратят меня в навязчивого блогера. В итоге получила точный pitch, сохранила свой стиль и за месяц закрыла 6 клиентов с офлайн-нетворкинга.',
  },
  {
    name: 'Марина П., психолог, Берлин',
    rating: 5,
    quote:
      'Раньше сливала бюджет на рекламу и не понимала, почему нет заявок. После упаковки бренда и партнерской стратегии пришли первые стабильные обращения без таргета.',
  },
  {
    name: 'Елена Р., бизнес-ментор, Франкфурт',
    rating: 5,
    quote:
      'Самое ценное - сопровождение после проекта. Меня не оставили одну с документом, а помогли внедрить систему в работу. Теперь продаю спокойно и уверенно, без давления.',
  },
] as const

function Stars({ count }: { count: number }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < count)
  return (
    <div className="flex items-center gap-1" aria-label={`${count} из 5`}>
      {stars.map((on, idx) => (
        <span
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
          className={on ? 'text-[color:var(--accent)]' : 'text-white/25'}
        >
          ★
        </span>
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <Section id="testimonials">
      <Container>
        <div className="flex flex-col gap-3">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">Отзывы</h2>
          <p className="max-w-2xl text-base text-white/70">Реальные голоса специалистов, которые строят продажи без потери статуса.</p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-white/90">{t.name}</div>
                  <div className="mt-1">
                    <Stars count={t.rating} />
                  </div>
                </div>
                <div className="text-2xl leading-none text-[color:var(--accent-2)]">“</div>
              </div>
              <div className="mt-4 text-sm text-white/75">{t.quote}</div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
