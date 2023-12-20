import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Navlinks from "./Navlinks";

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative block md:hidden">
      <div className="flex flex-row items-center gap-3">
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2 border-[1px] border-primary flex flex-row items-center gap-3 rounded-lg cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu color="#3D00B7" />
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-[#fff] overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <Navlinks />
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
