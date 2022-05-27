import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { QuotesComponent } from './quotes/quotes.component';
import { PlayComponent } from './play/play.component';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch:'full'},
  {path:'members',component:MemberListComponent},
  {path:'play',component:PlayComponent},
  {path:'members/:id',component:MemberDetailComponent},
  {path:'lists',component:ListsComponent},
  {path:'quotes',component:QuotesComponent},
  {path:'**', component: HomeComponent, pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//localhost:4200/[route]
  exports: [RouterModule]
})
export class AppRoutingModule { }
