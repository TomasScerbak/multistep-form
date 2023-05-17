import classes from "./Checkbox.module.css";

type Props = {
  header: string;
  text: string;
  payment: number;
};

const CheckBox = (props: Props) => {
  return (
    <div className={classes["checkbox-wrapper"]}>
      <input type="checkbox"></input>
      <div>
        <h3>{props.header}</h3>
        <p>{props.text}</p>
      </div>
      <span>{props.payment}</span>
    </div>
  );
};

export default CheckBox;
