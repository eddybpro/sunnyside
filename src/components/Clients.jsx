import "./Clients.css";
import { data } from "../clientsData";
import Client from "./Client";

function Clients() {
  return (
    <div className="ClientsContainer">
      <h1 className="ClientsContainer-Title">Client testimonials</h1>
      <div className="ClientsContainer-ClientsBox">
        {data.map((el, i) => (
          <Client key={i} {...el} />
        ))}
      </div>
    </div>
  );
}
export default Clients;
