import React from "react";

const variantClasses = {
  h1: "font-normal sm:text-[48px] md:text-[48px] text-[96px]",
  h2: "font-bold sm:text-[48px] md:text-[48px] text-[72px]",
  h3: "font-bold sm:text-[48px] md:text-[48px] text-[64px]",
  h4: "font-bold sm:text-[42px] md:text-[48px] text-[56px]",
  h5: "sm:text-[32px] md:text-[34px] text-[36px]",
  h6: "sm:text-[20px] md:text-[22px] text-[24px]",
  body1: "text-[18px]",
  body2: "font-normal text-[14px]",
  body3: "font-bold text-[128px] sm:text-[48px] md:text-[48px]",
} as const;

export type TextProps = Partial<{
  className: string;
  variant: keyof typeof variantClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className,
  variant,
  as,
  ...restProps
}) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
