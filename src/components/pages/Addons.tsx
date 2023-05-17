import Checkbox from "../UI/Checkbox";

const Addons = () => {
  return (
    <div>
      <h2>Add-ons help enhance your gaming experience.</h2>
      <Checkbox
        header="online service"
        text="access to multiple games"
        payment={1}
      />
    </div>
  );
};

export default Addons;
