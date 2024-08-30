import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  people = [
    { name: 'Aang', id: '1', details: [{ favDish: 'Egg Pie', id: '1' }] },
    { name: 'Sokka', id: '2', details: [{ favDish: 'Jerky  ', id: '2' }] },
    {
      name: 'Katara',
      id: '3',
      details: [{ favDish: 'Sea plum stew', id: '3' }],
    },
    { name: 'Toph', id: '4', details: [{ favDish: 'Rice', id: '4' }] },
    { name: 'Zuko', id: '5', details: [{ favDish: 'Fire flakes', id: '5' }] },
  ];
  constructor() {}

  deletePerson(id: string) {
    const index = this.people.findIndex((el) => el.id == id);
    this.people.splice(index, 1);
  }
  addPerson(inputName: string) {
    this.people.push({
      name: inputName,
      id: this.people[this.people.length - 1].id + 1,
      details: [],
    });
  }
  findPerson(id: string) {
    const person = this.people.find((el) => el.id == id);
    return person;
  }

  save(name: string, id: string) {
    const index = this.people.findIndex(el=> el.id === id);
    this.people[index].name = name;
  }
}
