/**
 * buttonのRecipe
 */
import { tv } from "tailwind-variants";

export const primaryButton = tv({
  base: "inline-flex border-none rounded-sm text-white font-bold bg-green-500",
  variants: {
    size: {
      sm: "h-7 px-2 py-1 text-xs",
      lg: "h-10 px-4 py-2 text-base",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "cursor-pointer hover:bg-green-600",
    },
  },
  defaultVariants: {
    size: "lg",
    disabled: false,
  },
});
