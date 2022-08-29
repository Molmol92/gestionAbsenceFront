import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-assiduite',
  templateUrl: './assiduite.component.html',
  styleUrls: ['./assiduite.component.css']
})
export class AssiduiteComponent implements OnInit {

 
  
  

  constructor() { }

  ngOnInit(): void {
    this.getDaysOfTheWeek();
    
    
  }
  

  previous(){
    console.log("previous");
    this.dates = [];
  }
  next(){
    
    for (var day = 0; day < 6 ; day ++ ){
      this.dates.push(new Date(new Date().getFullYear(),new Date().getMonth(),(new Date().getUTCDate() + day-(new Date().getUTCDate()+5)%7)).toDateString());
    }
    
    
    return this.dates;
  }



dates: string[] =[] ;

getDaysOfTheWeek(){


  for (var day = 0; day < 6 ; day ++ ){
    this.dates.push(new Date(new Date().getFullYear(),new Date().getMonth(),(new Date().getUTCDate() + day-(new Date().getUTCDate()+5)%7)).toDateString());
  }
  
  
  return this.dates;
}
  
getFirstDayOfTheWeek(){
  return this.dates.push(new Date(new Date().getFullYear(),new Date().getMonth(),(new Date().getUTCDate() -(new Date().getUTCDate()+5)%7)).toDateString());

}

  horaire = [
    
    "8-10",
    "10-12",
    "14-16",
    "16-18"
    
  ];


  presence = [
   

    {
      date: 'Lundi 9/5/2022',
      huitHeureMatiere: 'Méthodologies de sécurité (ISO 27001-27002-27003)',
      huitHeurePresence: 'present',
      dixHeureMatiere: 'Initiation à la recherche appliquée',
      dixHeurePresence : 'present',

      quatorzHeureMatiere: '',
      quatorzeHeureAbsence: '',
      seizeHeureMatiere: 'Internet des Objets',
      seizeHeureAbsence: 'absent'
    },
    {
      date: 'Mardi 10/5/2022',
      huitHeureMatiere: '',
      huitHeurePresence: '',
      dixHeureMatiere: 'Atelier internet des objets',
      dixHeurePresence : 'present',

      quatorzHeureMatiere: '',
      quatorzeHeureAbsence: '',
      seizeHeureMatiere: '',
      seizeHeureAbsence: ''
    },
    {
      date: 'Mercredi 11/5/2022',
      huitHeureMatiere: '',
      huitHeurePresence: '',
      dixHeureMatiere: 'Développement des applications mobiles avancées',
      dixHeurePresence : 'present',

      quatorzHeureMatiere: 'Atelier Développement des applications mobiles Av',
      quatorzeHeureAbsence: 'present',
      seizeHeureMatiere: '',
      seizeHeureAbsence: ''
    },
    {
      date: 'Jeudi 12/5/2022',
      huitHeureMatiere: 'Anglais scientifique',
      huitHeurePresence: 'absent',
      dixHeureMatiere: 'Mini projet2',
      dixHeurePresence : 'present',

      quatorzHeureMatiere: '',
      quatorzeHeureAbsence: '',
      seizeHeureMatiere: 'Modélisation UML avancé',
      seizeHeureAbsence: 'absent'
    },
    {
      date: 'Vendredi 13/5/2022',
      huitHeureMatiere: '',
      huitHeurePresence: 'present',
      dixHeureMatiere: 'Initiation à la recherche appliquée',
      dixHeurePresence : 'present',

      quatorzHeureMatiere: 'Atelier UML avancé',
      quatorzeHeureAbsence: 'present',
      seizeHeureMatiere: 'Internet des Objets',
      seizeHeureAbsence: 'absent'
    },
    {
      date: 'Samedi 14/5/2022',
      huitHeureMatiere: '',
      huitHeurePresence: '',
      dixHeureMatiere: 'Développement des applications mobiles avancées',
      dixHeurePresence : 'present',

      quatorzHeureMatiere: 'Atelier Développement des applications mobiles Av',
      quatorzeHeureAbsence: 'absent',
      seizeHeureMatiere: '',
      seizeHeureAbsence: ''
    },
    
   
  ];
// presence = [
//   {
//     8:"",
//     10:"",
//     14:"",
//     16:""

//   }
// ];

  getColor() {


    // var obj = JSON.parse(Object.keys(this.presence)[0]);
    // if(this.presence[0].lundi === 'present') {

    //   return 'green';
    // } else  {
    //   return 'red';
    // }





  }

  

  
  



}
