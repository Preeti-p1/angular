import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PushSliceComponent } from './push-slice/push-slice.component';
import { DirectiveComponent } from './directive/directive.component';
import { BindingComponent } from './binding/binding.component';
import { HomeComponent } from './home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { ProductComponent } from './product/product.component';

import {MatCardModule} from '@angular/material/card';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { TvComponent } from './product/tv/tv.component';
import { HeadphoneComponent } from './product/headphone/headphone.component';


@NgModule({
  declarations: [
    AppComponent,
    PushSliceComponent,
    DirectiveComponent,
    BindingComponent,
    HomeComponent,
    ProductComponent,
    LaptopComponent,
    MobileComponent,
    TvComponent,
    HeadphoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatCardModule

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
