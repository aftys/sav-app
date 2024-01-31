import { api,headers } from "./api";

const getAllAppointment = async () => {
        const response = await api.get("/appointment", { headers });
        return response;
   
};

const getAppointmentByUser = async (userId:string) => {
        const response = await api.get("/appointment/"+userId, { headers });
        return response;
   
};

const getAppointmentByTYpe = async (type:string,userId:string) => {
        const response = await api.get("/appointment/"+type+"/"+userId, { headers });
        return response;
   
}

const addAppointment = async (hour:string,day:string,type:string,userId:string) => {
        const response = await api.post("/appointment", { hour,day,type,userId }, { headers });
        return response;
};

const cancelAppointment = async (id:string) => {
        const response = await api.delete("/appointment/"+id, { headers });
        return response;
}

const getAvailabaleHoursPerWeek = async () => {
        const response = await api.get("/appointment/available", { headers });
        return response;
   
}

export { getAllAppointment,addAppointment,cancelAppointment,getAppointmentByUser,getAppointmentByTYpe,getAvailabaleHoursPerWeek };



