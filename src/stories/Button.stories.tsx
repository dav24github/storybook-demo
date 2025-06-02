import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    size: {
      control: "select",
      option: ["lg", "md", "sm"],
    },
    background: {
      control: "color",
    },
  },

  // decorators: [
  // (Story: any) => {
  //   return (
  //     <div
  //       style={{
  //         padding: "20px",
  //         background: "red",
  //         borderRadius: "8px",
  //       }}
  //     >
  //       <Story />
  //     </div>
  //   );
  // },
  // ],
};

export const Default = {
  args: {
    size: "md",
    label: "Medium",
    onClick: () => console.log("Click me"),
  },
};

export const SmallButton = {
  args: {
    size: "sm",
    label: "Small",
    onClick: () => console.log("Click me"),
  },
};

// export const MediumButton = () => <Button>Medium</Button>;

// export const LargeButton = () => <Button>Large</Button>;
