import React, { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils";
import { VariantProps } from "class-variance-authority";
import {
  inputVariants,
  labelVariants,
  containerVariants,
} from "./InputVariants";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants>,
    VariantProps<typeof labelVariants>,
    VariantProps<typeof containerVariants> {
  children?: React.ReactNode;
  className?: string;
  name: string;
}

const floating = ["outlined", "standart"];

export const Input: React.FC<InputProps> = ({
  children,
  className,
  name,
  variant,
  size,
  ...props
}): ReactNode => {
  return (
    <div className={cn(containerVariants({ variant, size }))}>
      {!floating.includes(String(variant)) && (
        <label className={cn(labelVariants({ variant, size }))} htmlFor={name}>
          {children}
        </label>
      )}
      <input
        id={name}
        name={name}
        className={cn(inputVariants({ className, variant, size }))}
        {...props}
      />
      {floating.includes(String(variant)) && (
        <label className={cn(labelVariants({ variant, size }))} htmlFor={name}>
          {children}
        </label>
      )}
    </div>
  );
};
