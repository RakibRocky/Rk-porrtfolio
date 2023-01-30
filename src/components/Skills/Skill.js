import React from "react";

const Skill = ({ icon, iconName }) => {
  return (
    <div>
      <div class="card w-48 bg-[#1F2937] shadow-xl text-center items-center ">
        <div className=" mt-8 p-5 rounded-full  bg-[#18191a91] ">
          {/* <img
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
            class="rounded-xl"
          /> */}
          {icon}
        </div>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-2xl text-white">{iconName}</h2>
        </div>
      </div>
    </div>
  );
};

export default Skill;
