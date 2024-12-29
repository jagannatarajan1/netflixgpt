import React from "react";

const GptResult = () => {
  return (
    <div>
      <div className="mt-[20%] flex justify-center p-2  ">
        <form
          action=""
          className="w-5/6 lg:w-1/2 grid grid-cols-12  bg-black p-2 rounded-sm"
        >
          <input
            className="rounded py-1 col-span-9  px-2"
            type="text"
            placeholder="Enter Your Movie Name"
          />
          <button className="ms-2 px-2 lg:px-2 py-2 bg-red-500 rounded-sm text-white col-span-3 ">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptResult;
