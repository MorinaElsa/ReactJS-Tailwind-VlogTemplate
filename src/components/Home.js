import React from "react";

function Home() {
  return (
    <div>
      <div className=" w-full">
        <div className=" flex max-w-screen-xl mx-auto px-4 my-10 text-gray-600">
          <div>
            <img src={require("../img/cook.png")}></img>
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
            <p className="mb-8 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate vero obcaecati natus adipisci necessitatibus eius, enim
              vel sit ad reiciendis. Enim praesentium magni delectus cum,
              tempore deserunt aliquid quaerat culpa nemo veritatis, iste
              adipisci excepturi consectetur doloribus aliquam accusantium
              beatae?
            </p>
            <div className="flex flex-row">
              <span>
                <a href="#"> Dave Rogers</a>
                in
                <a href="#"> Food</a>
              </span>
              <span px-6>
                June 14
                <span>•</span>3 min read
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
