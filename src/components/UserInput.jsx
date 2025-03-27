import Input from "./Input";
import calculateInvestmentResults from "../util/investment";

let data = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

export let updatedData = { ...data };

export default function UserInput() {
  function handleUserData(e) {
    let target = e.target.name;
    updatedData[target] = e.target.value;
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          labelName="Initial Investment"
          name="initialInvestment"
          handleUserData={handleUserData}
        />
        <Input
          labelName="Annual Investment"
          name="annualInvestment"
          handleUserData={handleUserData}
        />
      </div>
      <div className="input-group">
        <Input
          labelName="Expected Return"
          name="expectedReturn"
          handleUserData={handleUserData}
        />
        <Input
          labelName="Duration"
          name="duration"
          handleUserData={handleUserData}
        />
      </div>
    </section>
  );
}
