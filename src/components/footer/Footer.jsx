import React from "react";
import Container from "../container/Container";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Container>
        <footer className="grid grid-cols-2 text-[14px] mt-[79px] lg:grid-cols-6 justify-between bg-base-200 text-base-content">
          {/* first column */}
          <div className="col-span-2 mb-12 lg:mb-0 flex flex-col">
            <Link to={"/"} className="text-base font-bold ">
              <p className="font-integralCf  font-bold text-2xl">NFTERs</p>
            </Link>
            <p className="w-[90%] my-[24px]">
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </p>
            {/* social icons */}
            <div className="flex gap-4">
              <a
                className="hover:scale-125 transition-all"
                href="https://www.facebook.com/muhammad.rukon.7"
                target="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <g clipPath="url(#clip0_0_413)">
                    <path
                      d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05888 27.9411 0 18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36Z"
                      fill="#3B5998"
                    />
                    <path
                      d="M22.5252 18.7045H19.3133V30.4713H14.447V18.7045H12.1326V14.5692H14.447V11.8931C14.447 9.97949 15.3561 6.98291 19.3566 6.98291L22.9613 6.99799V11.012H20.3459C19.9169 11.012 19.3136 11.2264 19.3136 12.1392V14.573H22.9503L22.5252 18.7045Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_413">
                      <rect width="36" height="36" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                className="hover:scale-125 transition-all"
                href="https://github.com/MuhammadRukon"
                target="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <g clipPath="url(#clip0_0_417)">
                    <path
                      d="M18.0002 35.9997C27.9412 35.9997 36 27.9409 36 17.9998C36 8.0588 27.9412 0 18.0002 0C8.05917 0 0.000366211 8.0588 0.000366211 17.9998C0.000366211 27.9409 8.05917 35.9997 18.0002 35.9997Z"
                      fill="#55ACEE"
                    />
                    <path
                      d="M29.0257 12.9361C28.2543 13.2781 27.4246 13.5094 26.5544 13.6128C27.4428 13.0804 28.1247 12.2382 28.4465 11.2329C27.6151 11.7261 26.6939 12.0838 25.7143 12.2767C24.9295 11.4408 23.8113 10.9185 22.5731 10.9185C20.1974 10.9185 18.2706 12.8452 18.2706 15.2209C18.2706 15.5582 18.3088 15.8864 18.3826 16.2015C14.8069 16.0221 11.6364 14.3093 9.51424 11.7055C9.14396 12.3408 8.93155 13.0804 8.93155 13.8688C8.93155 15.3611 9.69167 16.6786 10.8455 17.45C10.1406 17.4278 9.4767 17.2343 8.89689 16.9112C8.89657 16.9295 8.89657 16.9478 8.89657 16.9658C8.89657 19.0504 10.3803 20.7892 12.3481 21.1842C11.9875 21.283 11.6066 21.3353 11.2148 21.3353C10.9369 21.3353 10.6677 21.3087 10.4053 21.2586C10.9527 22.9675 12.5413 24.2115 14.4244 24.2465C12.9517 25.4007 11.0967 26.0883 9.08043 26.0883C8.7339 26.0883 8.39057 26.0681 8.05463 26.0279C9.95767 27.2492 12.2198 27.9612 14.6493 27.9612C22.5631 27.9612 26.891 21.4053 26.891 15.7192C26.891 15.5328 26.8868 15.347 26.8784 15.1628C27.7198 14.5564 28.4491 13.7989 29.0257 12.9361Z"
                      fill="#F1F2F2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_417">
                      <rect width="36" height="36" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                className="hover:scale-125 transition-all"
                href="https://www.linkedin.com/in/muhammadrukon"
                target="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <g clipPath="url(#clip0_0_422)">
                    <path
                      d="M18 35.9998C27.9411 35.9998 36 27.9409 36 17.9998C36 8.05863 27.9411 -0.000244141 18 -0.000244141C8.05884 -0.000244141 -3.05176e-05 8.05863 -3.05176e-05 17.9998C-3.05176e-05 27.9409 8.05884 35.9998 18 35.9998Z"
                      fill="#007AB9"
                    />
                    <path
                      d="M28.7548 19.4481V26.8691H24.4523V19.9455C24.4523 18.207 23.8311 17.0198 22.2733 17.0198C21.0845 17.0198 20.3783 17.8191 20.0664 18.593C19.9531 18.8696 19.9239 19.2537 19.9239 19.6416V26.8688H15.6211C15.6211 26.8688 15.6788 15.1424 15.6211 13.9286H19.9242V15.7623C19.9156 15.7768 19.9034 15.7909 19.8957 15.8047H19.9242V15.7623C20.496 14.8825 21.5157 13.6247 23.8019 13.6247C26.6326 13.6247 28.7548 15.4742 28.7548 19.4481ZM11.12 7.69092C9.64813 7.69092 8.68521 8.65705 8.68521 9.9264C8.68521 11.1688 9.62022 12.1628 11.0635 12.1628H11.0914C12.5921 12.1628 13.5252 11.1688 13.5252 9.9264C13.4966 8.65705 12.5921 7.69092 11.12 7.69092ZM8.94094 26.8691H13.2422V13.9286H8.94094V26.8691Z"
                      fill="#F1F2F2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_422">
                      <rect width="36" height="36" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
          {/* second column */}
          <div className="col-span-1 flex flex-col">
            <header className="text-base font-bold">Market Place</header>
            <div className="my-[24px] flex flex-col leading-7 font-medium">
              <a>All NFTs</a>
              <a>News</a>
              <a>Arts</a>
              <a>Sports</a>
              <a>Utility</a>
              <a>Music</a>
              <a>Domain Name</a>
            </div>
          </div>
          {/* third column */}
          <div className="col-span-1 flex flex-col">
            <header className="text-base font-bold">My Account</header>
            <div className="my-[24px] flex flex-col leading-7 font-medium">
              <a>Profile</a>
              <a>Favourite</a>
              <a>My Collections</a>
              <a>Settings</a>
            </div>
          </div>
          {/* forth column */}
          <form className="col-span-2 mt-6 lg:mt-0">
            <header className="text-base font-bold ">Stay In The Loop</header>
            <fieldset className="form-control w-full my-[24px]">
              <label className="label">
                <span className="label-text">
                  Join our mailing list to stay in the loop with our newest
                  feature releases, NFT drops, and tips and tricks for
                  navigating NFTs.
                </span>
              </label>
              <div>
                <div className="relative text-[12.5px] mt-[24px]">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter your email address.."
                    className="border-[2px] py-[21px] px-[30px] w-full rounded-full border-[#EFEFEF] focus:outline-none"
                  />
                  <div className="absolute right-[8px] top-[50%] translate-y-[-50%]">
                    <Button text={"Subscribe Now"} fill={true} md={true} />
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </footer>
      </Container>
      <p className="text-center text-sm border-t-[1px] py-[15px] border-[#EFEFEF] text-[#A4A4A4]">
        Copyright © 2022 Avi Yansah
      </p>
    </>
  );
};

export default Footer;
