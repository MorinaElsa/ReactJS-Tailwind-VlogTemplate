import React from "react";
import data from "../../data/editorsPickData";
import vlog1 from "../../img/vlog1.png"

const EditorsPick = () => {
  return (
    <div id="trending" className="mb-20 mt-20">
      <div className="text-center mb-12">
        <span className="text-sm text-gray-400 font-medium uppercase">
          Trending
        </span>
        <h2 className="text-3xl text-gray-500">Follow the Trend</h2>
      </div>
      <div className="max-w-screen-xl mx-auto lg:flex lg:flex-row sm:flex-col">
        <div className="lg:w-1/3 w-full px-10 mb-8 lg:mb-0">
          <img
            className="w-full rounded-md mb-4"
            src={vlog1}
            alt="Vlog post"
          />
          <h2 className="font-medium text-xl mb-6">
            <a href="https://preview.colorlib.com/theme/meranda/blog-single.html">
              News Needs to Meet Its Audiences Where They Are
            </a>
          </h2>
          <p className="mb-8 text-sm leading-6 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            temporibus praesentium neque, voluptatum quam quibusdam.
          </p>
          <div className="flex flex-col space-y-1 text-xs">
            <span>Dave Rogers in Food</span>
            <span className="text-gray-400">
              June 14 <span> • </span>3 min read
            </span>
          </div>
        </div>
        <div className="lg:w-1/3 flex flex-col space-y-4 text-gray-800 py-3 px-3">
          {data.map((post, index) => (
            <div
              className="bg-posts-background leading-relaxed flex flex-row mb-6"
              key={post.id}
            >
              <div className="w-1/2">
                <img
                  src={post.image}
                  alt="Thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2 text-sm font-semibold p-3">
                <h2 className="mb-6">
                  <a href={post.titleLink}>{post.title}</a>
                </h2>
                <div className="flex flex-col space-y-1 text-xs">
                  <span>{post.name} in Food</span>
                  <span className="text-gray-400">
                    {post.date} <span>{post.icon}</span> {post.readMinutes}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-1/3 px-5">
          <div className="font-semibold mb-6">
            <h2>Trending</h2>
          </div>
          {data.map((trending, index) => (
            <div className="flex flex-row mb-6" key={trending.id}>
              <div className="text-gray-300 text-3xl"> 0{trending.id} </div>
              <div className="text-sm pb-3 px-3">
                <h2 className="mb-6 font-semibold">
                  <a href={trending.titleLink}>{trending.title}</a>
                </h2>
                <div className="flex flex-col space-y-1 text-xs">
                  <span>{trending.name} in Food</span>
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
