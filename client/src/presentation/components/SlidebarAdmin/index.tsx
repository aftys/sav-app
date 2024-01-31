import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { RxActivityLog } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import { TbReportSearch } from "react-icons/tb";
import { IoDocumentsOutline } from "react-icons/io5";

interface ISidebarLink {
    title: string;
    link: string;
    icon: React.ReactNode;
}


export const sidebarLinks:ISidebarLink[] = [
    { title: "Dashboard", icon: <MdDashboard /> ,link:'/dashboard'},
    { title: "Tasks", icon: <FaTasks /> ,link:'/tasks'},
    { title: "Users", icon: <FaUsers /> ,link:'/users'},
    { title: "Messages", icon: <TiMessages /> ,link:'/messages'},
    { title: "Activities", icon: <RxActivityLog  /> ,link:'/activities'},
    { title: "Calender", icon: <SlCalender /> ,link:'/calender'},
    { title: "Reports", icon: <TbReportSearch /> ,link:'/reports'},
    { title: "Documentation", icon: <IoDocumentsOutline /> ,link:'/documentation'},
  ];


const SidebarAdmin: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className={`${open ? "w-[230px]" : "w-[70px] "
                } bg-white dark:bg-dark-bg-main  border-r-[1px] dark:border-gray-700 border-gray-200 h-screen p-3  pt-8 flex flex-col gap-4 fixed left-0 top-0 z-50 duration-300`}
        >
            <div className="flex gap-x-4 items-center">
                <img
                    src="/sav.jpg"
                    className={`cursor-pointer h-10 w-10 ml-1 rounded-full duration-500 ${open && "rotate-[360deg]"
                        }`}
                />
                <h1
                    className={`font-mono text-2xl dark:text-gray-300 text-gray-800 text-center duration-500 ${!open && "scale-0 opacity-0"
                        }`}
                >
                    S A V
                </h1>
            </div>
            <ul className="relative pt-6 flex flex-col gap-2 overflow-hidden h-full">
                {sidebarLinks.map((link, index) => (
                    <li
                        key={index}
                    >
                        <NavLink to={link.link} className={({ isActive }) => { return `flex   rounded-xl p-2 pl-4 h-10 cursor-pointer  dark:text-gray-300  text-sm items-center gap-x-4  ${isActive ? "bg-[#22d3ee]  dark:bg-blue-900 text-gray-100 font-bold" : "dark:bg-light-white bg-gray-100 text-gray-500"}`; }} >
                            {link.icon}
                            <span className={`${!open && "hidden"} origin-left duration-400`}>
                                {link.title}
                            </span>
                        </NavLink>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default SidebarAdmin;