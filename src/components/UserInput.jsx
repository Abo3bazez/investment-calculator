import { useState } from "react";
import Input from "./Input";

export default function UserInput({ onChangeInput, userData }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          labelName="Initial Investment"
          name="initialInvestment"
          value={userData.initialInvestment}
          onChangeInput={onChangeInput}
        />
        <Input
          labelName="Annual Investment"
          name="annualInvestment"
          value={userData.annualInvestment}
          onChangeInput={onChangeInput}
        />
      </div>
      <div className="input-group">
        <Input
          labelName="Expected Return"
          name="expectedReturn"
          value={userData.expectedReturn}
          onChangeInput={onChangeInput}
        />
        <Input
          labelName="Duration"
          name="duration"
          value={userData.duration}
          onChangeInput={onChangeInput}
        />
      </div>
    </section>
  );
}
