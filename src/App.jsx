import { useState } from "react";
import { updatedData } from "./components/UserInput";

import UserInput from "./components/UserInput";

function App() {
  const [data, setData] = useState(null);
  return (
    <>
      <UserInput />
    </>
  );
}

export default App;
