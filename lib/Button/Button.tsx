import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { cn } from "../utils/utils";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./variants";

export interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, size, ...props }, ref): ReactNode => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ className, variant, size }))}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
