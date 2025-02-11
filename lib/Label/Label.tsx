import { cva, VariantProps } from "class-variance-authority";
import React, { LabelHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/utils";

interface LabelProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  children?: ReactNode;
  htmlFor?: string;
  className?: string;
}

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-slate-400"
);

export const Label: React.FC<LabelProps> = ({
  children,
  htmlFor,
  className,
  ...props
}): ReactNode => {
  return (
    <label
      className={cn(labelVariants(), className)}
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </label>
  );
};
