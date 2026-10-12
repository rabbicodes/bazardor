import banner from '@/assets/bazar-hero.png'
import Image from 'next/image';
import Link from 'next/link';
const Banner = () => {
  const date = new Date().toLocaleDateString("bn-bd", { dateStyle: "full" });
  return (
    <div className='p-3 sm:p-4'>
    <header className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 max-w-7xl p-4 sm:p-6 md:p-4 mx-auto bg-white items-center border border-gray-200 mt-2 sm:mt-6 rounded-[20px]'>
    <div className='md:col-span-2 space-y-3 sm:space-y-4'>
      <div className='space-y-2'>
       <div className="badge badge-soft badge-success text-green-700 h-auto whitespace-normal text-xs sm:text-sm">{date}</div>
        <h1 className='text-2xl sm:text-3xl md:text-[40px] leading-snug font-bold'>আজকের বাজারের দাম এক নজরে</h1>
      </div>
      <div>
        <p className='text-sm sm:text-base text-[#727a74]'>
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন- <br className='hidden md:block'></br>সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>
      </div>
      <div>
        
         <Link href='#allProduct' className='block sm:inline-block'><button className="w-full sm:w-auto bg-green-700 text-base sm:text-[18px] font-semibold cursor-pointer text-white px-4 py-2 rounded-[10px] ">সব পণ্য দেখুন </button></Link>
      </div>
    </div>
    <div className='md:col-span-1'>
<Image src={banner} alt='banner' height={800} width={800} className='mx-auto h-auto w-full max-w-xs sm:max-w-sm md:max-w-none'></Image>
    </div>
    </header>
    </div>
  );
};

export default Banner;