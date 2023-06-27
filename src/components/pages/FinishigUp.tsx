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
        <div>
          <div className={classes["finalized__plan"]}>
            <div>{userPlan.userPlan.type}</div>
            <div>
              {inputSwitch.inputSwitch.clicked ? (
                <p>(Yearly)</p>
              ) : (
                <p>(Monthly)</p>
              )}
            </div>
          </div>
          <a href="#">Change</a>
        </div>
        {`$${planPayment.userPlan.payment}${
          inputSwitch.inputSwitch.clicked ? "/yr" : "/mo"
        }`}
      </div>
    </section>
  );
};

export default FinishigUp;
