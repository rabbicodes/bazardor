'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface ICategory {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const NavLinks = ({ categories }: { categories: ICategory[] }) => {
   
    const pathname = usePathname()
    
    
    return (
        <div className='flex gap-6 px-7 py-4 max-w-7xl mx-auto border border-gray-200 '>
            {
                categories.map(category=>{
                    return(
                        <div key={category.id}>

                            <Link className={`flex items-center p-2 text-[16px] font-semibold ${pathname===`/category/${category.slug}`?'bg-green-700 p-2 rounded-[10px]  text-white':''}`} href={`/category/${category.slug}`}><span>{category.icon}</span><h1>{category.nameBn}</h1></Link>
                            
                           
                        </div>
                    )
                })
            }
        </div>
    );
};

export default NavLinks;