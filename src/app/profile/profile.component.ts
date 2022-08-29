import { Component, OnInit } from '@angular/core';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';
import { Etudiant } from '../entity/etudiant';
import { AuthentificationService } from '../service/authentication.service';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


validUser:any;
role:String='';
   constructor(){}

  

  ngOnInit(): void {
this.role=String(localStorage.getItem("role"));
this.validUser=localStorage.getItem("validUser");
this.validUser=JSON.parse(this.validUser)
console.log(this.validUser, this.role)
    
  }

    //  nom:String='';
  //  cycle :String='';
  //  specialite:String='';
  //  role:String='';

  

  // constructor(profile : ProfileService) { 
  //   this.role = this.getRole(profile);
  //   this.nom = this.getNom(profile);
  //   this.cycle = this.getCycle(profile);
  //   this.specialite = this.getSpecialite(profile);
    
  // }

  

  // getNom(profile : ProfileService){
  //   return profile.profile[0].profile1.prenom +" "+profile.profile[0].profile1.nom;    
  // }

  // getCycle(profile: ProfileService){
  //   return profile.profile[0].profile1.cycle;
  // }
  // getSpecialite(profile: ProfileService){
  //   return profile.profile[0].profile1.specialite;
  // }

  // getRole(profile: ProfileService){
  //   return profile.profile[0].profile1.role;
  // }

  // role = "";
  // nom = ""; 
  // cycle = "";
  // specialite = "";


  // faDashboard = faDashboard;

  



}
