import { cva } from "class-variance-authority";

const buttonStyles = cva("px-4 py2 rounded", {
  variants: {
    color: {
      primary: "bg-blue",
      secondary: "bg-red",
    },
    state: {
      active: "bg-blue-700",
      disabled: "bg-blue-0",
    },
  },

  defaultVariants: {
    color: "primary",
    state: "active",
  },
});

export const Button = ({ color, state }: any) => {
  return <div className={buttonStyles({ color, state })}>Button</div>;
};
