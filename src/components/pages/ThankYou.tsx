import { useSelector } from "react-redux";
import { RootState } from "../../store";

import ThankYouIcon from "../../assets/icon-thank-you.svg";

const ThankYou = () => {
  const userPlan = useSelector(
    (state: RootState) => state.persistedReducer.userPlan
  );

  const userName = useSelector(
    (state: RootState) => state.persistedReducer.userInputs.username
  );

  return (
    <section>
      {userPlan.type === "" ? (
        <p>Please choose your plan</p>
      ) : (
        <>
          <img src={ThankYouIcon} alt="thank you" />
          <header>
            <p>Thank you {userName}!</p>
          </header>
          <p>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </>
      )}
    </section>
  );
};

export default ThankYou;
