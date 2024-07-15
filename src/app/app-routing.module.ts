import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { PushSliceComponent } from './push-slice/push-slice.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:"home" , component:HomeComponent},
{path:"binding" , component:BindingComponent},
{path:"directive" , component:DirectiveComponent}, 
{path:"pushslice" , component:PushSliceComponent},
{ path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

