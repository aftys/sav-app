import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";




const ClientLayout = () => {

    return (
        <div className="min-h-screen w-full bg-auth-light dark:bg-dark-main flex flex-col items-center justify-start  py-24 ">
            <Navbar />
            <main className=" max-w-screen-md   w-full  flex flex-col gap-6 items-center justify-start px-4 font-mono text-lg text-gray-700 dark:text-gray-200 ">
                <Outlet />
            </main>

        </div>
    )
};

export default ClientLayout;