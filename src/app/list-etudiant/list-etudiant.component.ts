import {Component, OnInit} from '@angular/core';
import {Etudiant} from "../entity/etudiant";
import {EtudiantService} from "../service/etudiant.service";
import { ListeEtudiantsService } from "../service/liste-etudiants.service";

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {


  constructor(private etudiantService: EtudiantService, private myService: ListeEtudiantsService) { }
  liste_etudiant:Etudiant[] = [];


    ngOnInit(): void {

this.myService.langUpdated.subscribe(
  () => this.etudiantService.getEtudiantByGroupeName(this.myService.literal).subscribe(data => this.liste_etudiant = data)
)
  }
}















