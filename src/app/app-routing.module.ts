import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './_layout';
import { GunlukComponent } from './gunluk/gunluk.component';
import { AylikComponent } from './aylik/aylik.component';


const routes: Routes = [
  {
    path: '', component: AppLayoutComponent, 
    children: [
      {path: '', pathMatch: 'full', redirectTo: ''},
      {path: 'gunluk', component: GunlukComponent},
      {path: 'aylik', component: AylikComponent},


   

      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
