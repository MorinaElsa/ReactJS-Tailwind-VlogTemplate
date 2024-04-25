import React from "react";
import dataI from "../data/influencersData";

function Influencers() {
  return (
    <div className="w-full bg-influencer-background py-12 font-poppins">
      <div className=" max-w-screen-2xl  mx-auto ">
        <div className="text-center mb-12 m-auto lg:max-w-5xl sm:sm:max-w-md">
          <span className="text-sm text-gray-400 font-medium ">TESTIMONY</span>
          <h2 className="text-3xl text-gray-500 mb-10">Our Influencers </h2>
          <p className="text-sm max-w-screen-sm m-auto text-gray-500 mb-10 leading-6">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in. The copy warned the Little Blind Text, that where it came
            from it would have been rewritten a thousand times and everything
            that was left from its origin.
          </p>
        </div>
        <div className="m-4 grid  gap-4  text-gray-500 text-sm lg:grid-cols-2 sm:grid-cols-1 2xl:grid-cols-4">
          {dataI.map((influencer, index) => (
            <div className="min-h-[250px] " key={influencer.id}>
              <div className="flex justify-center items-center mb-8">
                <img
                  className="rounded-full 2xl:w-1/2 2xl:h-1/2 sm:w-1/4 sm:h-1/4 "
                  src={influencer.img}
                  alt=" Influencers"
                />
              </div>
              <div className="px-12 text-center text-xs leading-5 2xl:max-w-lg lg:max-w-sm sm:max-w-xs m-auto">
                <p className="mb-6">{influencer.quote}</p>
                <p className="text-lg text-gray-900">{influencer.fullname}</p>
                <span>{influencer.place}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Influencers;
