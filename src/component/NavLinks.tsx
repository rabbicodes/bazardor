'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';

interface ICategory {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

const NavLinks = ({ categories }: { categories: ICategory[] }) => {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    return (
        <div className='max-w-7xl mx-auto border border-gray-200'>
            {/* মোবাইল: হ্যামবার্গার + ড্রপডাউন */}
            <div className='relative md:hidden'>
                <button
                    type='button'
                    onClick={() => setOpen((prev) => !prev)}
                    aria-expanded={open}
                    aria-label={open ? 'ক্যাটাগরি বন্ধ করুন' : 'ক্যাটাগরি খুলুন'}
                    className='flex w-full items-center gap-2 px-4 py-3 text-base font-semibold'
                >
                    {open ? <IoClose size={24} /> : <IoMenu size={24} />}
                    <span>ক্যাটাগরি</span>
                </button>

                {open && (
                    <div className='absolute left-0 right-0 top-full z-20 grid max-h-[70vh] grid-cols-2 gap-1 overflow-y-auto border-t border-gray-200 bg-white p-2 shadow-lg'>
                        {categories.map(category => (
                            <Link
                                key={category.id}
                                href={`/category/${category.slug}`}
                                onClick={() => setOpen(false)}
                                className={`flex items-center gap-1 rounded-[10px] p-2 text-sm font-semibold ${pathname === `/category/${category.slug}` ? 'bg-green-700 text-white' : ''}`}
                            >
                                <span>{category.icon}</span>
                                <span>{category.nameBn}</span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            {/* ডেস্কটপ/ট্যাবলেট: আগের মতো পাশাপাশি লিস্ট */}
            <div className='hidden md:flex gap-4 lg:gap-6 px-5 lg:px-7 py-4 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
                {categories.map(category => (
                    <div key={category.id} className='shrink-0'>
                        <Link
                            className={`flex items-center gap-1 p-2 text-[16px] font-semibold rounded-[10px] ${pathname === `/category/${category.slug}` ? 'bg-green-700 text-white' : ''}`}
                            href={`/category/${category.slug}`}
                        >
                            <span>{category.icon}</span>
                            <span>{category.nameBn}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NavLinks;