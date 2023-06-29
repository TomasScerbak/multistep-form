import { useSelector } from "react-redux";
import { RootState } from "../../store";

import classes from "./FinishingUp.module.css";

const FinishigUp = () => {
  const userPlan = useSelector(
    (state: RootState) => state.persistedReducer.userPlan
  );
  const inputSwitch = useSelector(
    (state: RootState) => state.persistedReducer.inputSwitch
  );
  const planPayment = useSelector(
    (state: RootState) => state.persistedReducer.userPlan.payment
  );
  const addons = useSelector(
    (state: RootState) => state.persistedReducer.addons
  );

  let paymentValues = addons.addons.map((addons) => addons.payment);
  let total = paymentValues.reduce((accu, curVal) => accu + curVal);

  return (
    <section>
      <header>
        <h2>Double-check everything looks OK before confirming.</h2>
      </header>
      <div className={classes["finalized__plan-container"]}>
        <div className={classes["finalized__plan"]}>
          <div className={classes["user-plan"]}>
            <span>{userPlan.type}</span>
            {inputSwitch.clicked ? (
              <span className={classes.yearly}>(Yearly)</span>
            ) : (
              <span className={classes.monthly}>(Monthly)</span>
            )}
          </div>
          <a className={classes.change} href="#">
            Change
          </a>
        </div>
        <div>{`$${planPayment}${inputSwitch.clicked ? "/yr" : "/mo"}`}</div>
      </div>
      <div className={classes["finalized__addon-container"]}>
        {addons.addons.map((addon) => (
          <div className={classes.addons} key={addon.id}>
            <div>{addon.header}</div>
            <div>{`+$${addon.payment}${
              inputSwitch.clicked ? "/yr" : "/mo"
            }`}</div>
          </div>
        ))}
      </div>
      <div className={classes["finalized__total-container"]}>
        <div>Total (per {inputSwitch.clicked ? "year" : "month"})</div>
        <div>
          +${userPlan.payment + total}
          {inputSwitch.clicked ? "/yr" : "/mo"}
        </div>
      </div>
    </section>
  );
};

export default FinishigUp;
