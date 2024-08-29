import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Box = () => {
  useLayoutEffect(() => {
    let tx = gsap.context(() => {
      let zoomBox = gsap.timeline();
      ScrollTrigger.create({
        trigger: ".main_box",
        start: "120% 30%",
        end: "30% 20%",
        animation: zoomBox,
        markers: false,
        toggleActions: "play",
      });
      zoomBox.fromTo(
        ".box",
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 0.9,
          delay: 0.5,
        }
      );
      zoomBox.fromTo(
        ".boxHeading",
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 0.2,
        }
      );
      zoomBox.fromTo(
        ".boxPara",
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 0.2,
          delay: 0.2,
        }
      );
    });
    return () => tx.revert();
  }, []);
  return (
    <div className="main_box">
      <div className="container">
        <div className="flex justify-center">
          <div class="bg-[linear-gradient(91deg,#5F21E9_60%,#FA00FF_103%)] rounded-[17px] translate-y-[30%] max-w-[1440px] box">
            <div class="flex justify-between items-center flex-wrap max-lg:justify-center max-md:mb-[0] max-lg:mb-[40px] ">
              <div class="md:p-8 p-5">
                <h3 class="boxHeading text-white md:text-[48px] text-[30px] font-normal leading-normal ff-konexy-regular text-nowrap">
                  Have you
                </h3>
                <p class="boxPara text-white font-semibold md:text-[24px] text-[18px] leading-[131%] ff-Gilroy-regular max-w-[638px]">
                  read our study about Speed and Performance in WordPress?
                </p>
              </div>
              <div class=" md:p-8 p-2">
                <button class="boxPara text-[#6022EA] text-[19px] font-semibold leading-7 bg-white py-[14px] px-[38px] rounded-[137px] hover:bg-[#6022EA] hover:text-white border hover:border-white transition-all ease-linear duration-300 shadow-purple-300 shadow-lg">
                  Check It Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Box;
