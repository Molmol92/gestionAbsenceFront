import {Component, OnInit} from '@angular/core';
import {faBell, faEnvelope, faSearch} from '@fortawesome/free-solid-svg-icons';
import {ProfileService} from '../service/profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  validUser:any;

  role:String='';
  constructor(){}

 

 ngOnInit(): void {

  this.role=String(localStorage.getItem("role"));
  this.validUser=localStorage.getItem("validUser");
  this.validUser=JSON.parse(this.validUser)
  console.log(this.validUser, this.role)
   
 }

  

  faSearch = faSearch;
  faBell = faBell;
  faEnvelope = faEnvelope;



  // role: string = '';

  // constructor(profile: ProfileService) {

  //   this.role = this.getRole(profile);
  //   this.nom = this.getNom(profile);


  // }

  // getRole(profile: ProfileService) {
  //   let role: string;
  //   if (profile.profile[0].profile1.role === 'enseignant') {

  //     role = "enseignant";
  //   } else {
  //     role = 'etudiant';
  //   }

  //   return role;
  // }





  // getNom(profile: ProfileService) {
  //   return profile.profile[0].profile1.prenom + " " + profile.profile[0].profile1.nom;

  // }
  // nom = "";






}
