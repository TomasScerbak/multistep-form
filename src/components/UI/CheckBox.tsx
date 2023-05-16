import classes from "./CheckBox.module.css";

const CheckBox = () => {
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

export default CheckBox;
