import React from "react";
import dataI from "../data/influencersData";

function Influencers() {
  return (
    <div className="w-full bg-influencer-background py-12 font-poppins">
      <div className=" max-w-screen-2xl  mx-auto ">
        <div className="text-center mb-12">
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

        <div className="m-4 grid grid-cols-4 gap-4  text-gray-500 text-sm ">
          {dataI.map((influencer, index) => (
            <div className="min-h-[250px] " key={influencer.id}>
              <div className="flex justify-center items-center  mb-8">
                <img
                  className="rounded-full w-1/2 h-1/2"
                  src={influencer.img}
                  alt=" Influencers image"
                />
              </div>
              <div className="px-12 text-center text-xs leading-5">
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
