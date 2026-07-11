"use client";

import { useCallback, useState } from "react";

/**
 * Small reusable boolean-toggle hook.
 * Used by the mobile navigation menu; safe to reuse anywhere a simple
 * open/closed or on/off state is needed (accordions, modals, dropdowns).
 */
export function useToggle(initial = false): [boolean, () => void, (value: boolean) => void] {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue((v) => !v), []);
  return [value, toggle, setValue];
}
