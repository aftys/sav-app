import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HourStep from "./HourStep";
import TypeStep from "./TypeStep";
import ValidationStep from "./ValidationStep";

const steps = [

    {
        id: 1,
        name: "Heure",
    }, {
        id: 2,
        name: "Type",
    }, {
        id: 3,
        name: "Validation",
    }
]

const AddCalendar = () => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [hour, setHour] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [type, setType] = useState<string>("");

    useEffect(() => {
        console.log(hour, date, type);
    }, [hour, date, type]);

    function next() {
        if(currentStep==1 && (hour=="" || date=="")){
            return;
        }else if(currentStep==2 && type==""){
            return;
        }
        if (currentStep < 3) {
            setCurrentStep(prev => prev + 1);
        }
    }

    function prev() {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1)
        }
    }
    return (
        <>
            <div className=" h-10 w-full flex justify-between ">
                {
                    steps.map((step) => (<motion.p transition={{ type: 'spring', duration: 3 }} key={step.id} className={`text-center p-2 ${currentStep == step.id && "bg-[#22d3ee] text-white rounded-xl"}`}>{step.name}</motion.p>))
                }

            </div>

            {currentStep == 1 && <HourStep setDate={setDate} setHour={setHour} selectedHour={hour} />}
            {currentStep == 2 && <TypeStep setType={setType} type={type} />}
            {currentStep == 3 && <ValidationStep hour={hour} date={date} type={type} />}

            <div className="relative w-full flex justify-between">
                {currentStep>1 && <button onClick={prev} className="absolute left-0 border-[#22d3ee] border text-[#22d3ee] rounded-xl text-center p-2">prev</button>}
                {currentStep<3 && <button onClick={next} className="absolute right-0 bg-[#22d3ee] text-white rounded-xl text-center p-2">next</button>}
                {currentStep==3 && <button onClick={next} className="absolute right-0 bg-[#22d3ee] text-white rounded-xl text-center p-2">done</button>}
            </div>
        </>
    )
}

export default AddCalendar;