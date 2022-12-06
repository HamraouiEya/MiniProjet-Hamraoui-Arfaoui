import { Comments } from "./comments";

export class Abonnement {
    constructor( 
        public id:number,
        public libelle:string,
        public img:any,
        public prix:number,
        public disponible:boolean,
        public duree:Date,
        public comment:Comments[]
        ){}
}
