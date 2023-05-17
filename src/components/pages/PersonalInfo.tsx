import { useState } from "react";

type Props = {
  description: string;
};

type UserInputs = {
  username: string;
  email: string;
  phoneNumber: string;
};

const PersonalInfo = (props: Props) => {
  const [userInputs, setUserInputs] = useState<UserInputs>({
    username: "",
    email: "",
    phoneNumber: "",
  });

  return (
    <div>
      <h2>{props.description}</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
