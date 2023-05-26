import { useDispatch, useSelector } from "react-redux/es/exports";
import { saveUserPersonalData } from "../../store/userPersonalDataSlice";
import { useRef } from "react";
import { RootState } from "../../store";

type Props = {
  description: string;
  formData: {};
  setFormData: Function;
};

const PersonalInfo = (props: Props) => {
  const dispatch = useDispatch();
  const userInputs = useSelector((state: RootState) => state.persistedReducer);

  console.log(userInputs);

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
    <div>
      <h2>{props.description}</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={onInputChangeHandler}
            type="text"
            name="name"
            ref={nameRef}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            onChange={onInputChangeHandler}
            type="email"
            name="email"
            ref={emailRef}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            onChange={onInputChangeHandler}
            type="tel"
            name="phone"
            ref={phoneNumberRef}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
