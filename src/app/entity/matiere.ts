export class Matiere{
   idMat: number;
   nomMat: String;
   coefMat: number;
   nbreHeureCours: number;
   nbreHeureTP: number;

  constructor(idMat: number, nomMat: String, coefMat: number, nbreHeureCours: number, nbreHeureTP: number) {
    this.idMat = idMat;
    this.nomMat = nomMat;
    this.coefMat = coefMat;
    this.nbreHeureCours = nbreHeureCours;
    this.nbreHeureTP = nbreHeureTP;
  }
}
