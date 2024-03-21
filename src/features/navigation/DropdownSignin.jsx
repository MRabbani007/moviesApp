// Imported Icons
import { FaRegBookmark } from "react-icons/fa";
import { BsCollectionPlayFill } from "react-icons/bs";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoDiamondOutline } from "react-icons/io5";
import { TbCertificate2 } from "react-icons/tb";
import { TbMessage2Code } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";

const DropdownSignin = ({ userName, handleSignOut }) => {
  return (
    <div className="dropdown-content bg-slate-800 p-4 fixed top-[60px] left-[5%] right-[5%] overflow-hidden z-50 flex justify-between text-slate-500">
      <ul className="flex flex-wrap gap-3 w-full">
        <li className="p-5 bg-slate-700 w-[23%] h-[100px] rounded-xl flex flex-col justify-between">
          <BsCollectionPlayFill className="text-2xl" />
          Purchases
        </li>
        <li className="p-5 bg-slate-700 w-[23%] h-[100px] rounded-xl flex flex-col justify-between">
          <FaRegBookmark className="text-2xl" />
          Watch Later
        </li>
        <li className="p-5 bg-slate-700 w-[23%] h-[100px] rounded-xl flex flex-col justify-between">
          <FaClockRotateLeft className="text-2xl" />
          Browsing History
        </li>
        <li className="p-5 bg-slate-700 w-[23%] h-[100px] rounded-xl flex flex-col justify-between">
          <IoDiamondOutline className="text-2xl" />
          Subscriptions
        </li>
        <li className="p-5 bg-slate-700 w-[23%] h-[100px] rounded-xl flex flex-col justify-between">
          <TbCertificate2 className="text-2xl" />
          Certificate Activation
        </li>
        <li className="p-5 bg-slate-700 w-[23%] h-[100px] rounded-xl flex flex-col justify-between">
          <TbMessage2Code className="text-2xl" />
          Login by Code
        </li>
        <li className="p-5 bg-slate-700 w-[23%] h-[100px] rounded-xl flex flex-col justify-between">
          <MdOutlinePayments className="text-2xl" />
          Payment Methods
        </li>
      </ul>
      <div className="w-[40%] flex flex-col justify-between border-l-[1px] border-slate-700 px-4">
        {userName === "" ? (
          <div className="bg-red-500 text-slate-100 py-2 px-6 rounded-xl whitespace-nowrap">
            Login or Register
          </div>
        ) : (
          <div className="bg-red-500 text-slate-100 py-2 px-6 rounded-xl whitespace-nowrap">
            Signout
          </div>
        )}
        <div className="text-left">
          <p>Settings</p>
          <p>Help</p>
        </div>
      </div>
    </div>
  );
};

export default DropdownSignin;
