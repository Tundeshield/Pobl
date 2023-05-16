import { useEffect, useState } from "react";
import FilterContainer from "../components/FilterContainer";
import StarterRequestCard from "../components/StarterRequestCard";
import api from "../api/requests";

const StarterRequests = () => {
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState([]);

  //Method to fetch all requests
  const fetchRequests = async () => {
    const response = await api.get("/requests");
    return response.data;
  };
  //SideEffect when the page loads
  useEffect(() => {
    const getRequests = async () => {
      const allRequests = await fetchRequests();
      if (allRequests) {
        setLoading(false);
        setRequests(allRequests);
      }
    };
    getRequests();
  }, []);

  const handleRequestDelete = async (id) => {
    await api.delete(`/requests/${id}`);
    const updateRequestsList = requests.filter((item) => item.id !== id);
    setRequests(updateRequestsList);
  };

  

  return (
    <div className="m-auto flex flex-col  sm:flex-row justify-between w-5/6 mt-8 p-2 space-x-8 relative">
      <div className="h-4/5 w-auto p-2 bg-gray-100 rounded-lg order-last sm:w-4/5 sm:h-auto sm:order-first">
        <div className="my-4">
          <h5 className="text-2xl font-bold text-gray-900">
            All {requests.length} starter requests.
          </h5>
        </div>
        {loading && (
          <div className="flex flex-col items-center justify-center">
            <img src="/pobl-logo.png" alt="" className="h-8" />
            <h1>Requests Loading...</h1>
          </div>
        )}
        {requests.map((item) => (
          <span key={item.id}>
            <StarterRequestCard
              request={item}
              handleRequestDelete={handleRequestDelete}
            />
          </span>
        ))}
      </div>
      <div className="p-2 w-auto h-fit rounded-lg bg-gray-100">
        <FilterContainer />
      </div>
    </div>
  );
};

export default StarterRequests;
