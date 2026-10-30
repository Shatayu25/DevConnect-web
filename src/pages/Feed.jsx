import { useEffect, useState } from "react";
import Card from "../ui/Card";
import Panel from "../ui/Panel";
import { BASE_URL } from "../utils/constants";

function Feed() {
  const [feed, setFeed] = useState([]);

  // chopping the previous array in order to show the new profile after connecting or ignoring previous profile
  function handleIncrease() {
    const slicedFeed = feed.slice(1);
    setFeed(slicedFeed);
  }

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`${BASE_URL}/user/feed`, {
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          setFeed(data.data);
        }
      } catch (err) {
        console.log(err.message);
      }
    }
    getData();
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-center w-full font-lato">
      {/* safety check if no more users present */}
      {feed[0] ? (
        <Card
          data={feed[0]}
          handleIncrease={handleIncrease}
          key={feed[0]?._id}
        />
      ) : (
        <h1 className="text-3xl flex justify-center items-center text-orange-500 font-bold min-h-screen">
          No more users found!
        </h1>
      )}
      <Panel />
    </div>
  );
}

export default Feed;
