import IRecalamation from "@domaine/IReclamation";
import { api,headers } from "./api";

const getAllReclamation= async ():Promise<IRecalamation[]>  => {
        const response:IRecalamation[] = await api.get("/reclamation", { headers });
        return response;
   
};

const addReclamation = async (description:string,userId:string) => {
        const response = await api.post("/reclamation", { description,userId }, { headers });
        return response;
};

export { getAllReclamation,addReclamation };