import Navbar from "./Components/Navbar";
import InstrucCreate from "./Components/CreateInstructor";
import { observer } from "mobx-react";
import ClientCreate from "./Components/CreateClient";
import ClassesCreate from "./Components/CreateClasses";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <InstrucCreate />
      </div>
      <div>
        <ClassesCreate />
      </div>
      <div>
        <ClientCreate />
      </div>
    </div>
  );
}

export default observer(App);
