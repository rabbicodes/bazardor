
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#f1f5f1] px-4 py-8 text-[#202820]">
            <div className="w-full max-w-91.25 rounded-2xl border border-[#e4e9e3] bg-[#fbfcfb] p-7 text-center shadow-[0_8px_35px_rgba(32,40,32,0.06)] sm:p-9">

                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#078b40]/10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#078b40"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                </div>

                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#078b40]">
                    পৃষ্ঠা পাওয়া যায়নি
                </p>

                <h1 className="mb-3 text-7xl font-extrabold tracking-tight text-[#078b40]">
                    404
                </h1>

                <h2 className="mb-3 text-xl font-bold text-[#202820]">
                    ওহ! পথ হারিয়ে ফেলেছ?
                </h2>

                <p className="mb-7 text-sm leading-6 text-[#7b847b]">
                    তুমি যে পৃষ্ঠাটি খুঁজছ, সেটি পাওয়া যায়নি
                    অথবা পৃষ্ঠাটি সরিয়ে ফেলা হয়েছে।
                </p>

                <div className="flex flex-col gap-3">
                    <Link
                        href="/"
                        className="flex h-10 w-full items-center justify-center rounded-lg bg-[#078b40] text-sm font-semibold text-white transition-colors hover:bg-[#067536]"
                    >
                        হোম পেজে ফিরে যাও
                    </Link>

                    
                </div>

                <div className="mt-7 border-t border-[#e8ece7] pt-5">
                    <p className="text-xs text-[#7b847b]">
                        কোনো সমস্যা নেই! চলো, আবার সঠিক পথে ফিরে যাই।
                    </p>
                </div>

            </div>
        </main>
    );
}