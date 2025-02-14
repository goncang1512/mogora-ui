import React, { HTMLAttributes, ImgHTMLAttributes, ReactNode } from "react";

type CardComponentType = React.FC<CardProps> & {
  Picture: React.FC<PictureProps>;
  Title: React.FC<TitleProps>;
  Content: React.FC<ContentProps>;
  Header: React.FC<HeaderProps>;
  Footer: React.FC<FooterProps>;
  Description: React.FC<DescriptionProps>;
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface PictureProps extends ImgHTMLAttributes<HTMLImageElement> {}

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface DescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export type {
  CardComponentType,
  CardProps,
  PictureProps,
  ContentProps,
  TitleProps,
  HeaderProps,
  FooterProps,
  DescriptionProps,
};
