import { observer } from "mobx-react";
import gymStore from "../../gymStore";
import ClassItem from "./ClassItem";

const ClassList = () => {
  const classList = gymStore.classesInfo.map((clas) => (
    <ClassItem clasInfo={clas} key={clas.id} />
  ));
  return <>{classList}</>;
};
export default observer(ClassList);
