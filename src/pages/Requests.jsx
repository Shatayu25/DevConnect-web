import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import RequestCard from "../ui/RequestCard";
import useBack from "../hooks/useBack";

function Requests() {
  const [requests, setRequests] = useState([]);
  const moveBack = useBack();

  function handleRemove(id) {
    const filteredRequests = requests.filter((request) => request._id !== id);
    setRequests(filteredRequests);
  }

  useEffect(() => {
    async function getRequestsData() {
      const res = await fetch(`${BASE_URL}/user/requests/received`, {
        credentials: "include",
      });
      if (res.ok) {
        const data = await res.json();
        setRequests(data.data);
      }
    }
    getRequestsData();
  }, []);

  return (
    <>
      <button
        onClick={moveBack}
        className="bg-orange-500 hover:bg-orange-600 transition-all rounded-full text-[10px] md:text-sm lg:text-base w-fit px-2 py-1 md:px-4 md:py-2 absolute top-4 left-3"
      >
        &larr; Back
      </button>
      {requests.length ? (
        requests.map((request) => (
          <RequestCard
            data={request}
            key={request._id}
            handleRemove={handleRemove}
          />
        ))
      ) : (
        <h1 className="text-3xl flex justify-center items-center text-orange-500 font-bold min-h-screen">
          Sorry, No requests found!
        </h1>
      )}
    </>
  );
}

export default Requests;
