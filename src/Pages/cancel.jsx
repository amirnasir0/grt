import React from "react";

const Cancel = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#FAFAFA] text-[#1E1E1E]">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Payment Cancelled</h1>
        <p>Your donation was not completed. You can try again if you'd like.</p>
      </div>
    </div>
  );
};

export default Cancel;
