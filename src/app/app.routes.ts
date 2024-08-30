import { Routes } from '@angular/router';
import {PeopleComponent} from "./people/people.component";
import {DishesComponent} from "./dishes/dishes.component";

export const routes: Routes = [
  {path:'',redirectTo:'people',pathMatch:'full'},
  {path:'people',component:PeopleComponent},
  {path:'people/:id',component:DishesComponent}
];
