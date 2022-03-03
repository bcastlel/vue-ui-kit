const FOCUSABLE_ELEMENTS_SELECTOR = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export const getFocusableElement = (container: HTMLElement): HTMLElement | null => {
  const focusableElements = container.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR);

  return Array.from(focusableElements).find(
    (element) => !element.hasAttribute('disabled'),
  ) as HTMLElement | undefined ?? null;
};
