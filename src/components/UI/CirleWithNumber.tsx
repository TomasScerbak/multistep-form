import classes from "./CircleWithNumber.module.css";

type Props = {
  page: number;
};

const CirleWithNumber = (props: Props) => {
  const numberInCricle: number[] = [1, 2, 3, 4];

  return (
    <div className={classes["circle-container"]}>
      {numberInCricle.map((number, index) => (
        <div
          key={index}
          className={`${classes.circle} ${
            index === props.page ? `${classes["circle--active"]}` : ""
          }`}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default CirleWithNumber;
