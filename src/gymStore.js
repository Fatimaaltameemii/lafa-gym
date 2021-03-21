import { action, makeObservable, observable } from "mobx";
import instructorInfo from "./Components/instructorInfo";
import clientInfo from "./Components/clientInfo";
import classesInfo from "./Components/classesInfo";

class GymStore {
  instructorInfo = instructorInfo;
  clientInfo = clientInfo;
  classesInfo = classesInfo;

  addInst = (data) => {
    let newinst = data;
    newinst.id = this.instructorInfo.length + 1;
    console.log(newinst);
    this.instructorInfo.push(newinst);
    console.log(this.instructorInfo);
  };
  addClient = (data) => {
    let newClient = data;
    newClient.id = this.clientInfo.length + 1;
    console.log(newClient);
    this.clientInfo.push(newClient);
    console.log(this.clientInfo);
  };
  addClass = (data) => {
    let newClass = data;
    newClass.id = this.classesInfo.length + 1;
    console.log(newClass);
    this.classesInfo.push(newClass);
    console.log(this.classesInfo);
  };

  //removing = (id) => {
  // this.info = this.info.filter((cv) => cv.id !== id);
  // };

  constructor() {
    makeObservable(this, {
      instructorInfo: observable,
      clientInfo: observable,
      classesInfo: observable,
      //removeing: action,
      addInst: action,
      addClient: action,
      addClass: action,
    });
  }
}

const gymStore = new GymStore();

export default gymStore;
