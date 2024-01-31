import Switcher from "@components/Switcher";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom"; 

const Navbar: React.FC = () => {
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 flex items-center justify-end w-full py-2 px-12 z-40 bg-white dark:bg-dark-bg-main border-b-[1px] dark:border-gray-700 border-gray-200">
                <div className="flex items-center gap-6 mr-4">
                    <Link to="/profile">
                        <CiUser className="text-xl " />
                    </Link>
                    <Link to="/notifications">
                        <IoMdNotificationsOutline className="text-xl" />
                    </Link>
                </div>
                <Switcher />
            </nav>
        </>
    );
};

export default Navbar;
