
import Link from 'next/link';
import React from 'react';
 interface ICategory {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const NavLinks = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories')
    if(!res.ok){
        throw new Error('Data failed to fetch')
    }
    const categories:ICategory[] = await res.json();
    
    return (
        <div className='flex gap-6 px-7 py-4 max-w-7xl mx-auto '>
            {
                categories.map(category=>{
                    return(
                        <div key={category.id}>
                            <Link className='flex items-center text-[20px] font-semibold ' href={`/category/${category.slug}`}><span>{category.icon}</span><h1>{category.nameBn}</h1></Link>

                        </div>
                    )
                })
            }
        </div>
    );
};

export default NavLinks;

