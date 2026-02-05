type EventParams = {
  action: string
  category: string
  label?: string
  value?: number
}

export const trackEvent = ({
  action,
  category,
  label,
  value,
}: EventParams) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export const analytics = {
  clickWhatsApp: (location: string) =>
    trackEvent({
      action: "click_whatsapp",
      category: "conversion",
      label: location,
    }),

  clickCalendar: (location: string) =>
    trackEvent({
      action: "click_calendar",
      category: "conversion",
      label: location,
    }),

  clickPhone: (location: string) =>
    trackEvent({
      action: "click_phone",
      category: "conversion",
      label: location,
    }),

  clickEmail: (location: string) =>
    trackEvent({
      action: "click_email",
      category: "conversion",
      label: location,
    }),

  scrollDepth: (percentage: number) =>
    trackEvent({
      action: "scroll_depth",
      category: "engagement",
      value: percentage,
    }),

  viewSection: (sectionName: string) =>
    trackEvent({
      action: "view_section",
      category: "engagement",
      label: sectionName,
    }),

  clickCTA: (ctaName: string) =>
    trackEvent({
      action: "click_cta",
      category: "conversion",
      label: ctaName,
    }),

  toggleDarkMode: (mode: string) =>
    trackEvent({
      action: "toggle_theme",
      category: "engagement",
      label: mode,
    }),
}
