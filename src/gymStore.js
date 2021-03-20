import { action, makeObservable, observable } from "mobx";
import info from "./Components/info";

class GymStore {
  info = info;

  adding = (data) => {
    let newinfo = data;
    newinfo.id = this.info.length + 1;
    console.log(newinfo);
    this.info.push(newinfo);
    console.log(this.info);
  };

  //removing = (id) => {
  // this.info = this.info.filter((cv) => cv.id !== id);
  // };

  constructor() {
    makeObservable(this, {
      info: observable,
      //removeing: action,
      adding: action,
    });
  }
}

const gymStore = new GymStore();

export default gymStore;
