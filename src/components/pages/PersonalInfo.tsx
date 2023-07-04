import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { saveUserPersonalData } from "../../store/userPersonalDataSlice";

import { RootState } from "../../store";

type FormData = {
  username: string;
  email: string;
  phoneNumber: string;
};

const PersonalInfo = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    phoneNumber: "",
  });

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
        ...formData,
        username: nameRef.current?.value,
        email: emailRef.current?.value,
        phoneNumber: phoneNumberRef.current?.value,
      })
    );
  };

  return (
    <section>
      <p>Please provide your name, email address, and phone number.</p>
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
