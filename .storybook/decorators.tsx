import { Decorator } from "@storybook/react";

export const withBackgroundColor: Decorator = (Story: any) => {
  return (
    <div
      style={{
        padding: "20px",
        background: "red",
        borderRadius: "20px",
      }}
    >
      <Story />
    </div>
  );
};
