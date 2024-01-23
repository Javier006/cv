import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapStylesComponent } from './bootstrap-styles/bootstrap-styles.component';
import { TailwindStylesComponent } from './tailwind-styles/tailwind-styles.component';
import { BNavbarComponent } from './bootstrap-styles/componentes/b-navbar/b-navbar.component';
import { BFooterComponent } from './bootstrap-styles/componentes/b-footer/b-footer.component';
import { BIndexComponent } from './bootstrap-styles/componentes/b-pagina/b-index/b-index.component';
import { TFooterComponent } from './tailwind-styles/componentes/t-footer/t-footer.component';
import { TNavbarComponent } from './tailwind-styles/componentes/t-navbar/t-navbar.component';
import { TPaginaComponent } from './tailwind-styles/componentes/t-pagina/t-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapStylesComponent,
    TailwindStylesComponent,
    BNavbarComponent,
    BFooterComponent,
    BIndexComponent,
    TFooterComponent,
    TNavbarComponent,
    TPaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
