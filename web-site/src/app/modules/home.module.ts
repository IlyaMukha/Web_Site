import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'site/components/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    NgbModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
