import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Política de Privacidad | Link IA Lab",
  description: "Política de privacidad y protección de datos de Link IA Lab",
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
  a: "text-[var(--color-brand)] underline hover:opacity-90",
}

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] pt-28 pb-20">
      <article className={`${proseClasses.wrapper} px-4`}>
        <h1 className={proseClasses.h1}>POLÍTICA DE PRIVACIDAD</h1>
        <p className={proseClasses.p}>
          En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016 (RGPD), y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le informamos sobre el tratamiento de sus datos personales.
        </p>

        <h2 className={proseClasses.h2}>1. Responsable del tratamiento</h2>
        <ul className={proseClasses.ul}>
          <li><strong className={proseClasses.strong}>Responsable:</strong> Arturo Rodríguez Martínez</li>
          <li><strong className={proseClasses.strong}>Nombre comercial:</strong> Link IA Lab</li>
          <li><strong className={proseClasses.strong}>Domicilio:</strong> Ibiza, Islas Baleares, España</li>
          <li><strong className={proseClasses.strong}>Email de contacto:</strong> hola@linkialab.com</li>
          <li><strong className={proseClasses.strong}>Email protección de datos:</strong> privacidad@linkialab.com</li>
        </ul>

        <h2 className={proseClasses.h2}>2. Datos que recopilamos</h2>
        <h3 className={proseClasses.h3}>2.1 Datos proporcionados por el usuario</h3>
        <ul className={proseClasses.ul}>
          <li><strong className={proseClasses.strong}>Formulario de contacto:</strong> Nombre, email, teléfono (opcional), mensaje.</li>
          <li><strong className={proseClasses.strong}>Solicitud de presupuesto:</strong> Nombre, email, teléfono, empresa (opcional), descripción del proyecto.</li>
        </ul>
        <h3 className={proseClasses.h3}>2.2 Datos recopilados automáticamente</h3>
        <ul className={proseClasses.ul}>
          <li><strong className={proseClasses.strong}>Datos de navegación:</strong> Dirección IP, tipo de navegador, sistema operativo, páginas visitadas, tiempo de permanencia.</li>
          <li><strong className={proseClasses.strong}>Cookies:</strong> Según lo descrito en nuestra <Link href="/legal/cookies" className={proseClasses.a}>Política de Cookies</Link>.</li>
        </ul>

        <h2 className={proseClasses.h2}>3. Finalidad del tratamiento</h2>
        <ul className={proseClasses.ul}>
          <li><strong className={proseClasses.strong}>Gestionar consultas</strong> recibidas a través del formulario de contacto — Base legal: Consentimiento (Art. 6.1.a RGPD)</li>
          <li><strong className={proseClasses.strong}>Elaborar y enviar presupuestos</strong> — Base legal: Medidas precontractuales (Art. 6.1.b RGPD)</li>
          <li><strong className={proseClasses.strong}>Prestar los servicios contratados</strong> — Base legal: Ejecución de contrato (Art. 6.1.b RGPD)</li>
          <li><strong className={proseClasses.strong}>Enviar comunicaciones comerciales</strong> — Base legal: Consentimiento expreso (Art. 6.1.a RGPD)</li>
          <li><strong className={proseClasses.strong}>Analizar el uso del sitio web</strong> — Base legal: Interés legítimo (Art. 6.1.f RGPD)</li>
          <li><strong className={proseClasses.strong}>Cumplir obligaciones legales</strong> — Base legal: Obligación legal (Art. 6.1.c RGPD)</li>
        </ul>

        <h2 className={proseClasses.h2}>4. Plazo de conservación</h2>
        <ul className={proseClasses.ul}>
          <li><strong className={proseClasses.strong}>Consultas sin relación comercial:</strong> 2 años desde el último contacto</li>
          <li><strong className={proseClasses.strong}>Datos de clientes:</strong> Duración de la relación contractual + 6 años</li>
          <li><strong className={proseClasses.strong}>Datos de facturación:</strong> 6 años (Art. 30 Código de Comercio)</li>
          <li><strong className={proseClasses.strong}>Consentimientos de marketing:</strong> Hasta retirada del consentimiento</li>
          <li><strong className={proseClasses.strong}>Datos de navegación/cookies:</strong> Según Política de Cookies</li>
        </ul>

        <h2 className={proseClasses.h2}>5. Destinatarios de los datos</h2>
        <h3 className={proseClasses.h3}>5.1 Encargados del tratamiento</h3>
        <ul className={proseClasses.ul}>
          <li><strong className={proseClasses.strong}>Vercel Inc.</strong> — Hosting del sitio web — EE.UU./UE — Cláusulas contractuales tipo (Art. 46.2.c RGPD)</li>
          <li><strong className={proseClasses.strong}>Google Ireland Ltd.</strong> — Google Analytics 4 — Irlanda (UE) — Cumplimiento RGPD</li>
          <li><strong className={proseClasses.strong}>Cloudflare Inc.</strong> — DNS, seguridad y email routing — EE.UU./UE — Cláusulas contractuales tipo</li>
        </ul>
        <h3 className={proseClasses.h3}>5.2 Terceros por obligación legal</h3>
        <p className={proseClasses.p}>Administraciones Públicas competentes, Jueces y Tribunales cuando así lo exija la normativa vigente.</p>

        <h2 className={proseClasses.h2}>6. Transferencias internacionales</h2>
        <p className={proseClasses.p}>
          Algunos proveedores pueden estar fuera del EEE. Garantizamos salvaguardas adecuadas:
        </p>
        <ul className={proseClasses.ul}>
          <li><strong className={proseClasses.strong}>Vercel Inc. (EE.UU.):</strong> Cláusulas contractuales tipo aprobadas por la Comisión Europea.</li>
          <li><strong className={proseClasses.strong}>Cloudflare Inc. (EE.UU.):</strong> Cláusulas contractuales tipo.</li>
        </ul>
        <p className={proseClasses.p}>Puede solicitar información adicional escribiendo a privacidad@linkialab.com.</p>

        <h2 className={proseClasses.h2}>7. Derechos del usuario</h2>
        <p className={proseClasses.p}>
          Puede ejercer los siguientes derechos: acceso, rectificación, supresión, limitación, oposición, portabilidad y retirada del consentimiento.
        </p>
        <h3 className={proseClasses.h3}>Cómo ejercer sus derechos</h3>
        <ul className={proseClasses.ul}>
          <li><strong className={proseClasses.strong}>Email:</strong> privacidad@linkialab.com</li>
          <li>Deberá acompañar su solicitud de una copia de su DNI o documento identificativo equivalente.</li>
        </ul>
        <h3 className={proseClasses.h3}>Derecho a reclamar</h3>
        <p className={proseClasses.p}>
          Si considera que el tratamiento no se ajusta a la normativa, puede reclamar ante la Agencia Española de Protección de Datos (AEPD) — www.aepd.es — C/ Jorge Juan, 6, 28001 Madrid.
        </p>

        <h2 className={proseClasses.h2}>8. Medidas de seguridad</h2>
        <p className={proseClasses.p}>
          Link IA Lab ha adoptado medidas técnicas y organizativas para garantizar la seguridad de los datos personales, incluyendo: cifrado de comunicaciones (HTTPS/TLS), control de acceso a sistemas y copias de seguridad periódicas.
        </p>

        <h2 className={proseClasses.h2}>9. Tratamientos con Inteligencia Artificial</h2>
        <ul className={proseClasses.ul}>
          <li>No se realizan decisiones automatizadas sin intervención humana.</li>
          <li>Los datos utilizados para sistemas de IA son anonimizados cuando es técnicamente posible.</li>
          <li>Cumplimos con el Reglamento (UE) 2024/1689.</li>
        </ul>

        <h2 className={proseClasses.h2}>10. Modificaciones</h2>
        <p className={proseClasses.p}>
          Link IA Lab se reserva el derecho de modificar la presente Política de Privacidad. En caso de cambios significativos, se notificará a través del Sitio Web o por email.
        </p>

        <p className={`${proseClasses.p} mt-10 font-medium text-[var(--color-foreground)]`}>
          <strong className={proseClasses.strong}>Última actualización:</strong> Febrero 2026
        </p>
      </article>
    </main>
  )
}
