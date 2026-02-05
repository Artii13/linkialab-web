"use client"

export default function OfflinePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-background)] px-4 text-[var(--color-foreground)]">
      <div className="max-w-md text-center">
        <h1 className="mb-4 text-4xl font-bold">Sin conexión</h1>
        <p className="mb-6 text-[var(--color-foreground-muted)]">
          Parece que no tienes conexión a internet. Vuelve a intentarlo cuando
          estés conectado.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="btn-primary rounded-lg px-6 py-3 transition-colors"
        >
          Reintentar
        </button>
      </div>
    </div>
  )
}
