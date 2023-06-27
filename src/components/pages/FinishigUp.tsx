import { useSelector } from "react-redux";
import { RootState } from "../../store";

import classes from "./FinishingUp.module.css";

const FinishigUp = () => {
  const userPlan = useSelector((state: RootState) => state.persistedReducer);
  const inputSwitch = useSelector((state: RootState) => state.persistedReducer);
  const planPayment = useSelector((state: RootState) => state.persistedReducer);

  return (
    <section>
      <header>
        <h2>Double-check everything looks OK before confirming.</h2>
      </header>
      <div className={classes["finalized__plan-container"]}>
        <div className={classes["finalized__plan"]}>
          <div className={classes["user-plan"]}>
            <div>{userPlan.userPlan.type}</div>
            {inputSwitch.inputSwitch.clicked ? (
              <p className={classes.yearly}>(Yearly)</p>
            ) : (
              <p className={classes.monthly}>(Monthly)</p>
            )}
          </div>
          <a className={classes.change} href="#">
            Change
          </a>
        </div>
        <div>
          {`$${planPayment.userPlan.payment}${
            inputSwitch.inputSwitch.clicked ? "/yr" : "/mo"
          }`}
        </div>
      </div>
    </section>
  );
};

export default FinishigUp;
