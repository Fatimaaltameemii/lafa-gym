import { action, makeObservable, observable } from "mobx";
import axios from "axios";

class GymStore {
  instructorInfo = [];
  clientInfo = [];
  classesInfo = [];

  fetchInstructor = async () => {
    try {
      const response = await axios.get("http://localhost:8000/instructorReq");
      this.instructorInfo = response.data;
    } catch (error) {
      console.error("fetchInstructor  -> response", error);
    }
  };

  fetchClient = async () => {
    try {
      const response = await axios.get("http://localhost:8000/clientReq");
      this.clientInfo = response.data;
    } catch (error) {
      console.error("fetchClient -> response", error);
    }
  };

  fetchClass = async () => {
    try {
      const response = await axios.get("http://localhost:8000/classReq");
      this.classesInfo = response.data;
    } catch (error) {
      console.error("fetchClass -> response", error);
    }
  };

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

  removeInst = (instId) => {
    this.instructorInfo = this.instructorInfo.filter(
      (instr) => instr.id !== instId
    );
  };

  removeClient = (clientId) => {
    this.clientInfo = this.clientInfo.filter((cly) => cly.id !== clientId);
  };
  removeClass = (clasId) => {
    this.classesInfo = this.classesInfo.filter((clas) => clas.id !== clasId);
  };

  constructor() {
    makeObservable(this, {
      instructorInfo: observable,
      clientInfo: observable,
      classesInfo: observable,

      fetchInstructor: action,
      fetchClient: action,
      fetchClass: action,

      addInst: action,
      addClient: action,
      addClass: action,

      removeInst: action,
      removeClient: action,
      removeClass: action,
    });
  }
}

const gymStore = new GymStore();

gymStore.fetchInstructor();
gymStore.fetchClient();
gymStore.fetchClass();

export default gymStore;
