import "./button.scss";

interface button {
  children: any;
  color?: string;
  onClick?: any;
}

export const Button = ({ children, color = "primary", onClick }: button) => {
  return (
    <div className={`button button--${color}`} onClick={onClick}>
      {children}
    </div>
  );
};
