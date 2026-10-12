"use client";
import { IoIosArrowDown } from "react-icons/io";

const SortingDropdown = ({
  text,
  onCheapToExpensive,
  onExpensiveToCheap,
}: {
  text: string;
  onCheapToExpensive: () => void;
  onExpensiveToCheap: () => void;
}) => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-sm">
        {text} <IoIosArrowDown />
      </div>
      <ul
        tabIndex={-1}
        className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
      >
        <li>
          <button onClick={onCheapToExpensive}>কম থেকে বেশি</button>
        </li>
        <li>
          <button onClick={onExpensiveToCheap}>বেশি থেকে কম</button>
        </li>
      </ul>
    </div>
  );
};

export default SortingDropdown;