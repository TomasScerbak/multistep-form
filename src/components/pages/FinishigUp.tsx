import { useSelector } from "react-redux";
import { RootState } from "../../store";

const FinishigUp = () => {
  const userPlan = useSelector((state: RootState) => state.persistedReducer);
  const inputSwitch = useSelector((state: RootState) => state.persistedReducer);

  return (
    <div>
      <h2>Double-check everything looks OK before confirming.</h2>
      <div>
        <div>
          <div>
            <p>{userPlan.userPlan.type}</p>
            <p>
              {inputSwitch.inputSwitch.clicked ? (
                <p>(Yearly)</p>
              ) : (
                <p>(Monthly)</p>
              )}
            </p>
          </div>
          <a href="/src/components/pages/YourPlan.tsx">Change</a>
        </div>
        <div></div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default FinishigUp;
