import Navbar from "./Components/Navbar";
import InstrucCreate from "./Components/CreateInstructor";
import { observer } from "mobx-react";
import ClientCreate from "./Components/CreateClient";
function App() {
  return (
    <div>
      <Navbar />
      <div>
        <InstrucCreate />
      </div>
      <div>
        <ClientCreate />
      </div>
    </div>
  );
}

export default observer(App);
