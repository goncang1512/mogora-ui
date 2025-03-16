import { cva } from "class-variance-authority";

export const buttonVariants = cva("cursor-pointer duration-150", {
  variants: {
    variant: {
      primary: "bg-primary hover:bg-primary/80 text-white rounded-md",
      secondary: "bg-secondary hover:bg-secondary/70 text-white rounded-md",
      success: "bg-success hover:bg-success/80 text-white rounded-md",
      danger: "bg-danger hover:bg-danger/80 text-white rounded-md",
      warning: "bg-warning hover:bg-yellow-400 text-black rounded-md",
      info: "bg-info hover:bg-info/80 text-white rounded-md",
      outline:
        "border border-blue-600 text-blue-600 hover:bg-blue-100 rounded-md",
      gost: "text-gray-700 hover:bg-gray-200 rounded-md",
      link: "text-blue-600 hover:underline rounded-md",
      clicki:
        "bg-white text-black border-1 border-slate-800 rounded-md shadow-[0px_4px_0px_#334155] dark:shadow-[0px_4px_0px_#64748b] transition-all duration-100 active:shadow-[0px_2px_0px_#334155] active:relative active:top-[2px]",
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
    variant: "primary",
    size: "normal",
  },
});
