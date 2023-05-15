import StarterRequestCard from "../components/StarterRequestCard";

const StarterRequests = () => {
  return (
    <div className="md:flex justify-between w-3/5  mt-8 p-2">
      <div className="w-full h-full p-2 bg-gray-100 rounded-lg">
        <div className="my-4">
          <h4 className="text-lg font-bold text-gray-700">
            View 40 starter requests.
          </h4>
        </div>
        <StarterRequestCard />
        <StarterRequestCard />
        <StarterRequestCard />
        <StarterRequestCard />
      </div>
      <div className="flex-auto w-32">fILTER CONTAINER</div>
    </div>
  );
};

export default StarterRequests;