import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss'],
})
export class MenuLateralComponent {
  constructor(private _formBuilder: FormBuilder) {}
  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });
}
