import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Profile } from "@components/Layout/ProfileModal";

const links = [
    {
        id: 1,
        name: "Accueil",
        path: "/"
    }, {
        id: 2,
        name: "A propos",
        path: "/about"
    }, {
        id: 3,
        name: "Contact",
        path: "/search"
    }
]

const Navbar: React.FC = () => {
    const [displayName] = useState('')
    const [photoURL] = useState("https://avatars.githubusercontent.com/u/55942632?v=4")
    const [show, setShow] = useState(false)
    return (
        <nav
            className="fixed top-0 mx-auto max-w-screen-md w-full h-20 flex items-center justify-between  py-2 px-4  z-40 backdrop-blur-sm"
        >
            <img src="logo.svg" alt="logo" className="h-8" />

            <div className=" flex gap-6">
                {
                    links.map((link) => (
                        <NavLink key={link.id} to={link.path} className={({ isActive }) => { return `text-lg  font-mono  px-2 ${isActive ? "text-[#22d3ee] border-b-2 border-[#22d3ee]" : "text-gray-600 dark:text-gray-300"}` }} >
                            {link.name}
                        </NavLink>
                    ))
                }
                <AnimatePresence >

                    <motion.div onClick={() => setShow(!show)}
                        layoutId='profile'
                        className="z-30  border-2 border-[#22d3ee] border-gray rounded-full bg-white"
                    >

                        <motion.img
                            className="rounded-full h-8 w-8"
                            src={photoURL} />
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl">{displayName}</motion.p>

                    </motion.div>
                    {show &&
                        (<Profile setShow={setShow} />)}
                </AnimatePresence>

            </div>


        </nav>
    )
};

export default Navbar;