import React from "react";

function Hero() {
  return (
    <div className="bg-black text-white min-h-screen min-w-min lg:pl-60">
      {/* ------------------------------------------------- section = 1 ------------------------------------------------ */}
      <div className="fixed left-0 top-0 fit h-full w-44 bg-slate-800 flex flex-col items-center justify-center ms:max-w- invisible lg:visible">
        <img className=" mb-20 text-white" src="/Vector.svg" />
        <img className="" src="/STYLISH TEXT OVER.png" />
      </div>

      {/* ------------------------------------------------- section = 2 ------------------------------------------------ */}
      {/* <div className="ml-20 p-8 flex flex-col w-full sm:grid-cols-1"> */}
        <div className="pt-6 mx-8 lg:flex sm:pt-20 md:mx-10">
          <div className="a">
            <h1 className="text-4xl font-black-ops mt-6 sm:text-8xl">
              AIR MAX
            </h1>
            <h2 className="text-4xl font-Cabin text-white mt-2">
              NIKE AIR MAX 90
            </h2>

            <div className="relative lg:hidden">
              <img
                src="/shoes.png"
                alt="Nike Air Max"
                width={690.973}
                height={473.649}
                className=""
              />
            </div>

            <p className="text-5xl font-semibold mt-16">$98</p>
            <p className="text-white mt-5 font-normal font-Cabin italic leading-relaxed max-w-xl flex">
              Nike Air Max is a line of shoes produced by Nike, Inc., with the
              first model released in 1987. Air Max shoes are identified by
              their midsoles incorporating flexible urethane pouches filled with
              pressurized gas, visible from the exterior of the shoe and
              intended to provide cushioning to the underfoot.
            </p>
            <button className="mt-8 mb-6 px-6 py-2 bg-gray-500 rounded-full text-gray-200 hover:bg-gray-700">
              ADD TO CART
            </button>
          </div>

          {/* Product Image */}
          <div className="invisible lg:visible">
            <img
              src="/shoes.png"
              alt="Nike Air Max"
              width={690.973}
              height={473.649}
              className=""
            />
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default Hero;
