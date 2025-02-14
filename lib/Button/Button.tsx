import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/utils";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./variants";

interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant,
  size,
  ...props
}): ReactNode => {
  return (
    <button
      className={cn(buttonVariants({ className, variant, size }))}
      {...props}
    >
      {children}
    </button>
  );
};

export type { ButtonProps };
