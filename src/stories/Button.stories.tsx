import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button as ButtonComponent, Img } from "components";

export default {
  title: "ecomm_app_2/Buttons",
  component: ButtonComponent,
  argTypes: {
    children: { control: "text" },
    leftIcon: {
      table: {
        disable: true,
      },
    },
    rightIcon: {
      table: {
        disable: true,
      },
    },
  },
};

const Template: Story<any> = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});

Button.args = {
  className: "flex items-center justify-center",
  variant: "FillGray800",
  size: "lg",
  children: "Button",
};

export const LeftIconButton = Template.bind({});

LeftIconButton.args = {
  className: "flex items-center justify-center",
  variant: "FillGray800",
  size: "lg",
  children: "Button",
  leftIcon: (
    <Img
      src="images/img_arrowright.svg"
      alt="img"
      className="w-[25px] float-left mr-[10px]"
    />
  ),
};

export const RightIconButton = Template.bind({});

RightIconButton.args = {
  className: "flex items-center justify-center",
  variant: "FillGray800",
  size: "lg",
  children: "Button",
  rightIcon: (
    <Img
      src="images/img_arrowright.svg"
      alt="img"
      className="w-[25px] float-right ml-[10px]"
    />
  ),
};
