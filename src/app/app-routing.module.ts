import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapStylesComponent } from './bootstrap-styles/bootstrap-styles.component';
import { TailwindStylesComponent } from './tailwind-styles/tailwind-styles.component';

const routes: Routes = [
  {
    path:'', redirectTo:'t' , pathMatch:'full'
  },
  {
    path:'b',
    component: BootstrapStylesComponent,
  },
  {
    path:'t',
    component: TailwindStylesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
