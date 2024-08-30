import { Component, OnInit } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import { PeopleService } from '../people.service';
import { FormsModule } from '@angular/forms';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [NgForOf, FormsModule, NgIf, RouterLink],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css',
})
export class PeopleComponent implements OnInit {
  constructor(private peopleService: PeopleService) {}
  inputText = '';
  editedInputText = '';
  editedPersonId = '';
  people: any;
  deleteButton(id: string, event: any) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.peopleService.deletePerson(id);
  }
  addButton(){
    this.peopleService.addPerson(this.inputText)
  }
  editButton(id:string, event: any, name: string){
    event.preventDefault();
    event.stopImmediatePropagation();
    this.editedInputText = name;
    this.editedPersonId = id;
  }
  save(id:string, event: any){
    event.preventDefault();
    event.stopImmediatePropagation();
    this.editedPersonId = '';
    this.peopleService.save(this.editedInputText, id)
    this.people = this.peopleService.people;

  }
  ngOnInit() {
    this.people = this.peopleService.people;
  }

  prevent(event: any) {
    event.stopImmediatePropagation();
    event.preventDefault();
  }
}
