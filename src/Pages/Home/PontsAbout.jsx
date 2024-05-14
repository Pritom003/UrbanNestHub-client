import { IoIosPaper } from "react-icons/io";
import { FcAdvertising } from "react-icons/fc";
import { MdContentPasteSearch } from "react-icons/md";
import { FaRegImage } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
const PontsAbout = () => {
  
  return (
   <div className="my-44">
       <div className="text-center mt-20 mb-5">
        <h1 className="text-4xl font-semibold">Why choose US</h1>
        <h5 className="text-[#93b4ce] text-xl font-medium">Know little more about us</h5>
      </div>
     <div className="flex flex-wrap gap-4 justify-center align-middle items-center ">
      <div className=" border-r-2 px-6 ">
      <IoIosPaper className="text-5xl" />
        <h1>Property Listings</h1>
      </div>
      <div className=" border-r-2 px-6 ">
      <MdContentPasteSearch className="text-5xl"/>
        <h1>Advanced Search</h1>
      </div>
 
      <div className=" border-r-2 px-6 ">
      <FaRegImage className="text-5xl" />
        <h1>High-Quality Images</h1>
      </div>
      <div className=" border-r-2 px-6 ">
      <MdSupportAgent  className="text-5xl"/>
        <h1>Professional Agents</h1>
      </div >
      <div className=" border-r-2 px-6 ">
      <FaMoneyBillTransfer className="text-5xl" />
        <h1>Easy Transactions</h1>
      </div>
      <div className=" border-r-2 px-6 ">
      <FcAdvertising className="text-5xl" />
        <h1>Commercial Properties</h1>
      </div>
    </div>
   </div>
  );
};

export default PontsAbout;