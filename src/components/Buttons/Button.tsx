import { Button } from "antd";
import { ReactNode, MouseEventHandler, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  htmltype?: any;
  type?: any;
}

const ButtonComponent = ({
  htmltype,
  type,
  className,
  children,
  style,
  onClick,
}: ButtonProps) => {
  return (
    <Button
      htmltype={htmltype}
      type={type}
      className={className}
      style={style}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
