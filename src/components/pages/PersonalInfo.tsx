import { useDispatch, useSelector } from "react-redux/es/exports";
import { saveUserInputs } from "../../store/userInputsSlice";
import { useRef } from "react";
import { RootState } from "../../store";

type Props = {
  description: string;
  formData: {};
  setFormData: Function;
};

const PersonalInfo = (props: Props) => {
  const dispatch = useDispatch();
  const userInpts = useSelector((state: RootState) => state.userInputs);

  console.log(userInpts);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <h2>{props.description}</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={() =>
              dispatch(
                saveUserInputs({
                  ...props.formData,
                  username: nameRef.current?.value,
                })
              )
            }
            type="text"
            name="name"
            ref={nameRef}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            onChange={() =>
              dispatch(
                saveUserInputs({
                  ...props.formData,
                  email: emailRef.current?.value,
                })
              )
            }
            type="email"
            name="email"
            ref={emailRef}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            onChange={() =>
              dispatch(
                saveUserInputs({
                  ...props.formData,
                  phoneNumber: phoneNumberRef.current?.value,
                })
              )
            }
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
