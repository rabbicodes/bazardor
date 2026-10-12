import logo from "@/assets/logo-icon.png";
import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";

const Navbar =  () => {
  


  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
    timeZone: "Asia/Dhaka",
  });

  return (
    <div className="bg-[#fafcfa]">
    <div className="flex justify-between items-center max-w-7xl mx-auto p-4  ">
      <div className="flex gap-2 items-center ">
        <Link href='/'>
        <Image
          src={logo}
          alt="বাজার দর লোগো"
          height={40}
          width={40}
          className="object-contain"
          priority
        />
        </Link>
         <div>
          <h1 className="text-[25px] font-bold  ">বাজার দর</h1>
          <p className="text-[16px]">{date}</p>
        </div>
      </div>

     <div className="flex gap-6">
        <button className="text-[16px] font-semibold cursor-pointer">সাইন ইন </button>
        <button className="bg-green-700 text-[16px] font-semibold cursor-pointer text-white px-4 py-2 rounded-[10px]">সাইন আপ </button>
   </div>
    </div>
    <NavLinks/>
    </div>
    
  );
};

export default Navbar;
