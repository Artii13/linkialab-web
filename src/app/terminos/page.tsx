import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Términos y Condiciones",
}

export default function TerminosPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <h1 className="mb-8 text-3xl font-bold md:text-4xl">
        Términos y Condiciones
      </h1>
      <p className="mb-8 text-sm text-muted">
        Última actualización: Enero 2025
      </p>

      <div className="leading-relaxed text-muted">
        <h2 className="mb-4 mt-8 text-xl font-semibold text-foreground">
          Identificación
        </h2>
        <p className="mb-4">
          El presente sitio web es operado por Link IA Lab. Para contactar con
          nosotros: hola@linkialab.com.
        </p>
        <p className="mb-4 text-sm">
          [PENDIENTE: Completar con datos reales — razón social, NIF/CIF,
          domicilio fiscal]
        </p>

        <h2 className="mb-4 mt-8 text-xl font-semibold text-foreground">
          Objeto
        </h2>
        <p className="mb-4">
          Estos términos y condiciones regulan el acceso y uso del sitio web
          de Link IA Lab y de los servicios ofrecidos a través del mismo. La
          utilización del sitio implica la aceptación de los presentes
          términos.
        </p>
        <p className="mb-4 text-sm">
          [PENDIENTE: Completar con datos reales — ámbito de aplicación,
          definición de servicios]
        </p>

        <h2 className="mb-4 mt-8 text-xl font-semibold text-foreground">
          Condiciones de uso
        </h2>
        <p className="mb-4">
          El usuario se compromete a hacer un uso lícito y adecuado del sitio
          y de los servicios, sin contravenir la legislación vigente ni los
          derechos de terceros. Queda prohibido el uso con fines ilícitos,
          la suplantación de identidad o la interferencia en el
          funcionamiento del sitio.
        </p>
        <p className="mb-4 text-sm">
          [PENDIENTE: Completar con datos reales — normas específicas de uso]
        </p>

        <h2 className="mb-4 mt-8 text-xl font-semibold text-foreground">
          Propiedad intelectual
        </h2>
        <p className="mb-4">
          Todos los contenidos del sitio (textos, diseños, logotipos, código,
          etc.) son propiedad de Link IA Lab o de sus licenciantes y están
          protegidos por la legislación de propiedad intelectual e
          industrial. No está permitida su reproducción, distribución o
          modificación sin autorización expresa.
        </p>
        <p className="mb-4 text-sm">
          [PENDIENTE: Completar con datos reales — menciones a licencias de
          terceros si aplica]
        </p>

        <h2 className="mb-4 mt-8 text-xl font-semibold text-foreground">
          Limitación de responsabilidad
        </h2>
        <p className="mb-4">
          Link IA Lab no se hace responsable de los daños derivados del uso
          del sitio o de la imposibilidad de uso, de contenidos de terceros
          enlazados, ni de interrupciones o errores técnicos. Los servicios se
          prestan &quot;tal cual&quot; dentro de los límites establecidos en la
          legislación aplicable.
        </p>
        <p className="mb-4 text-sm">
          [PENDIENTE: Completar con datos reales — redacción revisada por
          asesor legal]
        </p>

        <h2 className="mb-4 mt-8 text-xl font-semibold text-foreground">
          Ley aplicable
        </h2>
        <p className="mb-4">
          Los presentes términos se rigen por la legislación española. Para la
          resolución de cualquier controversia, las partes se someten a los
          juzgados y tribunales que correspondan.
        </p>
        <p className="mb-4 text-sm">
          [PENDIENTE: Completar con datos reales — jurisdicción, arbitraje si
          aplica]
        </p>

        <h2 className="mb-4 mt-8 text-xl font-semibold text-foreground">
          Contacto
        </h2>
        <p className="mb-4">
          Para cualquier consulta sobre estos términos y condiciones,
          contacta con nosotros en hola@linkialab.com.
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
