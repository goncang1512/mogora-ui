import { cva } from "class-variance-authority";

const variantKeys = ["default", "underline"] as const;
const sizeKeys = ["default", "normal"] as const;

const createVariant = (values: Record<(typeof variantKeys)[number], string>) =>
  values;
const createSize = (values: Record<(typeof sizeKeys)[number], string>) =>
  values;

export const tabsVarianst = cva(
  "gap-2 bg-gray-100 inline-flex p-1 rounded-md",
  {
    variants: {
      variant: createVariant({
        default: "",
        underline: "bg-transparent",
      }),
      size: createSize({
        default: "",
        normal: "",
      }),
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export const triggerVarianst = cva(
  "data-[state=open]:bg-white data-[state=open]:shadow-xl px-2 py-1 rounded-md",
  {
    variants: {
      variant: createVariant({
        default: "",
        underline:
          "data-[state=open]:bg-transparent data-[state=open]:border-b-[2px] rounded-none data-[state=open]:shadow-none",
      }),
      size: createSize({
        default: "",
        normal: "",
      }),
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
