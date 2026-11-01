import { useEffect, useState } from "react";
import useBack from "../hooks/useBack";
import { BASE_URL } from "../utils/constants";
import ConnectionCard from "../ui/ConnectionCard";

function Connections() {
  const moveBack = useBack();
  const [connections, setConnections] = useState([]);

  function handleRemove(id) {
    const removedConnections = connections.filter(
      (connection) => connection.connectionId !== id,
    );
    setConnections(removedConnections);
  }

  useEffect(() => {
    async function getConnectionsData() {
      const res = await fetch(`${BASE_URL}/user/connections`, {
        credentials: "include",
      });
      if (res.ok) {
        const data = await res.json();
        setConnections(data.data);
      }
    }
    getConnectionsData();
  }, []);

  return (
    <>
      <button
        onClick={moveBack}
        className="bg-orange-500 hover:bg-orange-600 transition-all rounded-full text-sm w-fit px-4 py-2 absolute top-4 left-3"
      >
        &larr; Back
      </button>
      {connections.map((connection) => (
        <ConnectionCard
          data={connection}
          key={connection.connectionId}
          handleRemove={handleRemove}
        />
      ))}
    </>
  );
}

export default Connections;
