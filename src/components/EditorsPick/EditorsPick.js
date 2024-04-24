import React from "react";
import data from "../../data/editorsPickData";

const EditorsPick = () => {
  return (
    <div className="site-section mb-20">
      <div className=" max-w-screen-xl  mx-auto flex flex-row">
        <div className="basis-1/3 w-full px-10">
          <a href="#">
            <img
              className=" w-width  rounded-md mb-4"
              src={require("../../img/vlog1.png")}
              alt="Vlog post"
            />
          </a>
          <h2 className="font-medium text-xl mb-6 ">
            <a href="https://preview.colorlib.com/theme/meranda/blog-single.html">
              News Needs to Meet Its Audiences Where They Are
            </a>
          </h2>
          <p className="mb-8+ text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            temporibus praesentium neque, voluptatum quam quibusdam.
          </p>
          <div className="flex flex-col space-y-1 text-xs">
            <span>
              <a href="#"> Dave Rogers</a>
              in
              <a href="#"> Food</a>
            </span>
            <span className="text-gray-400">
              June 14
              <span> • </span>3 min read
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-4 basis-1/3 text-gray-800 py px-3">
          {data.map((post, index) => (
            <div
              className=" bg-posts-background leading-relaxed flex flex-row "
              key={post.id}
            >
              <div className="basis-1/2">
                <img
                  src={post.image}
                  alt="Thumbnail"
                  className="bg-cover w-full h-full"
                />
              </div>
              <div className=" basis-1/2 font-light text-sm font-semibold p-3">
                <h2 className=" mb-6">
                  <a href={post.titleLink}>{post.title}</a>
                </h2>
                <div className="flex flex-col space-y-1 text-xs">
                  <span>
                    <a href="#">{post.name}</a> in <a href="#">Food</a>
                  </span>
                  <span className="text-gray-400">
                    {post.date} <span>{post.icon}</span> {post.readMinutes}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="basis-1/3 px-5">
          <div className="font-light font-semibold mb-6">
            <h2>Trending</h2>
          </div>
          {data.map((trending, index) => (
            <div className="flex flex-row mb-6" key={trending.id}>
              <div className="text-gray-300 text-3xl"> 0{trending.id} </div>
              <div className=" text-sm  pb-3 px-3">
                <h2 className=" mb-6 font-semibold">
                  <a href={trending.titleLink}>{trending.title}</a>
                </h2>
                <div className="flex flex-col space-y-1 text-xs">
                  <span>
                    <a href="#">{trending.name}</a> in <a href="#">Food</a>
                  </span>
                  <span className="text-gray-400">
                    {trending.date} <span>{trending.icon}</span>{" "}
                    {trending.readMinutes}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;
