import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Política de Privacidad",
}

export default function PrivacidadPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <h1 className="mb-8 text-3xl font-bold md:text-4xl">
        Política de Privacidad
      </h1>
      <p className="mb-8 text-sm text-muted">
        Última actualización: Enero 2025
      </p>

      <div className="leading-relaxed text-muted">
        <h2 className="mb-4 mt-8 text-xl font-semibold text-foreground">
          Responsable del tratamiento
        </h2>
        <p className="mb-4">
          El responsable del tratamiento de los datos personales es Link IA
          Lab. Puedes contactarnos en hola@linkialab.com para cualquier
          cuestión relacionada con la privacidad.
        </p>
        <p className="mb-4 text-sm">
          [PENDIENTE: Completar con datos reales — dirección fiscal, NIF/CIF si
          aplica]
        </p>

        <h2 className="mb-4 mt-8 text-xl font-semibold text-foreground">
          Datos que recopilamos
        </h2>
        <p className="mb-4">
          Recopilamos únicamente los datos necesarios para prestar nuestros
          servicios y mejorar tu experiencia: datos de contacto (nombre,
          email, teléfono), datos de uso del sitio web y, en su caso, datos
          proporcionados en formularios o comunicaciones.
        </p>
        <p className="mb-4 text-sm">
          [PENDIENTE: Completar con datos reales — listado exacto según tu
          actividad]
        </p>

        <h2 className="mb-4 mt-8 text-xl font-semibold text-foreground">
          Finalidad del tratamiento
        </h2>
        <p className="mb-4">
          Los datos se tratan para gestionar consultas y solicitudes,
          prestación de servicios contratados, envío de comunicaciones
          comerciales (con consentimiento) y cumplimiento de obligaciones
          legales.
        </p>
        <p className="mb-4 text-sm">
          [PENDIENTE: Completar con datos reales según cada finalidad]
        </p>

        <h2 className="mb-4 mt-8 text-xl font-semibold text-foreground">
          Base legal
        </h2>
        <p className="mb-4">
          El tratamiento se basa en el consentimiento del usuario, la ejecución
          de un contrato, el interés legítimo del responsable o el
          cumplimiento de obligaciones legales, según corresponda en cada
          caso.
        </p>
        <p className="mb-4 text-sm">
          [PENDIENTE: Completar con datos reales — indicar base legal por cada
          tratamiento]
        </p>

        <h2 className="mb-4 mt-8 text-xl font-semibold text-foreground">
          Destinatarios
        </h2>
        <p className="mb-4">
          Los datos no se ceden a terceros salvo obligación legal o
          proveedores de servicios necesarios para el funcionamiento (hosting,
          email, etc.), que actúan como encargados del tratamiento con las
          garantías adecuadas.
        </p>
        <p className="mb-4 text-sm">
          [PENDIENTE: Completar con datos reales — listar encargados si
          aplica]
        </p>

        <h2 className="mb-4 mt-8 text-xl font-semibold text-foreground">
          Derechos del usuario
        </h2>
        <p className="mb-4">
          Puedes ejercer tus derechos de acceso, rectificación, supresión,
          limitación del tratamiento, portabilidad y oposición dirigiendo una
          solicitud a hola@linkialab.com. Tienes derecho a reclamar ante la
          autoridad de control (AEPD en España).
        </p>
        <p className="mb-4 text-sm">
          [PENDIENTE: Completar con datos reales — plazos de respuesta,
          procedimiento]
        </p>

        <h2 className="mb-4 mt-8 text-xl font-semibold text-foreground">
          Contacto
        </h2>
        <p className="mb-4">
          Para cualquier duda sobre esta política de privacidad, escribe a
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
