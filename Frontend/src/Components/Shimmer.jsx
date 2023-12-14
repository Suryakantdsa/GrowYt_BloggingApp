import React from "react";

const Shimmer = () => {
  return Array(10)
    .fill(" ")
    .map((item, idx) => {
      return (
        <div key={idx} className="w-full">
          <div className="p-4 w-full flex flex-col border border-orange-400 shadow-xl rounded-md my-4">
            <header className=" flex justify-between items-start   ">
              <div className="w-full">
                <h1 className="bg-slate-300 w-[50%] h-6 mb-1"></h1>
                <p className="bg-slate-300 w-[20%] h-6"></p>
              </div>
              <div className="bg-slate-300 w-[80px] h-8"></div>
            </header>
            <article className="py-2 text-slate-700">
              <p className="bg-slate-300 h-[150px]"></p>
            </article>
          </div>
        </div>
      );
    });
};

export default Shimmer;
