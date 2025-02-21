import { createContext, useContext, useState } from "react";
import {
  AvatarComponent,
  AvatarType,
  FallbackProps,
  ImageProps,
} from "./types";
import { cn } from "../utils/utils";

const AvatarContext = createContext<AvatarType>({} as AvatarType);

export const Avatar: AvatarComponent = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <AvatarContext.Provider
      value={{
        isLoaded,
        setIsLoaded,
        hasError,
        setHasError,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AvatarContext.Provider>
  );
};

const Image: React.FC<ImageProps> = ({ src, alt, className, ...props }) => {
  const { isLoaded, hasError, setIsLoaded, setHasError, setIsLoading } =
    useContext(AvatarContext);

  const handleLoad = () => {
    setIsLoaded(true);
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  return (
    <>
      {!hasError && (
        <img
          src={src}
          alt={alt}
          {...props}
          style={{ display: isLoaded ? "block" : "none" }}
          onLoad={handleLoad}
          onError={handleError}
          className={cn("size-10 rounded-full", className)}
        />
      )}
    </>
  );
};

const Fallback: React.FC<FallbackProps> = ({ children }) => {
  const { hasError, isLoading } = useContext(AvatarContext);

  return (
    <>
      {(isLoading || hasError) && (
        <div className="bg-gray-300 text-white rounded-full w-10 h-10 flex items-center justify-center">
          {children}
        </div>
      )}
    </>
  );
};

Avatar.Image = Image;
Avatar.Fallback = Fallback;
