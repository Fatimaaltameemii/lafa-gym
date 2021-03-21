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
      <Navbar />
      <div>
        <InstrucCreate />
        <InstList />
      </div>
      <div>
        <ClassesCreate />
        <ClassList />
      </div>
      <div>
        <ClientCreate />
        <ClientList />
      </div>
    </div>
  );
}

export default observer(App);
