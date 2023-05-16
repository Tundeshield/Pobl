import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../api/requests";

const StarterRequestCard = ({ request, handleRequestDelete }) => {
  const [isCompleted, setIsCompleted] = useState(request.completed);
  const navigate = useNavigate();

  //Method to post update to the server
  const updateStarterRequest = async () => {
    const response = await api.put(`/requests/${request.id}`, {
      ...request,
      completed: isCompleted,
    });
    const result = await response.data;
    console.log(result);
    return result;
  };

  //The useEffect dependent on completed state changes
  useEffect(() => {
    updateStarterRequest();
  }, [isCompleted]);

  return (
    <div className="w-4/5 p-4 bg-white m-auto mb-6 rounded-lg shadow-md md:flex justify-between items-center">
      <div className="ml-2">
        <span className="flex">
          <h2 className="mr-2 text-gray-700">First Name:</h2>
          <p className="text-gray-700 font-semibold">{request.firstName}</p>
        </span>
        <span className="flex">
          <h2 className="mr-2 text-gray-700">Last Name:</h2>
          <p className="text-gray-700 font-semibold">{request.lastName}</p>
        </span>
        <span className="flex">
          <h2 className="mr-2  text-gray-700">Line Manager:</h2>
          <p className="text-gray-700 font-semibold">{request.lineManager}</p>
        </span>
        <span className="flex">
          <h2 className="mr-2  text-gray-700">Start Date:</h2>
          <p className="text-gray-700 font-semibold">{request.startDate}</p>
        </span>
        <span className="flex">
          <h2 className="mr-2  text-gray-700">Business Area:</h2>
          <p className="text-gray-700 font-semibold">{request.businessArea}</p>
        </span>
      </div>
      <div className="mt-2 mx-2 flex items-start align-center">
        <FormControlLabel
          control={
            <Checkbox
              checked={isCompleted}
              onChange={() => setIsCompleted(!isCompleted)}
            />
          }
          label={isCompleted ? "Completed" : "Uncompleted"}

        />
        <IconButton
          color="#ff5858"
          sx={{ color: "#ff5858", marginRight: "0.5rem" }}
          onClick={() => handleRequestDelete(request.id)}
        >
          <DeleteIcon color="error" />
        </IconButton>
        <IconButton
          color="#primary"
          onClick={() => navigate(`/all-requests/edit/${request.id}`)}
        >
          <EditIcon color="primary" />
        </IconButton>
      </div>
    </div>
  );
};

export default StarterRequestCard;
