"use client";
import React from "react";

const page = () => {
  const popups = (card) => {
    console.log("Open Popup "+card);
    document.getElementById(card).classList.remove("hidden");
    document.getElementById("co-buttons").classList.add("hidden");
    document.getElementById("up-buttons").classList.add("hidden");
    document.getElementById("co-pj").classList.add("hidden");
    document.getElementById("up-pj").classList.add("hidden");

  };
  const close_popup = (card) => {
    document.getElementById(card).classList.add("hidden");
    document.getElementById("co-buttons").classList.remove("hidden");
    document.getElementById("up-buttons").classList.remove("hidden");
    document.getElementById("co-pj").classList.remove("hidden");
    document.getElementById("up-pj").classList.remove("hidden");
  };
  return (
    <>
      <div className="bg-[#05062b] w-[100vw] h-[100vh] flex justify-center relative overflow-x-hidden sm:hidden">
        <div className="h-[273px] w-[266px] rounded-[273px]  flex-shrink-0 z-0 bg-[#FB2576] blur-[105px] absolute top-28 -left-[80px]"></div>
        <div className="h-[273px] w-[266px] rounded-[273px] flex-shrink-0 z-0 bg-[#8000FF] blur-[105px] absolute top-[320px] -right-[60px]"></div>

        <div className="w-4/5 z-10">
          {/*<!-- HEADER -->*/}

          <div className="text-white w-full">
            <div>
              <h1 className="text-3xl font-julius">DRONE</h1>
              <h6>Projects</h6>
              <hr className="border-1 w-[88%]" />
            </div>
          </div>

          {/*<!-- COMPLETED PROJECTS -->*/}

          <div className="text-white">
            <div className="flex justify-center">
              <h1 className="text-lg p-1" id="co-pj">Completed Projects</h1>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-4" id="co-buttons">
              {/*<!-- COMPLETED PROJECTS BUTTON-1 -->*/}

              <button
                onClick={() => {
                  popups(`card-c-1`);
                }}
                className="w-24 h-20 text-black mx-auto grid grid-rows-6 rounded-md overflow-hidden"
              >
                <div className="row-span-4">
                  <img
                    src="../../images/drone/udn-mark-F404.png"
                    alt=""
                    className="object-fill w-full"
                  />
                </div>
                <div className="row-span-2 bg-white">
                  <div className="w-full h-full grid grid-rows-2 gap-0">
                    <div className="row-span-1">
                      <h6 className="text-[11px] font-julius">UDN-MarK - F404</h6>
                    </div>
                    <div className="row-span-1 text-[8px]">
                      <h6 className="float-right m-1 mt-0">read more</h6>
                    </div>
                  </div>
                </div>
              </button>

              {/*<!-- COMPLETED PROJECTS BUTTON-2 -->*/}

              <button
                onClick={() => {
                  popups(`card-c-2`);
                }}
                className="w-24 h-20 text-black mx-auto grid grid-rows-6 rounded-md overflow-hidden"
              >
                <div className="row-span-4">
                  <img
                    src="../../images/drone/udn-firebolt-F404.png"
                    alt=""
                    className="object-fill w-full"
                  />
                </div>
                <div className="row-span-2 bg-white">
                  <div className="w-full h-full grid grid-rows-2 gap-0">
                    <div className="row-span-1">
                      <h6 className="text-[11px] font-julius">UDN- FirebolT - F404</h6>
                    </div>
                    <div className="row-span-1 text-[8px]">
                      <h6 className="float-right m-1 mt-0">read more</h6>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/*<!-- CARDS COMPLETED PROJECTS -->*/}
          {/*<!-- CARDS COMPLETED PROJECTS -->*/}
          {/*<!-- CARDS COMPLETED PROJECTS -->*/}
          {/*<!-- CARDS COMPLETED PROJECTS -->*/}

          <div className="flex justify-center items-center">
            {/*<!-- COMPLETED CARD-1 -->*/}

            <div
              id="card-c-1"
              className=" w-full rounded-3xl text-white hidden "
            >
              <div className="flex justify-center m-6">
                <img
                  src="../../images/drone/udn-mark-F404.png"
                  alt=""
                  className="w-[50%]"
                />
              </div>
              <div className="w-[85%] ml-8">
                <h1 className="text-2xl font-julius">UDN-MarK - F404</h1>
                <h2>About:</h2>
                <p>
                UDN-MarK - F404 is designed for agile flight and smooth control this is equipped with powerful BLDC motors which provides tremendous amount of thrust to UDN-MarK - F404. Its lightweight and compact design makes it highly manoeuvrable, it's perfect for both indoor and outdoor flights.it is capable of lifting about 6 kgs of weight at its maximum throttle.
                </p>
              </div>

              <div className="flex justify-center m-4">
                <button
                  onClick={() => {
                    close_popup(`card-c-1`);
                  }}
                  className="btn bg-[#04aa6d] text-white my-2 mx-2 rounded-lg font-bold px-4 py-2"
                >
                  {" "}
                  Close{" "}
                </button>
              </div>
            </div>

            {/*<!-- COMPLETED CARD-2 -->*/}

            <div
              id="card-c-2"
              className=" w-full rounded-3xl text-white hidden"
            >
              <div className="flex justify-center m-6">
                <img
                  src="../../images/drone/udn-firebolt-F404.png"
                  alt=""
                  className="w-[50%]"
                />
              </div>
              <div className="w-[85%] ml-8">
                <h1 className="text-2xl font-julius">UDN- FirebolT - F404</h1>
                <h2>About:</h2>

                <p>
                FirebolT is designed for its speed. It is a perfect UAV for fpv racing or freestyle its sturdy construction ensures durability and resistance during high speed maneuvering.it is equipped with high definition camera mounted on it.this model is mainly constructed for racing and it will be participating in World Robotics Competition Technoxian 2023.
                </p>
              </div>

              <div className="flex justify-center m-4">
                <button
                  onClick={() => {
                    close_popup(`card-c-2`);
                  }}
                  className="btn bg-[#04aa6d] text-white my-2 mx-2 rounded-lg font-bold px-4 py-2"
                >
                  {" "}
                  Close{" "}
                </button>
              </div>
            </div>
          </div>

          {/*<!-- UPCOMING PROJECTS -->*/}

          {/*<!-- CARDS OF UPCOMING PROJECTS -->*/}
          {/*<!-- CARDS OF UPCOMING PROJECTS -->*/}
          {/*<!-- CARDS OF UPCOMING PROJECTS -->*/}
          {/*<!-- CARDS OF UPCOMING PROJECTS -->*/}
          <div className="flex justify-center items-center">
            {/*<!-- UPCOMING CARD-1 -->*/}

            <div
              id="card-u-1"
              className=" w-full rounded-3xl text-white hidden"
            >
              <div className="flex justify-center m-6">
                <img
                  src="../../images/drone/udn-optimus-prime.png"
                  alt=""
                  className="w-[50%]"
                />
              </div>
              <div className="w-[85%] ml-8">
                <h1 className="text-2xl font-julius">UDN- Optimus prime</h1>
                <h2>About:</h2>

                <p>
                Optimus is a highly advanced UAV that is specially engineered to capture other drones in mid air, neutralising potential threats with its precision and efficiency. This will be equipped with more sensors than a normal quad.this can be used when other drones are flying in restricted area.many autonomous features and specifications will be announced soon.
                </p>
              </div>

              <div className="flex justify-center m-4">
                <button
                  onClick={() => {
                    close_popup(`card-u-1`);
                  }}
                  className="btn bg-[#04aa6d] text-white my-2 mx-2 rounded-lg font-bold px-4 py-2"
                >
                  {" "}
                  Close{" "}
                </button>
              </div>
            </div>

            {/*<!-- UPCOMING CARD-2 -->*/}

            <div
              id="card-u-2"
              className=" w-full rounded-3xl text-white hidden"
            >
              <div className="flex justify-center m-6">
                <img
                  src="../../images/drone/udn-helicarrier.png"
                  alt=""
                  className="w-[50%]"
                />
              </div>
              <div className="w-[85%] ml-8">
                <h1 className="text-2xl font-julius">
                UDN-Helicarrier
                </h1>
                <h2>About:</h2>

                <p>
                
                Helicarrier will be engineered to tackle demanding logistics challenges. It will be able to lift and transport heavy loads with a very high accuracy. Not only the weight but it will be able to clutch any object with an irregular shape. Despite the load it will be remarkable for flying with stability and strength.the lifting process is completely done only by  Helicarrier no human interference will be noticed.
                </p>
              </div>

              <div className="flex justify-center m-4">
                <button
                  onClick={() => {
                    close_popup(`card-u-2`);
                  }}
                  className="btn bg-[#04aa6d] text-white my-2 mx-2 rounded-lg font-bold px-4 py-2"
                >
                  {" "}
                  Close{" "}
                </button>
              </div>
            </div>

            {/*<!-- UPCOMING CARD-3 -->*/}

            <div
              id="card-u-3"
              className=" w-full rounded-3xl text-white hidden"
            >
              <div className="flex justify-center m-6">
                <img
                  src="../../images/drone/udn-vtol.png"
                  alt=""
                  className="w-[50%]"
                />
              </div>
              <div className="w-[85%] ml-8">
                <h1 className="text-2xl font-julius">UDN-VTOL</h1>
                <h2>About:</h2>

                <p>
                  UDN-VTOL with outonomous flight capabilities combines the
                  advantages of vertical takeoff and landing with the efficiency
                  of horizontal flight, its onboard sensors, flight controller,
                  and advanced control systems allow for autonomous operation,
                  making it a powerful tool for various applications such as
                  erial surveying mapping, cargo delivery, and more.
                </p>

                <ul className="mt-4">
                  <li>General specifications</li>
                  <li>length:</li>
                  <li>CG :</li>
                  <li>Wingspan:</li>
                  <li>Dry Weight:</li>
                  <li>Wing loading:</li>
                </ul>
              </div>

              <div className="flex justify-center m-4">
                <button
                  onClick={() => {
                    close_popup(`card-u-3`);
                  }}
                  className="btn bg-[#04aa6d] text-white my-2 mx-2 rounded-lg font-bold px-4 py-2"
                >
                  {" "}
                  Close{" "}
                </button>
              </div>
            </div>
          </div>

          {/*<!-- UPCOMING BUTTONS -->*/}

          <div className="text-white my-8">
            <div className="flex justify-center">
              <h1 className="text-lg p-1" id="up-pj">Upcoming Projects</h1>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-4" id="up-buttons">
              {/*<!-- UPCOMING BUTTON-1 -->*/}

              <button
                onClick={() => {
                  popups(`card-u-1`);
                }}
                className="w-24 h-20 text-black mx-auto grid grid-rows-6 rounded-md overflow-hidden"
              >
                <div className="row-span-4">
                  <img
                    src="../../images/drone/udn-optimus-prime.png"
                    alt=""
                    className="object w-full"
                  />
                </div>
                <div className="row-span-2 bg-white">
                  <div className="w-full h-full grid grid-rows-2 gap-0">
                    <div className="row-span-1">
                      <h6 className="text-[11px] font-julius">UDN- Optimus prime</h6>
                    </div>
                    <div className="row-span-1 text-[8px]">
                      <h6 className="float-right m-1 mt-0">read more</h6>
                    </div>
                  </div>
                </div>
              </button>

              {/*<!-- UPCOMING BUTTON-2 -->*/}

              <button
                onClick={() => {
                  popups(`card-u-2`);
                }}
                className="w-24 h-20 text-black mx-auto grid grid-rows-6 rounded-md overflow-hidden"
              >
                <div className="row-span-4">
                  <img
                    src="../../images/drone/udn-helicarrier.png"
                    alt=""
                    className="object-fill w-full"
                  />
                </div>
                <div className="row-span-2 bg-white">
                  <div className="w-full h-full grid grid-rows-2 gap-0">
                    <div className="row-span-1">
                      <h6 className="text-[11px] font-julius">
                      UDN-Helicarrier
                      </h6>
                    </div>
                    <div className="row-span-1 text-[8px]">
                      <h6 className="float-right m-1 mt-0">read more</h6>
                    </div>
                  </div>
                </div>
              </button>

              {/*<!-- UPCOMING BUTTON-3 -->*/}

            <button
                onClick={() => {
                  popups(`card-u-3`);
                }}
                className="w-24 h-20 text-black mx-auto grid grid-rows-6 rounded-md overflow-hidden  col-span-2"
              >
                <div className="row-span-4">
                  <img
                    src="../../images/drone/udn-vtol.png"
                    alt=""
                    className="object-fill w-full"
                  />
                </div>
                <div className="row-span-2 bg-white">
                  <div className="w-full h-full grid grid-rows-2 gap-0">
                    <div className="row-span-1">
                      <h6 className="text-[11px] font-julius">
                      UDN-VTOL
                      </h6>
                    </div>
                    <div className="row-span-1 text-[8px]">
                      <h6 className="float-right m-1 mt-0">read more</h6>
                    </div>
                  </div>
                </div>
              </button>
              
            </div>
            
          </div>
        </div>
      </div>

      {/*<!--    -   -   -   -   -   -   -   -   -   -   -   -   FOR PC  -   -   -   -   -   -   -   -   -   -   -   -   -   -    -->*/}
      {/*<!--    -   -   -   -   -   -   -   -   -   -   -   -   FOR PC  -   -   -   -   -   -   -   -   -   -   -   -   -   -    -->*/}
      {/*<!--    -   -   -   -   -   -   -   -   -   -   -   -   FOR PC  -   -   -   -   -   -   -   -   -   -   -   -   -   -    -->*/}
      {/*<!--    -   -   -   -   -   -   -   -   -   -   -   -   FOR PC  -   -   -   -   -   -   -   -   -   -   -   -   -   -    -->*/}

      <div className="w-full bg-[rgb(5,6,43)] justify-center relative overflow-x-hidden hidden sm:flex">
        <div className="h-[396px] w-[407.647px] bg-[#ff002f62] flex-shrink-0 rounded-[407.647px] blur-[100px] z-0 absolute top-[-180px] right-[-200px]"></div>
        <div className="h-[582px] w-[571px] z-0 bg-[#8000ff38] flex-shrink-0 rounded-[582px] blur-[206.46499633789062px] absolute top-[350px] left-[130px]"></div>
        

        <div className="w-[70%] flex z-10 text-xl  font-poppins">
          <div className="text-white">
            <div>
              <h1 className="text-5xl font-julius">DRONE</h1>
              <h6>Projects</h6>
              <hr className="border-2 w-1/2" />
            </div>

            <div className="flex justify-center">
              <h1 className="text-[45px] font-medium p-1 m-8">
                Completed Projects
              </h1>
            </div>

            <div>
              <div className="flex w-full my-5">
                <div className="w-[70%] mr-9">
                  <h1 className="text-[35px] my-4">UDN-MarK - F404</h1>
                  <h2>About:</h2>

                  <p>
                  We at UDAAN have successfully built a soda bottle UDN-MarK - F404 that utilizes water 
                  pressure as the propellant, resulting in thrilling and high-reaching flights. 
                  This project highlights the excitement and educational value of harnessing water 
                  pressure for propelling a homemade rocket into the sky. Our model consists of 2-liter 
                  plastic soda bottle serves as the main body providing a lightweight and airtight 
                  structure, a Nosecone which reduces aerodynamic drag and enhances stability, Fins, 
                  Nozzle (generates thrust), recovery system(parachute) etc. It demonstrates the concepts 
                  of action and reaction, aerodynamics, and Engg. design.
                  </p>
                </div>

                <div className="w-[30%] flex items-center">
                  <img
                    src="../../images/drone/udn-mark-F404.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="flex w-full my-5">
                <div className="w-[30%] flex items-center">
                  <img
                    src="../../images/drone/udn-firebolt-F404.png"
                    alt=""
                  />
                </div>
                <div className="w-[70%] ml-9">
                  <h1 className="text-[35px] my-4">UDN- FirebolT - F404</h1>
                  <h2>About:</h2>

                  <p>
                  FirebolT is designed for its speed. It is a perfect UAV for fpv racing or freestyle its sturdy construction ensures durability and resistance during high speed maneuvering.it is equipped with high definition camera mounted on it.this model is mainly constructed for racing and it will be participating in World Robotics Competition Technoxian 2023.
                  </p>
                </div>
              </div>
            </div>

            {/*<!-- UPCOMING PROJECTS -->*/}
            {/*<!-- UPCOMING PROJECTS -->*/}

            <div className="flex justify-center my-16">
              <h1 className="text-[45px] font-medium p-1 m-8">
                Upcoming Projects
              </h1>
            </div>

            <div>
              <div className="flex w-full my-5">
                <div className="w-[70%] mr-9">
                  <h1 className="text-[35px] my-4">UDN- Optimus prime</h1>
                  <h2>About:</h2>

                  <p>
                  Optimus is a highly advanced UAV that is specially engineered to capture other drones in mid air, neutralising potential threats with its precision and efficiency. This will be equipped with more sensors than a normal quad.this can be used when other drones are flying in restricted area.many autonomous features and specifications will be announced soon.
                  </p>
                </div>

                <div className="w-[30%] flex items-center">
                  <img
                    src="../../images/drone/udn-optimus-prime.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="flex w-full my-5">
                <div className="w-[30%] flex items-center">
                  <img
                    src="../../images/drone/udn-helicarrier.png"
                    alt=""
                  />
                </div>
                <div className="w-[70%] ml-9">
                  <h1 className="text-[35px] my-4">UDN-Helicarrier</h1>
                  <h2>About:</h2>

                  <p>
                  It is a mechanism used in UDN- FirebolT - F404 to deploy recovery devices like parachutes or streamers at the apogee (maximum altitude reached). It operates by using a piston to forcefully push the recovery device out of the rocket's body, ensuring reliable and timely deployment. An ejection charge generates the force required to push the piston and deployment the recovery device. The ejection charge is ignited at the apogee of the rocket's flight, either by an electronic altimeter or a mechanical timer. We have worked on the 3d CAD design of the system and plan to work on an ignition mechanism such as an electric match or igniter to be used in our Piston ejection system.
                  </p>
                </div>
              </div>

              <div className="flex w-full my-5">
                <div className="w-[70%] mr-9">
                  <h1 className="text-[35px] my-4">UDN-VTOL</h1>
                  <h2>About:</h2>

                  <p>
                  UDN-VTOL with autonomous flight capabilities combines the advantages of vertical takeoff and landing with the efficiency of horizontal flight. Its onboard sensors, flight controller, and advanced control systems allow for autonomous operation, making it a powerful tool for various applications such as aerial surveying, mapping, cargo delivery, and more.
                  </p>
                </div>

                <div className="w-[30%] flex items-center">
                  <img
                    src="../../images/drone/udn-vtol.png"
                    alt=""
                  />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
