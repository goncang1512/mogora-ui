"use client";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "../utils/utils";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  className?: string;
}

const inputVariants = cva("", {
  variants: {
    variant: {
      bordered:
        "border-2 dark:border-slate-600 border-slate-300 rounded-md focus:outline text-black dark:text-slate-200",
      underline:
        "border-b-2 outline-none dark:border-slate-600 border-slate-300 text-black dark:text-slate-200",
    },
    size: {
      small: "px-2 py-1 text-sm",
      normal: "p-2.5 text-base w-full",
      large: "px-6 py-3 text-lg",
    },
    theme: {
      primary: "focus:outline-primary focus:border-primary",
      secondary: "focus:outline-secondary focus:border-secondary",
      danger: "focus:outline-danger focus:border-danger",
      warning: "focus:outline-warning focus:border-warning",
      success: "focus:outline-success focus:border-success",
      info: "focus:outline-info focus:border-info",
      accent: "focus:outline-accent focus:border-accent",
    },
  },
  defaultVariants: {
    variant: "bordered",
    size: "normal",
    theme: "primary",
  },
});

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, theme, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(inputVariants({ className, variant, size, theme }))}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
