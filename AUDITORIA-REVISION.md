# Auditoría - 30 de enero de 2026

Revisión de código sin aplicar cambios. Solo reporte.

---

## 🔴 Crítico (arreglar antes de lanzar)

### 1. metadataBase y OG en layout
- **Estado:** Corregido en esta sesión. `metadataBase` apuntaba a `https://linkialab-web.vercel.app`; debe ser `https://linkialab.com` para que las URLs absolutas de Open Graph y Twitter (og-image, etc.) se resuelvan bien al compartir.
- **Acción:** Verificar que en `src/app/layout.tsx` esté `metadataBase: new URL('https://linkialab.com')` y que las imágenes OG usen rutas relativas (`/og-image.png`) o URLs absolutas con ese base.

### 2. Favicon y manifest en producción
- **Estado:** Configuración de metadata (icons, manifest) y `site.webmanifest` actualizados.
- **Acción:** Comprobar en producción que se sirven correctamente `/favicon.ico`, `/favicon.svg`, `/favicon-96x96.png`, `/apple-touch-icon.png`, `/site.webmanifest` y `/og-image.png` (todas en `public/`).

---

## 🟡 Medio (arreglar pronto)

### 1. prefers-reduced-motion y animaciones
- **Ubicación:** `src/app/globals.css` LAYER 17, líneas ~588-605.
- **Qué hace:** Aplica `transition-duration: 0.01ms !important` y `animation-duration: 0.01ms !important` a **todos** los elementos (`*`, `*::before`, `*::after`) cuando el usuario tiene “Reducir movimiento” activado.
- **Excepción actual:** Solo se restaura duración para `.accordion-content`, `.accordion-trigger` y sus hijos.
- **Riesgo:** Cualquier otra animación o transición (Hero con Framer Motion, Process con GSAP, ThemeToggle, Preloader, etc.) se ejecuta de forma casi instantánea para esos usuarios. Es intencional por accesibilidad, pero limita mucho la UX.
- **Recomendación:** Valorar excluir también el Preloader y el Hero (p. ej. contenedor con clase `.hero-animation` o `.preloader`) si se quiere mantener una mínima animación de entrada para quienes usan “reducir movimiento”, o documentar el comportamiento actual y aceptarlo.

### 2. CSS huérfano (clases no usadas)
- **Ubicación:** `src/app/globals.css`.
- **Clases definidas pero no referenciadas en ningún `.tsx`:**
  - `.animate-fade-in` (keyframe fade-in)
  - `.animate-blur-fade-in` (keyframe blur-fade-in)
  - `.transition-fast`, `.transition-normal`, `.transition-slow`
- **Recomendación:** Usarlas en componentes que animen entrada de secciones o eliminar las reglas si no se van a usar, para reducir CSS final.

### 3. Componente accordion.tsx (Radix) sin uso
- **Ubicación:** `src/components/ui/accordion.tsx`.
- **Estado:** El FAQ y el resto de la app usan `accordion-custom.tsx`. Ningún archivo importa `@/components/ui/accordion`.
- **Recomendación:** Eliminar `accordion.tsx` o documentar que se mantiene por si se quiere volver a Radix en el futuro, para evitar confusión y dependencia innecesaria de `@radix-ui/react-accordion` si no se usa en ningún otro sitio.

### 4. not-found y dark mode
- **Ubicación:** `src/app/not-found.tsx`.
- **Problema:** Usa `text-foreground`, `text-muted` y `text-brand` (utilidades Tailwind). En dark mode, si esas clases no están mapeadas a las variables CSS del design system, el texto puede tener poco contraste o no verse bien.
- **Recomendación:** Sustituir por variables explícitas (`text-[var(--color-foreground)]`, `text-[var(--color-foreground-muted)]`, etc.) como en el resto de la app, y comprobar 404 en tema claro y oscuro.

---

## 🟢 Menor (cuando se pueda)

### 1. Imports no utilizados
- No se detectaron `console.log` en `src/`.
- No se hizo un barrido exhaustivo de cada import en cada archivo; conviene revisar con el linter/IDE (p. ej. “unused imports”) antes de cada release.

### 2. Clases Tailwind y colores
- **text-white:** Usado en WhatsAppFloat (icono sobre fondo verde), en variantes destructive de `button.tsx` y `badge.tsx`. Son usos correctos (texto claro sobre fondo de color).
- No se encontraron elementos con `text-white` y `text-black` a la vez en el mismo nodo.

### 3. Accesibilidad básica
- **Imágenes:** Todas las `<img>` revisadas tienen atributo `alt` (Header, Footer, Preloader, Process).
- **ARIA:** Uso de `aria-label` en botones (menú, cerrar, ThemeToggle, etc.), `role="status"` en Preloader, `role="switch"` en ThemeToggle.
- **Contraste:** No comprobado con herramienta automática; recomendable validar con Lighthouse o axe en páginas clave (home, FAQ, 404).

### 4. “use client” y Server Components
- Casi todos los componentes bajo `src/components/` y `src/app/page.tsx` usan `"use client"` por Framer Motion, GSAP, `useTheme`, `useState`/`useEffect` o por ser hijos de client (accordion-custom, etc.).
- **Recomendación:** Mantener como está; la ganancia de convertir algo a Server Component sería marginal y podría requerir refactors (lifting state, separar partes estáticas). Revisar en el futuro si alguna página o sección pasa a ser 100 % estática.

### 5. Web manifest y tema
- **Ubicación:** `public/site.webmanifest`.
- **Actual:** `theme_color: "#6366f1"`, `background_color: "#F5F0EB"`. El resto del sitio usa brand ámbar (#F59E0B) y fondos del design system.
- **Recomendación:** Si se quiere coherencia con la marca, valorar alinear `theme_color` y `background_color` con las variables del design system (p. ej. color brand y color background).

### 6. Duplicación de estilos de accordion
- Los estilos del accordion están en `globals.css` (LAYER 10) y se usan tanto por `accordion-custom.tsx` como (en su día) por `accordion.tsx` (Radix). Al usar solo accordion-custom, no hay duplicación real; si se elimina `accordion.tsx`, la referencia a Radix en esos estilos (p. ej. “Desactivar animaciones default de Radix”) puede quedar como comentario histórico o simplificarse.

---

## Resumen

| Severidad | Cantidad | Acción principal |
|-----------|----------|-------------------|
| 🔴 Crítico | 2  | Verificar metadataBase, dominio y recursos estáticos en producción. |
| 🟡 Medio   | 4  | Revisar prefers-reduced-motion, CSS huérfano, accordion sin uso, not-found en dark. |
| 🟢 Menor  | 6  | Imports, contraste, “use client”, manifest, comentarios. |

**Nota:** No se ha modificado ningún archivo del proyecto para esta auditoría; solo se ha generado este reporte.
