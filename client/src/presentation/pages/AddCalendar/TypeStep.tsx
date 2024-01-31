import React from "react"
import { AnimatePresence, motion } from "framer-motion"

interface Props {
    setType: (type: string) => void
    type: string
}

const TypeStep: React.FC<Props> = ({type,setType}) => {
    
    return (
        <div className="border-[#22d3ee] border rounded-md w-full flex flex-col items-center justify-center py-6 gap-10">
            <h3 className="border-b-2  text-center p-4  w-4/5"> Choisissez le type d'enretien souhaité</h3>
            <div className="flex justify-between p-2 w-4/5">
                <AnimatePresence>
                <motion.div
                    key={1}
                    transition={{ duration: 0.5, type: "spring", bounce: 0.25}}
                    data-open={type == "standart"}
                    layout
                    initial={{ border: "0px" }}
                    className="type w-2/5 flex flex-col gap-2 items-center   bg-gray-100 dark:bg-slate-600 p-2 rounded-xl"
                    onClick={() => setType("standart")}
                >
                    <img src="d.jpg" className="rounded-md" />
                    <h3>Entretien Standart</h3>
                </motion.div>
                <motion.div
                    key={2}
                    data-open={type == "diagnostic"}
                    layout
                    initial={{ border: "0px" }}
                    className="type w-2/5 flex flex-col gap-2 items-center   bg-gray-100 dark:bg-slate-600 p-2 rounded-xl"
                    onClick={() =>{ setType("diagnostic")}}
                >
                    <img src="c.jpg" className="rounded-md" />
                    <h3>Entretien Diagnostic</h3>
                </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default TypeStep;