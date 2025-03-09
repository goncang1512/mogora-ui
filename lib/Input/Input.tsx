import { cva, VariantProps } from "class-variance-authority";
import React, { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/utils";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  className?: string;
}

const inputVariants = cva("", {
  variants: {
    variant: {
      default:
        "border-2 dark:border-slate-600 border-slate-300 rounded-md outline-none focus:ring-2 focus:border-none text-black dark:text-slate-200",
      underline:
        "border-b-2 outline-none dark:border-slate-600 border-slate-300 text-black dark:text-slate-200",
    },
    size: {
      small: "px-2 py-1 text-sm",
      normal: "p-2.5 text-base w-full",
      large: "px-6 py-3 text-lg",
    },
    theme: {
      primary: "focus:ring-blue-500 focus:border-blue-500",
      secondary: "focus:ring-gray-600 focus:border-gray-600",
      danger: "focus:ring-red-600 focus:border-red-600",
      warning: "focus:ring-yellow-500 focus:border-yellow-500",
      success: "focus:ring-green-600 focus:border-green-600",
      info: "focus:ring-cyan-500 focus:border-cyan-500",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "normal",
    theme: "primary",
  },
});

export const Input: React.FC<InputProps> = ({
  className,
  variant,
  size,
  theme,
  ...props
}): ReactNode => {
  return (
    <input
      className={cn(inputVariants({ className, variant, size, theme }))}
      {...props}
    />
  );
};
