import logo from "@/assets/logo-icon.png";
import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";
import SessionManage from "@/app/(api)/SessionManage";

const Navbar =  async() => {
  const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories')
    if(!res.ok){
        throw new Error('Data failed to fetch')
    }
    const categories= await res.json();
    
    
  


  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
    timeZone: "Asia/Dhaka",
  });

  return (
    <div className="bg-[#fafcfa]">
    <div className="flex  justify-center sm:justify-between  items-center max-w-7xl mx-auto p-4  ">
      <div className="sm:flex gap-2 items-center ">
        <Link href='/'>
        <Image 
          src={logo}
          alt="বাজার দর লোগো"
          height={40}
          width={40}
          className="object-contain "
          priority
        />
        </Link>
         <div>
          <h1 className="text-[25px] font-bold  ">বাজার দর</h1>
          <p className="text-[16px]">{date}</p>
        </div>
      </div>

    <SessionManage></SessionManage>
    </div>
    <NavLinks categories={categories}></NavLinks>
    </div>
    
  );
};

export default Navbar;
