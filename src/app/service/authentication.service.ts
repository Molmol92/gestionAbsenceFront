import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
   
    LOGIN_URL="http://192.168.1.64:8080/api/authentification";
 
   

    constructor(private httpClient: HttpClient, private router:Router ){}

    // login(email:String, pswd:String){
    //     const loginData={
    //         email:email,
    //         pswd:pswd
    //     }
       
    //     return this.httpClient.post<any>(this.LOGIN_URL, loginData);
               

    // }
    ProceedLogin(UserCred:any){
        return this.httpClient.post(this.LOGIN_URL, UserCred);
      }

      IsLoggedIn(){
        return localStorage.getItem('validUser')!=null;
      }
      GetValidUser(){
        return localStorage.getItem('validUser')||'';
       }

       EnseignantHaveAccess(){
        if(localStorage.getItem('validUser')!=null){
            var logginValidUser=String(localStorage.getItem('validUser'));
        var _finaldata=JSON.parse(logginValidUser);
        if(_finaldata.role=='2' ){
            return true
          }else{
            alert('Accès interdit');
            return false
          }
       
      } this.router.navigate(['login'])
      return false
    }
    
      EtudiantHaveAccess(){
        if(localStorage.getItem('validUser')!=null){
            var logginValidUser=String(localStorage.getItem('validUser'));
        var _finaldata=JSON.parse(logginValidUser);
        if(_finaldata.role=='3' ){
            return true
          }else{
            alert('Accès interdit');
            return false
          }
       
      } this.router.navigate(['login'])
      return false
    }

    
}