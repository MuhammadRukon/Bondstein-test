import React from "react";
import Container from "../../components/container/Container";
import featuredImg1 from "../../assets/featuredImg1.png";
import featuredImg2 from "../../assets/featuredImg5.png";
import featuredImg3 from "../../assets/featuredImg6.png";
import featuredMini1 from "../../assets/featuredMini1.png";
import featuredMini2 from "../../assets/featuredMini2.png";
import featuredMini3 from "../../assets/featuredMini3.png";
import user1 from "../../assets/user1.png";
import Button from "../../components/button/Button";

const Featured = () => {
  const array = [featuredImg1, featuredImg2, featuredImg3];
  return (
    <div className="bg-[#d9e0ec33] pt-[65px] pb-[99px]">
      <Container>
        <h1 className=" w-full font-bold font-integralCf uppercase text-3xl lg:text-[40px]">
          Collection Featured NFTs
        </h1>
        <div className="flex flex-wrap lg:flex-nowrap gap-[31.39px]">
          {array.map((image, index) => (
            <div
              key={index}
              className="w-full flex-1 sm:w-3/4 mx-auto mt-[55px] lg:w-1/3"
            >
              <div className="flex gap-2 justify-between">
                <div className="w-[70%] max-h-[300px] ">
                  <img
                    className="h-[100%] object-cover rounded-2xl"
                    src={image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2 lg:gap-0 justify-between">
                  <img src={featuredMini1} alt="" />
                  <img src={featuredMini2} alt="" />
                  <img src={featuredMini3} alt="" />
                </div>
              </div>
              <div className="py-[29.34px]">
                <div className="flex gap-[14.4px] justify-between items-end">
                  <div>
                    <h3 className="text-[16px] font-bold lg:text-[20px]">
                      Amazing Collection
                    </h3>
                    <div className="flex items-center mt-[10px] gap-[10px]">
                      <img src={user1} alt="" />
                      <p className="text-[14px] font-medium">by Arkhan</p>
                    </div>
                  </div>
                  <Button outlined={true} text={"total 54 items"} sm={true} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Featured;
