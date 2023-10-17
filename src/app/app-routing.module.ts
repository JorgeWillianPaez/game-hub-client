import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { PromocoesComponent } from './pages/promocoes/promocoes.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'biblioteca', component: BibliotecaComponent },
  { path: 'promocoes', component: PromocoesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}