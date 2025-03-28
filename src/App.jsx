import { useState } from "react";

import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userData, setUserData] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  let validation = true;

  if (
    userData.initialInvestment < 100 ||
    userData.annualInvestment < 100 ||
    userData.expectedReturn <= 0 ||
    userData.duration < 0
  )
    validation = false;
  function handleChange(identefier, newValve) {
    setUserData((prevUserData) => {
      return { ...prevUserData, [identefier]: +newValve };
    });
  }
  return (
    <>
      <UserInput onChangeInput={handleChange} userData={userData} />
      {!validation && <p className="center">Please Enter Valid Data</p>}
      {validation && <Result userData={userData} />}
    </>
  );
}

export default App;
