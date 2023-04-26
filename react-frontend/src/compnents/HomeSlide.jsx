import React from "react";

const HomeSlide = () => {
  return (
    <div className="flex justify-end bg-[url('/slider-1.webp')] bg-cover bg-center font-bold brightness-90 h-96 mt-3">
      <div className="flex flex-col items-center text-white font-tajwal text-4xl px-20 py-4 mt-20">
        <h1 className="ml-3">Beautifuly designed</h1>
        <div>Cover Up Front Of Book And Leave Summary</div>
        <button className="bg-[#eccd00] text-base font-medium duration-150 hover:bg-white text-black p-3 rounded-md w-44 mt-6">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default HomeSlide;
