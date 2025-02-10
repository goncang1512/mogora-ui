import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
}): ReactNode => {
  return <button className={`${className}`}>{children}</button>;
};
