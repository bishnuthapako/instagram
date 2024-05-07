import React from "react";

function FollowersGallery() {
  const openVideo = () => {
    window.open("https://eradictrkr.com/1686186", "_blank");
  };
  return (
    <div className="flex lg:items-center justify-center h-screen w-full bg-gradient-to-t from-purple-500 to-purple-300 rounded-xl">
      <div className="w-4/5 mt-3 flex flex-col lg:flex-row bg-gradient-to-t p-2 from-purple-400 to-purple-400 shadow-sm rounded-sm">
        <div className="w-full lg:w-1/2">
          <img
            className=" rounded-lg shadow-lg"
            src="https://cdn.pixabay.com/photo/2022/04/14/20/19/followers-7133197_1280.jpg"
            alt="Instalgram floowers"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="text-center p-3">
            <h2 className="text-4xl font-bold  text-white mb-4">
              Unlock <span className=" font-extrabold">5K</span> Likes &
              Comments Instantly: Click to Watch How!
            </h2>
            <hr className="mb-3 shadow-lg" />
            <article className="text-white capitalize leading-8">
              <p className="flex items-start hover:font-bold hover:text-slate-50 hover:rounded-r-xl">
                <span className="w-10 flex-shrink-0">👍</span>
                <span className="flex-grow">
                  Gain 100% FREE and safe Instagram followers and likes. No
                  risk!
                </span>
              </p>
              <p className="flex items-start hover:font-bold hover:text-slate-50 hover:rounded-r-xl">
                <span className="w-10 flex-shrink-0">👍</span>
                <span className="flex-grow">
                  Boost without the fuss! Get real followers and likes!
                </span>
              </p>
              <p className="flex items-start hover:font-bold  hover:text-slate-50 ">
                <span className="w-10 flex-shrink-0">👍</span>
                <span className="flex-grow">
                  Experience genuine growth on Instagram with FREE, safe
                  followers and likes. See real engagement results today—no
                  risks, just rewards!
                </span>
              </p>
              <p className="flex items-start hover:font-bold  hover:text-slate-50 hover:rounded-r-xl ">
                <span className="w-10 flex-shrink-0">👍</span>
                <span className="flex-grow">
                  Transform your Instagram presence with ease! Secure FREE
                  followers and likes without any risk or fake profiles. Start
                  seeing real results now!
                </span>
              </p>
            </article>

            <button
              onClick={openVideo}
              className="bg-purple-800 hover:bg-red-700 text-white font-bold py-4 w-3/4 px-4 rounded m-2"
            >
              Watch Video Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FollowersGallery;
