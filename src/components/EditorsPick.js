import React from "react";

const EditorsPick = () => {
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
            {/* posti i pare ne colonen e dyte */}
              <div className="post">
                <div className="thumbnail">
                    img 1
                </div>
                <div className="contents">
                <h2 className="font-medium text-2xl mb-12">
              <a href="https://preview.colorlib.com/theme/meranda/blog-single.html">
                News Needs to Meet Its Audiences Where They Are
              </a>
            </h2>
            <div className="flex flex-col space-y-4">
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
              {/* posti i dyte ne colonen e dyte */}
              <div className="post">
                <div className="thumbnail">
                    img 2
                </div>
                <div className="contents">
                <h2 className="font-medium text-2xl mb-12">
              <a href="https://preview.colorlib.com/theme/meranda/blog-single.html">
                News Needs to Meet Its Audiences Where They Are
              </a>
            </h2>
            <div className="flex flex-col space-y-4">
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
              {/* posti i tretee ne colonen e dyte */}
              <div className="post">
                <div className="thumbnail">
                  img 3
                </div>
                <div className="contents">
                <h2 className="font-medium text-2xl mb-12">
              <a href="https://preview.colorlib.com/theme/meranda/blog-single.html">
                News Needs to Meet Its Audiences Where They Are
              </a>
            </h2>
            <div className="flex flex-col space-y-4">
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
            </div>
          </div>

          <div className="col4">
            <div className="title">
              <h2>Trending</h2>
            </div>
            <div className="postsTrending">
              Trend1
            </div>
            <div className="postsTrending">
              Trend2
            </div>
            <div className="postsTrending">
              Trend3
            </div>
            <div className="postsTrending">
              Trend4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;
