import React from "react";
import DisplayTotals from "./DisplayTotals";

function PresidentVotes() {
  const votes = [
    { name: "Abe Lincoln", count: 139033 },
    { name: "Stephen Douglas", count: 115509 },
  ];
  return (
    <>
      <h1>Presidents</h1>
      {
        {
          /* need to map votes into DisplayTotals */
        }
      }
      {votes.map((record) => (
        <DisplayTotals name={record.name} count={record.count} />
      ))}
    </>
  );
}

export default PresidentVotes;
