import React, { useEffect, useState } from "react";
import getRandomNumber from "../asset/getRandomNumber";
import { useDispatch } from "react-redux";
//import { addNewStarterRequest } from "../state/Requests";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";

const CreateStarterRequestPage = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [lineManager, setLineManager] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [businessArea, setBusinessArea] = useState("");
  const [completed, setCompleted] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: getRandomNumber(),
      firstName,
      lastName,
      lineManager,
      startDate,
      businessArea,
      completed: false,
    };

    //Push to redux store
    //dispatch(addNewStarterRequest(data));
    //redirect to another page
    navigate("/all-requests");
  };

  return (
    <Container>
      <h4 class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
        Create starter requests
      </h4>
      <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
        What are starter requests though?
      </p>
      <section>
        <form onSubmit={handleSubmit}>
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
                value={firstName}
                onChange={(e) => setFirstname(e.target.value)}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
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
                value={lastName}
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
              value={lineManager}
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
                value={startDate}
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
              value={businessArea}
              onChange={(e) => setBusinessArea(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Select a business area</option>
              <option value="IT">IT</option>
              <option value="Finance">Finance</option>
              <option value="HR">HR</option>
              <option value="Housing">Housing</option>
              <option value="Care">Care</option>
            </select>
          </div>

          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit Request
          </button>
        </form>
      </section>
    </Container>
  );
};

export default CreateStarterRequestPage;
