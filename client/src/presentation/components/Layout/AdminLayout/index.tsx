import NavbarAdmin from "@components/NavbarAdmin";
import SidebarAdmin from "@components/SlidebarAdmin";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  

    return (
        <div className="min-h-screen    dark:bg-dark-app flex flex-col items-center pl-[85px] py-[75px] pr-4 ">
            <NavbarAdmin />
            <SidebarAdmin />
            <main className="w-full h-full  max-w-screen-xl flex flex-col items-center " >
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
