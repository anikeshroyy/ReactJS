import { useState } from "react";
import Navbar from "./components/Navbar";
import Theme from "./components/Theme";
const App = () => {
  const [theme, setTheme] = useState("Light");

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <Theme theme={theme} />
    </div>
  );
};

export default App;
