import "./Client.css";
import PropTypes from "prop-types";

function Client(props) {
  return (
    <div className="ClientContainer">
      <img
        src={props.photo}
        alt={props.name}
        className="ClientContainer-ClientImg"
      />
      <p className="ClientContainer-ClientReview">{props.review}</p>
      <strong className="ClientContainer-ClientName">{props.name}</strong>
      <p className="ClientContainer-ClientJob">{props.job}</p>
    </div>
  );
}

Client.propTypes = {
  photo: PropTypes.string,
  review: PropTypes.string,
  name: PropTypes.string,
  job: PropTypes.string,
};

export default Client;
