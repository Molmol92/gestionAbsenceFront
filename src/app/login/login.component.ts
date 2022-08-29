import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../service/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    // email='';
    // pswd='';
   
    responsedata: any;

    


 constructor(private authService: AuthentificationService, private router:Router ){
  localStorage.clear();

 }
 Login = new FormGroup({
  email: new FormControl("", Validators.required),
  pswd: new FormControl("", Validators.required)
});

 ngOnInit(): void {
  localStorage.clear();
 }

 ProceedLogin() {
  if (this.Login.valid) {
    this.authService.ProceedLogin(this.Login.value).subscribe(result => {
      if(result!=null){
        this.responsedata=result;
        console.log(this.responsedata);
        localStorage.setItem('validUser', JSON.stringify(this.responsedata))
        localStorage.setItem('role', this.responsedata.role)
      
        if(this.responsedata.state && this.responsedata.role==2){
                      this.router.navigate(['compteEnseignant'])
                   }
        else{
          if(this.responsedata.state && this.responsedata.role==3){
                  this.router.navigate(['compteEtudiant'])
        }
      
      }
     

    }}
    );
  }
}

//  login(){
//    console.log(this.email, this.pswd);
   
//     this.authService.login(this.email, this.pswd)
//     .subscribe(
//         res=> {
//           this.validUser=res;
          
//           console.log(this.validUser);

//           localStorage.setItem('role', res.role)
//           localStorage.setItem('pswd', this.pswd)
//           localStorage.setItem('email', this.email)
//           localStorage.setItem('validUser', JSON.stringify(this.validUser))
         
          
//           if(res.state && res.role==2){
//             this.router.navigate(['compteEnseignant'])
//           }
//         else{
//           if(res.state && res.role==3){
//             this.router.navigate(['compteEtudiant'])
//           }
//         }
        
        
//         }
//           ,
//         err=> console.log(err)
       
//     )

//  }
}