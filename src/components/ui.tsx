import * as React from 'react'

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function Container(props: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8', props.className)}>
      {props.children}
    </div>
  )
}

export function Section(props: React.PropsWithChildren<{ id?: string; className?: string }>) {
  return (
    <section id={props.id} className={cn('py-14 sm:py-20', props.className)}>
      {props.children}
    </section>
  )
}

export function Badge(props: React.PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--panel)] px-3 py-1 text-xs font-medium text-[color:var(--muted)]',
        props.className,
      )}
    >
      {props.children}
    </span>
  )
}

export function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary'
  },
) {
  const { className, variant = 'primary', ...rest } = props
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--ring)] disabled:opacity-60 disabled:cursor-not-allowed'

  const primary =
    'bg-[color:var(--accent)] text-white hover:brightness-110 active:brightness-95'
  const secondary =
    'border border-[color:var(--border)] bg-[color:var(--panel)] text-white hover:bg-[color:var(--panel-strong)]'

  return <button className={cn(base, variant === 'primary' ? primary : secondary, className)} {...rest} />
}

export function Card(props: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur',
        props.className,
      )}
    >
      {props.children}
    </div>
  )
}
