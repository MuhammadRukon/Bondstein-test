import React, { useState } from "react";
// components
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
// images
import image1 from "../../assets/img1.png";
import image2 from "../../assets/img2.png";
import image3 from "../../assets/img3.png";
import image4 from "../../assets/featuredImg1.png";
import image5 from "../../assets/featuredImg2.png";
import image6 from "../../assets/featuredImg3.png";
import image7 from "../../assets/featuredImg4.png";
import user1 from "../../assets/user5.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";
import user4 from "../../assets/user4.png";

const datas = [
  {
    id: 1,
    image: image1,
    name: "ArtCrypto",
    eth: 0.25,
    timeLeft: "3h 50m 2s",
    users: [user1, user2, user3, user4],
  },
  {
    id: 2,
    image: image2,
    name: "This NFT",
    eth: 0.25,
    timeLeft: "3h 50m 2s",
    users: [user1, user2, user3, user4],
  },
  {
    id: 3,
    image: image3,
    name: "NameCrypto",
    eth: 0.25,
    timeLeft: "3h 50m 2s",
    users: [user1, user2, user3, user4],
  },
  {
    id: 4,
    image: image4,
    name: "KingCrypto",
    eth: 0.25,
    timeLeft: "3h 50m 2s",
    users: [user1, user2, user3, user4],
  },
  {
    id: 5,
    image: image5,
    name: "ArtCrypto",
    eth: 0.25,
    timeLeft: "3h 50m 2s",
    users: [user1, user2, user3, user4],
  },
  {
    id: 6,
    image: image6,
    name: "This NFT",
    eth: 0.25,
    timeLeft: "3h 50m 2s",
    users: [user1, user2, user3, user4],
  },
  {
    id: 7,
    image: image7,
    name: "NameCrypto",
    eth: 0.25,
    timeLeft: "3h 50m 2s",
    users: [user1, user2, user3, user4],
  },
  {
    id: 8,
    image: image1,
    name: "KingCrypto",
    eth: 0.25,
    timeLeft: "3h 50m 2s",
    users: [user1, user2, user3, user4],
  },
  {
    id: 9,
    image: image2,
    name: "ArtCryto",
    eth: 0.25,
    timeLeft: "3h 50m 2s",
    users: [user1, user2, user3, user4],
  },
  {
    id: 10,
    image: image3,
    name: "This NFT",
    eth: 0.25,
    timeLeft: "3h 50m 2s",
    users: [user1, user2, user3, user4],
  },
  {
    id: 11,
    image: image4,
    name: "NameCrypto",
    eth: 0.25,
    timeLeft: "3h 50m 2s",
    users: [user1, user2, user3, user4],
  },
  {
    id: 12,
    image: image5,
    name: "KingCrypto",
    eth: 0.25,
    timeLeft: "3h 50m 2s",
    users: [user1, user2, user3, user4],
  },
  {
    id: 13,
    image: image6,
    name: "ArtCrypto",
    eth: 0.25,
    timeLeft: "3h 50m 2s",
    users: [user1, user2, user3, user4],
  },
  {
    id: 14,
    image: image7,
    name: "This NFT",
    eth: 0.25,
    timeLeft: "3h 50m 2s",
    users: [user1, user2, user3, user4],
  },
  {
    id: 15,
    image: image1,
    name: "NameCrypto",
    eth: 0.25,
    timeLeft: "3h 50m 2s",
    users: [user1, user2, user3, user4],
  },
  {
    id: 16,
    image: image2,
    name: "KingCrypto",
    eth: 0.25,
    timeLeft: "3h 50m 2s",
    users: [user1, user2, user3, user4],
  },
];
const categories = [
  "All Category",
  "art",
  "celebrities",
  "gaming",
  "sport",
  "music",
  "crypto",
];
const Discover = () => {
  const [activeTab, setActiveTab] = useState("All Category");
  return (
    <div className="bg-[#d9e0ec33] pt-[64px] pb-[47px]">
      <Container>
        <h2 className="lg:w-[40%] font-bold font-integralCf w-full uppercase text-3xl lg:text-[40px]">
          Discover more NFTs
        </h2>
        {/* category buttons */}
        <div className="flex justify-between items-start lg:items-center py-10">
          <div className="flex flex-wrap gap-3 ">
            {categories?.map((category, index) => (
              <button
                className={`${
                  activeTab === category
                    ? "bg-primary text-[#FFF]"
                    : "bg-[#EFEFEF]"
                } text-white  rounded-full px-[20px] py-[10px] hover:text-primary hover:shadow-primary hover:bg-[#FFF] hover:shadow-[inset_0_0_0_2px] transition-all`}
                key={index}
                onClick={() => {
                  setActiveTab(category);
                }}
              >
                {category}
              </button>
            ))}
          </div>
          {/* filter button */}
          <p
            className="flex cursor-pointer text-primary font-medium text-sm items-center gap-[10px]
                 bg-[#EFEFEF]
              text-white rounded-full px-3 lg:px-5 py-[7px] lg:py-[10px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_0_399)">
                <path
                  d="M9.33333 20H14.6667V17.3333H9.33333V20ZM0 4V6.66667H24V4H0ZM4 13.3333H20V10.6667H4V13.3333Z"
                  fill="#371C87"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_399">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            All Filters
          </p>
        </div>
        <div className="grid  grid-col-1 justify-center lg:justify-between gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-[55px]">
          {/* cards */}
          {datas?.map((data) => (
            <div
              key={data?.id}
              className="w-[270px] group justify-self-center p-[10px] bg-[#FFF] rounded-2xl"
            >
              {/* card image */}
              <div className="relative">
                <img src={data?.image} className="w-[247px] h-[222px]" alt="" />
                <div className="flex absolute bottom-0 translate-y-[50%] ml-2  left-0 transition-all -space-x-[10px]">
                  {data?.users?.map((user, index) => (
                    <img className="h-[30px] w-[30px]" src={user} key={index} />
                  ))}
                </div>
              </div>
              {/* card content */}
              <div className="mt-[22px] mb-[6px] px-3">
                <h3 className="text-[16px] font-bold lg:text-[20px]">
                  {data?.name}
                </h3>
                <div className="flex items-center justify-between pt-[9px] gap-2 xl:gap-[10.47px]">
                  <p className="flex items-center gap-[5px] text-xs xl:text-base text-[#00AC4F]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="14"
                      viewBox="0 0 9 14"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_0_224)">
                        <path
                          d="M8.31533 7.13126L4.26566 9.66876L0.213318 7.13126L4.26566 0L8.31533 7.13126ZM4.26566 10.4836L0.213318 7.9461L4.26566 14L8.318 7.9461L4.26566 10.4836Z"
                          fill="#00AC4F"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_0_224">
                          <rect width="8.53125" height="14" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>{" "}
                    0.25 ETH
                  </p>
                  <p className="text-[14px] text-[#757575]">1 of 321</p>
                </div>
                <div className="w-full bg-[#EFEFEF] h-px mt-[20px] mb-[15px]"></div>
                <div className="flex items-center text-primary justify-between">
                  <p className=" bg-[#EFEFEF] text-white text-[12px] rounded-full px-3 py-1">
                    {data?.timeLeft} Left
                  </p>
                  <div className="group hover:bg-[#EFEFEF] transition-all relative cursor-pointer">
                    <p className="px-2 py-1">Place a bid</p>
                    <div className="w-0 absolute left-[50%] group-hover:left-0 h-[2px] group-hover:w-full transition-all group-hover:bg-primary"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button outlined={true} text={"More NFTs"} lg={true} />
        </div>
      </Container>
    </div>
  );
};

export default Discover;
