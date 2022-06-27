import React, { ReactElement } from "react";
import { StyledButton } from "styles/components/Button/index";
export interface IButtonProps {
  label: ReactElement | string;
  onClick?: () => void;
  variant?: "contained" | "text" | "outline";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  label,
  variant,
  type,
  ...rest
}: IButtonProps) => <StyledButton>{label}</StyledButton>;

Button.defaultProps = {
  variant: "contained",
};

export default Button;
