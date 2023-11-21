import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss'],
})
export class MenuLateralComponent {
  constructor(private _formBuilder: FormBuilder, private router: Router) {}
  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });
  logado: any = null;
  ngOnInit(): void {
    this.logado = localStorage.getItem('usuarioId');
  }

  logout(): void {
    localStorage.clear();
    window.location.reload();
  }
}
