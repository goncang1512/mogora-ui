import React from "react";
import {
  ContentProps,
  CardComponentType,
  PictureProps,
  TitleProps,
  HeaderProps,
  FooterProps,
  DescriptionProps,
} from "./types";
import { cn } from "../utils/utils";

export const Card: CardComponentType = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "max-w-sm border border-gray-200 dark:border-gray-700 shadow-md dark:shadow-lg rounded-md flex items-center justify-center flex-col",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const Picture: React.FC<PictureProps> = ({ className, ...props }) => {
  return <img className={cn("w-full rounded-t-md", className)} {...props} />;
};

const Title: React.FC<TitleProps> = ({ children, className, ...props }) => {
  return (
    <h1
      className={cn("font-bold text-start dark:text-slate-300", className)}
      {...props}
    >
      {children}
    </h1>
  );
};

const Description: React.FC<DescriptionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p className={cn("text-gray-500 dark:text-gray-400", className)} {...props}>
      {children}
    </p>
  );
};

const Header: React.FC<HeaderProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn("text-start w-full pt-3 px-3", className)} {...props}>
      {children}
    </div>
  );
};

const Content: React.FC<ContentProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "px-3 pb-3 pt-2 font-poopins text-slate-700 dark:text-slate-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const Footer: React.FC<FooterProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn("p-3 flex justify-start w-full", className)} {...props}>
      {children}
    </div>
  );
};

Card.Picture = Picture;
Card.Header = Header;
Card.Title = Title;
Card.Description = Description;
Card.Content = Content;
Card.Footer = Footer;
