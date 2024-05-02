import React from "react";
import data from "../data/editorsPickData";

const Contact = () => {
  return (
    <div id="posts" className="max-w-screen-xl mx-auto lg:flex lg:flex-row sm:flex-col mt-20 mb-10">
      <div className="lg:w-1/2 flex flex-col space-y-4 text-gray-800 py-3 px-3">
        <h1 className="text-md underline underline-offset-8 mb-8">
          Recent News{" "}
        </h1>
        {data.map((post, index) => (
          <div
            className="bg-posts-background leading-relaxed flex flex-row mb-6"
            key={post.id}
          >
            <div className="w-full text-sm font-semibold p-3 ">
              <h2 className="mb-6">
                <a href={post.titleLink}>{post.title}</a>
              </h2>
              <p className="text-sm font-light mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A amet
                ad iusto sint eum molestiae nemo inventore, repellendus voluptas
                excepturi.
              </p>
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

      <div className="lg:w-1/2 flex flex-col space-y-4 text-gray-800 py-3 px-3">
        <div>
          <h1 className="text-md underline underline-offset-8 mb-8">
            Popular Posts{" "}
          </h1>
        </div>
        {data.map((trending, index) => (
          <div className=" sm:flex sm:felx-row space-x-10" key={trending.id}>
            <div className=" sm:w-1/3">
              <img
                src={trending.image}
                alt="Thumbnail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 flex flex-row mb-6 mt-4 lg:mt-0" key={trending.id}>
              <div className="text-gray-300 text-3xl"> {trending.letter} </div>
              <div className="text-sm pb-3 px-3">
                <h2 className="mb-6 text-lg font-semibold">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
