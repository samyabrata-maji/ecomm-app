import React from "react";

const variants = {
  FillGray800: "bg-gray_800 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-gray_800",
  OutlineGray500: "border-[2px] border-gray_500 border-solid text-gray_500",
  OutlineBluegray100:
    "border-[1px] border-bluegray_100 border-solid text-gray_800",
  OutlineGray800: "border-[1px] border-gray_800 border-solid text-gray_800",
  OutlineBluegray100_1:
    "bg-gray_800 border-[1px] border-bluegray_100 border-solid text-white_A700",
  icbFillGray800: "bg-gray_800",
  icbFillWhiteA700: "bg-white_A700",
} as const;
const sizes = {
  sm: "p-[1rem]",
  md: "px-[2rem] py-[1rem]",
  lg: "px-[2rem] py-[1rem]",
  xl: "px-[10px] py-[16px]",
  "2xl": "px-[1.5rem] py-[1rem]",
  "3xl": "px-[2rem] py-[1.5rem]",
  "4xl": "sm:pl-[20px] pl-[23px] py-[23px]",
  "5xl": "sm:pr-[20px] pr-[35px] py-[35px]",
  smIcn: "p-[5px]",
  mdIcn: "p-[10px]",
  lgIcn: "p-[16px]",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;

    variant: keyof typeof variants;
    size: keyof typeof sizes;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  variant = "",
  size = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(size && sizes[size]) || ""} ${
        (variant && variants[variant]) || ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
