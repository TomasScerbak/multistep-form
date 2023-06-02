import classes from "./Checkbox.module.css";

type Props = {
  id: number;
  header: string;
  text: string;
  payment: number;
  onClick: React.MouseEventHandler<HTMLInputElement>;
};

const CheckBox = (props: Props) => {
  return (
    <div className={classes["checkbox-wrapper"]}>
      <input onClick={props.onClick} type="checkbox"></input>
      <div>
        <h3>{props.header}</h3>
        <p>{props.text}</p>
      </div>
      <span>+ ${props.payment}/mo</span>
    </div>
  );
};

export default CheckBox;
