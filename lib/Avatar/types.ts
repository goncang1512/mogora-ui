import React, {
  Dispatch,
  HTMLAttributes,
  ImgHTMLAttributes,
  ReactNode,
  SetStateAction,
} from "react";

interface AvatarType {
  isLoaded: boolean;
  setIsLoaded: Dispatch<SetStateAction<boolean>>;
  hasError: boolean;
  setHasError: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

type AvatarComponent = React.FC<AvatarProps> & {
  Image: React.FC<ImageProps>;
  Fallback: React.FC<FallbackProps>;
};

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

interface FallbackProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export type {
  AvatarComponent,
  AvatarProps,
  AvatarType,
  ImageProps,
  FallbackProps,
};
