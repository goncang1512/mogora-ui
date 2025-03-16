import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../utils/utils";
import { forwardRef } from "react";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "border-transparent bg-primary text-white shadow hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-white hover:bg-secondary/80",
        outline: "text-foreground",
        ghost: "text-primary border-none",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, children, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant }), className)}
        title={typeof children === "string" ? children : undefined}
        {...props}
      >
        {children}
      </div>
    );
  }
);
