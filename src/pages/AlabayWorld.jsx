import React from 'react'
import GamePreview from '../Components/GamePreview';
import { IoMdPlayCircle } from "react-icons/io";
import { FaPlayCircle } from "react-icons/fa";
import standingDog from '../assets/images/Alabay Games/alabay lost heritage prev 1.png';
function AlabayWorld() {
  const text = "background: linear-gradient(180deg, #FFF280 37.4%, #FFA800 63.66%);"
  return (
    
    <div className="bg-[#202020] text-white flex flex-col items-center p-8 w-[1796px] height-full" style={{ backgroundImage: `url('${standingDog}')`, backgroundSize: "100% 100%" }}>
      <div className="max-w-7xl w-full">
        <div className="flex flex-col items-start gap-4">
          <h1 className="font-baron text-6xl lg:text-[96px] leading-[104.38px] tracking-wider">
            ALABAY HERITAGE
          </h1>

          <h2 className="text-3xl lg:text-[48px] leading-[52.19px] tracking-[0.23em] font-normal text-[#90FFAE]">
            THE LOST ADVENTURE
          </h2>
          <p className="text-xl lg:text-[22px] leading-[23.92px] tracking-wider max-w-2xl mt-4 text-start font-montserrat">
            Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors.
          </p>
          <button className="mt-6 bg-[#90FFAE] text-lg pl-4 pr-10 py-2 rounded-full flex justify-start gap-x-5 items-center text-black">
            <FaPlayCircle className='bg-white text-black rounded-[100%] size-[1.8rem] -p-1' />
            PLAY
          </button>
        </div>
      </div>
      <GamePreview />
    </div>
  );

}

export default AlabayWorld