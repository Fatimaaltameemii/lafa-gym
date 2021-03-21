import gymStore from "../../gymStore";

const ClassItem = (props) => {
  const clasInfo = props.clasInfo;
  return (
    <div>
      <p>Class: {clasInfo.className}</p>
      <p>Duration: {clasInfo.duration}</p>
      <p>Time: {clasInfo.timing}</p>
      <button onClick={() => gymStore.removeClass(clasInfo.id)}>
        {" "}
        Remove Class{" "}
      </button>
    </div>
  );
};
export default ClassItem;
