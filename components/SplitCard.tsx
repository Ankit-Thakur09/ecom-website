import React from "react";

const SplitCard = () => {
  return (
    <div className="relative flex flex-row-reverse min-h-screen bg-[#FAF3E5]">
      {/* Left Image Section - Covers Half the Screen */}
      <div className="w-1/2 h-screen">
        <img 
          src="/slides/Rectangle.png" 
          alt="Delicious food" 
          className="w-full h-full"
        />
      </div>
      
      {/* Right Content Section Overlapping */}
      <div className="absolute right-[40%] top-1/2 transform -translate-y-1/2 bg-[#C68B49] p-10 text-white shadow-lg w-[53%] h-[70%] flex flex-col justify-center items-center text-center">
        <h2 className="text-5xl font-serif font-semibold mb-4">Neque porro quisquam</h2>
        <button className="px-6 py-3 bg-white text-[#C68B49] rounded-full shadow-md hover:bg-gray-200">
          View More Details
        </button>
      </div>
    </div>
  );
};

export default SplitCard;