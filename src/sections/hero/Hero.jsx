import React from "react";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import user1 from "../../assets/user1.png";
import auctionEllipse from "../../assets/auctionEllipse.png";

const Hero = () => {
  return (
    <Container>
      <div className="flex gap-[29px] flex-col items-center pt-[57px] pb-[122px] lg:flex-row">
        {/* content */}
        <div className="w-full text-center lg:text-left space-y-[22px] lg:w-[55%]">
          <h1 className="uppercase text-3xl lg:text-[40px]">
            Discover, and collect <br /> Digital Art NFTs
          </h1>
          <p className=" w-[60%] mx-auto lg:mx-0 text-[#565656] text-[20px]">
            Digital marketplace for crypto collectibles and non-fungible tokens
            (NFTs). Buy, Sell, and discover exclusive digital assets.
          </p>
          <Button text={"Explore Now"} fill={true} lg={true} />
          <div className="flex justify-center lg:justify-start gap-[23px] text-[40px]">
            <div>
              <h2 className="font-extrabold">98K+</h2>
              <p className="text-[#565656] text-xl">Artwork</p>
            </div>
            <div>
              <h2 className="font-extrabold">98K+</h2>
              <p className="text-[#565656] text-xl">Artwork</p>
            </div>
            <div>
              <h2 className="font-extrabold">98K+</h2>
              <p className="text-[#565656] text-xl">Artwork</p>
            </div>
          </div>
        </div>
        {/* images */}
        <div className="relative flex justify-center w-[80vw] xl:w-[40%] h-[440px]">
          {/* first image */}
          <div className="absolute z-20  lg:right-[67px] top-[50%] translate-y-[-50%]">
            <div className="relative">
              <img src={img1} alt="" />
              <div className="absolute w-full z-30 p-5 lg:p-10 top-0 font-bold h-full text-[#fff]">
                {/* info */}
                <h3 className="text-[20px] lg:text-[28px]">
                  Abstr Gradient NFT
                </h3>
                <div className="flex gap-[14.4px] mt-[8.21px]">
                  <img src={user1} alt="" />
                  <p className="text-[20px]">Arkhan17</p>
                </div>
                {/* ellipse */}
                <div className="rounded-full absolute top-[30%] lg:top-[40%] -left-[17%]">
                  <img src={auctionEllipse} alt="" />
                </div>
                {/* blur bg */}
                <div className="w-[80%] backdrop-blur-sm bg-[#ffffff33] absolute rounded-[12px] bottom-[40px] left-[50%] translate-x-[-50%] px-[26px] py-[14.36px]">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="font-medium">Current Bid</h2>
                      <div className="flex gap-[10px] mt-[7.18px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="22"
                          viewBox="0 0 13 22"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_0_143)">
                            <path
                              d="M12.671 11.3796L6.50006 15.2463L0.325058 11.3796L6.50006 0.512939L12.671 11.3796ZM6.50006 16.4879L0.325058 12.6213L6.50006 21.8463L12.6751 12.6213L6.50006 16.4879Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_0_143">
                              <rect
                                width="13"
                                height="21.3333"
                                fill="white"
                                transform="translate(0 0.512939)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <p className="">0.25 ETH</p>
                      </div>
                    </div>
                    <div>
                      <h2 className="font-medium">Ends in</h2>
                      <p className="mt-[7.18px]">
                        12<span className="font-medium">h</span> 43
                        <span className="font-medium">m</span> 42
                        <span className="font-medium">s</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* second image */}
          <img
            className="absolute z-10 lg:right-[31px] top-[60%] lg:top-[50%] translate-y-[-50%]"
            src={img2}
            alt=""
          />
          {/* third image */}
          <img
            className="absolute z-0 lg:right-0 top-[70%] lg:top-[50%] translate-y-[-50%]"
            src={img3}
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
