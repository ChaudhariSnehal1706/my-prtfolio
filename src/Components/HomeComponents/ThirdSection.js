import React from "react";

function ThirdSection() {
  return (
    <div>
      <div className="hero-container3 min-h-screen flex justify-center items-center relative bg-gray-100">
        <div className="overlay absolute "></div>
        <div className="content text-center relative z-10">
          <div className="container mx-auto px-4">
            <div className="flex justify-center flex-col items-center p-8">
              <div className="max-w-[1000px] w-full flex justify-center flex-col items-center glass-effect text-black bg-white p-6 rounded-lg shadow-lg">
                {/* Headings */}
                <h3 className="text-3xl md:text-4xl font-Yesteryear my-4 md:my-10">
                  Make Good Product
                </h3>
                <h2 className="lg:text-[45px] text-2xl md:text-3xl font-opensans-condensed font-bold mb-4 md:mb-6 text-center">
                  Have A Quick Look At My Technologies
                </h2>

                {/* Divider */}
                <div className="w-full max-w-[60px] border-t border-black my-6 md:my-12"></div>

                {/* Text */}
                <div className="text-custom-gray text-center mb-6 font-playfair font-semibold">
                  {/* Technology List */}
                  <div className="text-custom-gray mb-6 font-playfair font-semibold">
                    <p className="mb-4">
                      Here are some of the technologies I have experience with:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-left">
                      <li>HTML5 & CSS3</li>
                      <li>JavaScript & React</li>
                      <li>PHP & MySQL</li>
                      <li>Tailwind CSS & Bootstrap</li>
                      <li>Node.js & Express</li>
                      <li>Git & GitHub</li>
                      <li>RESTful APIs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
