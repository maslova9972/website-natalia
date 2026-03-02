import { Card, Container, Section } from '../components/ui'

export function Trust() {
  return (
    <Section id="trust">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">Опыт и система, а не случайные попытки</h2>
            <p className="mt-4 text-base text-white/70">
              Мы не «придумываем контент». Мы строим <span className="text-white/90">Экосистему влияния</span> — чтобы вы
              уверенно продавали через личный бренд в Германии без хаоса и сливов бюджета.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <div className="text-sm font-semibold text-white/90">12 лет практики</div>
                <div className="mt-2 text-sm text-white/70">
                  Глубокая экспертиза в маркетинге и стратегии на рынках Европы и СНГ.
                </div>
              </Card>
              <Card>
                <div className="text-sm font-semibold text-white/90">Авторская методология</div>
                <div className="mt-2 text-sm text-white/70">
                  Пошаговая система «Экосистема влияния», исключающая хаос и слив рекламного бюджета.
                </div>
              </Card>
              <Card className="sm:col-span-2">
                <div className="text-sm font-semibold text-white/90">500+ кейсов</div>
                <div className="mt-2 text-sm text-white/70">
                  Эксперты внедрили инструменты и вышли на стабильный поток заявок без таргета — через ясный статус, точные
                  формулировки и партнёрства.
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

