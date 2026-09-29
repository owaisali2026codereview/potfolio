/**
 * Formats a project index as a 2-digit zero-padded string (e.g. 01, 02)
 */
export function formatProjectNumber(index: number): string {
  return String(index + 1).padStart(2, '0');
}

/**
 * Truncate text cleanly with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '...';
}

/**
 * Safe scroll to element by ID
 */
export function scrollToElement(elementId: string, offset = 80): void {
  const target = document.getElementById(elementId);
  if (!target) return;
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  });
}
