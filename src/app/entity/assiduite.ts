import { Etudiant } from "./etudiant";
import { SeanceCours } from "./seanceCours";


export class Assiduite {

	constructor(
        assiduite_id:number,
        etudiant:Etudiant,
        seanceCours :SeanceCours ,
        absent:boolean ,
        noteTest:number ,
        remarques:String ,
    ) {
        this.assiduite_id=assiduite_id;
        this.etudiant= etudiant;
        this.seanceCours=seanceCours;
        this.absent = absent;
        this.noteTest = noteTest;
        this.remarques = remarques;
	}
    assiduite_id:number;
    etudiant:Etudiant;
    seanceCours :SeanceCours ;
    absent:boolean ;
    noteTest:number ;
    remarques:String ;

}
