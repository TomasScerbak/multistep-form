import { useDispatch, useSelector } from "react-redux/es/exports";
import { saveUserPersonalData } from "../../store/userPersonalDataSlice";
import { useRef } from "react";
import { RootState } from "../../store";

type Props = {
  formData: {};
  setFormData: Function;
};

const PersonalInfo = (props: Props) => {
  const userName = useSelector(
    (state: RootState) => state.persistedReducer.userInputs.username
  );
  const email = useSelector(
    (state: RootState) => state.persistedReducer.userInputs.email
  );
  const phoneNumber = useSelector(
    (state: RootState) => state.persistedReducer.userInputs.phoneNumber
  );
  const dispatch = useDispatch();

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);

  const onInputChangeHandler = () => {
    dispatch(
      saveUserPersonalData({
        ...props.formData,
        username: nameRef.current?.value,
        email: emailRef.current?.value,
        phoneNumber: phoneNumberRef.current?.value,
      })
    );
  };

  return (
    <section>
      <h2>Please provide your name, email address, and phone number.</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={onInputChangeHandler}
            type="text"
            name="name"
            ref={nameRef}
            value={userName}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            onChange={onInputChangeHandler}
            type="email"
            name="email"
            ref={emailRef}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            onChange={onInputChangeHandler}
            type="tel"
            name="phone"
            ref={phoneNumberRef}
            value={phoneNumber}
          />
        </div>
      </form>
    </section>
  );
};

export default PersonalInfo;
