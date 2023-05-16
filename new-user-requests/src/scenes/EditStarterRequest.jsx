import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/requests";
import { Checkbox, FormControlLabel } from "@mui/material";

const EditStarterRequest = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [lineManager, setLineManager] = useState("");
  const [startDate, setStartDate] = useState("");
  const [businessArea, setBusinessArea] = useState("");
  const [isCompleted, setIsCompleted] = useState();
  const [error, setError] = useState("");
  const [posting, setPosting] = useState(true);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  //Method to fetch single request
  const fetchRequest = async () => {
    const response = await api.get(`/requests/${id}`);
    return response.data;
  };

  //SideEffect when the page loads
  useEffect(() => {
    const getRequest = async () => {
      const request = await fetchRequest();
      if (request) {
        setFirstname(request.firstName);
        setLastName(request.lastName);
        setLineManager(request.lineManager);
        setStartDate(request.startDate);
        setBusinessArea(request.businessArea);
        setIsCompleted(request.completed);
        setLoading(false);
      }
    };
    getRequest();
  }, []);

  //Handle update method
  const handleUpdate = async (e) => {
    e.preventDefault();
    //Save items to server
    const data = {
      firstName,
      lastName,
      lineManager,
      startDate,
      businessArea,
      completed: isCompleted,
    };

    api
      .put(`/requests/${id}`, data)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        setError(error);
      });
    //Redirect to request list page
    setPosting(false);
    navigate("/all-requests");
  };

  return (
    <Container>
      {loading ? (
        <div className="flex flex-col items-center justify-center">
          <img src="/pobl-logo.png" alt="" className="h-8" />
          <h1>Edit request Loading...</h1>
        </div>
      ) : (
        <>
          <h4 class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-6">
            Edit Starter Request
          </h4>
          <section>
            <form onSubmit={handleUpdate}>
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    defaultValue={firstName}
                    onChange={(e) => setFirstname(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    defaultValue={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div class="mb-6">
                <label
                  for="line-manager"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Line Manager
                </label>
                <input
                  type="text"
                  defaultValue={lineManager}
                  onChange={(e) => setLineManager(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="line-manager"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Start date
                </label>
                <div class="relative max-w-sm">
                  <input
                    datepicker
                    datepicker-buttons
                    type="date"
                    defaultValue={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date"
                  />
                </div>
              </div>
              <div class="mb-6">
                <label
                  for="countries"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Business Area
                </label>
                <select
                  id="countries"
                  defaultValue={businessArea}
                  onChange={(e) => setBusinessArea(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option
                    value="IT"
                    selected={businessArea === "IT" ? true : false}
                  >
                    IT
                  </option>
                  <option
                    value="Finance"
                    selected={businessArea === "Finance" ? true : false}
                  >
                    Finance
                  </option>
                  <option
                    value="HR"
                    selected={businessArea === "HR" ? true : false}
                  >
                    HR
                  </option>
                  <option
                    value="Housing"
                    selected={businessArea === "Housing" ? true : false}
                  >
                    Housing
                  </option>
                  <option
                    value="Care"
                    selected={businessArea === "Care" ? true : false}
                  >
                    Care
                  </option>
                </select>
              </div>

              <Button>Update Request</Button>
            </form>
          </section>
        </>
      )}
    </Container>
  );
};

export default EditStarterRequest;
