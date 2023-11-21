import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { PromocoesComponent } from './pages/promocoes/promocoes.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { DesenvolvedoraComponent } from './pages/desenvolvedora/desenvolvedora.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { JogoComponent } from './pages/jogo/jogo.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ModalCriarNoticiaComponent } from './components/modal-criar-noticia/modal-criar-noticia.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent,
    children: [{ path: '', component: MenuLateralComponent }],
  },
  { path: 'biblioteca', component: BibliotecaComponent },
  { path: 'promocoes', component: PromocoesComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'desenvolvedora', component: DesenvolvedoraComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'jogo', component: JogoComponent },
  {
    path: 'noticias',
    component: NoticiasComponent,
    children: [{ path: '', component: ModalCriarNoticiaComponent }],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
