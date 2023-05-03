// Import keyword to create the variable React to call on the package "react functionality"
import React from "react";

function EmployeeInfo(props) {
  // console.log(props);
  console.log(props.id);
  return (
    <React.Fragment>
      <h1>{props.name}</h1>
      <ul style={{ listStyleType: "none", textAlign: "left" }}>
        <li>
          From: {props.city}, {props.state}
        </li>
        <li>Position:{props.position}</li>
        <li>Food:{props.food}</li>
        <li>Position: Position</li>
        <li>Favorite Food: Ex Food Probably Pizza</li>
      </ul>
    </React.Fragment>
  );
}

export default EmployeeInfo;
