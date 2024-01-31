import { useEffect, useState } from "react";
import Card from "./Card";
import { USER_API } from "../utils/constant";

const CardContainer = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [filterInfo, setFilterInfo] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    const data = await fetch(USER_API);
    const json = await data.json();
    setUserInfo(json);
    setFilterInfo(json);
  };

  function handleFilter() {
    const filteredUser = userInfo.filter((user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterInfo(filteredUser);
  }

  if (!userInfo) return;

  return (
    <div className="py-3 container mx-auto">
      <h1 className="text-2xl font-bold text-center">Users Info</h1>
      <div className="flex sm:w-1/3">
        <input
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          type="text"
          className="w-full rounded-full px-4 py-1 border border-black rounded-tr-none rounded-br-none text-black"
          placeholder="Search User Name"
        />
        <button
          onClick={handleFilter}
          className="px-4 py-1 border border-black rounded-full rounded-tl-none rounded-bl-none border-l-none bg-[#222222] text-white"
        >
          Search
        </button>
      </div>
      <div className="container mx-auto flex flex-wrap gap-5 py-5">
        {filterInfo.map((user) => (
          <Card key={user.id} info={user} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
