import React, { InputHTMLAttributes, JSX, ReactNode, useState } from "react";
import { cn } from "../utils";
import { VariantProps } from "class-variance-authority";
import {
  inputVariants,
  labelVariants,
  containerVariants,
} from "./InputVariants";
import { Eye, EyeClosed } from "lucide-react";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    VariantProps<typeof inputVariants>,
    VariantProps<typeof labelVariants>,
    VariantProps<typeof containerVariants> {
  children?: React.ReactNode;
  className?: string;
  name: string;
  eye?: JSX.Element;
  eyeClose?: JSX.Element;
}

const floating = ["outlined", "standart"];

export const PasswordField: React.FC<InputProps> = ({
  children,
  className,
  name,
  variant,
  size,
  eye,
  eyeClose,
  ...props
}): ReactNode => {
  const [seePassword, setSeePassword] = useState(false);
  return (
    <div className={cn(containerVariants({ variant, size }))}>
      {!floating.includes(String(variant)) && (
        <label className={cn(labelVariants({ variant, size }))} htmlFor={name}>
          {children}
        </label>
      )}
      <div className="w-full h-auto relative">
        <input
          id={name}
          name={name}
          type={seePassword ? "text" : "password"}
          className={cn(inputVariants({ className, variant, size }), "pr-8")}
          {...props}
        />
        <button
          className="absolute right-0 inset-y-0 w-10 flex items-center justify-center cursor-pointer"
          type="button"
          onClick={() => setSeePassword(!seePassword)}
        >
          {seePassword
            ? eye ?? <Eye size={20} />
            : eyeClose ?? <EyeClosed size={20} />}
        </button>
        {floating.includes(String(variant)) && (
          <label
            className={cn(labelVariants({ variant, size }))}
            htmlFor={name}
          >
            {children}
          </label>
        )}
      </div>
    </div>
  );
};
