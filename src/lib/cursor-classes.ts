/**
 * Centralized cursor style classes
 * Eliminates duplication across components
 */

export const cursorClasses = {
  // Interactive elements
  interactive: "cursor-pointer transition-colors",
  default: "cursor-default",

  // Disabled states
  disabled: "cursor-not-allowed opacity-50 pointer-events-none",

  // Text selection
  notAllowed: "cursor-not-allowed",

  // Utility combinations
  button:
    "cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
  menuItem:
    "cursor-default select-none transition-colors focus:bg-accent focus:text-accent-foreground",
  menuItemDisabled: "cursor-default select-none pointer-events-none opacity-50",
} as const;

/**
 * Get cursor classes for disabled state
 */
export const getDisabledCursorClass = (isDisabled: boolean): string => {
  return isDisabled ? cursorClasses.disabled : "";
};

/**
 * Combine cursor classes safely
 */
export const mergeCursorClasses = (...classes: (string | undefined)[]): string => {
  return classes.filter(Boolean).join(" ");
};
