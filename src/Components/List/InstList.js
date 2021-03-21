import { observer } from "mobx-react";
import gymStore from "../../gymStore";
import InstItem from "./InstItem";

const InstList = () => {
  const instList = gymStore.instructorInfo.map((ins) => (
    <InstItem instroInfo={ins} key={ins.id} />
  ));
  return <>{instList}</>;
};
export default observer(InstList);
