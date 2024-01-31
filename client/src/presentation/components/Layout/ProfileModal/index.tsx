import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineCancel } from 'react-icons/md';
import { HiLogout } from 'react-icons/hi';
import Button from '@components/Button'
import { BsFillPersonFill, BsShield } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const userProfileData = [
    {
        icon: <BsFillPersonFill />,
        link: 'rendez-vous',
        title: 'Rendez vous',
        desc: 'Account Settings',
        iconColor: '#03C9D7',
        iconBg: '#E5FAFB',
    },
    {
        icon: <BsShield />,
        link: 'reclamations',
        title: 'Réclamations',
        desc: 'Messages & Emails',
        iconColor: 'rgb(0, 194, 146)',
        iconBg: 'rgb(235, 250, 242)',
    },
    {
        icon: <AiOutlineSetting />,
        link: 'settings',
        title: 'Settings',
        desc: 'To-do and Daily Tasks',
        iconColor: 'rgb(255, 244, 229)',
        iconBg: 'rgb(254, 201, 15)',
    },
];

interface ProfileProps {
    setShow: (show: boolean) => void;
}

export const Profile: React.FC<ProfileProps> = ({ setShow }) => {
    const currentColor = "#22d3ee";

    return (
        <motion.div
            className="nav-item z-50 absolute border border-[#22d3ee] right-2 top-16  bg-white  p-4 rounded-xl"
            animate={{ y: 0, opacity: 1, transition: { default: { duration: 0.5, type: 'spring' } } }} initial={{ y: +60, opacity: 0 }} exit={{ y: -60, opacity: 0 }}
        >
            <Button
                className="absolute top-2 right-2"
                icon={<MdOutlineCancel />}
                color={currentColor}
                bgHoverColor={"gray-200"}
                size="2xl"
                borderRadius="50%"
                close={() => setShow(false)} bgColor={''} text={''} width={''}
            />

            <div className="flex gap-5 items-center rounded-xl border-color border-b-1 py-6 px-4 hover:bg-gray-200 dark:hover:bg-dark-bg-second">
                <img
                    className="rounded-full h-20 w-20 border-2 border-[#22d3ee]"
                    src={"https://avatars.githubusercontent.com/u/55942632?v=4"}
                    alt="user-profile"
                />
                <div>
                    <p className="font-semibold text-xl dark:text-gray-200">Oussama AFTYS</p>
                    <p className="text-gray-500 text-sm dark:text-gray-400">@ousssamaft</p>
                    <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">oussamaaftys@gmail.com</p>
                </div>
            </div>
            <div className="grid grid-cols-2 p-2 gap-2">
                {userProfileData.map((item, index) => (
                    <Link to={item.link} key={index} className="flex items-center  gap-2 py-2 px-4 hover:bg-gray-200 dark:hover:bg-dark-bg-second rounded-full border-b-[1px] border-t-[1px] dark:border-gray-700  border-gray-200 cursor-pointer">
                        <button
                            type="button"
                            style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                            className="text-sm rounded-full p-3 hover:bg-light-gray"
                        >
                            {item.icon}
                        </button>
                        <p className=" text-sm dark:text-gray-200">{item.title}</p>
                    </Link>
                ))}
                <div className="flex items-center  gap-2 p-2 hover:bg-gray-200 dark:hover:bg-dark-bg-second rounded-full border-b-[1px] border-t-[1px] dark:border-gray-700  border-gray-200 cursor-pointer">
                    <button
                        type="button"
                        style={{ color: '#03C9D7', backgroundColor: '#E5FAFB' }}
                        className="text-sm rounded-full p-3 hover:bg-light-gray"
                    >
                        <HiLogout />
                    </button>
                    <p className="text-sm dark:text-gray-200">logout</p>
                </div>
            </div>
        </motion.div>
    );
};



