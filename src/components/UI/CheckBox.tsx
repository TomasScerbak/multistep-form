import { useDispatch, useSelector } from "react-redux";
import { saveAddon, removeAddon } from "../../store/addonsSlice";
import { RootState } from "../../store";

import classes from "./Checkbox.module.css";

type Props = {
  id: number;
  header: string;
  text: string;
  payment: number;
};

const CheckBox = (props: Props) => {
  const dispatch = useDispatch();
  const inputSwitch = useSelector((state: RootState) => state.persistedReducer);

  const onInputCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      dispatch(
        saveAddon({
          id: props.id,
          header: props.header,
          payment:
            inputSwitch.inputSwitch.clicked === true
              ? props.payment * 10
              : props.payment,
        })
      );
    } else {
      dispatch(removeAddon(props.id));
    }
  };
  return (
    <div className={classes["checkbox-wrapper"]}>
      <input onChange={onInputCheck} type="checkbox"></input>
      <div>
        <h3>{props.header}</h3>
        <p>{props.text}</p>
      </div>
      <span>
        + $
        {inputSwitch.inputSwitch.clicked ? props.payment * 10 : props.payment}
        /mo
      </span>
    </div>
  );
};

export default CheckBox;
