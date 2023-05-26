import { useDispatch, useSelector } from "react-redux/es/exports";
import { RootState } from "../../store";
import { saveUserPlanSelection } from "../../store/userPlanSlice";

import IconAdvanced from "../../assets/icon-advanced.svg";
import IconArcade from "../../assets/icon-arcade.svg";
import IconPro from "../../assets/icon-pro.svg";
import InputSwitch from "../UI/InputSwitch";
import PlanButton from "../UI/PlanButton";
import { useState } from "react";

const planVariations = [
  {
    image: IconAdvanced,
    variation: "Advanced",
    payment: 9,
  },
  {
    image: IconArcade,
    variation: "Arcade",
    payment: 12,
  },
  {
    image: IconPro,
    variation: "Pro",
    payment: 15,
  },
];

const YourPlan = () => {
  const dispatch = useDispatch();
  const userPlan = useSelector((state: RootState) => state.persistedReducer);

  const [clicked, setClicked] = useState<boolean>(false);

  const inputSwitchHandler = () => {
    setClicked((prev) => (!prev ? true : false));
  };

  console.log(userPlan);

  return (
    <div>
      <h2>You have the option of monthly or yearly billing.</h2>
      {planVariations.map((plan, index) => (
        <PlanButton
          onChange={() =>
            dispatch(
              saveUserPlanSelection({
                type: plan.variation,
                payment: `${clicked ? plan.payment * 10 : plan.payment}`,
              })
            )
          }
          id="radio-button"
          type="radio"
          key={index}
          image={plan.image}
          value={plan.variation}
          name="plan"
          payment={clicked ? plan.payment * 10 : plan.payment}
          checked={plan.variation === userPlan.userPlan.type}
        />
      ))}
      <div>
        <InputSwitch onClick={inputSwitchHandler} />
      </div>
    </div>
  );
};

export default YourPlan;
