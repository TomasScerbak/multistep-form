import classes from "./InputSwitch.module.css";

const InputSwitch = () => {
  return (
    <div>
      <span>Monthly</span>
      <label className={classes.switch}>
        <input type="checkbox" />
        <span className={classes.slider}></span>
      </label>
      <span>Yearly</span>
    </div>
  );
};

export default InputSwitch;
