import React from "react";
import cook from "../img/cook.png"

function Home() {
  return (
    <div>
      <div className=" w-full">
        <div className="max-w-screen-lg mx-auto px-4 my-10 text-gray-600">
          <div>
            <img src={cook} alt="cooking"></img>
          </div>
          <div className="p-14 text-sm h-auto bg-background-gray">
            <span className="uppercase tracking-wider my-8 ">
              Editor's pick
            </span>
            <h2 className="font-medium text-2xl mb-12">
              <a href="https://preview.colorlib.com/theme/meranda/blog-single.html">
                News Needs to Meet Its Audiences Where They Are
              </a>
            </h2>
            <p className="mb-10 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate vero obcaecati natus adipisci necessitatibus eius, enim
              vel sit ad reiciendis. Enim praesentium magni delectus cum,
              tempore deserunt aliquid quaerat culpa nemo veritatis, iste
              adipisci excepturi consectetur doloribus aliquam accusantium
              beatae?
            </p>
            <div className="flex flex-col space-y-2">
              <span>
                Dave Rogers
                in
               Food
              </span>
              <span className="text-gray-400">
                June 14
                <span> • </span>3 min read
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
