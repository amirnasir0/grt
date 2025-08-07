import React from "react";

const Success = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#FAFAFA] text-[#1E1E1E]">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Payment Successful</h1>
        <p>Thank you! Your donation was received successfully.</p>
      </div>
    </div>
  );
};

export default Success;
