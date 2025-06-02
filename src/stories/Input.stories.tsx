import { Input } from "./Input";

export default {
  title: "Input",
  component: Input,
};

export const SmallInput = () => <Input name="small" />;

export const MediumInput = () => <Input name="medium" />;

export const LargeInput = () => <Input name="large" />;
