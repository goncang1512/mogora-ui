import { forwardRef, LabelHTMLAttributes } from "react";
import { cn } from "../utils/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Check } from "lucide-react";

const checkboxVariants = cva(
  "rounded-md border transition-all border w-max flex items-center justify-center cursor-pointer peer-checked:bg-blue-500 peer-checked:text-white",
  {
    variants: {
      variant: {
        default:
          "text-slate-900 peer-checked:bg-slate-800 peer-checked:text-white",
        primary:
          "text-blue-600 peer-checked:bg-blue-500 peer-checked:text-white",
        success:
          "text-green-600 peer-checked:bg-green-500 peer-checked:text-white",
        danger: "text-red-600 peer-checked:bg-red-500 peer-checked:text-white",
        warning:
          "text-yellow-500 peer-checked:bg-yellow-500 peer-checked:text-white",
      },
      size: {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
      },
    },
    defaultVariants: {
      variant: "default",
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
