import { observer } from "mobx-react";

const InstItem = (props) => {
  const instroInfo = props.instroInfo;
  return (
    <div>
      <p> Name: {instroInfo.instructor}</p>
      <p> Class: {instroInfo.classType}</p>
      <p> Duration: {instroInfo.duration}</p>
    </div>
  );
};
export default observer(InstItem);
