import React, { useEffect, useState } from "react";
import Container from "../../components/container/Container";
import featuredImg from "../../assets/featuredImg1.png";
import featuredImg2 from "../../assets/featuredImg2.png";
import featuredImg3 from "../../assets/featuredImg3.png";
import featuredImg4 from "../../assets/featuredImg4.png";
import user1 from "../../assets/user1.png";
import Button from "../../components/button/Button";

const images = [featuredImg2, featuredImg3, featuredImg4];

const TopCollections = () => {
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    fetch("/collections.json")
      .then((res) => res.json())
      .then((data) => setCollections(data));
  }, []);
  return (
    <Container>
      <div className="flex flex-col-reverse lg:flex-row gap-6 xl:gap-12 mt-[127px] mb-[134px]">
        {/* first column */}
        <div className="w-full sm:w-3/4 mx-auto lg:w-1/3">
          <img className="w-full" src={featuredImg} alt="" />

          <div className="py-[42px]">
            <div className="flex justify-between">
              <div>
                <div className="flex gap-[14.4px] items-start">
                  <img src={user1} alt="" />
                  <div>
                    <h3 className="text-[16px] font-bold lg:text-[20px]">
                      The Futr Abstr
                    </h3>
                    <p className="text-[14px]">10 in the stock</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="font-medium text-xs">Highest Bid</h2>
                <div className="flex gap-[10px] mt-[7.18px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="22"
                    viewBox="0 0 13 22"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_0_213)">
                      <path
                        d="M12.671 11.4564L6.50004 15.3231L0.325043 11.4564L6.50004 0.589722L12.671 11.4564ZM6.50004 16.5647L0.325043 12.6981L6.50004 21.9231L12.675 12.6981L6.50004 16.5647Z"
                        fill="#3A3A3A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_213">
                        <rect
                          width="13"
                          height="21.3333"
                          fill="white"
                          transform="translate(0 0.589722)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="font-bold">0.25 ETH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second column */}
        <div className="w-full sm:w-3/4 mx-auto lg:w-1/3">
          <div className="flex lg:flex-col flex-wrap justify-center sm:justify-between gap-2 lg:gap-[72px]">
            {images.map((img, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row gap-5 items-start"
              >
                <img src={img} alt="" />
                <div>
                  <div className="flex gap-[14.4px] items-start">
                    <div>
                      <h3 className="text-[16px] font-bold lg:text-[20px]">
                        The Futr Abstr
                      </h3>
                      <div className="flex items-center pt-[9px] pb-[16px] gap-2 xl:gap-[10.47px]">
                        <img src={user1} alt="" />
                        <p className="flex items-center justify-between gap-[5px] p-1 xl:p-2 border text-xs xl:text-base rounded-lg border-[#00AC4F] text-[#00AC4F]">
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
                                <rect
                                  width="8.53125"
                                  height="14"
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>{" "}
                          0.25 ETH
                        </p>
                        <p className="text-[14px] text-[#757575]">1 of 8</p>
                      </div>
                      <Button sm={true} outlined={true} text={"Place a bid"} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* devider */}
        <div className="h-auto w-[1px] hidden lg:block bg-[#EFEFEF]"></div>
        {/* third column */}
        <div className="w-full sm:w-3/4 mx-auto lg:w-1/3">
          <h2 className="font-bold font-integralCf text-[20px]">
            Top Collections over
          </h2>
          <h3 className="font-bold text-[18px] mt-[8px] mb-[28px] text-primary">
            Last 7 days
          </h3>
          <div className="space-y-4">
            {collections?.map(
              ({ eth, image, name, percentage, status, verified }, index) => (
                <div
                  key={index}
                  className="flex gap-5 justify-between items-center border-b-[1px] pb-4 border-b-[#EFEFEF] last:border-none"
                >
                  <div className="text-2xl font-bold">{index + 1}</div>
                  {/* left column */}
                  <div className="relative">
                    <img src={image} alt="" />
                    {verified && (
                      <div className="absolute -top-1 -right-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <rect
                            x="8"
                            y="10"
                            width="16"
                            height="11"
                            fill="white"
                          />
                          <path
                            d="M28.7479 14.3182L26.9345 12.2115C26.5879 11.8115 26.3079 11.0648 26.3079 10.5315V8.26483C26.3079 6.8515 25.1479 5.6915 23.7345 5.6915H21.4679C20.9479 5.6915 20.1879 5.4115 19.7879 5.06483L17.6812 3.2515C16.7612 2.46483 15.2545 2.46483 14.3212 3.2515L12.2278 5.07817C11.8278 5.4115 11.0678 5.6915 10.5478 5.6915H8.24114C6.8278 5.6915 5.6678 6.8515 5.6678 8.26483V10.5448C5.6678 11.0648 5.3878 11.8115 5.05447 12.2115L3.25447 14.3315C2.48114 15.2515 2.48114 16.7448 3.25447 17.6648L5.05447 19.7848C5.3878 20.1848 5.6678 20.9315 5.6678 21.4515V23.7315C5.6678 25.1448 6.8278 26.3048 8.24114 26.3048H10.5478C11.0678 26.3048 11.8278 26.5848 12.2278 26.9315L14.3345 28.7448C15.2545 29.5315 16.7612 29.5315 17.6945 28.7448L19.8012 26.9315C20.2012 26.5848 20.9479 26.3048 21.4812 26.3048H23.7479C25.1612 26.3048 26.3212 25.1448 26.3212 23.7315V21.4648C26.3212 20.9448 26.6012 20.1848 26.9479 19.7848L28.7612 17.6782C29.5345 16.7582 29.5345 15.2382 28.7479 14.3182ZM21.5479 13.4782L15.1079 19.9182C14.9212 20.1048 14.6679 20.2115 14.4012 20.2115C14.1345 20.2115 13.8812 20.1048 13.6945 19.9182L10.4678 16.6915C10.0811 16.3048 10.0811 15.6648 10.4678 15.2782C10.8545 14.8915 11.4945 14.8915 11.8811 15.2782L14.4012 17.7982L20.1345 12.0648C20.5212 11.6782 21.1612 11.6782 21.5479 12.0648C21.9345 12.4515 21.9345 13.0915 21.5479 13.4782Z"
                            fill="#1E93FF"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  {/* middle column */}
                  <div className="flex-1">
                    <div className="flex gap-[14.4px] items-center">
                      <div>
                        <h3 className="text-[16px] font-semibold">{name}</h3>
                        <div className="flex pt-[9px] pb-[16px] gap-[10.47px]">
                          <p className="flex items-center gap-[6px] text-[#636363]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="22"
                              viewBox="0 0 13 22"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_0_213)">
                                <path
                                  d="M12.671 11.4564L6.50004 15.3231L0.325043 11.4564L6.50004 0.589722L12.671 11.4564ZM6.50004 16.5647L0.325043 12.6981L6.50004 21.9231L12.675 12.6981L6.50004 16.5647Z"
                                  fill="#3A3A3A"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_0_213">
                                  <rect
                                    width="13"
                                    height="21.3333"
                                    fill="white"
                                    transform="translate(0 0.589722)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                            {eth}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* right column */}
                  <p
                    className={`text-[20px] font-semibold flex-1 ${
                      status === "up" ? "text-[#14C8B0]" : "text-[#FF002E]"
                    }`}
                  >
                    {percentage}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TopCollections;
