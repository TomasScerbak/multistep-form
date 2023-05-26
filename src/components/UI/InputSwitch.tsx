import classes from "./InputSwitch.module.css";

type Props = {
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const InputSwitch = (props: Props) => {
  return (
    <div>
      <span>Monthly</span>
      <label className={classes.switch}>
        <input onClick={props.onClick} type="checkbox" />
        <span className={classes.slider}></span>
      </label>
      <span>Yearly</span>
    </div>
  );
};

export default InputSwitch;
