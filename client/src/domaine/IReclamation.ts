export default interface IRecalamation{
    id:string,
    date:Date,
    description:string
    reply?:{
        date:Date,
        description:string
    }
}