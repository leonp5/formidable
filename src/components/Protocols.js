import React from "react";
import Protocol from "./Protocol";

function Protocols() {
  const protocols = [
    {
      author: "Tobi",
      date: "2019-11-26",
      text: "Hallo\nWelt"
    },
    {
      author: "Holger",
      date: "2019-11-27",
      text: "Hallo\nWelten"
    }
  ];
  return (
    <div>
      {protocols.map(protocol => (
        <Protocol key={`${protocol.date}.${protocol.author}`} {...protocol} />
      ))}
    </div>
  );
}

export default Protocols;
