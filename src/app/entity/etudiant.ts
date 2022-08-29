import { Departement } from "./departement";
import { Groupe } from "./groupe";



export class Etudiant {
numEtd: number;
nomEtd:String ;
prenomEtd:String;
dateNaissanceEtd: Date;
 photoEtd: String;
 adresseMailEtd: String;
 numInscription: String;
dateInscription: Date;
 au: number; 
 departement: Departement;
 groupe: Groupe;


	constructor(
        numEtd: number,
        nomEtd:String ,
        prenomEtd:String,
        dateNaissanceEtd: Date,
        photoEtd: String,
        adresseMailEtd: String,
        numInscription: String,
        dateInscription: Date,
        au: number,
        departement: Departement,
        groupe: Groupe,
    ) {
        this.nomEtd = nomEtd;
        this.numEtd = numEtd;
        this.prenomEtd = prenomEtd;
        this.dateNaissanceEtd = dateNaissanceEtd;
        this.photoEtd = photoEtd;
        this.adresseMailEtd = adresseMailEtd;
        this.numInscription = numInscription ;
        this.dateInscription = dateInscription;
        this.au = au;
        this.departement = departement;
        this.groupe = groupe;

	}

}