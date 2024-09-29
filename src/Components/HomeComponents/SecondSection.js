import React from "react";
// import React, { useEffect, useRef } from "react";
// import Matter from "matter-js";
import Second_Img from "../../assets/images/Second_Img.png";
import react from "../../assets/GIF/react.gif";
import html from "../../assets/GIF/html.gif";
import js from "../../assets/GIF/js.gif";
import db from "../../assets/GIF/db.gif";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCss3Alt, FaPhp } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";

function SecondSection() {
  // const sceneRef = useRef(null); // Create a reference for the Matter.js scene

  // useEffect(() => {
  //   // Create an engine
  //   const engine = Matter.Engine.create();
  //   const { world } = engine;

  //   // Create a renderer
  //   const render = Matter.Render.create({
  //     element: sceneRef.current, // Attach the Matter.js render to the 'sceneRef'
  //     engine: engine,
  //     options: {
  //       width: 800,
  //       height: 400,
  //       wireframes: false,
  //     },
  //   });

  //   // Create two boxes and a ground
  //   const boxA = Matter.Bodies.rectangle(400, 200, 80, 80);
  //   const boxB = Matter.Bodies.rectangle(450, 50, 80, 80);
  //   const ground = Matter.Bodies.rectangle(400, 380, 810, 60, { isStatic: true });

  //   // Add bodies to the world
  //   Matter.World.add(world, [boxA, boxB, ground]);

  //   // Run the engine and renderer
  //   Matter.Engine.run(engine);
  //   Matter.Render.run(render);

  //   // Clean up the Matter.js engine and renderer when the component unmounts
  //   return () => {
  //     Matter.Engine.clear(engine);
  //     Matter.Render.stop(render);
  //     render.canvas.remove();
  //     render.textures = {};
  //   };
  // }, []);

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto flex flex-col items-center text-center mb-12">
        <div className="mb-8">
          <img
            src={Second_Img}
            alt="Technology"
            className="max-w-full h-auto second-img"
          />
        </div>

        <h3 className="text-4xl font-Yesteryear mb-6">
          Expertise in Various Technologies
        </h3>
        <h2 className="lg:text-[45px] text-3xl font-opensans-condensed font-bold mb-8">
          Technologies I've Worked With
        </h2>
        {/* <div id="scene" ref={sceneRef}></div> Div for Matter.js */}
        <div className="w-full max-w-[60px] border-t border-black my-6"></div>

        <div class=" lg:h-full lg:w-full flex items-center justify-center mt-16 ">
          <div class="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50 ptm">
            <button class="profile_item rotate lg:left-[45px] left-[32px] lg:-top-[4px] -top-[16px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span class="block lg:w-[40px] w-[32px] lg:h-[40px] h-[32px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src={react} alt="React" className="mx-auto" />
              </span>
            </button>

            <button class="profile_item rotate lg:right-[45px] right-[10px] lg:-top-[4px] -top-[7px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span class="block lg:w-[40px] w-[36px] lg:h-[40px] h-[36px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src={html} alt="html" className="mx-auto" />
              </span>
            </button>

            <button class="profile_item rotate lg:-left-4 -left-5 lg:top-20 top-5 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span class="block lg:w-[40px] lg:h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <FaPhp className="text-3xl cursor-pointer transition-transform duration-500 hover:scale-110 hover:text-purple-500 pulse-animation pulse-animation" />
              </span>
            </button>

            <button class="profile_item rotate lg:-right-4 -right-4 lg:top-20 top-14 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span class="block lg:w-[40px] w-[34px] lg:h-[40px] h-[34px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <div className="flex justify-center items-center">
                  <FaCss3Alt className="lg:text-4xl text-3xl cursor-pointer transition-transform duration-500 hover:scale-110 hover:text-blue-500 pulse-animation" />
                </div>
              </span>
            </button>

            <button class="profile_item rotate lg:bottom-8 bottom-5 lg:-left-0 -left-5 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <RiTailwindCssLine className="text-3xl cursor-pointer transition-transform duration-500 hover:scale-110 hover:text-blue-400 smooth-spin" />
              </span>
            </button>

            <button class="profile_item rotate lg:bottom-10 -bottom-1 lg:-right-0 right-2 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span class="block lg:w-[40px] w-[34px] lg:h-[40px] h-[34px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src={js} alt="js" className="mx-auto" />
              </span>
            </button>

            <button class="profile_item rotate lg:right-[40%] right-[45%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img
                  src={db}
                  alt="db"
                  className="mx-auto cursor-pointer transition-transform duration-500 hover:scale-110 hover:border-cyan-950"
                />
              </span>
            </button>

            <button class=" lg:w-[200px] lg:h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
              <div class="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                <span class="lg:w-20 lg:h-20 w-10 h-10 inline-block">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path
                        d="M9.99296258,10.5729355 C12.478244,10.5729355 14.4929626,8.55821687 14.4929626,6.0729355 C14.4929626,3.58765413 12.478244,1.5729355 9.99296258,1.5729355 C7.5076812,1.5729355 5.49296258,3.58765413 5.49296258,6.0729355 C5.49296258,8.55821687 7.5076812,10.5729355 9.99296258,10.5729355 Z M10,0 C13.3137085,0 16,2.6862915 16,6 C16,8.20431134 14.8113051,10.1309881 13.0399615,11.173984 C16.7275333,12.2833441 19.4976819,15.3924771 19.9947005,19.2523727 C20.0418583,19.6186047 19.7690435,19.9519836 19.3853517,19.9969955 C19.0016598,20.0420074 18.6523872,19.7816071 18.6052294,19.4153751 C18.0656064,15.2246108 14.4363723,12.0699838 10.034634,12.0699838 C5.6099956,12.0699838 1.93381693,15.231487 1.39476476,19.4154211 C1.34758036,19.7816499 0.998288773,20.0420271 0.614600177,19.9969899 C0.230911582,19.9519526 -0.0418789616,19.6185555 0.00530544566,19.2523267 C0.500630192,15.4077896 3.28612316,12.3043229 6.97954305,11.1838052 C5.19718955,10.1447285 4,8.21217353 4,6 C4,2.6862915 6.6862915,0 10,0 Z"
                        fill="#555"
                      ></path>
                    </svg> */}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
