"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoLogOutOutline } from "react-icons/io5";
import { updateUser, useSession, signOut } from "@/lib/auth-client";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { data, isPending } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (!isPending && !data?.user) {
      router.replace("/");
    }
  }, [isPending, data, router]);

  if (isPending || !data?.user) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-[#f1f5f1]">
        <p className="text-sm text-[#078b40]">লোড হচ্ছে...</p>
      </div>
    );
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const resData = await updateUser({
      name: String(userData.name),
    });

    toast.success("Update Successful");
    console.log(resData);
  };

  return (
    <div className="min-h-dvh bg-[#f1f5f1] px-3 py-6 sm:px-4 sm:py-12">
      <div className="mx-auto w-full max-w-138">
        <div className="mb-4 sm:mb-5">
          <h1 className="text-xl font-bold text-[#202820]">
            আমার প্রোফাইল
          </h1>
          <p className="mt-1 text-xs text-[#7b847b]">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        <div className="mb-4 flex items-center justify-between gap-2 sm:gap-3 rounded-xl border border-[#dfe7df] bg-[#fbfcfb] p-3 sm:p-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg sm:w-13">
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
                {data.user.name}
              </h2>
              <p className="mt-1 truncate text-xs text-[#7b847b]">
                {data.user.email}
              </p>
            </div>
          </div>

          <button
            onClick={async () => {
              await signOut();
              toast.success("Sign Out Successful");
              router.replace("/sign-in");
            }}
            type="button"
            className="flex shrink-0 items-center gap-1 whitespace-nowrap rounded-lg border border-[#ff5555] px-2.5 py-2 text-xs font-medium text-[#ef4444] transition hover:bg-red-50 sm:px-3"
          >
            <IoLogOutOutline size={15} />
            সাইন আউট
          </button>
        </div>

        <div className="rounded-xl border border-[#dfe7df] bg-[#fbfcfb] p-3 sm:p-4">
          <h2 className="text-sm font-semibold text-[#263126]">
            তথ্য
          </h2>

          <div className="mt-4 px-0 sm:mt-7 sm:px-4">
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
                className="h-11 w-full rounded-lg border border-[#dce5dc] bg-transparent px-3 text-base text-[#263126] outline-none transition focus:border-[#07883e] focus:ring-2 focus:ring-[#07883e]/10 sm:h-7.75 sm:text-xs"
              />

              <button
                type="submit"
                className="mt-3 h-11 w-full rounded-lg bg-[#078b40] text-sm font-semibold text-white shadow-[0_3px_3px_rgba(0,0,0,0.2)] transition hover:bg-[#067735] sm:h-7.75 sm:text-xs"
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