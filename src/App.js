import Navbar from "./Components/Navbar";
import { observer } from "mobx-react";
//Create
import InstrucCreate from "./Components/Create/CreateInstructor";
import ClientCreate from "./Components/Create/CreateClient";
import ClassesCreate from "./Components/Create/CreateClasses";
//List
import InstList from "./Components/List/InstList";
import ClassList from "./Components/List/ClassList";
import ClientList from "./Components/List/ClientList";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <div>
          <InstrucCreate />
        </div>
        <div>
          <InstList />
        </div>
      </div>

      <div>
        <div>
          <ClassesCreate />
        </div>
        <div>
          <ClassList />
        </div>
      </div>

      <div>
        <div>
          <ClientCreate />
        </div>
        <div>
          <ClientList />
        </div>
      </div>
    </div>
  );
}

export default observer(App);
