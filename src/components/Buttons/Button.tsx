import { Button } from "antd";
import { ReactNode, MouseEventHandler, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  htmlType?: any;
  type?: any;
}

const ButtonComponent = ({
  htmlType,
  type,
  className,
  children,
  style,
  onClick,
}: ButtonProps) => {
  return (
    <Button
      htmlType={htmlType}
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
