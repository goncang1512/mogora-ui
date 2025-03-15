import { cva } from "class-variance-authority";

const variantKeys = ["default", "zebra", "bordered"] as const;
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
      bordered:
        "border-separate border  border-gray-300 rounded-md border-spacing-0",
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
      bordered: "",
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

const cellVariants = cva("text-start py-2 px-2 ", {
  variants: {
    variant: createVariant({
      default: "",
      zebra: "",
      bordered: "border-t border-r border-gray-300 last:border-r-0",
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

const headerCellVariant = cva("font-medium text-start px-2 py-2", {
  variants: {
    variant: createVariant({
      default: "",
      zebra: "",
      bordered: "border-r border-gray-300 last:border-r-0",
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

const headerVariant = cva("font-medium text-start px-2 py-2 bg-transparent", {
  variants: {
    variant: createVariant({
      default: "",
      zebra: "",
      bordered: "bg-gray-200 border-b",
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

const bodyVariant = cva("bg-transparent", {
  variants: {
    variant: createVariant({
      default: "",
      zebra: "",
      bordered: "overflow-hidden rounded-b-md",
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

export {
  tableVariants,
  rowVariants,
  cellVariants,
  headerCellVariant,
  headerVariant,
  bodyVariant,
};
