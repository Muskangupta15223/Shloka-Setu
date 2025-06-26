import React from "react";

const Counter = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-[#F3F2EF] dark:bg-[#232321] z-50">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 border-solid"></div>
    <span className="ml-4 text-xl font-bold text-orange-500">Loading...</span>
  </div>
);

export default Counter;