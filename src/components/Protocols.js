import React from "react";
import Protocol from "./Protocol";
import { getProtocols } from "../api/protocols";

function Protocols() {
  const protocols = getProtocols();

  return (
    <div>
      {protocols.map(protocol => (
        <Protocol key={`${protocol.date}.${protocol.author}`} {...protocol} />
      ))}
    </div>
  );
}

export default Protocols;
