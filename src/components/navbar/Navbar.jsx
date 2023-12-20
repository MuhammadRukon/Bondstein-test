import { Link } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";
import Container from "../container/Container";
import Logo from "../../assets/NFters.png";
import Navlinks from "./Navlinks";
import Button from "../button/Button";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-[#fff] z-[999] shadow-sm">
      <div className="py-[31px] border-b-[1px] border-[#EFEFEF]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Link to="/">
              <img className="" src={Logo} alt="logo" />
            </Link>
            <div className="h-8 w-[1px] hidden lg:block bg-[#EFEFEF]"></div>
            {/* menu items */}
            <div className="hidden md:block">
              <Navlinks />
            </div>
            {/* search bar and buttons*/}
            <div className=" items-center gap-5 flex">
              <div className="relative hidden lg:block">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search"
                  className="border-[2px] py-[14px] px-[30px] rounded-full border-[#EFEFEF] focus:outline-none"
                />
                <button className="absolute right-[30px] top-[50%] translate-y-[-50%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                      fill="#757575"
                    />
                    <path
                      d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z"
                      fill="#757575"
                    />
                  </svg>
                </button>
              </div>
              <div className="hidden sm:block">
                <Button text={"Upload"} fill={true} lg={true} />
              </div>
              <div className="hidden sm:block">
                <Button text={"Connect Wallet"} outlined={true} lg={true} />
              </div>
            </div>
            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
