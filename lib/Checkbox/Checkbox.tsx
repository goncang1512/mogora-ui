import { forwardRef, LabelHTMLAttributes } from "react";
import { cn } from "../utils/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Check } from "lucide-react";

const checkboxVariants = cva(
  "rounded-md border transition-all border w-max flex items-center justify-center cursor-pointer peer-checked:bg-blue-500 peer-checked:text-white",
  {
    variants: {
      variant: {
        primary: "text-primary peer-checked:bg-primary peer-checked:text-white",
        success: "text-success peer-checked:bg-success peer-checked:text-white",
        danger: "text-danger peer-checked:bg-danger peer-checked:text-white",
        warning: "text-warning peer-checked:bg-warning peer-checked:text-white",
        accent: "text-accent peer-checked:bg-accent peer-checked:text-white",
        info: "text-info peer-checked:bg-info peer-checked:text-white",
      },
      size: {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface CheckboxProps
  extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "size">,
    VariantProps<typeof checkboxVariants> {
  name: string;
}

export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
  ({ variant, size, className, name, ...props }, ref) => {
    return (
      <label
        htmlFor={name}
        ref={ref}
        className={cn("flex items-center gap-2 cursor-pointer", className)}
        {...props}
      >
        <input id={name} name={name} type="checkbox" hidden className="peer" />
        <span
          className={cn(
            "rounded-md border transition-all flex justify-center items-center",
            checkboxVariants({ variant, size })
          )}
        >
          <Check />
        </span>
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
