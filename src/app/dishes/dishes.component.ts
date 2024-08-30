import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {PeopleService} from "../people.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dishes',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './dishes.component.html',
  styleUrl: './dishes.component.css'
})
export class DishesComponent implements OnInit{
  person:any = []
constructor(private peopleService:PeopleService , private activatedRoute:ActivatedRoute,private router:Router) {
}
ngOnInit(){
 const id = this.activatedRoute.snapshot.params['id']
 this.person =  this.peopleService.findPerson(id)
}
goBack(){
    this.router.navigate(['/people'])
}
}
