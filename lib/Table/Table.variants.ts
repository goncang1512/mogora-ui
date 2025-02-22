import { cva } from "class-variance-authority";

const variantKeys = ["default", "zebra"] as const;
const sizeKeys = ["default", "normal"] as const;

const createVariant = (values: Record<(typeof variantKeys)[number], string>) =>
  values;
const createSize = (values: Record<(typeof sizeKeys)[number], string>) =>
  values;

const tableVariants = cva("w-full font-poppins", {
  variants: {
    variant: createVariant({
      default: "",
      zebra: "",
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
});

const rowVariants = cva("", {
  variants: {
    variant: createVariant({
      default:
        "text-start border-gray-300  hover:bg-slate-100 duration-100 border-b",
      zebra: "odd:bg-white even:bg-gray-100 hover:bg-gray-200",
    }),
    size: createSize({
      default: "px-2",
      normal: "",
    }),
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export { tableVariants, rowVariants };
