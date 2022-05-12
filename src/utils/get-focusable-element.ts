const FOCUSABLE_ELEMENTS_SELECTOR = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export const getFocusableElement = (container: HTMLElement): HTMLElement | undefined => {
  const focusableElements = container.querySelectorAll(
    FOCUSABLE_ELEMENTS_SELECTOR,
  ) as NodeListOf<HTMLElement>;

  return Array.from(focusableElements).find(
    (element) => !element.hasAttribute('disabled'),
  );
};
