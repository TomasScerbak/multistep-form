import classes from "./ButtonPrimary.module.css";

type ButtonProps = {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
};

const ButtonPrimary = (props: ButtonProps) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={`${classes.btn}
      ${classes["btn--primary"]}`}
    >
      {props.children}
    </button>
  );
};

export default ButtonPrimary;
