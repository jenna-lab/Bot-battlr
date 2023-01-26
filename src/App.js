import React from "react";
// import { Route,Routes} from 'react-router-dom';
import Army from "./components/Army";

function App() {
  return (
    <div>
      <Army />
      {/* <Routes>
        <Route exact path="/" element={<BotCollection/>} />
        <Route path="./army" element={<YourBotArmy/>} />
        <Route path="./bot/:id" element={<BotSpecs/>} />
      </Routes> */}
    </div>
  );
}

export default App;
