export const Button = ({
  label,
  size = "sm",
  background,
  onClick,
}: {
  label: string;
  size?: "lg" | "md" | "sm";
  background?: string;
  onClick: () => void;
}) => {
  return (
    <button
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
