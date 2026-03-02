import { Badge, Button, Container, Section } from '../components/ui'

export function Hero() {
  return (
    <Section id="hero" className="pt-10 sm:pt-14">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[radial-gradient(900px_420px_at_7%_0%,rgba(255,59,48,0.22),transparent_66%),radial-gradient(820px_320px_at_95%_8%,rgba(22,217,210,0.2),transparent_66%),linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6 sm:p-10 subtle-glow">
          <div className="absolute inset-0 pointer-events-none opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:42px_42px]" />

          <div className="relative">
            <div className="fade-up flex flex-wrap items-center gap-2">
              <Badge>Германия и Европа • Личный бренд • Мягкие продажи</Badge>
              <Badge className="text-white/80">Для экспертов-экспатов 40+</Badge>
            </div>

            <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8 fade-up-delay">
                <h1 className="font-display text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                  Масштабируй влияние: система продаж через личный бренд и сообщества в Германии
                </h1>
                <p className="mt-5 max-w-3xl text-pretty text-base text-white/75 sm:text-lg">
                  Реклама съедает бюджет, а результата нет. Преврати свою экспертность в магнит, который за 30 секунд
                  привлечет 50+ горячих клиентов с любой живой встречи.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a href="#booking" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto">Записаться на диагностику влияния</Button>
                  </a>
                  <a href="#services" className="w-full sm:w-auto">
                    <Button variant="secondary" className="w-full sm:w-auto">Посмотреть систему</Button>
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/65">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                    Без агрессивных продаж
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--accent-2)]" />
                    С учетом культурного контекста Германии
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/40" />
                    Без контентного рабства
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-5 backdrop-blur">
                  <div className="text-xs font-semibold tracking-wide text-white/70">Кому подходит</div>
                  <div className="mt-3 text-sm text-white/75">
                    Экспертам-экспатам в помогающих профессиях и малом бизнесе, у кого пока нет упакованного бренда,
                    понятного продукта и уверенной системы продаж.
                  </div>
                  <div className="mt-4 rounded-xl border border-[color:var(--border)] bg-black/25 p-4">
                    <div className="text-xs font-semibold text-white/80">Ключевая трансформация</div>
                    <div className="mt-2 text-sm text-white/70">
                      Из «боюсь выглядеть инфоцыганкой» в «говорю на своем языке, сохраняю статус и получаю клиентов через доверие».
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
