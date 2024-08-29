import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Cards() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let cardAnimation = gsap.timeline();
      ScrollTrigger.create({
        trigger: ".main_box",
        start: "1% 50%",
        end: "30%  10%",
        animation: cardAnimation,
        markers: false,
        toggleActions: "play",
      });
      cardAnimation.fromTo(
        ".GsapTextOne",
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
        }
      );
      cardAnimation.fromTo(
        ".GsapTextTwo",
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
        }
      );
      cardAnimation.fromTo(
        ".GsapTextThree",
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
        }
      );
      cardAnimation.fromTo(
        ".card_animation",
        { x: -1920 },
        { x: 0, stagger: 0.3 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="xl:pt-[200px] xl:pb-[300px] pt-[30px] pb-[30px] bg-red-50 main_box">
      <div className="container sm:px-0 px-3">
        <h2 className="font-Josefin font-bold sm:text-[48px] text-[40px] leading-[61.2px] text-black xl:pb-[59px] pb-[20px] text-center GsapTextOne">
          <span className="inline-block GsapTextOne">glid</span>
          <span className="inline-block GsapTextTwo mx-2"> game</span>
          <span className="inline-block GsapTextThree"> glid</span>
        </h2>

        <div className="flex flex-wrap gap-6 justify-center">
          <div className="card_animation w-[312px] h-[181px] bg-black hover:bg-grident-rl rounded-[13px] transition ease-linear duration-300 cursor-pointer justify-center flex 2xl:px-[50px] px-[25px] hover:shadow-shadaw-box border border-[#4A4A4A] hover:border-[#8E78D3]">
            <div className="w-[216px] items-center justify-center flex flex-col">
              <p className="font-Josefin font-bold text-[30px] leading-[38.25px] text-white">
                3 Billion
              </p>
              <p className="font-Josefin font-normal text-[18px] leading-[22.95px] text-white">
                GILD Token Info
              </p>
            </div>
          </div>
          <div className="card_animation w-[312px] h-[181px] bg-black hover:bg-grident-rl rounded-[13px] transition ease-linear duration-300 cursor-pointer justify-center items-center flex flex-col 2xl:px-[50px] px-[25px] hover:shadow-shadaw-box border border-[#4A4A4A] hover:border-[#8E78D3]">
            <p className="font-Josefin font-bold text-[30px] leading-[38.25px] text-white xl:text-nowrap">
              Pre Sale Token
            </p>
          </div>
          <div className="card_animation w-[312px] h-[181px] bg-black hover:bg-grident-rl rounded-[13px] transition ease-linear duration-300 cursor-pointer justify-center flex 2xl:px-[50px] px-[25px] hover:shadow-shadaw-box border border-[#4A4A4A] hover:border-[#8E78D3]">
            <div className="w-[216px] items-center justify-center flex flex-col">
              <p className="font-Josefin font-bold text-[30px] leading-[38.25px] text-white mb-1">
                100,000+
              </p>
              <p className="font-Josefin font-normal text-[18px] leading-[22.95px] text-white">
                Holders
              </p>
            </div>
          </div>
          <div className="card_animation w-[312px] h-[181px] bg-black hover:bg-grident-rl rounded-[13px] transition ease-linear duration-300 cursor-pointer justify-center flex 2xl:px-[50px] px-[25px] hover:shadow-shadaw-box border border-[#4A4A4A] hover:border-[#8E78D3]">
            <div className="w-[216px] items-center justify-center flex flex-col">
              <p className="font-Josefin font-bold text-[30px] leading-[38.25px] text-white mb-1">
                100,000+
              </p>
              <p className="font-Josefin font-normal text-[18px] leading-[22.95px] text-white">
                Holders
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
