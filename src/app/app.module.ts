import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HomeComponent } from './pages/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { MatDividerModule } from '@angular/material/divider';
import { NgFor, DatePipe, CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { StlModelViewerModule } from 'angular-stl-model-viewer';
import { PromocoesComponent } from './pages/promocoes/promocoes.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { DesenvolvedoraComponent } from './pages/desenvolvedora/desenvolvedora.component';
import { ToastModule } from 'primeng/toast';
import { MatOptionModule } from '@angular/material/core';
import { DropdownModule } from 'primeng/dropdown';
import { JogoComponent } from './pages/jogo/jogo.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ModalCriarNoticiaComponent } from './components/modal-criar-noticia/modal-criar-noticia.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    HomeComponent,
    BibliotecaComponent,
    PromocoesComponent,
    LoginComponent,
    CadastroComponent,
    CategoriaComponent,
    DesenvolvedoraComponent,
    JogoComponent,
    NoticiasComponent,
    ModalCriarNoticiaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatExpansionModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    DatePipe,
    NgFor,
    MatGridListModule,
    StlModelViewerModule,
    MatButtonToggleModule,
    MatNativeDateModule,
    MatDatepickerModule,
    CarouselModule,
    DialogModule,
    MatRadioModule,
    HttpClientModule,
    SidebarModule,
    ButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ToastModule,
    CommonModule,
    MatOptionModule,
    DropdownModule,
    MatDialogModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
