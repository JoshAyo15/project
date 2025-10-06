import { useRef } from "react";
import NavBar from "../component/NavBar";
import { DataContext } from "../context/DataContext";

const Home = () => {
  const text = "Home Button";
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleSelect = () => {
    inputRef.current.select();
  };

  return (
    <DataContext.Provider value={text}>
      <div className="flex flex-col items-center">
        <NavBar text={text} />
        <p>Home page</p>
        <div className="p-4 h-[500px] mt-5 flex flex-col justify-between">
          <input
            ref={inputRef}
            placeholder="Search Music"
            type="text"
            className="max-w-6xl py-2 px-3 rounded-md ring-1 ring-slate-500 placeholder:text-slate-300"
          ></input>
          <div className="flex gap-2">
            <button
              onDoubleClick={handleFocus}
              className="bg-blue-200 rounded-full text-black font-semibold py-2 px-4"
            >
              Focus
            </button>
            <button
              onClick={handleSelect}
              className="bg-blue-200 rounded-full text-black font-semibold py-2 px-4"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </DataContext.Provider>
  );
};

export default Home;
