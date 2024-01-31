import React from "react";
import Schedular from "@components/Calendar";

interface Props {
    setHour: (hour: string) => void;
    setDate: (date: string) => void;
    selectedHour: string; 
}

const hoursArray: string[] = [
    "08:00", "09:00", "10:00", "11:00",
    "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",

];



const HourStep: React.FC<Props> = ({ setHour, setDate, selectedHour }) => {
    return (
        <div className="border-[#22d3ee] border rounded-md w-full flex flex-col items-center justify-center py-6 gap-10">
            <h3 className="border-b-2 text-center p-4 w-4/5">Choisissez l'heure et la date du rendez-vous souhaité</h3>
            <div className="flex justify-between gap-4 w-4/5">
                <Schedular setDate={setDate} />
                <div className="hour-scroll flex flex-col w-1/2 bg-gray-200 h-[326px] gap-4 border rounded-xl overflow-y-auto p-4 scrollbar-hide">
                    {hoursArray.map((hour) => (
                        <button key={hour} onClick={() => setHour(hour)} className={`border-2  text-sm rounded-xl p-2 ${selectedHour==hour ? "bg-[#22d3ee] text-white" : "bg-white"}`}>
                            {hour}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HourStep;
