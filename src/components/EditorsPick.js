import React from "react";
import data from "../data/editorsPickData";

const EditorsPick = () => {
  console.log("Data", data);

  return (
    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col8">
            <div className="row1">
              <div className="col12">
                <h2> Editor's pick</h2>
              </div>
            </div>
            <div className="row-2"></div>
            {/* Colona e pare tek rreshti i dyte */}
            <div className="col6">
              <div className="post-entry">
                <a href="#">
                  <img src={require("../img/vlog1.png")} alt="Vlog post" />
                </a>
                <h2 className="font-medium text-2xl mb-12">
                  <a href="https://preview.colorlib.com/theme/meranda/blog-single.html">
                    News Needs to Meet Its Audiences Where They Are
                  </a>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eligendi temporibus praesentium neque, voluptatum quam
                  quibusdam.
                </p>
                <div className="post-meta">
                  <span>
                    <a href="#"> Dave Rogers</a>
                    in
                    <a href="#"> Food</a>
                  </span>
                  <span className="text-gray-400">
                    June 14
                    <span>•</span>3 min read
                  </span>
                </div>
              </div>
            </div>
            {/* Colona e dyte */}
            <div className="col6-2">
              {/* Mapping over the data array */}
              {data.map((post, index) => (
                <div className="post" key={post.id}>
                  <div className="thumbnail">
                    {/* Render thumbnail image */}
                    <img src={post.image} alt="Thumbnail" />
                  </div>
                  <div className="contents">
                    <h2 className="font-medium text-2xl mb-12">
                      {/* Render post title with link */}
                      <a href={post.titleLink}>{post.title}</a>
                    </h2>
                    <div className="flex flex-col space-y-4">
                      <span>
                        {/* Render author and category */}
                        <a href="#">{post.name}</a> in <a href="#">Food</a>
                      </span>
                      <span className="text-gray-400">
                        {/* Render publication date and read time */}
                        {post.date} <span>{post.icon}</span> {post.readMinutes}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col4">
            <div className="title">
              <h2>Trending</h2>
            </div>
            <div className="postsTrending">Trend1</div>
            <div className="postsTrending">Trend2</div>
            <div className="postsTrending">Trend3</div>
            <div className="postsTrending">Trend4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;
