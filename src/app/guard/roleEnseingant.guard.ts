import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RoleEnseigantGuard implements CanActivate {

  constructor(private service:AuthentificationService,private route:Router){

  }
  canActivate(){
    if(this.service.EnseignantHaveAccess()){
     return true;
    }else{
      this.route.navigate(['login']);
      return false;
    }
   }
  }
