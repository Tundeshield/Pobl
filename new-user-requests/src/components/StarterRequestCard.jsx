import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { Checkbox, FormControlLabel } from "@mui/material";

const StarterRequestCard = () => {
  const [completed, setCompleted] = useState(false);
  return (
    <div className="w-4/5 p-4 bg-white m-auto mb-6 rounded-lg shadow-md md:flex justify-between items-center">
      <div className="ml-2">
        <span className="flex">
          <h2 className="mr-2 text-gray-700">Full Name:</h2>
          <p className="text-gray-700 font-semibold">Tunde Adepegba</p>
        </span>
        <span className="flex">
          <h2 className="mr-2  text-gray-700">Line Manager:</h2>
          <p className="text-gray-700 font-semibold">Bolajko</p>
        </span>
        <span className="flex">
          <h2 className="mr-2  text-gray-700">Start Date:</h2>
          <p className="text-gray-700 font-semibold">20/01/2014</p>
        </span>
        <span className="flex">
          <h2 className="mr-2  text-gray-700">Business Area:</h2>
          <p className="text-gray-700 font-semibold">IT</p>
        </span>
      </div>
      <div className="mt-2 mx-2 flex items-start align-center">
        <FormControlLabel
          control={<Checkbox onChange={() => setCompleted(!completed)} />}
          label={completed ? "Completed" : "Uncompleted"}
        />
        <IconButton
          color="#ff5858"
          sx={{ color: "#ff5858", marginRight: "0.5rem" }}
        >
          <DeleteIcon color="error" />
        </IconButton>
        <IconButton color="#primary">
          <EditIcon color="primary" />
        </IconButton>
      </div>
    </div>
  );
};

export default StarterRequestCard;
