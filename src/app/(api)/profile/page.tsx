"use client";

import React from "react";
import Image from "next/image";
import { IoLogOutOutline } from "react-icons/io5";
import { updateUser, useSession, signOut } from "@/lib/auth-client";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { data } = useSession();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const resData = await updateUser({
      name: String(userData.name),
    });
  toast.success('Updat Successful')
    console.log(resData);
  };

 

  return (
    <div className="min-h-screen bg-[#f1f5f1] px-4 py-12">
      <div className="mx-auto max-w-138">
        <div className="mb-5">
          <h1 className="text-xl font-bold text-[#202820]">
            আমার প্রোফাইল
          </h1>
          <p className="mt-1 text-xs text-[#7b847b]">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        <div className="mb-4.5 flex items-center justify-between gap-3 rounded-xl border border-[#dfe7df] bg-[#fbfcfb] p-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="relative h-12 w-13 shrink-0 overflow-hidden rounded-lg">
              <Image
                src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp"
                alt="Profile picture"
                fill
                sizes="52px"
                className="object-cover"
              />
            </div>

            <div className="min-w-0">
              <h2 className="truncate text-sm font-semibold text-[#263126]">
                {data?.user?.name}
              </h2>
              <p className="mt-1 truncate text-xs text-[#7b847b]">
                {data?.user?.email}
              </p>
            </div>
          </div>

          <button
            onClick={()=>{signOut()}}
            type="button"
            className="flex shrink-0 items-center gap-1 rounded-lg border border-[#ff5555] px-3 py-2 text-xs font-medium text-[#ef4444] transition hover:bg-red-50"
          >
            <IoLogOutOutline size={15} />
            সাইন আউট
          </button>
        </div>

        <div className="rounded-xl border border-[#dfe7df] bg-[#fbfcfb] p-4 sm:p-4.5">
          <h2 className="text-sm font-semibold text-[#263126]">
            তথ্য
          </h2>

          <div className="mt-7 px-0 sm:px-3.75">
            <form onSubmit={onSubmit}>
              <label
                htmlFor="name"
                className="mb-1 block text-xs font-medium text-[#263126]"
              >
                নাম
              </label>

              <input
                id="name"
                name="name"
                type="text"

                required
                className="h-7.75 w-full rounded-lg border border-[#dce5dc] bg-transparent px-3 text-xs text-[#263126] outline-none transition focus:border-[#07883e] focus:ring-2 focus:ring-[#07883e]/10"
              />

              <button
                type="submit"
                className="mt-3 h-7.75 w-full rounded-lg bg-[#078b40] text-xs font-semibold text-white shadow-[0_3px_3px_rgba(0,0,0,0.2)] transition hover:bg-[#067735]"
              >
                আপডেট
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;