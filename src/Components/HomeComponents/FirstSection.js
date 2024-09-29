import React, { useState, useEffect } from "react";

function FirstSection() {
  const [isWebDeveloper, setIsWebDeveloper] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsWebDeveloper((prev) => !prev);
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      {/* First Section */}
      <div className="hero-container">
        <div className="overlay"></div>
        <div className="content text-center">
          <div className="mb-10 mt-10">
            <p className="font-Yesteryear lg:text-6xl text-3xl">Welcome</p>
          </div>
          <div className="mb-8">
            <h1 className="lg:text-[50px] text-2xl font-opensans-condensed font-bold">
              My Name Is Snehal Chaudhari <br /><br /><br /> And I'm &nbsp;
              <span className="text-custom-red">
                {isWebDeveloper ? "Web Developer" : "Web Designer"}
              </span>
            </h1>
          </div>
          <div>
            <button className="mt-6 px-6 py-3 text-white bg-transparent border font-playfair font-semibold hover:bg-custom-red hover:border-custom-red transition-colors">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
