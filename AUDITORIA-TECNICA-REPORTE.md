# REPORTE DE AUDITORÍA - LINK IA LAB

## 📊 RESUMEN EJECUTIVO

- **Total archivos analizados:** 28 (src/app, src/components, src/lib, configs)
- **Bugs críticos encontrados:** 2 (1 aplicado fix completo, 1 con causa raíz identificada + mitigación)
- **Bugs importantes:** 3
- **Mejoras recomendadas:** 5

---

## FASE 1: INVENTARIO DE ARCHIVOS

### src/app/
- `layout.tsx` – Layout raíz, metadata, fuentes, Header/Footer/CookieBanner/WhatsAppFloat
- `page.tsx` – Home: Hero (Framer Motion), Services, Process, Testimonials, FAQ, CTAFinal
- `globals.css` – Design tokens, base, accordion, buttons, cards, móvil, iOS, a11y
- `not-found.tsx`, `cookies/page.tsx`, `privacidad/page.tsx`, `terminos/page.tsx`

### src/components/
- **layout:** `Header.tsx`, `Footer.tsx`
- **sections:** `Services.tsx`, `Process.tsx`, `Testimonials.tsx`, `FAQ.tsx`, `CTAFinal.tsx`
- **shared:** `CookieBanner.tsx`, `WhatsAppFloat.tsx`
- **ui:** `accordion.tsx`, `button.tsx`, `badge.tsx`, `dialog.tsx`, `sheet.tsx`

### src/lib/
- `utils.ts` – `cn()` (clsx + tailwind-merge)
- `gsap.ts` – Registro de GSAP + ScrollTrigger en client

### Configuración
- `next.config.ts`, `package.json`, `postcss.config.mjs`, `eslint.config.mjs`
- `src/styles/fonts.ts` – Plus Jakarta, Instrument Serif

---

## 🔴 CRÍTICO (rompe funcionalidad)

### [BUG-001] Accordion: contenido sin animación (transición anulada por prefers-reduced-motion)

- **Archivo:** `src/app/globals.css`
- **Líneas:** 576-584 (LAYER 17: ACCESSIBILITY)
- **Código problemático:**

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- **Por qué falla:** La regla aplica `transition-duration: 0.01ms !important` a **todos** los elementos. Quien tiene "Reducir movimiento" activado en el SO (o en navegadores que lo respetan) ve todas las transiciones instantáneas, incluido el contenido del accordion. El chevron también usa `transition`; si en algún entorno el chevron sí anima, puede deberse a orden de reglas o a que el usuario no tiene reduce-motion, pero la regla sigue siendo demasiado agresiva y anula la animación del contenido del accordion en esos casos.
- **Solución aplicada:** Excluir explícitamente el accordion de la regla de reduced-motion y restaurar duración de transición para `.accordion-content`, `.accordion-content > div`, `.accordion-trigger` y `.accordion-trigger svg` (ver código en globals.css).

---

### [BUG-002] Process: cards invisibles en Xiaomi / cuando GSAP no corre

- **Archivos:** `src/components/sections/Process.tsx`
- **Problema:**  
  1) Las cards de desktop tenían `opacity-0` en el className. Si GSAP no ejecutaba (ScrollTrigger falla, refs no listos, viewport raro en algunos Android/Xiaomi), las cards quedaban siempre invisibles.  
  2) La rama móvil vs desktop dependía de `isMobile` (useState). En el primer render `isMobile` es `false`, así que se pintaba la rama desktop (cards con opacity-0). En dispositivos donde el viewport se reporta como ≥768 o hay retraso en el effect, el usuario podía quedarse viendo solo título y CTA.
- **Solución aplicada:**  
  1) Eliminado `opacity-0` de las cards de desktop; la opacidad la controla solo GSAP (`gsap.set` + timeline). Si GSAP no corre, las cards se ven.  
  2) Dejar de usar `isMobile` para decidir qué rama se renderiza: ambas ramas se renderizan siempre y se muestran/ocultan con CSS (`flex md:hidden` para móvil, `hidden md:flex` para desktop). Así el primer pintado es correcto según el viewport (media query) y no depende de JS.  
  3) Refs de cards solo en la rama desktop (para GSAP); la rama móvil no asigna `cardRefs` para no pisarlos.

---

## 🟡 IMPORTANTE (afecta UX)

### [BUG-003] Accordion: Radix no renderiza hijos cuando está cerrado

- **Archivo:** `node_modules/@radix-ui/react-collapsible` (CollapsibleContentImpl)
- **Comportamiento:** Radix hace `children: isOpen && children`. Cuando el ítem está cerrado, los hijos no están en el DOM, por lo que **no es posible animar el cierre** (solo la apertura puede tener transición cuando el contenido se monta).
- **Impacto:** La apertura puede animarse (grid + opacity); el cierre será siempre instantáneo mientras se use esta implementación.
- **Solución recomendada:** Aceptar que el cierre sea instantáneo o valorar un accordion propio que mantenga el contenido montado y solo cambie altura/opacidad vía CSS/estado.

### [BUG-004] Process: dependencia de refs en useLayoutEffect

- **Archivo:** `src/components/sections/Process.tsx`
- **Problema:** Si `section`, `trigger`, `cards`, `line` o `cta` son null (p. ej. hidratación o DOM no listo), el effect sale con `return` y GSAP no se configura. No hay reintento ni fallback.
- **Solución recomendada:** Usar un state tipo `gsapReady` tras el primer setup correcto, o un pequeño retry/requestAnimationFrame antes de salir, para entornos donde los refs llegan un frame tarde.

### [BUG-005] LAYER 15 (móvil) puede afectar transiciones

- **Archivo:** `src/app/globals.css` (max-width: 767px)
- **Problema:** Reglas que neutralizan `.animate-in` / `.animate-out` y slides de Tailwind. El accordion está excluido con `.accordion-content`, pero conviene revisar que ninguna regla nueva en móvil toque `.accordion-trigger` o sus hijos.

---

## 🟢 MEJORAS (code quality)

### [MEJORA-001] Detección móvil con matchMedia

- **Archivo:** `src/components/sections/Process.tsx`
- **Beneficio:** Misma fuente de verdad que el CSS (media query 768px), menos desfase entre layout CSS y estado JS.
- **Cambio sugerido:** Sustituir `window.innerWidth < 768` por `window.matchMedia('(max-width: 767px)').matches` y suscribirse a `change` para actualizar `isMobile`.

### [MEJORA-002] Clase `.process-desktop-card` sin uso

- **Archivo:** `src/components/sections/Process.tsx`
- **Beneficio:** Menos ruido o uso explícito para estilos/fallback.
- **Cambio sugerido:** Quitar la clase o usarla para un fallback de visibilidad (p. ej. en globals.css) si se desea un comportamiento extra cuando GSAP no está activo.

### [MEJORA-003] Card refs en desktop

- **Archivo:** `src/components/sections/Process.tsx`
- **Beneficio:** Claridad y evitar confusiones al tener dos ramas (móvil/desktop) en el DOM.
- **Estado:** Refs solo en la rama desktop; móvil ya no asigna `cardRefs`. Opcional: extraer constantes para anchos (280, 340, gap) para evitar magic numbers.

### [MEJORA-004] Tipado de refs en Process

- **Archivo:** `src/components/sections/Process.tsx`
- **Beneficio:** Menos riesgo de null y mejor autocompletado.
- **Cambio sugerido:** Asegurar que `cardRefs.current` se rellena solo en desktop y que los accesos en el effect comprueben length/refs válidos antes de animar.

### [MEJORA-005] Documentar dependencia de Radix en accordion

- **Archivo:** `src/components/ui/accordion.tsx` o README
- **Beneficio:** Queda claro que la animación de cierre está limitada por Radix.
- **Cambio sugerido:** Comentario breve indicando que el contenido se desmonta al cerrar (Radix) y que solo la apertura puede animarse con la configuración actual.

---

## 🔗 CONFLICTOS ENTRE ARCHIVOS

| Archivo A    | Archivo B     | Conflicto | Solución |
|-------------|---------------|-----------|----------|
| globals.css | accordion.tsx | `prefers-reduced-motion` aplicaba 0.01ms a todo y mataba la transición del contenido del accordion. | Excluir `.accordion-content` y `.accordion-trigger` y restaurar `transition-duration` en reduced-motion (aplicado). |
| globals.css | Process.tsx   | LAYER 15 en móvil desactiva animaciones/transiciones; `.process-svg-illustration` ya está excluida. | Mantener exclusiones; no aplicar reglas genéricas a componentes con transiciones propias. |
| Radix Collapsible | globals.css | Radix desmonta hijos cuando cerrado; nuestra animación CSS solo puede actuar en apertura. | Aceptar cierre instantáneo o plantear componente alternativo que mantenga contenido montado. |

---

## 📱 PROBLEMAS ESPECÍFICOS MÓVIL

| Dispositivo | Problema | Causa | Archivo | Solución |
|-------------|----------|--------|---------|----------|
| Xiaomi / Android | Cards de Process no se ven | 1) Rama desktop con `opacity-0` y GSAP no corre. 2) Primer render con `isMobile=false` pintaba desktop. | Process.tsx | Renderizar ambas ramas y mostrar/ocultar con CSS (md:hidden / md:flex). Quitar opacity-0 de las cards de desktop (aplicado). |
| iOS Safari | Posibles problemas con transform/fixed | Reglas específicas en LAYER 16 para `[data-slot="sheet-content"]` y overlay. | globals.css | Mantener el scope actual; no extender a .fixed/.sticky global. |
| Móvil genérico | Animaciones CSS desactivadas | LAYER 15 desactiva .animate-fade-in, etc., y neutraliza vars de Tailwind animate-in/out. | globals.css | Intencional para rendimiento; accordion excluido. |

---

## FASE 5: FIXES CRÍTICOS APLICADOS

### Fix 1: globals.css – prefers-reduced-motion

**ANTES:**
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**DESPUÉS:**
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  /* Restaurar transiciones del accordion (UX crítica) */
  .accordion-content,
  .accordion-content > div,
  .accordion-trigger,
  .accordion-trigger svg {
    transition-duration: 400ms !important;
    animation-duration: unset !important;
    animation-iteration-count: unset !important;
  }
}
```

**Qué cambió:** El accordion (contenido y trigger/chevron) queda fuera del efecto de reduced-motion en transiciones/animaciones, de modo que la apertura del contenido y la rotación del chevron sigan animándose.

---

### Fix 2: Process.tsx – Layout por CSS y cards visibles por defecto

**Cambios:**

1. **Rama móvil:** Ya no depende de `{isMobile && (...)}`. Siempre se renderiza con clase `flex ... md:hidden`, de modo que solo es visible en viewport &lt; 768px.
2. **Rama desktop:** Ya no depende de `{!isMobile && (...)}`. Siempre se renderiza con clase `hidden ... md:flex`, visible solo en viewport ≥ 768px.
3. **Cards desktop:** Se quitó `opacity-0` del className. La opacidad la controla solo GSAP; si GSAP no se ejecuta, las cards siguen visibles.
4. **Refs:** Solo las cards de la rama desktop asignan `cardRefs` (para GSAP); la rama móvil no usa esos refs.

**Qué se consigue:** Primer pintado correcto en cualquier dispositivo (incl. Xiaomi) según media query, y fallback visible de las cards si ScrollTrigger o los refs fallan.

---

## FASE 6: PROMPT DE SEGUIMIENTO

Usa el siguiente prompt para aplicar los bugs importantes (🟡) y mejoras (🟢) que no se aplicaron en esta auditoría:

```markdown
## Tarea: Bugs importantes y mejoras post-auditoría Link IA Lab

Contexto: Se realizó una auditoría técnica; los fixes críticos ya están aplicados.
Ahora hay que abordar los ítems IMPORTANTES y MEJORAS del reporte AUDITORIA-TECNICA-REPORTE.md.

### 1. [BUG-003] Accordion cierre instantáneo
- Revisar en el reporte la explicación sobre Radix (children: isOpen && children).
- Decidir: o se documenta en código que el cierre es intencionalmente instantáneo, o se explora un accordion alternativo que mantenga el contenido montado y anime cierre con CSS.

### 2. [BUG-004] Process – refs y GSAP
- En Process.tsx, en el useIsomorphicLayoutEffect que configura GSAP: si section/trigger/cards/line/cta son null, añadir un reintento (p. ej. requestAnimationFrame o setTimeout corto) una vez antes de salir, o un state "gsapReady" para evitar que un único frame de retraso deje las cards sin animar.

### 3. [BUG-005] Revisión LAYER 15 móvil
- En globals.css, en la sección @media (max-width: 767px), comprobar que ninguna regla nueva afecte a .accordion-trigger o a transiciones del accordion.

### 4. [MEJORA-001] Detección móvil con matchMedia
- En Process.tsx: sustituir el uso de window.innerWidth < 768 por window.matchMedia('(max-width: 767px)').matches y listener de 'change' para actualizar isMobile (y opcionalmente para el scroll de indicadores).

### 5. [MEJORA-002] Clase process-desktop-card
- En Process.tsx: quitar la clase .process-desktop-card si no se usa, o usarla en globals.css para un fallback de visibilidad cuando GSAP no esté activo.

### 6. [MEJORA-003/004] Constantes y refs
- En Process.tsx: extraer constantes para anchos de card (280, 340) y gap; revisar que los refs de desktop estén bien tipados y comprobados antes de usarlos en GSAP.

### 7. [MEJORA-005] Documentar limitación Radix
- En accordion.tsx (o en README): añadir un comentario breve indicando que el contenido del accordion se desmonta al cerrar (Radix) y que solo la animación de apertura está soportada con la configuración actual.

Aplicar los cambios y comprobar en desktop y móvil que el accordion y la sección Process se comportan como se espera.
```

---

*Reporte generado tras auditoría de archivos src/app, src/components, src/lib y configuración del proyecto Link IA Lab (Next.js 14, Tailwind v4, Radix, GSAP, Framer Motion).*
