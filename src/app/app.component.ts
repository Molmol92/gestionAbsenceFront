import {Component,DoCheck} from '@angular/core';
import {ProfileService} from './service/profile.service';
import {ListeEtudiantsService} from "./service/liste-etudiants.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [ListeEtudiantsService]
})
export class AppComponent {

  role : string ='';

 
  // constructor(profile: ProfileService){
  //   this.role = this.getRole(profile);
  // }

  // getRole(profile: ProfileService){
  //   let role: string;
  //   if (profile.profile[0].profile1.role === 'enseignant'){

  //   role = "enseignant";
  //   } else {
  //     role = 'etudiant';
  //   }

  //   return role;
  // }

  title = 'gestionAbsence';



  displaymenu=false;
  constructor(private route:Router){

  }
  ngDoCheck(): void {
    if (this.route.url == '/login') {
      this.displaymenu = false
    } else {
      this.displaymenu = true
    }
  }
}
