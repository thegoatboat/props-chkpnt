import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <div className="cardP">
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.bio}</Card.Text>
        <Card.Text>{props.profession}</Card.Text>
        <Button variant="primary" onClick={() => props.handleClick()}>
          Contacter
        </Button>
      </Card.Body>
    </Card>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.number,
  bio: PropTypes.string,
  handleClick: PropTypes.func,
};
Profile.defaultProps = {
  name: "Foulen",
  bio: "welou",
  handleClick: undefined,
  
 };

export default Profile;
