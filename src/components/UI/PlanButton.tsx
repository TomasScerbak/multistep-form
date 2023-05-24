import classes from "./PlanButton.module.css";

type Props = {
  image: string;
  value: string;
  payment: number;
  type: string;
  name: string;
  id: string;
  // checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const PlanButton = (props: Props) => {
  return (
    <label className={classes.plan}>
      <input
        onChange={props.onChange}
        id={props.id}
        name={props.name}
        type={props.type}
      ></input>
      <div className={classes["plan-image"]}>
        <img src={props.image}></img>
      </div>
      <div>
        <div className={classes.variation}>{props.value}</div>
        <div className={classes.payment}>{`$${props.payment}/mo`}</div>
      </div>
    </label>
  );
};

export default PlanButton;
