import { useSelector } from "react-redux";
import { RootState } from "../../store";

import ThankYouIcon from "../../assets/icon-thank-you.svg";

const ThankYou = () => {
  const userName = useSelector(
    (state: RootState) => state.persistedReducer.userInputs.username
  );

  return (
    <section>
      <img src={ThankYouIcon} alt="thank you" />
      <header>
        <h1>Thank you {userName}!</h1>
      </header>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </section>
  );
};

export default ThankYou;
