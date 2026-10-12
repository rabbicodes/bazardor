
'use client'
import { IoIosArrowDown } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";


import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const SessionManage = () => {
  const { data } = useSession();
  return (
    <div>
      {data?.user? <div className="flex items-center gap-2">

        <div className="avatar">
  <div className="mask mask-squircle w-24">
    <Image  width={40} height={40} alt="Tailwind-CSS-Avatar-component" src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp" />
  </div>
</div>
<h1>{data?.user?.name}</h1>
<div className="dropdown dropdown-end ">
    
  <div tabIndex={0} role="button" className="btn m-1 border-gray-300"><IoIosArrowDown /></div>
 
  <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
     <div className="p-3">
        <h1 className="font-bold">{data?.user?.name}</h1>
        <h1>{data?.user?.email}</h1>
    </div>
    <li><Link href='/profile'> <FaUserAlt />আমার প্রোফাইল</Link></li>
    <li> <button
                onClick={()=>{signOut();toast.success('Sign Out succesfull')}}
                type="button"
                className="flex shrink-0 items-center gap-1 rounded-lg  px-3 py-2 text-xs font-medium text-[#ef4444] transition hover:bg-red-50"
              >
                <IoLogOutOutline size={15} />
                সাইন আউট
              </button></li>
    
  </ul>
</div>



      </div>
        
        
        
        :<div className="flex gap-6 items-center">
        <Link
          href="/sign-in"
          className="text-[16px] font-semibold   "
        >
          <button className=" px-4 py-2 hover:border hover:border-green-700 hover:rounded-[10px] hover:px-4g hover:py-2 cursor-pointer">সাইন ইন{" "}</button>
        </Link>
        <Link
          href="/sign-up"
          className="bg-green-700 text-[16px] font-semibold cursor-pointer text-white px-4 py-2 rounded-[10px]"
        >
          সাইন আপ{" "}
        </Link>
      </div>}
    </div>
  );
};

export default SessionManage;
