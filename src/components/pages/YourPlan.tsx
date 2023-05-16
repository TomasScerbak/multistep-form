import IconAdvanced from "../../assets/icon-advanced.svg";
import IconArcade from "../../assets/icon-arcade.svg";
import IconPro from "../../assets/icon-pro.svg";
import CheckBox from "../UI/CheckBox";
import PlanButton from "../UI/PlanButton";

const YourPlan = () => {
  const planVariations = [
    {
      image: IconAdvanced,
      type: "Advanced",
      payment: `$${9}/mo`,
    },
    {
      image: IconArcade,
      type: "Arcade",
      payment: `$${12}/mo`,
    },
    {
      image: IconPro,
      type: "Pro",
      payment: `$${15}/mo`,
    },
  ];

  return (
    <div>
      <h2>You have the option of monthly or yearly billing.</h2>
      <div></div>
      {planVariations.map((variant, index) => (
        <PlanButton
          key={index}
          image={variant.image}
          type={variant.type}
          payment={variant.payment}
        />
      ))}
      <div>
        <CheckBox />
      </div>
    </div>
  );
};

export default YourPlan;
