import "../App.css";
import Nav from "./Nav";
import Elipse from "../assets/png/Elipse.png";
import { useContext } from "react";
import { GeneralContext } from "../context/context";
import location from '../assets/png/location.png'
const Hero = () => {
  const { nav } = useContext(GeneralContext);
  return (
    <>
      <div className="hero-bg">
        <div className="">
          <Nav />

          <div className="flex flex-col items-center gap-12 lg:mt-0 mt-10">
            <h2 className="font-semibold md:w-[50%] mt-14 text-3xl lg:text-5xl leading-[4rem] mx-auto lg:leading-[5rem] lg:w-[40%] text-white text-center">
              Choose A Country For Your Next Adventure?
            </h2>

            <h2 className="-mb-3 text-white">From local escapes to far-flung adventures</h2>
            <fieldset className="flex bg-white justify-between items-center w-fit mx-auto gap-4 lg:w-[25%] py-2 px-5 rounded-[2rem]">
              
             <img src={location} alt="" />
              <input
                className=" outline-none "
                type="text"
                placeholder="Seatch Destination"
              />
              <img className="h-8" src={Elipse} alt="" />
            </fieldset>

          <div>
          <h2 className="text-white text-center -mb-2">Or Browse the selected Type</h2>
            <div className="flex justify-center flex-wrap gap-10 mt-10">
              <span className="bg-[#ffffff27] hover:scale-105 transition text-right lg:w-32 w-24 text-white lg:px-5 px-3 py-3 rounded-[2rem]">
                Culture
              </span>

              <span className="bg-[#ffffff27] hover:scale-105 transition text-right lg:w-32 w-24 text-white lg:px-5 px-3 py-3 rounded-[2rem]">
                Food
              </span>

              <span className="bg-[#ffffff27] hover:scale-105 transition text-right lg:w-32 w-24 text-white lg:px-5 px-3 py-3 rounded-[2rem]">
                Nature
              </span>

              <span className="bg-[#ffffff27] hover:scale-105 transition text-right lg:w-32 w-24 text-white lg:px-5 px-3 py-3 rounded-[2rem]">
                Adventure
              </span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
