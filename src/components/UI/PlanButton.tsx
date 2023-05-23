type Props = {
  image: string;
  type: string;
  payment: number;
};

const PlanButton = (props: Props) => {
  return (
    <div>
      <div>
        <img src={props.image}></img>
      </div>
      <div>
        <div>{props.type}</div>
        <div>{props.payment}</div>
      </div>
      <input type={props.type}></input>
    </div>
  );
};

export default PlanButton;
