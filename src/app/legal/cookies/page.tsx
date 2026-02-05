import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Cookies | Link IA Lab",
  description: "Información sobre el uso de cookies en linkialab.com",
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
  a: "text-[var(--color-brand)] underline hover:opacity-90 break-all",
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] pt-28 pb-20">
      <article className={`${proseClasses.wrapper} px-4`}>
        <h1 className={proseClasses.h1}>POLÍTICA DE COOKIES</h1>
        <p className={proseClasses.p}>
          En cumplimiento del artículo 22.2 de la Ley 34/2002 (LSSICE), le informamos sobre el uso de cookies en https://linkialab.com.
        </p>

        <h2 className={proseClasses.h2}>1. ¿Qué son las cookies?</h2>
        <p className={proseClasses.p}>
          Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo cuando los visita. Permiten que el sitio web recuerde sus acciones y preferencias durante un periodo de tiempo.
        </p>

        <h2 className={proseClasses.h2}>2. ¿Qué tipos de cookies utilizamos?</h2>
        <h3 className={proseClasses.h3}>Según su finalidad</h3>
        <ul className={proseClasses.ul}>
          <li><strong className={proseClasses.strong}>Técnicas/Necesarias:</strong> Imprescindibles para el funcionamiento del sitio — No requieren consentimiento</li>
          <li><strong className={proseClasses.strong}>Analíticas:</strong> Permiten analizar el comportamiento de los usuarios — Requieren consentimiento</li>
        </ul>
        <h3 className={proseClasses.h3}>Según su titularidad</h3>
        <ul className={proseClasses.ul}>
          <li><strong className={proseClasses.strong}>Propias:</strong> Gestionadas por Link IA Lab</li>
          <li><strong className={proseClasses.strong}>De terceros:</strong> Gestionadas por proveedores externos</li>
        </ul>

        <h2 className={proseClasses.h2}>3. Cookies que utilizamos</h2>
        <h3 className={proseClasses.h3}>Cookies técnicas (necesarias)</h3>
        <ul className={proseClasses.ul}>
          <li><strong className={proseClasses.strong}>cookie_consent</strong> — linkialab.com — Almacena preferencias de cookies — 1 año</li>
        </ul>
        <h3 className={proseClasses.h3}>Cookies analíticas</h3>
        <ul className={proseClasses.ul}>
          <li><strong className={proseClasses.strong}>_ga</strong> — Google Analytics — Distingue usuarios únicos — 2 años</li>
          <li><strong className={proseClasses.strong}>_ga_[ID]</strong> — Google Analytics — Mantiene estado de sesión — 2 años</li>
          <li><strong className={proseClasses.strong}>_gid</strong> — Google Analytics — Distingue usuarios — 24 horas</li>
          <li><strong className={proseClasses.strong}>_gat</strong> — Google Analytics — Limita tasa de solicitudes — 1 minuto</li>
        </ul>
        <p className={proseClasses.p}>
          <strong className={proseClasses.strong}>Google Analytics 4:</strong> Utilizamos Google Analytics para analizar el uso de nuestro sitio web. Proveedor: Google Ireland Limited. Política de privacidad:{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className={proseClasses.a}>https://policies.google.com/privacy</a>. Opt-out:{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className={proseClasses.a}>https://tools.google.com/dlpage/gaoptout</a>
        </p>
        <h3 className={proseClasses.h3}>Cookies de marketing</h3>
        <p className={proseClasses.p}>Actualmente no utilizamos cookies de marketing.</p>

        <h2 className={proseClasses.h2}>4. ¿Cómo gestionar las cookies?</h2>
        <h3 className={proseClasses.h3}>A través de nuestro banner de cookies</h3>
        <p className={proseClasses.p}>
          Al acceder al sitio web, puede: Aceptar todas, Rechazar no esenciales, o Configurar sus preferencias. Puede cambiar sus preferencias en cualquier momento desde &quot;Configuración de cookies&quot; en el pie de página.
        </p>
        <h3 className={proseClasses.h3}>A través de su navegador</h3>
        <ul className={proseClasses.ul}>
          <li>Google Chrome: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className={proseClasses.a}>https://support.google.com/chrome/answer/95647</a></li>
          <li>Mozilla Firefox: <a href="https://support.mozilla.org/es/kb/Borrar%20cookies" target="_blank" rel="noopener noreferrer" className={proseClasses.a}>https://support.mozilla.org/es/kb/Borrar%20cookies</a></li>
          <li>Safari: <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className={proseClasses.a}>https://support.apple.com/es-es/guide/safari/sfri11471/mac</a></li>
          <li>Microsoft Edge: <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies" target="_blank" rel="noopener noreferrer" className={proseClasses.a}>https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies</a></li>
          <li>Opera: <a href="https://help.opera.com/en/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer" className={proseClasses.a}>https://help.opera.com/en/latest/web-preferences/#cookies</a></li>
        </ul>
        <p className={proseClasses.p}>
          <em>Nota: Si desactiva las cookies, algunas funcionalidades podrían no funcionar correctamente.</em>
        </p>

        <h2 className={proseClasses.h2}>5. Base legal</h2>
        <ul className={proseClasses.ul}>
          <li><strong className={proseClasses.strong}>Cookies técnicas:</strong> No requieren consentimiento (Art. 22.2 LSSICE, excepción).</li>
          <li><strong className={proseClasses.strong}>Cookies analíticas:</strong> Requieren consentimiento previo (Art. 22.2 LSSICE y Art. 6.1.a RGPD).</li>
        </ul>

        <h2 className={proseClasses.h2}>6. Contacto</h2>
        <p className={proseClasses.p}>
          Si tiene dudas sobre nuestra Política de Cookies: privacidad@linkialab.com
        </p>

        <p className={`${proseClasses.p} mt-10 font-medium text-[var(--color-foreground)]`}>
          <strong className={proseClasses.strong}>Última actualización:</strong> Febrero 2026
        </p>
      </article>
    </main>
  )
}
