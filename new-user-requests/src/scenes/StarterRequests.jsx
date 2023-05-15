import React from "react";
import Container from "../components/Container";

const StarterRequests = () => {
  return (
    <div className="md:flex justify-between w-4/5 h-4/5 mt-8 p-4">
      <div className="w-4/5 p-4 bg-gray-100 rounded-lg">
        <h4>View 40 starter requests.</h4>

        <div className="w-4/5 p-2 bg-white m-auto mb-8 rounded-lg shadow-md">
          <span className="flex ml-2">
            <h2 className="mr-2 font-semibold">Full Name:</h2>
            <p>Tunde Adepegba</p>
          </span>
          <span className="flex ml-2">
            <h2 className="mr-2 font-semibold">Line Manager:</h2>
            <p>Bolajko</p>
          </span>
          <span className="flex ml-2">
            <h2 className="mr-2 font-semibold">First Name:</h2>
            <p>Tunde Adepegba</p>
          </span>
        </div>
      </div>
      <div className="flex-auto w-32">fILTER CONTAINER</div>
    </div>
  );
};

export default StarterRequests;
