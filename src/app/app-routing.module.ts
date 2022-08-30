import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { compteEnseignant } from './compteEnseignant/compteEnseignant.component';
import { compteEtudiant } from './compteEtudiant/compteEtudiant.component';
import { AuthGuard } from './guard/auth.guard';
import { RoleEtudiantGuard } from './guard/role-etudiant.guard';
import { RoleEnseigantGuard } from './guard/roleEnseingant.guard';
import { LoginComponent } from './login/login.component';




const routes: Routes = [
  
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"compteEnseignant",component:compteEnseignant, canActivate:[RoleEnseigantGuard]},
  {path:"compteEtudiant",component:compteEtudiant,canActivate:[RoleEtudiantGuard]
  }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
