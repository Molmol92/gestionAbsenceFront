export class ValidUser {
    email: string;
    pswd:string;
    nom: string;
    state: boolean;
    id: number;
    role:string;

    constructor(
        email:string,
        pswd:string,
        nom:string,
        state :boolean ,
        id:number ,
        role:string
        
    ) {
        this.email=email;
        this.pswd=pswd;
        this.nom= nom;
        this.state=state;
        this.id = id;
        this.role=role;
        
	}
}