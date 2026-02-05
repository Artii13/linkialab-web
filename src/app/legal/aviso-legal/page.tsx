import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aviso Legal | Link IA Lab",
  description: "Aviso legal y condiciones de uso del sitio web linkialab.com",
  robots: { index: false, follow: true },
}

const proseClasses = {
  wrapper: "max-w-3xl mx-auto space-y-6 text-base leading-[1.7] text-[var(--color-foreground)]",
  h1: "text-3xl font-bold text-[var(--color-foreground)] md:text-4xl mb-8",
  h2: "text-xl font-semibold text-[var(--color-foreground)] mt-10 mb-4",
  h3: "text-lg font-semibold text-[var(--color-foreground)] mt-6 mb-2",
  p: "text-[var(--color-foreground-muted)]",
  ul: "list-disc pl-6 space-y-2 text-[var(--color-foreground-muted)]",
  strong: "font-semibold text-[var(--color-foreground)]",
  a: "text-[var(--color-brand)] underline hover:text-[var(--color-brand)]/90",
}

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] pt-28 pb-20">
      <article className={`${proseClasses.wrapper} px-4`}>
        <h1 className={proseClasses.h1}>AVISO LEGAL</h1>

        <h2 className={proseClasses.h2}>1. Datos identificativos</h2>
        <p className={proseClasses.p}>
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), se informa al usuario de los datos del titular de este sitio web:
        </p>
        <ul className={proseClasses.ul}>
          <li><strong className={proseClasses.strong}>Titular:</strong> Arturo Rodríguez Martínez</li>
          <li><strong className={proseClasses.strong}>Nombre comercial:</strong> Link IA Lab</li>
          <li><strong className={proseClasses.strong}>Domicilio:</strong> Ibiza, Islas Baleares, España</li>
          <li><strong className={proseClasses.strong}>Email:</strong> hola@linkialab.com</li>
          <li><strong className={proseClasses.strong}>Sitio web:</strong> https://linkialab.com</li>
          <li><strong className={proseClasses.strong}>Actividad:</strong> Servicios de automatización, desarrollo web e inteligencia artificial</li>
        </ul>

        <h2 className={proseClasses.h2}>2. Objeto</h2>
        <p className={proseClasses.p}>
          El presente Aviso Legal regula el acceso y uso del sitio web https://linkialab.com (en adelante, &quot;el Sitio Web&quot;), propiedad de Arturo Rodríguez Martínez (en adelante, &quot;Link IA Lab&quot;).
        </p>
        <p className={proseClasses.p}>
          El acceso al Sitio Web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.
        </p>

        <h2 className={proseClasses.h2}>3. Condiciones de uso</h2>
        <p className={proseClasses.p}>El usuario se compromete a:</p>
        <ul className={proseClasses.ul}>
          <li>Hacer un uso adecuado y lícito del Sitio Web, de conformidad con la legislación vigente, la moral, las buenas costumbres y el orden público.</li>
          <li>No utilizar el Sitio Web con fines ilícitos, lesivos de derechos de terceros, o que puedan dañar, inutilizar, sobrecargar o deteriorar el Sitio Web.</li>
          <li>No introducir ni difundir virus informáticos o cualesquiera otros sistemas que puedan causar daños.</li>
          <li>No intentar acceder a áreas restringidas del Sitio Web sin autorización.</li>
          <li>No suplantar la identidad de otros usuarios.</li>
        </ul>

        <h2 className={proseClasses.h2}>4. Propiedad intelectual e industrial</h2>
        <p className={proseClasses.p}>
          Todos los contenidos del Sitio Web, incluyendo a título enunciativo pero no limitativo: textos, fotografías, gráficos, imágenes, iconos, tecnología, software, diseño gráfico, código fuente, así como su diseño y estructura de navegación, son titularidad de Link IA Lab o de terceros que han autorizado su uso, quedando protegidos por los derechos de propiedad intelectual e industrial.
        </p>
        <p className={proseClasses.p}>
          Queda expresamente prohibida la reproducción, distribución, transformación, comunicación pública o cualquier otra forma de explotación de los contenidos del Sitio Web sin la autorización expresa y por escrito de Link IA Lab.
        </p>

        <h2 className={proseClasses.h2}>5. Exclusión de responsabilidad</h2>
        <h3 className={proseClasses.h3}>5.1 Información</h3>
        <p className={proseClasses.p}>
          Link IA Lab no garantiza la ausencia de errores en el acceso al Sitio Web ni en su contenido. Link IA Lab realizará sus mejores esfuerzos para mantener la información actualizada, pero no responde de las consecuencias derivadas de errores u omisiones.
        </p>
        <h3 className={proseClasses.h3}>5.2 Disponibilidad</h3>
        <p className={proseClasses.p}>
          Link IA Lab no garantiza la disponibilidad continua y permanente del Sitio Web, quedando exonerada de cualquier responsabilidad por posibles daños y perjuicios causados por la falta de disponibilidad del servicio debido a causas de fuerza mayor o errores en las redes telemáticas.
        </p>
        <h3 className={proseClasses.h3}>5.3 Enlaces a terceros</h3>
        <p className={proseClasses.p}>
          El Sitio Web puede contener enlaces a páginas web de terceros. Link IA Lab no asume ninguna responsabilidad por el contenido, información o servicios que pudieran aparecer en dichos sitios.
        </p>

        <h2 className={proseClasses.h2}>6. Servicios de Inteligencia Artificial</h2>
        <p className={proseClasses.p}>
          Link IA Lab ofrece servicios que incluyen el desarrollo e implementación de soluciones basadas en Inteligencia Artificial. En relación con estos servicios:
        </p>
        <ul className={proseClasses.ul}>
          <li>Los sistemas de IA desarrollados cumplen con el Reglamento (UE) 2024/1689 (Reglamento de Inteligencia Artificial) y la normativa española aplicable.</li>
          <li>Se informa al usuario cuando interactúa con sistemas automatizados o de IA.</li>
          <li>Los datos procesados por sistemas de IA se tratan conforme al RGPD y la LOPDGDD.</li>
        </ul>

        <h2 className={proseClasses.h2}>7. Modificaciones</h2>
        <p className={proseClasses.p}>
          Link IA Lab se reserva el derecho de modificar, en cualquier momento y sin previo aviso, la presentación, configuración, información y contenidos del Sitio Web, así como el presente Aviso Legal.
        </p>

        <h2 className={proseClasses.h2}>8. Legislación aplicable y jurisdicción</h2>
        <p className={proseClasses.p}>
          El presente Aviso Legal se rige por la legislación española. Para la resolución de cualquier controversia que pudiera derivarse del acceso o uso del Sitio Web, las partes se someten expresamente a los Juzgados y Tribunales de Ibiza, con renuncia a cualquier otro fuero que pudiera corresponderles.
        </p>

        <p className={`${proseClasses.p} mt-10 font-medium text-[var(--color-foreground)]`}>
          <strong className={proseClasses.strong}>Última actualización:</strong> Febrero 2026
        </p>
      </article>
    </main>
  )
}
