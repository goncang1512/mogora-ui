import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils";
import { cva, VariantProps } from "class-variance-authority";

interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}

const buttonVariants = cva("cursor-pointer duration-150", {
  variants: {
    variant: {
      primary: "bg-blue-600 hover:bg-blue-500 text-white rounded-md",
      secondry: "bg-gray-600 hover:bg-gray-500 text-white rounded-md",
      success: "bg-green-600 hover:bg-green-500 text-white rounded-md",
      danger: "bg-red-600 hover:bg-red-500 text-white rounded-md",
      warning: "bg-yellow-500 hover:bg-yellow-400 text-black rounded-md",
      info: "bg-cyan-500 hover:bg-cyan-400 text-white rounded-md",
      outline:
        "border border-blue-600 text-blue-600 hover:bg-blue-100 rounded-md",
      gost: "text-gray-700 hover:bg-gray-200 rounded-md",
      link: "text-blue-600 hover:underline rounded-md",
      dark: "bg-slate-800 hover:bg-slate-700 text-white rounded-md",
      clicki:
        "bg-white text-black border-1 border-slate-800 rounded-md shadow-[0px_4px_0px_#334155] transition-all duration-100 active:shadow-[0px_2px_0px_#334155] active:relative active:top-[2px]",
      shadow:
        "border-2 border-slate-800 rounded-md bg-white shadow-md active:shadow-inner active:bg-gray-200 active:scale-95 transition",
    },
    size: {
      small: "px-2 py-1 text-sm",
      normal: "px-4 py-2 text-base",
      large: "px-6 py-3 text-lg",
    },
  },
  defaultVariants: {
    variant: "dark",
    size: "normal",
  },
});

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
