import Checkbox from "../UI/Checkbox";

const Addons = () => {
  const addons = [
    {
      id: 1,
      header: "Online Service",
      text: "Access to multiple games",
      payment: 1,
    },
    {
      id: 2,
      header: "Larger Storage",
      text: "Extra 1TB of cloud save",
      payment: 2,
    },
    {
      id: 3,
      header: "Customizable Profile",
      text: "Custom theme on your profile",
      payment: 2,
    },
  ];

  return (
    <div>
      <h2>Add-ons help enhance your gaming experience.</h2>
      {addons.map((addon) => (
        <Checkbox
          id={addon.id}
          key={addon.id}
          header={addon.header}
          text={addon.text}
          payment={addon.payment}
        />
      ))}
    </div>
  );
};

export default Addons;
