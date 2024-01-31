import React, { useEffect } from "react"

interface Props {
    type: string,
    date: string,
    hour: string
}

const ValidationStep: React.FC<Props> = ({date,hour,type}) => {
    useEffect(() => {
        console.log(date,hour,type)
    }, [date,hour,type])
    return (
        <div className="border-[#22d3ee] border rounded-md w-full flex flex-col items-center justify-center py-6 gap-10">
            <h3 className="border-b-2  text-center p-4  w-4/5"> Confirmez votre rendez-vous</h3>
            <div className="flex justify-between w-4/5">
                <p>Date de Rendez Vous</p>
                <h3 className="border-[#22d3ee] flex items-center justify-center border w-1/2 h-10 rounded-full">{date}</h3>
            </div>
            <>
            <div className="flex justify-between w-4/5">
                <p>Heure de Rendez Vous</p>
                <h3 className="border-[#22d3ee] flex items-center justify-center border w-1/2 h-10 rounded-full">{hour}</h3>
            </div>
            <div className="flex justify-between w-4/5">
                <p>Type de Rendez Vous</p>
                <h3 className="border-[#22d3ee] flex items-center justify-center border w-1/2 h-10 rounded-full">{type}</h3>
            </div>
            </>
            <div className="flex justify-around w-4/5">
                <button className="rounde-full w-1/5 p-2 rounded-full dark:bg-slate-700 bg-gray-100">Annuler</button>
                <button className="rounde-full w-1/5 p-2 rounded-full dark:bg-slate-700 bg-gray-100">Valider</button>
            </div>

        </div>
    )
}

export default ValidationStep;