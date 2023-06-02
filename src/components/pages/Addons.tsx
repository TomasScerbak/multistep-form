import { useState } from "react";
import Checkbox from "../UI/Checkbox";

const Addons = () => {
  const [isChecked, setIsChecked] = useState();

  const addons = [
    {
      header: "Online Service",
      text: "Access to multiple games",
      payment: 1,
    },
    {
      header: "Larger Storage",
      text: "Extra 1TB of cloud save",
      payment: 2,
    },
    {
      header: "Customizable Profile",
      text: "Custom theme on your profile",
      payment: 2,
    },
  ];

  const isCheckedHandler = (event) => {
    setIsChecked(event.target);
    console.log(isChecked);
  };

  return (
    <div>
      <h2>Add-ons help enhance your gaming experience.</h2>
      {addons.map((addon, index) => (
        <Checkbox
          onClick={isCheckedHandler}
          id={index}
          key={index}
          header={addon.header}
          text={addon.text}
          payment={addon.payment}
        />
      ))}
    </div>
  );
};

export default Addons;
