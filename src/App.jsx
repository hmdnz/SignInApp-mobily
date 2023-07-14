import { useState } from "react";
import "./App.css";
import { Button } from "reactstrap";
import PublishRide from "./Components/PublishRide";
import SignUpApp from "./Components/SignUp";
import Login from "./Components/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <PublishRide />
      {/* <SignUpApp /> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
