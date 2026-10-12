"use client";
import { IProduct } from "@/type/ProductType";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const SortingDropdown = ({ products }: { products: IProduct[] }) => {
  const [text, setText] = useState("ডিফল্ট");
  const [product, setProduct] = useState(products);
  const assending = products.toSorted((a, b) => a.today - b.today);
  const descending = products.toSorted((a, b) => b.today - a.today);
  const handleCheapToExpensive = () => {
    setText("কম থেকে বেশি");
    setProduct(assending);
  };
  const handleExpensiveToCheap = () => {
    setText("বেশি থেকে কম");
    setProduct(descending);
  };
  return (
    <div className="flex flex-col items-start">
       
        <div className="dropdown dropdown-start">
        <div tabIndex={0} role="button" className="btn m-1">
          {text} <IoIosArrowDown />
        </div>
        <ul
          tabIndex={-1}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a>
              <button onClick={handleCheapToExpensive}>কম থেকে বেশি </button>
            </a>
          </li>
          <li>
            <a>
              <button onClick={handleExpensiveToCheap}>বেশি থেকে কম</button>
            </a>
          </li>
        </ul>
      </div>


    
    </div>
    
      
     
    
  );
};

export default SortingDropdown;
