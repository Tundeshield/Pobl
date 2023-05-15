import FilterContainer from "../components/FilterContainer";
import StarterRequestCard from "../components/StarterRequestCard";

const StarterRequests = () => {
  return (
    <div className="m-auto flex flex-col  sm:flex-row justify-between w-5/6 mt-8 p-2 space-x-8 relative">
      <div className="h-4/5 w-auto p-2 bg-gray-100 rounded-lg order-last sm:w-4/5 sm:h-auto sm:order-first">
        <div className="my-4">
          <h5 className="text-2xl font-bold text-gray-900">
            View 40 starter requests.
          </h5>
        </div>
        <StarterRequestCard />
        <StarterRequestCard />
        <StarterRequestCard />
        <StarterRequestCard />
      </div>
      <div className="p-2 w-auto h-fit rounded-lg bg-gray-100">
        <FilterContainer />
      </div>
    </div>
  );
};

export default StarterRequests;
