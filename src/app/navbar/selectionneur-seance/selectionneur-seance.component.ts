import {Component, OnInit} from '@angular/core';
import {Departement} from '../../entity/departement';
import {Groupe} from '../../entity/groupe';
import {Matiere} from '../../entity/matiere';
import {ListeEtudiantsService} from "../../service/liste-etudiants.service";


@Component({
  selector: 'app-selectionneur-seance',
  templateUrl: './selectionneur-seance.component.html',
  styleUrls: ['./selectionneur-seance.component.css']
})
export class SelectionneurSeanceComponent implements OnInit {





  constructor(private myService: ListeEtudiantsService) { }


  changeGroupe(value: string){
    this.myService.setValue(value);

  }



  ngOnInit(): void {

  }


  liste_matieres = [
    new Matiere(1,"Conduite des projets informatiques",2,42,21),
    new Matiere(1,"Méthodologies de sécurité (ISO 27001-27002-27003)",2,42,21),
    new Matiere(1,"Initiation à la recherche appliquée",2,42,21),
    new Matiere(1,"Internet des Objets",2,42,21),
    new Matiere(1,"Atelier internet des objets",2,42,21),
    new Matiere(1,"Développement des applications mobiles avancées",2,42,21),
    new Matiere(1,"Atelier Développement des applications mobiles Av",2,42,21),
    new Matiere(1,"Anglais scientifique",2,42,21),
    new Matiere(1,"Mini-projet2",2,42,21),
    new Matiere(1,"Modélisation UML avancé",2,42,21),
    new Matiere(1,"Atelier UML avancé",2,42,21),

  ]



  liste_groupe = [
    new Groupe(1,"DSIR", new Date("2022-09-15"), 2022, new Departement()),
    new Groupe(2,"MPQHSE", new Date("2022-09-15"), 2022, new Departement())
  ]

  seances = [
    {seanceNom : "8-10"},
    {seanceNom : "10-12"},
    {seanceNom : "14-16"},
    {seanceNom : "16-18"},
  ]




}
