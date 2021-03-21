const ClassItem = (props) => {
  const clasInfo = props.clasInfo;
  return (
    <div>
      <p>Class: {clasInfo.className}</p>
      <p>Duration: {clasInfo.duration}</p>
      <p>Time: {clasInfo.timing}</p>
    </div>
  );
};
export default ClassItem;
