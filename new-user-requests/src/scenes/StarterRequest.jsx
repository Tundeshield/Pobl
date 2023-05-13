import React from "react";
import { useParams } from "react-router-dom";

const StarterRequest = () => {
  const id = useParams();
  return <div>request {id}</div>;
};

export default StarterRequest;
