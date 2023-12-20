import React from "react";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import buyAndSell2 from "../../assets/img2.png";
import buyAndSell1 from "../../assets/featuredImg5.png";
import buyAndSell3 from "../../assets/img3.png";
import user1 from "../../assets/user1big.png";
import user2 from "../../assets/user2.png";

const CreateAndSell = () => {
  return (
    <Container>
      <div className="flex flex-col-reverse lg:flex-row gap-[78px] pt-[102px] pb-[82px] items-center">
        {/* image */}
        <div className="w-3/5 h-auto items-center flex flex-col-reverse lg:flex-row gap-[64px]">
          <div className="flex-1">
            <div className="w-[300px] relative h-[300px]">
              <img
                src={buyAndSell1}
                className="w-full h-full rounded-xl"
                alt=""
              />
              <img
                src={user1}
                className="w-20 h-20 absolute bottom-0 translate-y-[43%] right-0 translate-x-[38%]"
                alt=""
              />
            </div>
            <div className="w-[195px] relative mt-[52px] mx-auto lg:ml-auto h-[214px]">
              <img
                className="w-full h-full  rounded-xl"
                src={buyAndSell3}
                alt=""
              />
              <img
                src={user2}
                className="w-20 h-20 absolute bottom-0 translate-y-[43%] right-0 translate-x-[38%]"
                alt=""
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="w-[240px] h-[265px] relative mx-auto">
              <img src={buyAndSell2} className="w-full h-full" alt="" />
              <img
                src={user2}
                className="w-[70px] h-[70px] absolute bottom-0 translate-y-[43%] right-0 translate-x-[38%]"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* content */}
        <div className=" text-center lg:text-left space-y-[22px] lg:w-[55%] ">
          <h1 className="uppercase font-bold font-integralCf text-3xl lg:text-[40px]">
            Create and <br /> sell your NFTs
          </h1>
          <p className="  mx-auto lg:mx-0 text-[#565656] text-lg lg:text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
            phasellus placerat a pellentesque tellus sed egestas. Et tristique
            dictum sit tristique sed non. Lacinia lorem id consectetur pretium
            diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
          </p>
          <Button text={"Sign Up Now"} fill={true} lg={true} />
        </div>
      </div>
    </Container>
  );
};

export default CreateAndSell;
