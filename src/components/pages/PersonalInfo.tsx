import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { saveUserInputs } from "../../store/userInputsSlice";
import { RootState } from "../../store";

type Props = {
  description: string;
};

const PersonalInfo = (props: Props) => {
  const dispatch = useDispatch();
  const userInputs = useSelector((state: RootState) => state.userInputs);

  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const username = usernameRef.current?.value;
    const email = emailRef.current?.value;
    const phoneNumber = phoneNumberRef.current?.value;

    dispatch(
      saveUserInputs({
        username,
        email,
        phoneNumber,
      })
    );
  };

  return (
    <div>
      <h2>{props.description}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input ref={usernameRef} type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input ref={emailRef} type="email" name="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input ref={phoneNumberRef} type="tel" name="phone" />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
