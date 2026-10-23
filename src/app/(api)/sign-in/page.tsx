"use client";
import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";



import {
  Button,

  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import toast from "react-hot-toast";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    const { data: resData, error } = await signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });
   
    if(error){
        toast.error('Invalid email or password ')
    } else{
        toast.success('Sign In Succesfull!')

    }
     
    console.log(resData, error);
  };
   const handleGoogleSignIn = async () => {
      await signIn.social({
        provider: "google",
      });
    };
  
    const handleGithubSignIn = async () => {
      await signIn.social({
        provider: "github",
      });
    };
  

  return (
    <div className="min-h-screen bg-[#f1f5f1] px-4 py-10 flex flex-col items-center justify-center">
      <div className="w-full max-w-91.25">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-[#202820]">সাইন ইন</h1>
          <p className="mt-1 text-sm text-[#7b847b]">
            বিস্তারিত পাঠ, বাজার মূল্য ও ব্র্যাকারের পেতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>

        <div className="rounded-2xl border border-[#dfe7df] bg-[#fbfcfb] p-5 sm:p-6">
          <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
              className="flex flex-col gap-1.5"
            >
              <Label className="text-sm font-medium text-[#263126]">
                ইমেইল
              </Label>
              <Input
                placeholder="you@example.com"
                className="h-10 w-full rounded-lg border border-[#dce5dc] bg-transparent px-3 text-sm text-[#263126] outline-none transition focus:border-[#07883e] focus:ring-2 focus:ring-[#07883e]/10"
              />
              <FieldError className="text-xs text-red-600" />
            </TextField>

            <TextField
              isRequired
              minLength={8}
              name="password"
              type={showPassword ? "text" : "password"}
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
              className="flex flex-col gap-1.5"
            >
              <Label className="text-sm font-medium text-[#263126]">
                পাসওয়ার্ড
              </Label>

              <div className="relative w-full">
                <Input
                  placeholder="কমপক্ষে ৮ অক্ষর"
                  className="h-10 w-full rounded-lg border border-[#dce5dc] bg-transparent px-3 pr-10 text-sm text-[#263126] outline-none transition focus:border-[#07883e] focus:ring-2 focus:ring-[#07883e]/10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
                >
                  {showPassword ? (
                    <IoEyeOffOutline size={20} />
                  ) : (
                    <IoEyeOutline size={20} />
                  )}
                </button>
              </div>

              
              <FieldError className="text-xs text-red-600" />
            </TextField>

            <Button
              type="submit"
              className="mt-1 h-10 w-full rounded-lg bg-[#078b40] text-sm font-semibold text-white shadow-[0_3px_3px_rgba(0,0,0,0.2)] transition hover:bg-[#067735]"
            >
              সাইন ইন
            </Button>

            <div className="flex items-center gap-3 py-1">
              <div className="h-px flex-1 bg-[#dce4dc]" />
              <span className="text-xs text-[#7b847b]">অথবা</span>
              <div className="h-px flex-1 bg-[#dce4dc]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <Button
               onClick={handleGoogleSignIn}
                className="h-10 min-w-0 rounded-lg border border-[#dfe7df] bg-transparent px-2  text-[10px] sm:text-xs font-semibold text-[#283228] hover:bg-[#f1f5f1]"
              >
                <span className="text-base font-bold text-[#4285f4]"><FaGoogle /></span>
                Google দিয়ে চালিয়ে যান
              </Button>

              <Button
                onClick={handleGithubSignIn }
                className="h-10 min-w-0 rounded-lg border border-[#dfe7df] bg-transparent px-2 text-[10px] sm:text-xs font-semibold text-[#283228] hover:bg-[#f1f5f1]"
              >
                <span className="text-base"><FaGithub /></span>
                GitHub দিয়ে চালিয়ে যান
              </Button>
            </div>

            <p className="pt-1 text-center text-xs text-[#697369]">
              অ্যাকাউন্ট নেই?{" "}
              <a
                href="/sign-up"
                className="font-medium text-[#078b40] hover:underline"
              >
                সাইন আপ করুন
              </a>
            </p>
          </Form>
        </div>

        <div className="mt-5 text-center">
            <Link href="/"
            className="text-xs text-[#879087] transition hover:text-[#078b40]">← হোম পেজে ফিরে যান</Link>
          
            
         
        </div>
      </div>
    </div>
  );
};

export default SignInPage;