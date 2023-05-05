import React from "react";
import "../nav/Nav.css";

export default function Welcome() {
  return <div className="welcome">Welcome, {props.name}</div>;
}
