import { Button, type ButtonProps } from "./Button";
import { type Meta, type StoryObj } from "@storybook/react";

const meta: Meta<ButtonProps> = {
  title: "ts/button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      option: ["lg", "md", "sm"],
    },
    background: {
      control: "color",
    },
  },
};

export default meta;

// ***************************************************************************

export const Default: StoryObj<ButtonProps> = {
  args: {
    label: "Click me",
    size: "md",
    background: "#007bff",
    disabled: true,
  },
};

export const Default2: StoryObj<ButtonProps> = {
  args: {
    label: "Click me",
    size: "sm",
    background: "#0fffff",
    disabled: false,
  },
};
