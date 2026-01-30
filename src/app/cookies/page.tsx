import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Política de Cookies",
}

export default function CookiesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <h1 className="mb-8 text-3xl font-bold md:text-4xl">
        Política de Cookies
      </h1>
      <p className="mb-8 text-sm text-muted">
        Última actualización: Enero 2025
      </p>

      <div className="leading-relaxed text-muted">
        <h2 className="mb-4 mt-8 text-xl font-semibold text-foreground">
          ¿Qué son las cookies?
        </h2>
        <p className="mb-4">
          Las cookies son pequeños archivos de texto que los sitios web
          almacenan en tu dispositivo (ordenador, tablet o móvil) cuando los
          visitas. Permiten que el sitio recuerde tus preferencias, mejore la
          navegación y, en algunos casos, analice el uso del sitio.
        </p>
        <p className="mb-4 text-sm">
          [PENDIENTE: Completar con datos reales — ampliar explicación si lo
          deseas]
        </p>

        <h2 className="mb-4 mt-8 text-xl font-semibold text-foreground">
          Cookies que utilizamos
        </h2>
        <p className="mb-4">
          Utilizamos los siguientes tipos de cookies:
        </p>
        <p className="mb-4">
          <strong className="text-foreground">Cookies técnicas:</strong> Son
          necesarias para el correcto funcionamiento del sitio (por ejemplo,
          recordar tu consentimiento sobre cookies, sesión, seguridad).
        </p>
        <p className="mb-4">
          <strong className="text-foreground">Cookies analíticas:</strong> Nos
          permiten conocer cómo se usa el sitio (páginas visitadas, tiempo de
          permanencia) para mejorar la experiencia. Pueden ser propias o de
          terceros.
        </p>
        <p className="mb-4 text-sm">
          [PENDIENTE: Completar con datos reales — tabla con nombre de
          cookie, titular, finalidad, duración]
        </p>

        <h2 className="mb-4 mt-8 text-xl font-semibold text-foreground">
          Cómo gestionar las cookies
        </h2>
        <p className="mb-4">
          Puedes configurar o rechazar las cookies desde la configuración de tu
          navegador. Ten en cuenta que desactivar ciertas cookies puede
          afectar al funcionamiento del sitio. En la primera visita te
          ofrecemos la posibilidad de aceptar o rechazar cookies no
          esenciales mediante nuestro banner.
        </p>
        <p className="mb-4 text-sm">
          [PENDIENTE: Completar con datos reales — enlaces a instrucciones de
          los navegadores más usados si lo deseas]
        </p>

        <h2 className="mb-4 mt-8 text-xl font-semibold text-foreground">
          Contacto
        </h2>
        <p className="mb-4">
          Para cualquier duda sobre el uso de cookies, puedes contactarnos en
          hola@linkialab.com.
        </p>
      </div>

      <p className="mt-12">
        <Link
          href="/"
          className="font-medium text-[var(--color-brand)] underline-offset-4 hover:underline"
        >
          ← Volver al inicio
        </Link>
      </p>
    </main>
  )
}
