import { useMemo, useState } from 'react'
import { Button, Card, Container, Section } from '../components/ui'

type FormState = {
  name: string
  email: string
  contact: string
  message: string
}

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
}

export function Booking() {
  const [state, setState] = useState<FormState>({ name: '', email: '', contact: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {}
    if (!state.name.trim()) e.name = 'Введите имя'
    if (!state.email.trim()) e.email = 'Введите email'
    else if (!isValidEmail(state.email)) e.email = 'Проверьте формат email'
    if (!state.contact.trim()) e.contact = 'Укажите способ связи'
    if (!state.message.trim()) e.message = 'Кратко опишите запрос'
    return e
  }, [state])

  const canSubmit = Object.keys(errors).length === 0

  return (
    <Section id="booking">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              Запись на диагностику влияния
            </h2>
            <p className="mt-4 text-base text-white/70">
              Разберем вашу текущую ситуацию и покажем, как перейти от хаотичного продвижения к системе, которая
              приносит клиентов через доверие, партнерства и личный бренд.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                <div>
                  <div className="font-semibold text-white/85">30-45 минут созвона</div>
                  <div>Аудит позиционирования, продукта и текущего пути клиента.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[color:var(--accent-2)]" />
                <div>
                  <div className="font-semibold text-white/85">План первых шагов</div>
                  <div>Что внедрить за 14 дней, чтобы получить первые прогнозируемые заявки.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white/60" />
                <div>
                  <div className="font-semibold text-white/85">Этика и репутация</div>
                  <div>Никакого давления, только экологичные продажи в рамках европейского контекста.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <Card className="p-5 sm:p-6">
              <div className="text-sm font-semibold text-white/90">Оставьте контакты</div>
              <div className="mt-1 text-sm text-white/65">
                Ответим с ближайшими слотами и короткой подготовкой к диагностике.
              </div>

              {status === 'sent' ? (
                <div className="mt-6 rounded-2xl border border-[color:var(--border)] bg-black/25 p-5">
                  <div className="text-sm font-semibold text-white/90">Заявка отправлена</div>
                  <div className="mt-2 text-sm text-white/70">Спасибо. Мы свяжемся с вами в ближайшее время.</div>
                  <div className="mt-4">
                    <Button
                      variant="secondary"
                      onClick={() => {
                        setStatus('idle')
                        setState({ name: '', email: '', contact: '', message: '' })
                      }}
                    >
                      Отправить еще одну
                    </Button>
                  </div>
                </div>
              ) : (
                <form
                  className="mt-6 grid gap-3"
                  onSubmit={(e) => {
                    e.preventDefault()
                    if (!canSubmit) return
                    setStatus('sent')
                  }}
                >
                  <Field
                    label="Имя"
                    value={state.name}
                    onChange={(v) => setState((s) => ({ ...s, name: v }))}
                    placeholder="Как к вам обращаться"
                    error={errors.name}
                  />
                  <Field
                    label="Email"
                    value={state.email}
                    onChange={(v) => setState((s) => ({ ...s, email: v }))}
                    placeholder="name@example.com"
                    error={errors.email}
                    inputMode="email"
                  />
                  <Field
                    label="Контакт (Telegram / WhatsApp / LinkedIn)"
                    value={state.contact}
                    onChange={(v) => setState((s) => ({ ...s, contact: v }))}
                    placeholder="@username или ссылка"
                    error={errors.contact}
                  />
                  <Field
                    label="Ваш запрос"
                    value={state.message}
                    onChange={(v) => setState((s) => ({ ...s, message: v }))}
                    placeholder="Например: нужен pitch для офлайн-нетворкинга в Гамбурге"
                    error={errors.message}
                    textarea
                  />

                  <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Button type="submit" disabled={!canSubmit} className="w-full sm:w-auto">
                      Записаться на диагностику влияния
                    </Button>
                    <div className="text-xs text-white/55">Нажимая кнопку, вы соглашаетесь на обработку данных для связи.</div>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  )
}

function Field(props: {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  error?: string
  textarea?: boolean
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode']
}) {
  const base =
    'w-full rounded-xl border border-[color:var(--border)] bg-black/20 px-3 py-2.5 text-sm text-white/90 outline-none placeholder:text-white/35 focus-visible:ring-4 focus-visible:ring-[color:var(--ring)]'

  return (
    <label className="grid gap-1.5">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-semibold text-white/70">{props.label}</span>
        {props.error ? <span className="text-xs text-[color:var(--accent)]">{props.error}</span> : null}
      </div>
      {props.textarea ? (
        <textarea
          className={`${base} min-h-28 resize-y`}
          placeholder={props.placeholder}
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        />
      ) : (
        <input
          className={base}
          placeholder={props.placeholder}
          value={props.value}
          inputMode={props.inputMode}
          onChange={(e) => props.onChange(e.target.value)}
        />
      )}
    </label>
  )
}
