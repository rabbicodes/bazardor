
export default function Loading() {
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
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="animate-spin"
                    >
                        <circle
                            cx="12"
                            cy="12"
                            r="9"
                            strokeOpacity="0.2"
                        />
                        <path d="M12 3a9 9 0 0 1 9 9" />
                    </svg>
                </div>

                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#078b40]">
                    অনুগ্রহ করে অপেক্ষা করো
                </p>

                <h1 className="mb-3 text-2xl font-bold text-[#202820]">
                    লোড হচ্ছে...
                </h1>

                <p className="mb-7 text-sm leading-6 text-[#7b847b]">
                    তোমার তথ্য প্রস্তুত করা হচ্ছে।
                    অনুগ্রহ করে কিছুক্ষণ অপেক্ষা করো।
                </p>

                <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#e4e9e3]">
                    <div className="h-full w-1/3 animate-pulse rounded-full bg-[#078b40]" />
                </div>

                <div className="mt-7 border-t border-[#e8ece7] pt-5">
                    <p className="text-xs text-[#7b847b]">
                        একটু সময় দাও, আমরা প্রায় প্রস্তুত!
                    </p>
                </div>

            </div>
        </main>
    );
}