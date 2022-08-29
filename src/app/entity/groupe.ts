import {Departement} from "./departement";

export class Groupe{
  constructor(idGroupe: number, nomGroupe: String, dateCreation: Date, au: number, departement: Departement) {
    this.idGroupe = idGroupe;
    this.nomGroupe = nomGroupe;
    this.dateCreation = dateCreation;
    this.au = au;
    this.departement = departement;
  }
    idGroupe: number;
    nomGroupe:String;
    dateCreation: Date;
    au:number;
    departement:Departement;

}
