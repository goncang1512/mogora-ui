import { cva, VariantProps } from "class-variance-authority";
import React, { ReactNode, TextareaHTMLAttributes } from "react";
import { cn } from "../utils/utils";

interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    VariantProps<typeof texareaVariant> {}

const texareaVariant = cva("", {
  variants: {
    variant: {
      default:
        "border-2 dark:border-slate-600 border-slate-300 rounded-md focus:outline text-black dark:text-slate-200",
      underline:
        "border-b-2 outline-none dark:border-slate-600 border-slate-300 text-black dark:text-slate-200",
    },
    size: {
      small: "px-2 py-1 text-sm",
      normal: "p-2.5 text-sm w-full",
      large: "px-6 py-3 text-lg",
    },
    theme: {
      primary: "focus:outline-blue-500 focus:border-blue-500",
      secondary: "focus:outline-gray-600 focus:border-gray-600",
      danger: "focus:outline-red-600 focus:border-red-600",
      warning: "focus:outline-yellow-500 focus:border-yellow-500",
      success: "focus:outline-green-600 focus:border-green-600",
      info: "focus:outline-cyan-500 focus:border-cyan-500",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "normal",
    theme: "primary",
  },
});

export const Textarea: React.FC<TextareaProps> = ({
  className,
  variant,
  size,
  theme,
  placeholder,
  ...props
}): ReactNode => {
  return (
    <textarea
      placeholder={placeholder ?? "Type your message here"}
      className={cn(texareaVariant({ className, variant, size, theme }))}
      {...props}
    />
  );
};
