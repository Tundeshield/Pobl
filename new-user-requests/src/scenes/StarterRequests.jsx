import { useEffect, useState } from "react";
import FilterContainer from "../components/FilterContainer";
import StarterRequestCard from "../components/StarterRequestCard";
import api from "../api/requests";

const StarterRequests = () => {
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState([]);
  const [businessAreas, setBusinessAreas] = useState([
    { id: 1, checked: false, searchTerm: "IT", label: "IT" },
    { id: 2, checked: false, searchTerm: "Finance", label: "Finance" },
    { id: 3, checked: false, searchTerm: "Housing", label: "Housing" },
    { id: 4, checked: false, searchTerm: "Care", label: "Care" },
    { id: 5, checked: false, searchTerm: "Hr", label: "Hr" },
  ]);

  //Method to fetch all requests
  const fetchRequests = async () => {
    const response = await api.get("/requests");
    return response.data;
  };

  //SideEffect when the page loads, all requests are fethched
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

  //Handle the checked categories to filter out items previously selected
  const handleChangeWhenChecked = (id) => {
    const categories = businessAreas;
    const changeCheckedCategories = categories.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setBusinessAreas(changeCheckedCategories);
    return changeCheckedCategories;
  };

  //Method to bring out all necessary search terms
  const GetSearchPhrasesFromSelection = () => {
    const checkedCategories = handleChangeWhenChecked();
    //filter where items checked is true
    const checkedSearch = checkedCategories.filter(
      (item) => item.checked === true
    );
    const searchPhrases = checkedSearch.map((item) => item.searchTerm);
    return searchPhrases;
  };

  //Filtered search method to effect the search parameters
  const FetchSearchTermsFromApi = async () => {
    const searchPhrases = GetSearchPhrasesFromSelection();
    //Query parameters
    const queryParameters = searchPhrases
      .map((value) => `businessArea=${value}`)
      .join("&");

    // //prefixeach that is above index1 with &businessArea={searchTerm}
    const query = `/requests?${queryParameters}`;
    const response = await api.get(query);
    const data = await response.data;
    setRequests(data);
  };

  //Delete
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
        <FilterContainer
          changedChecked={handleChangeWhenChecked}
          businessAreas={businessAreas}
          FetchSearchTermsFromApi={FetchSearchTermsFromApi}
        />
      </div>
    </div>
  );
};

export default StarterRequests;
