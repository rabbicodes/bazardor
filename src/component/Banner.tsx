import banner from '@/assets/bazar-hero.png'
import Image from 'next/image';
import Link from 'next/link';
const Banner = () => {
  const date = new Date().toLocaleDateString("bn-bd", { dateStyle: "full" });
  return (
    <div className='p-4'>
    <header className='grid grid-cols-3 max-w-7xl p-4 mx-auto bg-white items-center border border-gray-200 mt-6 m-4 rounded-[20px]'>
    <div className='col-span-2 space-y-4'>
      <div >
       <div className="badge badge-soft badge-success text-green-700">{date}</div>
        <h1 className='text-[40px] font-bold'>আজকের বাজারের দাম এক নজরে</h1>
      </div>
      <div>
        <p className='text-[#727a74]'>
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন- <br></br>সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>
      </div>
      <div>
        
         <Link href='#allProduct'><button className="bg-green-700 text-[18px] font-semibold cursor-pointer text-white px-4 py-2 rounded-[10px] ">সব পণ্য দেখুন </button></Link>
      </div>
    </div>
    <div className='col-span-1'>
<Image src={banner} alt='banner' height={800} width={800}></Image>
    </div>
    </header>
    </div>
  );
};

export default Banner;
