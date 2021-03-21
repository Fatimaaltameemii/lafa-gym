const ClientItem = (props) => {
  const clyInfo = props.clyInfo;
  return (
    <div>
      <p>Name: {clyInfo.clientN}</p>
      <p>Age: {clyInfo.age} years</p>
      <p>Weight: {clyInfo.weight} Kg</p>
      <p>Height: {clyInfo.height} cm</p>
    </div>
  );
};
export default ClientItem;
