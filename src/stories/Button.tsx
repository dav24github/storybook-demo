export type ButtonProps = {
  label: string;
  size?: "lg" | "md" | "sm";
  background?: string;
  disabled?: boolean;
  onClick: () => void;
};

export const Button = ({
  disabled,
  label,
  size = "sm",
  background,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      style={{
        width: size === "lg" ? "400px" : size === "md" ? "300px" : "200px",
        background: background,
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
