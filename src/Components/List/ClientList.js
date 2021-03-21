import { observer } from "mobx-react";
import gymStore from "../../gymStore";
import ClientItem from "./ClientItem";

const ClientList = () => {
  const clientList = gymStore.clientInfo.map((cly) => (
    <ClientItem clyInfo={cly} key={cly.id} />
  ));
  return <>{clientList}</>;
};
export default observer(ClientList);
