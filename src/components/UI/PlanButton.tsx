type Props = {
  image: string;
  type: string;
  payment: string;
};

const PlanButton = (props: Props) => {
  return (
    <button>
      <div>
        <img src={props.image}></img>
      </div>
      <div>
        <div>{props.type}</div>
        <div>{props.payment}</div>
      </div>
    </button>
  );
};

export default PlanButton;
