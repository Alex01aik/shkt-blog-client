import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import "./styles.css";

export type ButtonProps = {
  isAlternative?: boolean;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: React.FC<ButtonProps> = ({ isAlternative, ...props }) => {
  return (
    <button {...props} data-alternative={isAlternative}>
      {props.children}
    </button>
  );
};

export default Button;
