import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { PushSliceComponent } from './push-slice/push-slice.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { HeadphoneComponent } from './product/headphone/headphone.component';
import { TvComponent } from './product/tv/tv.component';
import { MobileComponent } from './product/mobile/mobile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:"home" , component:HomeComponent},
{path:"binding" , component:BindingComponent},
{path:"directive" , component:DirectiveComponent}, 
{path:"product" ,component:ProductComponent,children:[
  {path:"laptop",component:LaptopComponent},
  {path:"mobile",component:MobileComponent},
  {path:"tv",component:TvComponent},
  {path:"headphone",component:HeadphoneComponent}
]}, 
{path:"pushslice" , component:PushSliceComponent},
{ path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

