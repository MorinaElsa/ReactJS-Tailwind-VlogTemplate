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
            <div className="col6">
              <div className="post-entry">
                <a href="https://preview.colorlib.com/theme/meranda/images/img_h_1.jpg.webp"></a>
                <h2 className="font-medium text-2xl mb-12">
                  <a href="https://preview.colorlib.com/theme/meranda/blog-single.html">
                    News Needs to Meet Its Audiences Where They Are
                  </a>
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
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
          </div>

          <div className="col4"></div>
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;
