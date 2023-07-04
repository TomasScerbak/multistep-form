import classes from "./InputSwitch.module.css";

type Props = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
};

const InputSwitch = (props: Props) => {
  return (
    <div>
      <span>Monthly</span>
      <label className={classes.switch}>
        <input
          checked={props.checked}
          onChange={props.onChange}
          type="checkbox"
        />
        <span className={classes.slider}></span>
      </label>
      <span>Yearly</span>
    </div>
  );
};

export default InputSwitch;
