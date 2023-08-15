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
      <div className="w-[100vw] h-auto flex justify-center relative overflow-x-hidden sm:hidden">
        <div className="h-[273px] w-[266px] rounded-[273px]  flex-shrink-0 -z-10 bg-[#FB2576] blur-[105px] absolute top-28 -left-[80px]"></div>
        <div className="h-[273px] w-[266px] rounded-[273px] flex-shrink-0 -z-10 bg-[#8000FF] blur-[105px] absolute top-[320px] -right-[60px]"></div>

        <div className="w-4/5">
          {/*<!-- HEADER -->*/}

          <div className="text-white w-full">
            <div>
              <h1 className="text-3xl font-julius">RC PALNE</h1>
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
                    src="../../images/plane/nora.png"
                    alt=""
                    className="object-fill w-full"
                  />
                </div>
                <div className="row-span-2 bg-white">
                  <div className="w-full h-full grid grid-rows-2 gap-0">
                    <div className="row-span-1">
                      <h6 className="text-[10px] font-julius">Nora</h6>
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
                    src="../../images/plane/fatboy.png"
                    alt=""
                    className="object-fill w-full"
                  />
                </div>
                <div className="row-span-2 bg-white">
                  <div className="w-full h-full grid grid-rows-2 gap-0">
                    <div className="row-span-1">
                      <h6 className="text-[10px] font-julius">Fatboy</h6>
                    </div>
                    <div className="row-span-1 text-[8px]">
                      <h6 className="float-right m-1 mt-0">read more</h6>
                    </div>
                  </div>
                </div>
              </button>

              {/*<!-- COMPLETED PROJECTS BUTTON-3 -->*/}

              <button
                onClick={() => {
                  popups(`card-c-3`);
                }}
                className="w-24 h-20 text-black mx-auto grid grid-rows-6 rounded-md overflow-hidden"
              >
                <div className="row-span-4">
                  <img
                    src="../../images/plane/whale.png"
                    alt=""
                    className="object-fill w-full"
                  />
                </div>
                <div className="row-span-2 bg-white">
                  <div className="w-full h-full grid grid-rows-2 gap-0">
                    <div className="row-span-1">
                      <h6 className="text-[10px] font-julius">Whale</h6>
                    </div>
                    <div className="row-span-1 text-[8px]">
                      <h6 className="float-right m-1 mt-0">read more</h6>
                    </div>
                  </div>
                </div>
              </button>

              {/*<!-- COMPLETED PROJECTS BUTTON-4 -->*/}

              <button
                onClick={() => {
                  popups(`card-c-4`);
                }}
                className="w-24 h-20 text-black mx-auto grid grid-rows-6 rounded-md overflow-hidden"
              >
                <div className="row-span-4">
                  <img
                    src="../../images/plane/elephant.png"
                    alt=""
                    className="object-fill w-full"
                  />
                </div>
                <div className="row-span-2 bg-white">
                  <div className="w-full h-full grid grid-rows-2 gap-0">
                    <div className="row-span-1">
                      <h6 className="text-[10px] font-julius">Elephent</h6>
                    </div>
                    <div className="row-span-1 text-[8px]">
                      <h6 className="float-right m-1 mt-0">read more</h6>
                    </div>
                  </div>
                </div>
              </button>

              {/*<!-- COMPLETED PROJECTS BUTTON-5 -->*/}

              <button
                onClick={() => {
                  popups(`card-c-5`);
                }}
                className="w-24 h-20 text-black mx-auto grid grid-rows-6 rounded-md overflow-hidden"
              >
                <div className="row-span-4">
                  <img
                    src="../../images/plane/surprise.png"
                    alt=""
                    className="object-fill w-full"
                  />
                </div>
                <div className="row-span-2 bg-white">
                  <div className="w-full h-full grid grid-rows-2 gap-0">
                    <div className="row-span-1">
                      <h6 className="text-[10px] font-julius">Surprise</h6>
                    </div>
                    <div className="row-span-1 text-[8px]">
                      <h6 className="float-right m-1 mt-0">read more</h6>
                    </div>
                  </div>
                </div>
              </button>

              {/*<!-- COMPLETED PROJECTS BUTTON-6 -->*/}

              <button
                onClick={() => {
                  popups(`card-c-6`);
                }}
                className="w-24 h-20 text-black mx-auto grid grid-rows-6 rounded-md overflow-hidden"
              >
                <div className="row-span-4">
                  <img
                    src="../../images/plane/udn-Glider.png"
                    alt=""
                    className="object-fill w-full"
                  />
                </div>
                <div className="row-span-2 bg-white">
                  <div className="w-full h-full grid grid-rows-2 gap-0">
                    <div className="row-span-1">
                      <h6 className="text-[10px] font-julius">UND Glider</h6>
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
                  src="../../images/plane/nora.png"
                  alt=""
                  className="w-[50%]"
                />
              </div>
              <div className="w-[85%] ml-8">
                <h1 className="text-2xl font-julius">Nora</h1>
                <h2>About:</h2>
                <p>
                  Nora is a very slim aircraft that resembles a flying needle
                  when in the skies. It is very simple to produce. With a
                  dihydral wing and a sturdy fuselage, the aircraft is
                  incredibly stable and straightforward to pilot. This is a
                  great option for those who are new to model aviation
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
                  src="../../images/plane/fatboy.png"
                  alt=""
                  className="w-[50%]"
                />
              </div>
              <div className="w-[85%] ml-8">
                <h1 className="text-2xl font-julius">Fatboy</h1>
                <h2>About:</h2>

                <p>
                  The fatboy is one of the most trusted cargo plane in our club.
                  With a large cargo carrying capacity and a dihedral wing, this
                  aircraft is very versatile, as it can transport cargo and also
                  serves as a trainer aircraft due to its stability and ease of
                  operation.
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
                    close_popup(`card-c-2`);
                  }}
                  className="btn bg-[#04aa6d] text-white my-2 mx-2 rounded-lg font-bold px-4 py-2"
                >
                  {" "}
                  Close{" "}
                </button>
              </div>
            </div>

            {/*<!-- COMPLETED CARD-3 -->*/}

            <div
              id="card-c-3"
              className=" w-full rounded-3xl text-white hidden"
            >
              <div className="flex justify-center m-6">
                <img
                  src="../../images/plane/whale.png"
                  alt=""
                  className="w-[50%]"
                />
              </div>
              <div className="w-[85%] ml-8">
                <h1 className="text-2xl font-julius">Whale</h1>
                <h2>About:</h2>

                <p>
                  About A huge plane that looks like a flying whole when it's in
                  the air, it can carry a lot of cargo and has a tapered
                  trailing edge that gives it the aerodynamic benefits of a
                  longer wingspan without the extra weight and drog. The wing is
                  set up like a parachute so it can lift more.
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
                    close_popup(`card-c-3`);
                  }}
                  className="btn bg-[#04aa6d] text-white my-2 mx-2 rounded-lg font-bold px-4 py-2"
                >
                  {" "}
                  Close{" "}
                </button>
              </div>
            </div>

            {/*<!-- COMPLETED CARD-4 -->*/}

            <div
              id="card-c-4"
              className=" w-full rounded-3xl text-white hidden"
            >
              <div className="flex justify-center m-6">
                <img
                  src="../../images/plane/elephant.png"
                  alt=""
                  className="w-[50%]"
                />
              </div>
              <div className="w-[85%] ml-8">
                <h1 className="text-2xl font-julius">Elephent</h1>
                <h2>About:</h2>

                <p>
                  About Inspired by Boeing C-17 Globemaster e elephant which
                  indeed a cargo plane gives a vibe of military air craft has an
                  incredible cargo carrying capacity with its light weight body
                  it required very less thrust while flying without cargo
                  because of its high lift.
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
                    close_popup(`card-c-4`);
                  }}
                  className="btn bg-[#04aa6d] text-white my-2 mx-2 rounded-lg font-bold px-4 py-2"
                >
                  {" "}
                  Close{" "}
                </button>
              </div>
            </div>

            {/*<!-- COMPLETED CARD-5 -->*/}

            <div
              id="card-c-5"
              className=" w-full rounded-3xl text-white hidden"
            >
              <div className="flex justify-center m-6">
                <img
                  src="../../images/plane/surprise.png"
                  alt=""
                  className="w-[50%]"
                />
              </div>
              <div className="w-[85%] ml-8">
                <h1 className="text-2xl font-julius">Surprise</h1>
                <h2>About:</h2>

                <p>
                  Surprise is the combination of slim and a cargo carrying
                  capable plane which is similar to its previous version NORA.
                  This plane has a very redge fuselage made up from composite of
                  wood and corrugated plastic. It has a long cord length which
                  helps it to give more lift.
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
                    close_popup(`card-c-5`);
                  }}
                  className="btn bg-[#04aa6d] text-white my-2 mx-2 rounded-lg font-bold px-4 py-2"
                >
                  {" "}
                  Close{" "}
                </button>
              </div>
            </div>

            {/*<!-- COMPLETED CARD-6 -->*/}

            <div
              id="card-c-6"
              className=" w-full rounded-3xl text-white hidden top-28"
            >
              <div className="flex justify-center m-6">
                <img
                  src="../../images/plane/udn-Glider.png"
                  alt=""
                  className="w-[50%]"
                />
              </div>
              <div className="w-[85%] ml-8">
                <h1 className="text-lg font-julius">UND Glider</h1>
                <h2>About:</h2>

                <p>
                  RC Glider- A radio-controlled (RC) glider is a
                  remote-controlled gecraft designed to scor through the air
                  using the power of wind and thermals. It is a sleek and
                  lightweight aircroft with an aerodynamic design, allowing it
                  to achieve long flight times and graceful gliding monoeuvres.
                  RC gliders excel at scaring and riding thermals, which are
                  columns of rising warm air. We can skil-fully exploit these
                  thanmals; glider can achi long tight durations and cover
                  considerable distances without the need for an onboard power
                  source.
                </p>

                <ul className="mt-4">
                  <li>General specifications</li>
                  <li>length:</li>
                  <li>CG :</li>
                  <li>Wingspan:</li>
                  <li>Dry Weight:</li>
                  <li>Wing loading:</li>
                </ul>
                <h1 className="text-2xl my-3">Uses of RC Glider-</h1>
                <ol className="list-decimal">
                  <li>
                    <p>
                      Recreation and Hobby: Many people enjoy flying RC gliders
                      as a recreational activity and a hobby. It offers an
                      immersive and relaxing flying experiance. allowing
                      individuals to spend time outdoors while enjoying the
                      thril of piloting on aircraft
                    </p>
                  </li>
                  <li>
                    <p>
                      Aric Photography and Videography: RC glider can be
                      equipped with cameras or FPV (First Person View) systems
                      to capture stunning perial photographs and videos, The
                      quiet and stable flight characteristics of gliders make
                      them well-suited for capturing aerial footage in a smooth
                      and cinematic manner.
                    </p>
                  </li>
                  <li>
                    <p>
                      Scientific Research: RC Gliders are used in scientific
                      research for various purposes. They can be employed to
                      study atmospheric conditions. gather date on wind
                      potterns, or monitor wildlife and ecosystems from an
                      aerial perspective.
                    </p>
                  </li>
                  <li>
                    <p>
                      Experimental Platforms: RC gliders provide a platform for
                      experimentation and innovation Hobbysts and researchers
                      commodify and customize gidersto test new technologies,
                      corodynamic designs, or fight control systems.
                    </p>
                  </li>
                </ol>
              </div>

              <div className="flex justify-center m-4">
                <button
                  onClick={() => {
                    close_popup(`card-c-6`);
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
                  src="../../images/plane/ft-edge-540.png"
                  alt=""
                  className="w-[50%]"
                />
              </div>
              <div className="w-[85%] ml-8">
                <h1 className="text-2xl font-julius">FT Edge 540</h1>
                <h2>About:</h2>

                <p>
                  FT.Edge 540 is a remote-controlled (RC) version of the
                  full-scale Edge 540-designed by Rite Test. It retains its
                  aerodynamic design low-wing configuration, and symmetrical
                  airfoil we are taking this plone to compete in the World
                  Robotics Competition Technosian 2023
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
                  src="../../images/plane/udn-cargo-commander-1.png"
                  alt=""
                  className="w-[50%]"
                />
              </div>
              <div className="w-[85%] ml-8">
                <h1 className="text-2xl font-julius">
                  UDN Cargo Commander-1 (UDN CC-1)
                </h1>
                <h2>About:</h2>

                <p>
                  Cardo Commander is the combination of a single motor and
                  under- camber wing design in this RC cargo plane enables
                  efficient cargo transportation, stable fight characteristics,
                  and the ability to handle various payload sizes and weights.
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
                  src="../../images/plane/udn-vtol.png"
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

            {/*<!-- UPCOMING CARD-4 -->*/}

            <div
              id="card-u-4"
              className=" w-full rounded-3xl text-white hidden"
            >
              <div className="flex justify-center m-6">
                <img
                  src="../../images/plane/sukhoisu-30-UDN.png"
                  alt=""
                  className="w-[50%]"
                />
              </div>
              <div className="w-[85%] ml-8">
                <h1 className="text-2xl font-julius">SukhoiSu-30 UDN</h1>
                <h2>About:</h2>

                <p>
                  The Sukhoi Su-30 UDN coptures the iconic design and aggressive
                  appearance of the full-scale Su-30 fighter jet, features a
                  sleek streamlined fuselage with swept-back wings and twin
                  vertical stabilizers. The attention to detail in the models
                  construction and point scheme accurately replicates the
                  distinctive look of the Su-30
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
                    close_popup(`card-u-4`);
                  }}
                  className="btn bg-[#04aa6d] text-white my-2 mx-2 rounded-lg font-bold px-4 py-2"
                >
                  {" "}
                  Close{" "}
                </button>
              </div>
            </div>

            {/*<!-- UPCOMING CARD-5 -->*/}

            <div
              id="card-u-5"
              className=" w-full rounded-3xl text-white hidden"
            >
              <div className="flex justify-center m-6">
                <img
                  src="../../images/plane/udn-Amphibian.png"
                  alt=""
                  className="w-[50%]"
                />
              </div>
              <div className="w-[85%] ml-8">
                <h1 className="text-2xl font-julius">UND-Amphibian</h1>
                <h2>About:</h2>

                <p>
                  The RC Amphibian is specifically designed to offer the
                  capability of taking off and landing on both solid ground and
                  water surfaces It features a combination of design elements
                  and features that allow for smooth transitions between land
                  and water operations
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
                    close_popup(`card-u-5`);
                  }}
                  className="btn bg-[#04aa6d] text-white my-2 mx-2 rounded-lg font-bold px-4 py-2"
                >
                  {" "}
                  Close{" "}
                </button>
              </div>
            </div>

            {/*<!-- UPCOMING CARD-6 -->*/}

            <div
              id="card-u-6"
              className=" w-full rounded-3xl text-white hidden"
            >
              <div className="flex justify-center m-6">
                <img
                  src="../../images/plane/udn-view.png"
                  alt=""
                  className="w-[50%]"
                />
              </div>
              <div className="w-[85%] ml-8">
                <h1 className="text-2xl font-julius">UND-View</h1>
                <h2>About:</h2>

                <p>
                  LON-View is a air surveilance aircraft, the primary purpose of
                  this aircraft is to gather visual or sensor based cota from
                  the air. It may be used for applications such as aerial
                  photography, videography, mapping environmental monitoring, or
                  even security and law enforcement purposes
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
                    close_popup(`card-u-6`);
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
                    src="../../images/plane/ft-edge-540.png"
                    alt=""
                    className="object w-full"
                  />
                </div>
                <div className="row-span-2 bg-white">
                  <div className="w-full h-full grid grid-rows-2 gap-0">
                    <div className="row-span-1">
                      <h6 className="text-[10px] font-julius">FT EDGE 540</h6>
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
                    src="../../images/plane/udn-cargo-commander-1.png"
                    alt=""
                    className="object-fill w-full"
                  />
                </div>
                <div className="row-span-2 bg-white">
                  <div className="w-full h-full grid grid-rows-2 gap-0">
                    <div className="row-span-1">
                      <h6 className="text-[10px] font-julius">
                        UDN Cargo Commander-1 (UND CC-1)
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
                className="w-24 h-20 text-black mx-auto grid grid-rows-6 rounded-md overflow-hidden"
              >
                <div className="row-span-4">
                  <img
                    src="../../images/plane/udn-vtol.png"
                    alt=""
                    className="object-fill w-full"
                  />
                </div>
                <div className="row-span-2 bg-white">
                  <div className="w-full h-full grid grid-rows-2 gap-0">
                    <div className="row-span-1">
                      <h6 className="text-[10px] font-julius">UDN-Volt</h6>
                    </div>
                    <div className="row-span-1 text-[8px]">
                      <h6 className="float-right m-1 mt-0">read more</h6>
                    </div>
                  </div>
                </div>
              </button>

              {/*<!-- UPCOMING BUTTON-4 -->*/}

              <button
                onClick={() => {
                  popups(`card-u-4`);
                }}
                className="w-24 h-20 text-black mx-auto grid grid-rows-6 rounded-md overflow-hidden"
              >
                <div className="row-span-4">
                  <img
                    src="../../images/plane/sukhoisu-30-UDN.png"
                    alt=""
                    className="object-fill w-full"
                  />
                </div>
                <div className="row-span-2 bg-white">
                  <div className="w-full h-full grid grid-rows-2 gap-0">
                    <div className="row-span-1">
                      <h6 className="text-[10px] font-julius">
                        SukhoiSu-30 UDN
                      </h6>
                    </div>
                    <div className="row-span-1 text-[8px]">
                      <h6 className="float-right m-1 mt-0">read more</h6>
                    </div>
                  </div>
                </div>
              </button>

              {/*<!-- UPCOMING BUTTON-5 -->*/}

              <button
                onClick={() => {
                  popups(`card-u-5`);
                }}
                className="w-24 h-20 text-black mx-auto grid grid-rows-6 rounded-md overflow-hidden"
              >
                <div className="row-span-4">
                  <img
                    src="../../images/plane/udn-Amphibian.png"
                    alt=""
                    className="object-fill w-full"
                  />
                </div>
                <div className="row-span-2 bg-white">
                  <div className="w-full h-full grid grid-rows-2 gap-0">
                    <div className="row-span-1">
                      <h6 className="text-[10px] font-julius">UDN-Amphibian</h6>
                    </div>
                    <div className="row-span-1 text-[8px]">
                      <h6 className="float-right m-1 mt-0">read more</h6>
                    </div>
                  </div>
                </div>
              </button>

              {/*<!-- UPCOMING BUTTON-6 -->*/}

              <button
                onClick={() => {
                  popups(`card-u-6`);
                }}
                className="w-24 h-20 text-black mx-auto grid grid-rows-6 rounded-md overflow-hidden"
              >
                <div className="row-span-4">
                  <img
                    src="../../images/plane/udn-view.png"
                    alt=""
                    className="object-fill w-full"
                  />
                </div>
                <div className="row-span-2 bg-white">
                  <div className="w-full h-full grid grid-rows-2 gap-0">
                    <div className="row-span-1">
                      <h6 className="text-[10px] font-julius">UDN-View</h6>
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
        <div className="h-[751px] w-[741px] bg-[#ff002f62] flex-shrink-0 rounded-[751px] blur-[225px] z-0 absolute right-[-320px]"></div>
        <div className="h-[582px] w-[571px] z-0 bg-[#8000ff38] flex-shrink-0 rounded-[582px] blur-[206.46499633789062px] absolute top-[350px] left-[130px]"></div>
        <div className="h-[396px] w-[407.647px] z-0 bg-[#fb257758] flex-shrink-0 rounded-[407.647px] blur-[76.46546936035156px] absolute top-[1850px] -left-[200px]"></div>
        <div className="h-[600px] w-[600px] z-0 bg-[#8000ff69] flex-shrink-0 rounded-[600px] blur-[150px] absolute top-[3000px] right-[-200px]"></div>

        <div className="w-[70%] flex z-10 text-xl  font-poppins">
          <div className="text-white">
            <div>
              <h1 className="text-5xl font-julius">RC PALNE</h1>
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
                  <h1 className="text-[35px] my-4">Nora</h1>
                  <h2>About:</h2>

                  <p>
                    Nora is a very slim aircraft that resembles a flying needle
                    when in the skies. It is very simple to produce. With a
                    dihydral wing and a sturdy fuselage, the aircraft is
                    incredibly stable and straightforward to pilot. This is a
                    great option for those who are new to model aviation
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

                <div className="w-[30%] flex items-center">
                  <img
                    src="../../images/plane/nora.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="flex w-full my-5">
                <div className="w-[30%] flex items-center">
                  <img
                    src="../../images/plane/fatboy.png"
                    alt=""
                  />
                </div>
                <div className="w-[70%] ml-9">
                  <h1 className="text-[35px] my-4">Fatboy</h1>
                  <h2>About:</h2>

                  <p>
                    The fatboy is one of the most trusted cargo plane in our
                    club. With a large cargo carrying capacity and a dihedral
                    wing, this aircraft is very versatile, as it can transport
                    cargo and also serves as a trainer aircraft due to its
                    stability and ease of operation.
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
              </div>

              <div className="flex w-full my-5">
                <div className="w-[70%] mr-9">
                  <h1 className="text-[35px] my-4">Whale</h1>
                  <h2>About:</h2>

                  <p>
                    About A huge plane that looks like a flying whole when it's
                    in the air, it can carry a lot of cargo and has a tapered
                    trailing edge that gives it the aerodynamic benefits of a
                    longer wingspan without the extra weight and drog. The wing
                    is set up like a parachute so it can lift more.
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

                <div className="w-[30%] flex items-center">
                  <img
                    src="../../images/plane/whale.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="flex w-full my-5">
                <div className="w-[30%] flex items-center">
                  <img
                    src="../../images/plane/elephant.png"
                    alt=""
                  />
                </div>
                <div className="w-[70%] ml-9">
                  <h1 className="text-[35px] my-4">Elephent</h1>
                  <h2>About:</h2>

                  <p>
                    About Inspired by Boeing C-17 Globemaster e elephant which
                    indeed a cargo plane gives a vibe of military air craft has
                    an incredible cargo carrying capacity with its light weight
                    body it required very less thrust while flying without cargo
                    because of its high lift.
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
              </div>

              <div className="flex w-full my-5">
                <div className="w-[70%] mr-9">
                  <h1 className="text-[35px] my-4">Surprise</h1>
                  <h2>About:</h2>

                  <p>
                    Surprise is the combination of slim and a cargo carrying
                    capable plane which is similar to its previous version NORA.
                    This plane has a very redge fuselage made up from composite
                    of wood and corrugated plastic. It has a long cord length
                    which helps it to give more lift.
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

                <div className="w-[30%] flex items-center">
                  <img
                    src="../../images/plane/surprise.png"
                    alt=""
                  />
                </div>
              </div>

              <div>
                <div className="flex w-full my-5">
                  <div className="w-[30%] flex items-center">
                    <img
                      src="../../images/plane/udn-Glider.png"
                      alt=""
                    />
                  </div>
                  <div className="w-[70%] ml-9">
                    <h1 className="text-[35px] my-4">UND Glider</h1>
                    <h2>About:</h2>

                    <p>
                      RC Glider- A radio-controlled (RC) glider is a
                      remote-controlled gecraft designed to scor through the air
                      using the power of wind and thermals. It is a sleek and
                      lightweight aircroft with an aerodynamic design, allowing
                      it to achieve long flight times and graceful gliding
                      monoeuvres. RC gliders excel at scaring and riding
                      thermals, which are columns of rising warm air. We can
                      skil-fully exploit these thanmals; glider can achi long
                      tight durations and cover considerable distances without
                      the need for an onboard power source.
                    </p>
                  </div>
                </div>
                <div className="flex w-full my-5">
                  <div className="w-[30%] flex">
                    <ul className="mt-4">
                      <li>General specifications</li>
                      <li>length: 120cm</li>
                      <li>CG : About 45cm From Nose</li>
                      <li>Wingspan: 200cm Dry Weight 1.5kg</li>
                      <li>Dry Weight:</li>
                      <li>Wing loading:</li>
                    </ul>
                  </div>
                  <div className="w-[70%] ml-9">
                    <h3 className="text-">Uses of RC Glider-</h3>
                    <div>
                      <ol className="list-decimal">
                        <li>
                          <p>
                            Recreation and Hobby: Many people enjoy flying RC
                            gliders as a recreational activity and a hobby. It
                            offers an immersive and relaxing flying experiance.
                            allowing individuals to spend time outdoors while
                            enjoying the thril of piloting on aircraft
                          </p>
                        </li>
                        <li>
                          <p>
                            Aric Photography and Videography: RC glider can be
                            equipped with cameras or FPV (First Person View)
                            systems to capture stunning perial photographs and
                            videos, The quiet and stable flight characteristics
                            of gliders make them well-suited for capturing
                            aerial footage in a smooth and cinematic manner.
                          </p>
                        </li>
                        <li>
                          <p>
                            Scientific Research: RC Gliders are used in
                            scientific research for various purposes. They can
                            be employed to study atmospheric conditions. gather
                            date on wind potterns, or monitor wildlife and
                            ecosystems from an aerial perspective.
                          </p>
                        </li>
                        <li>
                          <p>
                            Experimental Platforms: RC gliders provide a
                            platform for experimentation and innovation Hobbysts
                            and researchers commodify and customize gidersto
                            test new technologies, corodynamic designs, or fight
                            control systems.
                          </p>
                        </li>
                      </ol>
                    </div>
                  </div>
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
              <div className="w-[90%] flex float-right my-10 mt-0">
                <div className="w-[30%] flex items-center justify-center">
                  <img
                    src="../../images/plane/ft-edge-540.png"
                    alt=""
                    className="w-52"
                  />
                </div>
                <div className="w-[70%]">
                  <h1 className="text-[35px] my-4">FT EDGE 540</h1>

                  <p>
                    FT.Edge 540 is a remote-controlled (RC) version of the
                    full-scale Edge 540-designed by Rite Test. It retains its
                    aerodynamic design low-wing configuration, and symmetrical
                    airfoil we are taking this plone to compete in the World
                    Robotics Competition Technosian 2023
                  </p>
                </div>
              </div>

              <div className="w-[90%] flex float-left my-10">
                <div className="w-[70%]">
                  <h1 className="text-[35px] my-4">
                    UDN Cargo Commander-1 (UDN CC-1){" "}
                  </h1>

                  <p>
                    Cardo Commander is the combination of a single motor and
                    under- camber wing design in this RC cargo plane enables
                    efficient cargo transportation, stable fight
                    characteristics, and the ability to handle various payload
                    sizes and weights
                  </p>
                </div>
                <div className="w-[30%] flex items-center justify-center">
                  <img
                    src="../../images/plane/udn-cargo-commander-1.png"
                    alt=""
                    className="w-52"
                  />
                </div>
              </div>

              <div className="w-[90%] flex float-right my-10">
                <div className="w-[30%] flex items-center justify-center">
                  <img
                    src="../../images/plane/udn-vtol.png"
                    alt=""
                    className="w-52"
                  />
                </div>
                <div className="w-[70%]">
                  <h1 className="text-[35px] my-4">UDN-VTOL</h1>

                  <p>
                    UDN-VTOL with outonomous flight capabilities combines the
                    advantages of vertical takeoff and landing with the
                    efficiency of horizontal flight, its onboard sensors, flight
                    controller, and advanced control systems allow for
                    autonomous operation, making it a powerful tool for various
                    applications such as erial surveying mapping, cargo
                    delivery, and more.
                  </p>
                </div>
              </div>

              <div className="w-[90%] flex float-left my-10">
                <div className="w-[70%]">
                  <h1 className="text-[35px] my-4">SukhoiSu-30 UDN</h1>

                  <p>
                    The Sukhoi Su-30 UDN coptures the iconic design and
                    aggressive appearance of the full-scale Su-30 fighter jet,
                    features a sleek streamlined fuselage with swept-back wings
                    and twin vertical stabilizers. The attention to detail in
                    the models construction and point scheme accurately
                    replicates the distinctive look of the Su-30
                  </p>
                </div>
                <div className="w-[30%] flex items-center justify-center">
                  <img
                    src="../../images/plane/sukhoisu-30-UDN.png"
                    alt=""
                    className="w-52"
                  />
                </div>
              </div>
              <div className="w-[90%] flex float-right my-10">
                <div className="w-[30%] flex items-center justify-center">
                  <img
                    src="../../images/plane/udn-Amphibian.png"
                    alt=""
                    className="w-52"
                  />
                </div>
                <div className="w-[70%]">
                  <h1 className="text-[35px] my-4">UDN-Amphibian</h1>

                  <p>
                    The RC Amphibian is specifically designed to offer the
                    capability of taking off and landing on both solid ground
                    and water surfaces It features a combination of design
                    elements and features that allow for smooth transitions
                    between land and water operations
                  </p>
                </div>
              </div>
              <div className="w-[90%] flex float-left my-10">
                <div className="w-[70%]">
                  <h1 className="text-[35px] my-4">UDN-View</h1>

                  <p>
                    LON-View is a air surveilance aircraft, the primary purpose
                    of this aircraft is to gather visual or sensor based cota
                    from the air. It may be used for applications such as aerial
                    photography, videography, mapping environmental monitoring,
                    or even security and law enforcement purposes
                  </p>
                </div>
                <div className="w-[30%] flex items-center justify-center">
                  <img
                    src="../../images/plane/udn-view.png"
                    alt=""
                    className="w-52"
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
