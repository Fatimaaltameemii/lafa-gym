import gymStore from "../../gymStore";

const ClientItem = (props) => {
  const clyInfo = props.clyInfo;
  return (
    <div>
      <p>Name: {clyInfo.clientN}</p>
      <p>Age: {clyInfo.age} years</p>
      <p>Weight: {clyInfo.weight} Kg</p>
      <p>Height: {clyInfo.height} cm</p>
      <button onClick={() => gymStore.removeClient(clyInfo.id)}>
        {" "}
        Remove Client{" "}
      </button>
    </div>
  );
};
export default ClientItem;
