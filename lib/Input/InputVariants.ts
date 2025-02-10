import { cva } from "class-variance-authority";

export const inputVariants = cva("", {
  variants: {
    variant: {
      default:
        "bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 outline-none focus:ring-blue-500",
      outlined:
        "block border border-gray-300 w-full px-2.5 pt-4 pb-2.5 text-sm text-gray-900 bg-transparent border rounded-lg appearance-none dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none peer",
      standart:
        "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
    },
    size: {
      small: "px-2 py-1 text-sm",
      normal: "p-2.5 text-sm w-full",
      large: "px-6 py-3 text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "normal",
  },
});

export const labelVariants = cva("", {
  variants: {
    variant: {
      default: "block text-gray-900 dark:text-white",
      outlined:
        "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 start-1",
      standart:
        "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
    },
    size: {
      small: "px-2 py-1 text-sm",
      normal: "text-sm w-max",
      large: "px-6 py-3 text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "normal",
  },
});

export const containerVariants = cva("", {
  variants: {
    variant: {
      default: "w-auto h-auto flex flex-col gap-1",
      outlined: "relative flex",
      standart: "relative z-0",
    },
    size: {
      small: "",
      normal: "",
      large: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "normal",
  },
});
