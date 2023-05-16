import React from "react";

const Container = ({ children }) => {
  return (
    <section className="py-8 px-4 mt-auto h-full ml-6 max-w-screen-xl lg:py-16">
      <div className="bg-gray-100  dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
        {children}
      </div>
    </section>
  );
};

export default Container;
